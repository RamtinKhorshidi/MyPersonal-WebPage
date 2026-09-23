import { useState } from 'react';
import type { FormEvent } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import { pageVariants, fadeInUp, staggerContainer } from '../utils/animations';
import EarthGlobe from '../components/EarthGlobe';

const CONTACT_EMAIL = 'rkhorshidi2003@gmail.com';

// The form sends through EmailJS when these build-time variables are set
// (see .env.example). Without them it opens the visitor's email app with the
// message already filled in, so the form never dead-ends.
const EMAILJS = {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};
const emailJsEnabled = Boolean(EMAILJS.serviceId && EMAILJS.templateId && EMAILJS.publicKey);

type Status = 'idle' | 'sent' | 'mail-app' | 'error';

const Contact = () => {
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<Status>('idle');

    const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formEl = e.currentTarget;

        if (!emailJsEnabled) {
            const data = new FormData(formEl);
            const name = String(data.get('user_name') ?? '').trim();
            const from = String(data.get('user_email') ?? '').trim();
            const message = String(data.get('message') ?? '').trim();
            const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
            const body = encodeURIComponent(`${message}\n\n- ${name} (${from})`);
            window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
            setStatus('mail-app');
            return;
        }

        setLoading(true);
        try {
            // Loaded on demand so visitors who never submit don't download it.
            const { default: emailjs } = await import('@emailjs/browser');
            await emailjs.sendForm(EMAILJS.serviceId!, EMAILJS.templateId!, formEl, EMAILJS.publicKey!);
            formEl.reset();
            setStatus('sent');
            setTimeout(() => setStatus('idle'), 5000);
        } catch {
            setStatus('error');
        } finally {
            setLoading(false);
        }
    };
    return (
        <motion.div
            className="container mx-auto px-6 py-12"
            variants={pageVariants}
            initial="hidden"
            animate="show"
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
                                <p className="text-on-surface-muted">Calgary, Alberta, Canada</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xl flex-shrink-0">
                                <FaEnvelope />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-1">Email</h3>
                                <a href={`mailto:${CONTACT_EMAIL}`} className="text-on-surface-muted hover:text-white transition-colors">
                                    {CONTACT_EMAIL}
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/20 to-blue-900/20 border border-white/5">
                        <h3 className="text-2xl font-bold text-white mb-4">Let's Create Something.</h3>
                        <p className="text-gray-300">
                            Open to freelance web projects, creative collaborations, and conversations at the
                            intersection of finance and technology.
                        </p>
                    </div>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                    variants={fadeInUp}
                    className="bg-surface p-8 rounded-2xl border border-gray-800"
                >
                    <form onSubmit={sendEmail} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-on-surface-muted mb-2">Name</label>
                            <motion.input
                                whileFocus={{ scale: 1.01 }}
                                type="text"
                                id="name"
                                name="user_name"
                                required
                                className="w-full bg-background border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                                placeholder="Your Name"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-on-surface-muted mb-2">Email</label>
                            <motion.input
                                whileFocus={{ scale: 1.01 }}
                                type="email"
                                id="email"
                                name="user_email"
                                required
                                className="w-full bg-background border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                                placeholder="name@example.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-on-surface-muted mb-2">Message</label>
                            <motion.textarea
                                whileFocus={{ scale: 1.01 }}
                                id="message"
                                name="message"
                                required
                                rows={4}
                                className="w-full bg-background border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                                placeholder="Tell me about your project..."
                            ></motion.textarea>
                        </div>

                        <div aria-live="polite" className="text-sm">
                            {status === 'sent' && <p className="text-green-400">Message sent. Thank you, I'll get back to you soon.</p>}
                            {status === 'mail-app' && (
                                <p className="text-on-surface-muted">
                                    Your email app should open with the message ready to send. If nothing happened,
                                    email me at <a href={`mailto:${CONTACT_EMAIL}`} className="underline">{CONTACT_EMAIL}</a>.
                                </p>
                            )}
                            {status === 'error' && (
                                <p className="text-red-300">
                                    The message couldn't be sent. Please email me directly at{' '}
                                    <a href={`mailto:${CONTACT_EMAIL}`} className="underline">{CONTACT_EMAIL}</a>.
                                </p>
                            )}
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            disabled={loading}
                            className={`w-full bg-primary hover:brightness-110 text-background font-bold py-4 rounded-lg transition-colors flex items-center justify-center gap-2 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
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
