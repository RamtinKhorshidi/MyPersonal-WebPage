import { useTheme } from '../context/ThemeContext';
import { FaMoon, FaSun, FaLeaf, FaLayerGroup } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import './ThemeToggle.css';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    // Map themes to Icons
    // Dark -> Moon
    // Light -> Sun
    // Forest -> Leaf
    // Clay -> Layers/Stack
    const getIcon = () => {
        switch (theme) {
            case 'dark':
                return <FaMoon className="theme-icon text-primary" />;
            case 'light':
                return <FaSun className="theme-icon text-primary" />;
            case 'forest':
                return <FaLeaf className="theme-icon text-primary" />;
            case 'clay':
                return <FaLayerGroup className="theme-icon text-primary" />;
            default:
                return <FaMoon className="theme-icon text-primary" />;
        }
    };

    return (
        <div className="toggle-scale-wrapper">
            <button
                onClick={toggleTheme}
                className="theme-btn"
                aria-label={`Switch theme (current: ${theme})`}
                title="Cycle Theme"
            >
                <AnimatePresence mode="wait">
                    <motion.div
                        key={theme}
                        initial={{ y: -20, opacity: 0, rotate: -90 }}
                        animate={{ y: 0, opacity: 1, rotate: 0 }}
                        exit={{ y: 20, opacity: 0, rotate: 90 }}
                        transition={{ duration: 0.2 }}
                        className="theme-icon-wrapper"
                    >
                        {getIcon()}
                    </motion.div>
                </AnimatePresence>
            </button>
        </div>
    );
};

export default ThemeToggle;
