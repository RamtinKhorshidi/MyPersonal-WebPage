import { Suspense, lazy, useEffect } from 'react';
import type { ReactNode } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/layout/Layout';
import { AnimatePresence, MotionConfig } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import routeMeta from './seo/routes.json';

// Lazy load pages for performance optimization
const Home = lazy(() => import('./pages/Home'));
const Developer = lazy(() => import('./pages/Developer'));
const Creative = lazy(() => import('./pages/Creative'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Loading Fallback Component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen bg-background text-primary">
    <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const Page = ({ children }: { children: ReactNode }) => (
  <Suspense fallback={<PageLoader />}>{children}</Suspense>
);

/** Keep the tab title and meta description in sync with the current page. */
const usePageMeta = (pathname: string) => {
  useEffect(() => {
    const path = pathname.replace(/\/+$/, '') || '/';
    const meta = routeMeta.find((route) => route.path === path);
    document.title = meta?.title ?? 'Page not found | Reza Khorshidi';
    if (meta) {
      document.querySelector('meta[name="description"]')?.setAttribute('content', meta.description);
    }
  }, [pathname]);
};

const AnimatedRoutes = () => {
  const location = useLocation();
  usePageMeta(location.pathname);

  // AnimatePresence must wrap the keyed Routes directly so the outgoing page
  // runs its exit animation. Each page gets its own Suspense boundary below
  // AnimatePresence, so a lazy page loading never suspends the presence tree
  // in the middle of a transition.
  return (
    <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Page><Home /></Page>} />
        <Route path="/developer" element={<Page><Developer /></Page>} />
        <Route path="/creative" element={<Page><Creative /></Page>} />
        <Route path="/about" element={<Page><About /></Page>} />
        <Route path="/contact" element={<Page><Contact /></Page>} />
        <Route path="*" element={<Page><NotFound /></Page>} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <ThemeProvider>
      <MotionConfig reducedMotion="user">
        <Router>
          <Layout>
            <AnimatedRoutes />
          </Layout>
        </Router>
      </MotionConfig>
    </ThemeProvider>
  );
}

export default App;
