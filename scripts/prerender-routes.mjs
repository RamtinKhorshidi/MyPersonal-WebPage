// Post-build step for GitHub Pages.
//
// The site is a single-page app, but GitHub Pages only serves real files. For
// every route in src/seo/routes.json this writes an HTML copy of the built
// shell with that page's title, description and canonical URL, so
// /developer is served as developer.html with a 200 status and the right
// metadata for search engines and link previews. It also writes 404.html
// (unknown paths still boot the app, which shows its not-found page) and
// sitemap.xml.
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
const routes = JSON.parse(readFileSync(join(root, 'src/seo/routes.json'), 'utf8'));
const origin = JSON.parse(readFileSync(join(root, 'package.json'), 'utf8')).homepage.replace(/\/$/, '');
const shell = readFileSync(join(dist, 'index.html'), 'utf8');

const escapeAttr = (value) =>
    value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

/** Replace exactly one match, or fail the build so metadata never silently drifts. */
const replaceOnce = (html, pattern, replacement, label) => {
    const matches = html.match(new RegExp(pattern.source, 'g')) ?? [];
    if (matches.length !== 1) {
        throw new Error(`prerender: expected 1 ${label} in index.html, found ${matches.length}`);
    }
    return html.replace(pattern, replacement);
};

const metaContent = (attr, name) => new RegExp(`(<meta\\s+${attr}="${name}"\\s+content=")[^"]*(")`);

const renderPage = ({ title, description, url, noindex = false }) => {
    let html = shell;
    html = replaceOnce(html, /<title>[\s\S]*?<\/title>/, `<title>${escapeAttr(title)}</title>`, '<title>');
    for (const [attr, name, value] of [
        ['name', 'description', description],
        ['property', 'og:title', title],
        ['property', 'og:description', description],
        ['property', 'og:url', url],
        ['name', 'twitter:title', title],
        ['name', 'twitter:description', description],
    ]) {
        if (metaContent(attr, name).test(shell)) {
            html = replaceOnce(html, metaContent(attr, name), `$1${escapeAttr(value)}$2`, `${name} meta`);
        }
    }
    html = replaceOnce(html, /(<link\s+rel="canonical"\s+href=")[^"]*(")/, `$1${url}$2`, 'canonical link');
    if (noindex) {
        html = html.replace('</head>', '  <meta name="robots" content="noindex" />\n</head>');
    }
    return html;
};

for (const route of routes) {
    const url = route.path === '/' ? `${origin}/` : `${origin}${route.path}`;
    const file = route.path === '/' ? 'index.html' : `${route.path.slice(1)}.html`;
    writeFileSync(join(dist, file), renderPage({ ...route, url }));
    console.log(`prerender: ${route.path.padEnd(11)} -> dist/${file}`);
}

writeFileSync(
    join(dist, '404.html'),
    renderPage({
        title: 'Page not found | Reza Khorshidi',
        description: "This page doesn't exist. Head back to Reza Khorshidi's portfolio.",
        url: `${origin}/`,
        noindex: true,
    }),
);
console.log('prerender: 404        -> dist/404.html');

const today = new Date().toISOString().slice(0, 10);
const sitemap = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...routes.map((r) => `  <url><loc>${origin}${r.path === '/' ? '/' : r.path}</loc><lastmod>${today}</lastmod></url>`),
    '</urlset>',
    '',
].join('\n');
writeFileSync(join(dist, 'sitemap.xml'), sitemap);
console.log(`prerender: sitemap    -> dist/sitemap.xml (${routes.length} URLs)`);
