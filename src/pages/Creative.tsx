import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTheaterMasks, FaMusic, FaCoffee } from 'react-icons/fa';
import { pageVariants, fadeInUp, staggerContainer, hoverScale } from '../utils/animations';
import CreativeTitle from '../components/CreativeTitle';

// Image Imports
import acting1 from '../assets/images/acting-1.webp';
import acting2 from '../assets/images/acting-2.webp';
import actingGreen from '../assets/images/acting-green-mood.webp';
import actingClapper from '../assets/images/acting-clapperboard.webp';
import actingAwards from '../assets/images/acting-awards.webp';
import actingAwardCeremony from '../assets/images/acting-award-ceremony.webp';
import actingStage from '../assets/images/acting-stage-suit.webp';
import actingRedCarpet from '../assets/images/acting-red-carpet.webp';
import coffeeShop from '../assets/images/coffee-shop.webp';

// Placeholder content components
const initialImages = [
    { id: 1, src: actingGreen, alt: "Dramatic Green Light Performance" },
    { id: 2, src: acting1, alt: "Acting Headshot" },
    { id: 3, src: actingStage, alt: "Stage Performance" },
    { id: 4, src: actingClapper, alt: "On Set - Foreign Homeland" },
    { id: 5, src: acting2, alt: "Acting Profile" },
    { id: 6, src: actingRedCarpet, alt: "Red Carpet Appearance" },
    { id: 7, src: actingAwardCeremony, alt: "Receiving Award - Foreign Homeland", className: "effect-shine" },
    { id: 8, src: actingAwards, alt: "Award Recognition Certificates" },
];

import CreativeGallery from '../components/CreativeGallery';

