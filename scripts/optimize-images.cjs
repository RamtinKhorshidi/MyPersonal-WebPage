// Converts images to WebP (quality 80, max 1600px wide), writing each next to
// its original. Used for the acting gallery photos.
//
// Usage (sharp is not a regular dependency, install it when needed):
//   npm install --no-save sharp
//   node scripts/optimize-images.cjs src/assets/images/photo.jpg [more files...]
const fs = require('fs');
const path = require('path');

let sharp;
try {
    sharp = require('sharp');
} catch {
    console.error('This script needs sharp: npm install --no-save sharp');
    process.exit(1);
}

const files = process.argv.slice(2);
if (files.length === 0) {
    console.error('Usage: node scripts/optimize-images.cjs <image> [more images...]');
    process.exit(1);
}

async function optimize() {
    for (const inputPath of files) {
        if (!fs.existsSync(inputPath)) {
            console.error(`File not found: ${inputPath}`);
            continue;
        }
        const { dir, name } = path.parse(inputPath);
        const outputPath = path.join(dir, `${name}.webp`);
        try {
            const metadata = await sharp(inputPath).metadata();
            const sizeMb = (fs.statSync(inputPath).size / 1024 / 1024).toFixed(2);
            console.log(`Processing ${inputPath}: ${metadata.width}x${metadata.height}, ${sizeMb} MB`);

            let pipeline = sharp(inputPath).rotate(); // apply EXIF orientation
            if (metadata.width > 1600) {
                pipeline = pipeline.resize({ width: 1600 });
            }
            await pipeline.webp({ quality: 80 }).toFile(outputPath);

            const newSizeKb = (fs.statSync(outputPath).size / 1024).toFixed(2);
            console.log(`Saved ${outputPath}: ${newSizeKb} KB`);
        } catch (error) {
            console.error(`Error processing ${inputPath}:`, error);
        }
    }
}

optimize();
