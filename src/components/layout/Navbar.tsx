import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import ThemeToggle from '../ThemeToggle';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Developer', path: '/developer' },
        { name: 'Creative', path: '/creative' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
                }`}
        >
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="text-2xl font-heading font-bold text-white relative group" aria-label="Ramtin Khorshidi Home">
                    RAMTIN
                    <span className="text-primary">.</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8 items-center">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            aria-label={`Go to ${link.name} page`}
                            className={`text-sm font-medium transition-colors duration-300 hover:text-primary ${location.pathname === link.path ? 'text-primary' : 'text-gray-300'
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="mx-2">
                        <ThemeToggle />
                    </div>
                    <Link to="/contact">
                        <button className="bg-primary/90 hover:bg-primary text-background font-bold px-5 py-2 rounded-full transition-all hover:scale-105 active:scale-95 shadow-lg">
                            Let's Talk
                        </button>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white text-2xl"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <HiX /> : <HiMenuAlt3 />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-surface border-t border-gray-800"
                    >
                        <div className="flex flex-col p-6 space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={`text-lg font-medium ${location.pathname === link.path ? 'text-primary' : 'text-gray-300'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="pt-4 border-t border-gray-800 w-full flex justify-between items-center">
                                <span className="text-gray-400">Switch Theme</span>
                                <ThemeToggle />
                            </div>
                            <Link to="/contact" className="w-full">
                                <button className="w-full bg-primary/90 hover:bg-primary text-background font-bold px-5 py-3 rounded-full transition-transform active:scale-95">
                                    Let's Talk
                                </button>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
