import type { Variants } from 'framer-motion';

// Smooth Page Transitions.
// All variants share the labels hidden/show/exit so children inherit the
// parent's state; a mismatched label silently disables the child animation.
export const pageVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 10,
        filter: 'blur(8px)',
    },
    show: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: {
            duration: 0.6,
            ease: [0.25, 0.1, 0.25, 1], // Cubic bezier for smoothness
            staggerChildren: 0.1,
        },
    },
    exit: {
        opacity: 0,
        y: -10,
        filter: 'blur(8px)',
        transition: {
            duration: 0.4,
            ease: [0.25, 0.1, 0.25, 1],
        },
    },
};

// Staggered Container for Lists/Grids
export const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1,
        },
    },
};

// Standard Fade Up (for cards, items)
export const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut" as const,
        },
    },
};

// Scale on Hover (for cards/images)
export const hoverScale = {
    scale: 1.02,
    transition: { duration: 0.3, ease: "easeOut" as const },
};

// Text Reveal (Character/Word stagger)
export const textReveal: Variants = {
    hidden: { y: "100%", opacity: 0 },
    show: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
};
