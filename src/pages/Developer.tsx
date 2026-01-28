import { motion } from 'framer-motion';
import { FaGithub, FaReact, FaJs, FaHtml5, FaCss3Alt, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiTypescript } from 'react-icons/si';
import { pageVariants, staggerContainer, fadeInUp, hoverScale } from '../utils/animations';

// Image Imports
// Image Imports
import codingSetup from '../assets/images/coding-setup.jpg'; // Reused for Foreign Homeland for now if no specific image provided, or I can use one from Creative? 
// User didn't provide image for Foreign Homeland card specifically, but uploaded certificates.
// I can use `actingClapper` or similar from Creative imports if I want, but I'll stick to a placeholder or re-import one. 
// Actually, I'll import `foreignHomelandPoster` or just reuse `codingSetup` for now as a generic dev image, OR import one of the acting images that represents the film. 
// "Foreign Homeland" poster exists in assets? Let's check. 
// I'll import `posterVertical` from assets if it exists (previous conversations mentioned it).
// Let's safe bet: React Project image is getting removed. 
import certReact from '../assets/images/certificate-react.jpg';
import certJS from '../assets/images/certificate-js.jpg';

const ProjectCard = ({ title, description, tags, image, githubUrl }: any) => (
    <motion.div
        variants={fadeInUp}
        whileHover={hoverScale}
        className="bg-surface rounded-xl overflow-hidden border border-white/10 hover:border-primary transition-colors group flex flex-col h-full shadow-lg"
    >
        <div className="h-48 overflow-hidden relative">
            <div className="absolute inset-0 bg-background/50 group-hover:bg-transparent transition-colors z-10" />
            <img
                src={image || 'https://via.placeholder.com/600x400'}
                alt={title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
        </div>
        <div className="p-6 flex-grow flex flex-col">
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{title}</h3>
            <p className="text-gray-400 text-sm mb-4 flex-grow">{description}</p>

            <div className="flex flex-wrap gap-2 mb-6">
                {tags.map((tag: string) => (
                    <span key={tag} className="text-xs font-medium px-2 py-1 bg-background border border-white/10 rounded-md text-gray-300">
                        {tag}
                    </span>
                ))}
            </div>

            <div className="flex gap-4 mt-auto">
                <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-bold text-white hover:text-primary transition-colors"
                >
                    <FaGithub /> Code
                </a>
            </div>
        </div>
    </motion.div>
);

const Developer = () => {
    const projects = [
        {
            title: 'Foreign Homeland',
            description: 'A dedicated website for the short film "Foreign Homeland", exploring themes of identity and belonging. This project showcases a responsive design and seamless user experience, serving as a digital hub for the film\'s promotion and audience engagement.',
            tags: ['JavaScript', 'HTML', 'CSS', 'Firebase'],
            image: codingSetup, // Using codingSetup as a placeholder since no specific screenshot provided for dev card
            githubUrl: 'https://github.com/RamtinKhorshidi/Foreign-Homeland',
        }
    ];

    const certificates = [
        { title: 'Complete React Developer', issuer: 'Udemy', image: certReact },
        { title: 'JavaScript Algorithms and Data Structures', issuer: 'freeCodeCamp', image: certJS },
    ];

    const skills = [
        { name: 'React', icon: FaReact, color: '#61DAFB' },
        { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
        { name: 'JavaScript', icon: FaJs, color: '#F7DF1E' },
        { name: 'Tailwind', icon: SiTailwindcss, color: '#38B2AC' },
        { name: 'HTML5', icon: FaHtml5, color: '#E34F26' },
        { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6' },
        { name: 'Git', icon: FaGitAlt, color: '#F05032' },
    ];

    return (
        <motion.div
            className="container mx-auto px-6 py-12"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            <motion.div variants={fadeInUp} className="mb-16 text-center">
                <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">Development</h1>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                    Building seamless, performant web applications with modern architecture.
                </p>
            </motion.div>

            {/* Skills Marquee/Grid */}
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="mb-20"
            >
                <motion.h2 variants={fadeInUp} className="text-2xl font-bold text-white mb-8 text-center">Tech Stack</motion.h2>
                <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                    {skills.map((skill) => (
                        <motion.div
                            key={skill.name}
                            variants={fadeInUp}
                            whileHover={{ y: -5, scale: 1.1 }}
                            className="flex flex-col items-center group cursor-default"
                        >
                            <div className="w-16 h-16 rounded-xl bg-surface border border-white/10 flex items-center justify-center text-3xl mb-3 group-hover:border-primary transition-colors shadow-lg" style={{ color: skill.color }}>
                                <skill.icon />
                            </div>
                            <span className="text-sm text-gray-400 font-medium group-hover:text-white transition-colors">{skill.name}</span>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Certificates Section */}
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="mb-20"
            >
                <motion.h2 variants={fadeInUp} className="text-2xl font-bold text-white mb-8">Certificates</motion.h2>
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {certificates.map((cert, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInUp}
                            whileHover={{ scale: 1.02 }}
                            className="bg-surface rounded-xl overflow-hidden border border-white/10 hover:border-primary transition-all shadow-lg"
                        >
                            <img src={cert.image} alt={cert.title} className="w-full h-auto object-cover" />
                            <div className="p-4 border-t border-white/5">
                                <h3 className="text-lg font-bold text-white leading-tight">{cert.title}</h3>
                                <p className="text-primary text-sm mt-1">{cert.issuer}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Projects Grid */}
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
            >
                <motion.h2 variants={fadeInUp} className="text-2xl font-bold text-white mb-8">Featured Projects</motion.h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>

                <motion.p
                    variants={fadeInUp}
                    className="text-center text-gray-400 italic text-lg"
                >
                    Soon more projects will be added to this page.
                </motion.p>
            </motion.div>
        </motion.div>
    );
};

export default Developer;
