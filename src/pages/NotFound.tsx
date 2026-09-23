import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { pageVariants, fadeInUp } from '../utils/animations';

const NotFound = () => (
    <motion.div
        className="container mx-auto px-6 py-24 text-center"
        variants={pageVariants}
        initial="hidden"
        animate="show"
        exit="exit"
    >
        <motion.div variants={fadeInUp} className="max-w-xl mx-auto">
            <p className="text-primary font-medium tracking-wide uppercase mb-4">404</p>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">This scene isn't in the script.</h1>
            <p className="text-xl text-gray-400 mb-10">The page you're looking for doesn't exist or has moved.</p>
            <Link
                to="/"
                className="inline-block px-8 py-4 border border-primary text-primary rounded-full font-bold transition-colors hover:bg-primary hover:text-background"
            >
                Back to home
            </Link>
        </motion.div>
    </motion.div>
);

export default NotFound;
