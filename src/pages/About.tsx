import { motion } from 'framer-motion';
import { FaBriefcase, FaStar, FaCode, FaTheaterMasks } from 'react-icons/fa';
import { pageVariants, fadeInUp, staggerContainer } from '../utils/animations';

const TimelineItem = ({ year, title, subtitle, description, icon: Icon }: any) => (
    <motion.div
        variants={fadeInUp}
        className="relative pl-8 md:pl-0 md:grid md:grid-cols-5 gap-8 mb-12 items-start group"
    >
        {/* Timeline Line (Desktop) */}
        <div className="hidden md:block absolute left-[40%] top-0 bottom-0 w-px bg-gray-800 -z-10 group-last:bottom-auto group-last:h-full"></div>

        {/* Date */}
        <div className="md:col-span-2 md:text-right md:pr-12">
            <span className="text-primary font-bold text-lg">{year}</span>
        </div>

        {/* Icon */}
        <div className="absolute left-0 top-1 md:relative md:left-auto md:top-auto md:col-span-1 flex justify-center">
            <motion.div
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-8 h-8 rounded-full bg-surface border border-primary flex items-center justify-center text-primary transition-transform bg-background z-10"
            >
                <Icon size={14} />
            </motion.div>
        </div>

        {/* Content */}
        <motion.div
            whileHover={{ x: 5 }}
            className="md:col-span-2 bg-surface p-6 rounded-lg border border-gray-800 hover:border-primary/50 transition-colors shadow-sm"
        >
            <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
            <p className="text-secondary text-sm font-medium mb-3">{subtitle}</p>
            <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
        </motion.div>
    </motion.div>
);

const About = () => {
    const timelineData = [
        {
            year: 'Present',
            title: 'Barista / Showman',
            subtitle: 'Good Earth Coffeehouse',
            description: 'Creating "performance" experiences for customers. Combining improved efficiency with genuine human connection and inventive flair.',
            icon: FaStar
        },
        {
            year: '2023 - Present',
            title: 'Front-End Developer',
            subtitle: 'Self-Taught / Zero To Mastery',
            description: 'Mastering React.js ecosystem. Building complex SPAs, learning TypeScript, and exploring modern UI/UX patterns. Bridging the gap between logic and creativity.',
            icon: FaCode
        },
        {
            year: '2023 - Present',
            title: 'Actor',
            subtitle: 'Armin Productions (Freelance)',
            description: 'Developing emotional intelligence, public speaking, and adaptability under pressure. Script analysis parallels code debugging—breaking down complex systems.',
            icon: FaTheaterMasks
        },
        {
            year: '2023',
            title: 'Meat Cutter',
            subtitle: 'Sobeys',
            description: 'My first job in Canada. Taught me resilience, precision, and the value of starting from scratch in a new environment.',
            icon: FaBriefcase
        },
    ];

    return (
        <motion.div
            className="container mx-auto px-6 py-12"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            <motion.div variants={fadeInUp} className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">My Journey</h1>
                    <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
                        From engineering functionality to performing arts, my path has been anything but linear.
                        This <span className="text-primary">interdisciplinary adaptability</span> is my superpower.
                    </p>
                </div>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="relative"
                >
                    {/* Mobile Line */}
                    <div className="md:hidden absolute left-[15px] top-2 bottom-4 w-px bg-gray-800"></div>

                    {timelineData.map((item, index) => (
                        <TimelineItem key={index} {...item} />
                    ))}
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default About;
