import React from 'react';
import './GhostText.css';

interface GhostTextProps {
    text: string;
    className?: string; // To pass existing classes like text-5xl etc.
}

const GhostText: React.FC<GhostTextProps> = ({ text, className }) => {
    return (
        <div className={`ghost-container ${className || ''}`} aria-label={text}>
            <span className="ghost-text">{text}</span>
            <div className="ghost" role="presentation">
                {/* Ghost Legs */}
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default GhostText;
