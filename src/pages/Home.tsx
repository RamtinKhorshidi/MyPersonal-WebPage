import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCode, FaTheaterMasks } from 'react-icons/fa';
import { pageVariants, textReveal } from '../utils/animations';

import GhostSpirit from '../components/GhostSpirit';

const Home = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);

    return (
        <motion.div
            className="min-h-[calc(100vh-80px)] flex flex-col justify-center relative overflow-hidden"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            {/* Background Gradient Spotlights with Parallax */}
            <motion.div style={{ y: y1 }} className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] pointer-events-none" />
            <motion.div style={{ y: y2 }} className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[128px] pointer-events-none" />

            {/* Floating Spirit Animation - Full Width */}
            <GhostSpirit />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="overflow-hidden mb-4">
                        <motion.h2
                            variants={textReveal}
                            className="text-primary font-medium tracking-wide text-lg md:text-xl uppercase"
                        >
                            Hello, I'm
                        </motion.h2>
                    </div>

                    <div className="overflow-hidden mb-6">
                        <motion.h1
                            variants={textReveal}
                            className="text-4xl md:text-8xl font-heading font-bold metallic-shine leading-tight"
                        >
                            Ramtin Khorshidi
                        </motion.h1>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="h-16 mb-8"
                    >
                        <p className="text-xl md:text-4xl text-gray-300 font-light flex flex-wrap justify-center gap-2">
                            <span className="text-primary font-semibold">Code Performer</span>
                            <span className="hidden md:inline mx-3 text-gray-600">|</span>
                            <span className="block md:inline mt-1 md:mt-0">Front-End Developer</span>
                        </p>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
                    >
                        Blending the logic of engineering with the soul of performance.
                        I build immersive web experiences that don't just function—they <span className="text-white font-medium">perform</span>.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        className="flex flex-col md:flex-row justify-center items-center gap-6"
                    >
                        <Link to="/developer">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 bg-transparent border border-primary text-primary rounded-full font-bold flex items-center gap-3 transition-colors hover:bg-primary hover:text-background"
                            >
                                <FaCode className="text-xl" />
                                <span>View Projects</span>
                            </motion.button>
                        </Link>
                        <Link to="/creative">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 bg-transparent border border-primary text-primary rounded-full font-bold flex items-center gap-3 transition-colors hover:bg-primary hover:text-background"
                            >
                                <FaTheaterMasks className="text-xl" />
                                <span>Creative Journey</span>
                            </motion.button>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default Home;
