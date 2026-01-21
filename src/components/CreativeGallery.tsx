import { useState } from 'react';
import { FaCamera, FaFilm, FaStar, FaVideo, FaTheaterMasks, FaAward, FaUserTie, FaRegImages } from 'react-icons/fa';
import './CreativeGallery.css';

interface GalleryImage {
    id: number;
    src: string;
    alt: string;
    className?: string; // For compatibility
}

interface CreativeGalleryProps {
    images: GalleryImage[];
}

const CreativeGallery = ({ images }: CreativeGalleryProps) => {
    // Determine a default active image (e.g., the first one)
    const [activeId, setActiveId] = useState<number>(images[0]?.id || 1);

    // Map specific icons to images based on index or logic, or just cycle them
    const icons = [
        FaTheaterMasks,
        FaFilm,
        FaCamera,
        FaStar,
        FaUserTie,
        FaAward,
        FaVideo,
        FaRegImages
    ];

    return (
        <div className="options-container">
            <div className="options">
                {images.map((img, index) => {
                    const isActive = activeId === img.id;
                    const Icon = icons[index % icons.length];

                    return (
                        <div
                            key={img.id}
                            className={`option ${isActive ? 'active' : ''}`}
                            style={{ backgroundImage: `url(${img.src})` }}
                            onClick={() => setActiveId(img.id)}
                            role="button"
                            tabIndex={0}
                            aria-label={img.alt}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    setActiveId(img.id);
                                }
                            }}
                        >
                            <div className="shadow"></div>
                            <div className="label">
                                <div className="icon">
                                    <Icon size={20} />
                                </div>
                                <div className="info">
                                    <div className="main">
                                        {isActive ? (
                                            (img.alt.split(' - ')[0] || "Portfolio").split(' ').map((word, i) => (
                                                <span
                                                    key={i}
                                                    className="word-span"
                                                    style={{ animationDelay: `${i * 0.05}s` }}
                                                >
                                                    {word}
                                                </span>
                                            ))
                                        ) : (
                                            img.alt.split(' - ')[0] || "Portfolio"
                                        )}
                                    </div>
                                    <div className="sub">
                                        {isActive ? (
                                            (img.alt.split(' - ')[1] || "Ramtin Portfolio").split(' ').map((word, i) => (
                                                <span
                                                    key={i}
                                                    className="word-span"
                                                    style={{ animationDelay: `${(i * 0.03) + 0.3}s` }} // Slight delay for sub
                                                >
                                                    {word}
                                                </span>
                                            ))
                                        ) : (
                                            img.alt.split(' - ')[1] || "Ramtin Portfolio"
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default CreativeGallery;
