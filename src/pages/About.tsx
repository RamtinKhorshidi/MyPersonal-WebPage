import { motion } from 'framer-motion';
import { FaBriefcase, FaCode, FaCoffee, FaFilm, FaTheaterMasks, FaUniversity } from 'react-icons/fa';
import type { IconType } from 'react-icons';
import { pageVariants, fadeInUp, staggerContainer } from '../utils/animations';

interface TimelineItemProps {
    year: string;
    title: string;
    subtitle: string;
    description: string;
    icon: IconType;
}

const TimelineItem = ({ year, title, subtitle, description, icon: Icon }: TimelineItemProps) => (
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
            <p className="text-on-surface-accent text-sm font-medium mb-3">{subtitle}</p>
            <p className="text-on-surface-muted text-sm leading-relaxed">{description}</p>
        </motion.div>
    </motion.div>
);

const About = () => {
    const timelineData = [
        {
            year: '2026 - Present',
            title: 'Client Advisor',
            subtitle: 'RBC Royal Bank · Downtown Calgary',
            description: 'Helping clients with their everyday banking on the branch floor, and learning how the systems behind financial products are designed. The place where finance meets technology.',
            icon: FaUniversity
        },
        {
            year: '2025 - Present',
            title: 'Front-End Developer',
            subtitle: 'Freelance · Zero To Mastery certified',
            description: 'Building custom React and TypeScript websites for clients, including the site for the film Foreign Homeland. Self-taught at night while working café shifts.',
            icon: FaCode
        },
        {
            year: '2026',
            title: 'Stage Actor, I Am Not Here',
            subtitle: 'Calgary Fringe Festival · Roommate Art Company',
            description: 'A full festival run with a great ensemble, directed by Saeid Asgarian. Rehearsed through the summer alongside my first months at the bank.',
            icon: FaTheaterMasks
        },
        {
            year: '2023 - Present',
            title: 'Actor & Host',
            subtitle: 'Armin Productions (Freelance)',
            description: 'Best Actor at VIYFF for Foreign Homeland, and bilingual host of its Calgary premiere. Acting builds emotional intelligence, public speaking and adaptability under pressure; script analysis parallels code debugging.',
            icon: FaFilm
        },
        {
            year: '2024 - 2026',
            title: 'Head Barista',
            subtitle: 'Good Earth Coffeehouse',
            description: 'Two years behind the counter getting to know Calgary one conversation at a time. Trained and mentored seven new hires and ran shift operations.',
            icon: FaCoffee
        },
        {
            year: '2023',
            title: 'Meat Cutter',
            subtitle: 'Sobeys',
            description: 'My first job in Canada. Taught me resilience, precision, and the value of starting from scratch in a new environment.',
            icon: FaBriefcase
        },
    ];

    const languages = [
        { name: 'Persian', level: 'Native' },
        { name: 'English', level: 'Fluent' },
        { name: 'Spanish', level: 'Working knowledge' },
    ];

    return (
        <motion.div
            className="container mx-auto px-6 py-12"
            variants={pageVariants}
            initial="hidden"
            animate="show"
            exit="exit"
        >
            <motion.div variants={fadeInUp} className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">My Journey</h1>
                    <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
                        From the café counter to the bank branch, from the stage to the code editor, my path has been
                        anything but linear. This <span className="text-primary">interdisciplinary adaptability</span> is my superpower.
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

                    {timelineData.map((item) => (
                        <TimelineItem key={item.title} {...item} />
                    ))}
                </motion.div>

                <motion.section
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="mt-8 text-center"
                    aria-labelledby="languages-heading"
                >
                    <h2 id="languages-heading" className="text-2xl font-bold text-white mb-6">Languages</h2>
                    <ul className="flex flex-wrap justify-center gap-3">
                        {languages.map((language) => (
                            <li key={language.name} className="px-5 py-2 rounded-full bg-surface border border-white/10 text-sm">
                                <span className="text-white font-medium">{language.name}</span>
                                <span className="text-on-surface-muted"> · {language.level}</span>
                            </li>
                        ))}
                    </ul>
                </motion.section>
            </motion.div>
        </motion.div>
    );
};

export default About;
