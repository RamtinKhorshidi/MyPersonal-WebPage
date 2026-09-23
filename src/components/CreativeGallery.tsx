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
    // Until the visitor picks one, the first visible image is active.
    const [selectedId, setSelectedId] = useState<number | null>(null);
    const activeId = images.some((img) => img.id === selectedId) ? selectedId : images[0]?.id;

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
                            onClick={() => setSelectedId(img.id)}
                            role="button"
                            tabIndex={0}
                            aria-label={img.alt}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    setSelectedId(img.id);
                                }
                            }}
                        >
                            {/* Background Layer: Blurs when active */}
                            <div
                                className="bg-layer"
                                style={{ backgroundImage: `url(${img.src})` }}
                            ></div>

                            {/* Foreground Layer: Contains standard aspect ratio, visible only when active */}
                            <div
                                className="fg-layer"
                                style={{ backgroundImage: `url(${img.src})` }}
                            ></div>

                            <div className="shadow"></div>
                            <div className="shadow-top"></div>
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
