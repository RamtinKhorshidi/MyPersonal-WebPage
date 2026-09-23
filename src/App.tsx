import { Suspense, lazy } from 'react';
import type { ReactNode } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/layout/Layout';
import { AnimatePresence, MotionConfig } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';

// Lazy load pages for performance optimization
const Home = lazy(() => import('./pages/Home'));
const Developer = lazy(() => import('./pages/Developer'));
const Creative = lazy(() => import('./pages/Creative'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));

// Loading Fallback Component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen bg-background text-primary">
    <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const Page = ({ children }: { children: ReactNode }) => (
  <Suspense fallback={<PageLoader />}>{children}</Suspense>
);

const AnimatedRoutes = () => {
  const location = useLocation();

  // AnimatePresence must wrap the keyed Routes directly so the outgoing page
  // runs its exit animation. Each page gets its own Suspense boundary below
  // AnimatePresence, so a lazy page loading never suspends the presence tree
  // in the middle of a transition.
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Page><Home /></Page>} />
        <Route path="/developer" element={<Page><Developer /></Page>} />
        <Route path="/creative" element={<Page><Creative /></Page>} />
        <Route path="/about" element={<Page><About /></Page>} />
        <Route path="/contact" element={<Page><Contact /></Page>} />
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
