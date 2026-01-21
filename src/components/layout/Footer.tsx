import { FaGithub, FaLinkedin, FaInstagram, FaSoundcloud } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: FaGithub, href: 'https://github.com/RamtinKhorshidi', label: 'GitHub' },
        { icon: FaLinkedin, href: 'https://www.linkedin.com/in/ramtin-khorshidi-23aa482a9', label: 'LinkedIn' },
        { icon: FaInstagram, href: 'https://www.instagram.com/rami.momti', label: 'Instagram' },
        { icon: FaSoundcloud, href: 'https://soundcloud.com/4P0DTGItgesHB8IBmC', label: 'SoundCloud' },
    ];

    return (
        <footer className="bg-surface py-12 border-t border-gray-800">
            <div className="container mx-auto px-6 text-center">
                <div className="mb-8">
                    <h2 className="text-2xl font-heading font-bold text-white mb-2">RAMTIN KHORSHIDI</h2>
                    <p className="text-gray-400">Developer | Actor | Barista</p>
                </div>

                <div className="flex justify-center space-x-6 mb-8">
                    {socialLinks.map((social) => (
                        <a
                            key={social.label}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-primary transition-colors duration-300 text-2xl"
                            aria-label={social.label}
                        >
                            <social.icon />
                        </a>
                    ))}
                </div>

                <div className="text-gray-600 text-sm">
                    <p>&copy; {currentYear} Ramtin Khorshidi. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