const ActingContent = () => {
    const [images, setImages] = useState(initialImages);

    useEffect(() => {
        setImages(prev => [...prev].sort(() => Math.random() - 0.5));
    }, []);

    return (
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            exit={{ opacity: 0, x: -20 }}
            className="space-y-12"
        >
            {/* Intro Section */}
            <div className="grid md:grid-cols-2 gap-8 items-start">
                <motion.div variants={fadeInUp} className="space-y-6">
                    <h3 className="text-2xl font-bold text-primary">The Stage</h3>
                    <p className="text-gray-300 leading-relaxed">
                        Acting teaches empathy, presence, and the ability to listen—skills that directly translate to effective team collaboration and user-centric development.
                        Currently freelancing with Armin Productions.
                    </p>
                    <div className="bg-surface p-6 rounded-lg border border-gray-800">
                        <h4 className="font-bold text-white mb-2">Recent Roles</h4>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li>• Character Development Workshop (2025)</li>
                            <li>• "Foreign Homeland" - Lead Support (2024)</li>
                            <li>• Improvisation Showcase (2023)</li>
                        </ul>
                    </div>
                </motion.div>

                {/* New Expanding Gallery */}
                <div className="w-full">
                    <CreativeGallery images={images} />
                </div>
            </div>

            {/* Foreign Homeland Showcase */}
            <motion.div
                variants={fadeInUp}
                className="relative bg-gradient-to-r from-[#1a1a40] to-surface border-l-4 border-primary rounded-r-xl p-8 shadow-2xl overflow-hidden group"
            >
                <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
                    <div className="space-y-4 max-w-2xl">
                        <div className="flex items-center gap-3">
                            <FaTheaterMasks className="text-primary text-2xl" />
                            <h3 className="text-3xl font-heading font-bold text-white">Foreign Homeland</h3>
                        </div>

                        <p className="text-gray-300 leading-relaxed text-lg">
                            I performed as an actor in the short film <em>Foreign Homeland</em>, a personal project I also helped bring to life.
                            The film explores themes of identity and belonging, receiving recognition for its compelling narrative and performance.
                        </p>
                    </div>

                    <motion.a
                        href="https://foreign-homeland-web.web.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-shrink-0 bg-primary hover:bg-yellow-500 text-background font-bold py-4 px-8 rounded-full shadow-lg transition-all flex items-center gap-2"
                    >
                        <span>Watch Foreign Homeland</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                        </svg>
                    </motion.a>
                </div>

                {/* Background Decor */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none transition-transform duration-700 group-hover:scale-150 group-hover:bg-primary/10"></div>
            </motion.div>
        </motion.div>
    );
};

const MusicContent = () => (
    <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col items-center text-center space-y-8"
    >
        <h3 className="text-2xl font-bold text-primary">Soundscapes</h3>
        <p className="text-gray-300 max-w-2xl">
            Rhythm and harmony in music parallel the flow and structure of good code.
            Check out my tracks on SoundCloud.
        </p>

        <div className="w-full max-w-3xl bg-surface border border-gray-800 rounded-xl p-8 flex flex-col items-center justify-center min-h-[200px]">
            <FaMusic className="text-6xl text-gray-700 mb-4" />
            <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://soundcloud.com/4P0DTGItgesHB8IBmC"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary hover:bg-yellow-500 text-background font-bold py-3 px-8 rounded-full transition-colors flex items-center gap-2 shadow-lg"
            >
                Start Listening on SoundCloud
            </motion.a>
        </div>
    </motion.div>
);

const BaristaContent = () => (
    <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        exit={{ opacity: 0, x: -20 }}
        className="grid md:grid-cols-2 gap-8 items-center"
    >
        <motion.div variants={fadeInUp} className="order-2 md:order-1">
            <motion.img whileHover={hoverScale} src={coffeeShop} alt="Coffee Art" className="rounded-xl shadow-lg border border-gray-800 w-full" />
        </motion.div>
        <motion.div variants={fadeInUp} className="order-1 md:order-2 space-y-6">
            <h3 className="text-2xl font-bold text-primary">The Showman</h3>
            <p className="text-gray-300 leading-relaxed">
                At <span className="text-white font-semibold">Good Earth Coffeehouse</span>, I don't just serve coffee; I curate an experience.
                My "Barista Showman" persona leverages inventive flair and natural charisma to turn a routine transaction into a memorable interaction.
            </p>
            <div className="flex gap-4">
                <div className="flex flex-col items-center p-4 bg-surface rounded-lg border border-gray-800 min-w-[100px]">
                    <FaCoffee className="text-primary text-2xl mb-2" />
                    <span className="text-xs text-gray-400">Latte Art</span>
                </div>
            </div>
        </motion.div>
    </motion.div>
);

const Creative = () => {
    const [activeTab, setActiveTab] = useState('acting');

    const tabs = [
        { id: 'acting', label: 'Acting', icon: FaTheaterMasks },
        { id: 'music', label: 'Music', icon: FaMusic },
        { id: 'barista', label: 'Barista', icon: FaCoffee },
    ];

    return (
        <motion.div
            className="container mx-auto px-6 py-12"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            <motion.div variants={fadeInUp} className="text-center mb-12">
                <CreativeTitle />
                <p className="text-xl text-gray-400">Where performance meets passion.</p>
            </motion.div>

            {/* Tabs */}
            <motion.div variants={fadeInUp} className="flex justify-center mb-12 space-x-4 md:space-x-8">
                {tabs.map((tab) => (
                    <motion.button
                        key={tab.id}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all ${activeTab === tab.id
                            ? 'bg-primary text-background'
                            : 'bg-surface text-gray-400 hover:text-white hover:bg-gray-800'
                            }`}
                    >
                        <tab.icon />
                        <span className="hidden md:inline">{tab.label}</span>
                    </motion.button>
                ))}
            </motion.div>

            {/* Content Area */}
            <div className="min-h-[400px]">
                <AnimatePresence mode='wait'>
                    {activeTab === 'acting' && <ActingContent key="acting" />}
                    {activeTab === 'music' && <MusicContent key="music" />}
                    {activeTab === 'barista' && <BaristaContent key="barista" />}
                </AnimatePresence>
            </div>
        </motion.div>
    );
};

export default Creative;
