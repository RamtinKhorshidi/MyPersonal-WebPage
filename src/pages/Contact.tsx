import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { pageVariants, fadeInUp, staggerContainer } from '../utils/animations';
import EarthGlobe from '../components/EarthGlobe';

const Contact = () => {
    const form = useRef<HTMLFormElement>(null);
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        // Replace these with your actual Service ID, Template ID, and Public Key from EmailJS
        // ideally via import.meta.env.VITE_EMAILJS_SERVICE_ID etc.
        const SERVICE_ID = 'service_id_placeholder';
        const TEMPLATE_ID = 'template_id_placeholder';
        const PUBLIC_KEY = 'public_key_placeholder';

        if (form.current) {
            emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
                .then((result) => {
                    console.log(result.text);
                    setLoading(false);
                    setStatus('success');
                    if (form.current) form.current.reset();
                    setTimeout(() => setStatus('idle'), 5000);
                }, (error) => {
                    console.log(error.text);
                    setLoading(false);
                    setStatus('error');
                });
        }
    };
    return (
        <motion.div
            className="container mx-auto px-6 py-12"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            <motion.div variants={fadeInUp} className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">Get In Touch</h1>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                    Whether you have a project in mind, a role to cast, or just want to talk coffee and code—I'm listening.
                </p>
            </motion.div>

            <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="show"
                className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto"
            >
                {/* Contact Info */}
                <motion.div variants={fadeInUp} className="space-y-8">
                    <div className="bg-surface p-8 rounded-2xl border border-white/10 transform hover:border-primary/50 transition-colors duration-300">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xl flex-shrink-0">
                                <FaMapMarkerAlt />
                            </div>
                            <div
                                className="group cursor-help"
                                title="Located in Calgary, AB, Canada"
                            >
                                <div className="flex items-center gap-2 mb-1">
                                    <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">Based In</h3>
                                    <EarthGlobe />
                                </div>
                                <p className="text-gray-400">Calgary, Alberta, Canada</p>
                                <p className="text-sm text-gray-500 mt-1">Open to remote & relocation</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xl flex-shrink-0">
                                <FaEnvelope />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-1">Email</h3>
                                <a href="mailto:rkhorshidi2003@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                                    rkhorshidi2003@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/20 to-blue-900/20 border border-white/5">
                        <h3 className="text-2xl font-bold text-white mb-4">Let's Create Something.</h3>
                        <p className="text-gray-300">
                            I am currently available for freelance projects and full-time opportunities.
                        </p>
                    </div>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                    variants={fadeInUp}
                    className="bg-surface p-8 rounded-2xl border border-gray-800"
                >
                    <form ref={form} onSubmit={sendEmail} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                            <motion.input
                                whileFocus={{ scale: 1.01, borderColor: "#fe7f2d" }}
                                type="text"
                                id="name"
                                name="user_name"
                                required
                                className="w-full bg-background border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                                placeholder="Your Name"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                            <motion.input
                                whileFocus={{ scale: 1.01, borderColor: "#fe7f2d" }}
                                type="email"
                                id="email"
                                name="user_email"
                                required
                                className="w-full bg-background border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                                placeholder="name@example.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                            <motion.textarea
                                whileFocus={{ scale: 1.01, borderColor: "#fe7f2d" }}
                                id="message"
                                name="message"
                                required
                                rows={4}
                                className="w-full bg-background border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                                placeholder="Tell me about your project..."
                            ></motion.textarea>
                        </div>

                        {status === 'success' && <p className="text-green-500 text-sm">Message sent successfully!</p>}
                        {status === 'error' && <p className="text-red-500 text-sm">Failed to send message. Please try again.</p>}

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            disabled={loading}
                            className={`w-full bg-primary hover:bg-yellow-500 text-background font-bold py-4 rounded-lg transition-colors flex items-center justify-center gap-2 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                            <FaPaperPlane />
                            {loading ? 'Sending...' : 'Send Message'}
                        </motion.button>
                    </form>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};
export default Contact;
