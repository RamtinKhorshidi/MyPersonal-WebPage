import React, { useState, useEffect } from 'react';
import './GhostSpirit.css';

const GhostSpirit: React.FC = () => {
    // Start with a fixed position to avoid hydration mismatches
    const [yPos, setYPos] = useState('20%');

    const generateRandomY = () => {
        // Random position between 15% and 85% of viewport height
        const min = 15;
        const max = 85;
        return `${Math.floor(Math.random() * (max - min + 1)) + min}%`;
    };

    // Set initial random position on mount
    useEffect(() => {
        setYPos(generateRandomY());
    }, []);

    // Update position every time the animation loop completes
    const handleAnimationIteration = () => {
        setYPos(generateRandomY());
    };

    // Key to force re-render and restart animation
    const [restartKey, setRestartKey] = useState(0);

    const handleRestart = () => {
        setRestartKey(prev => prev + 1);
    };

    return (
        <div
            key={restartKey}
            className="ghost-spirit"
            role="button"
            aria-label="Restart ghost animation"
            aria-hidden="false"
            style={{ '--ghost-y': yPos } as React.CSSProperties}
            onAnimationIteration={handleAnimationIteration}
            onClick={handleRestart}
        >
            {/* Ghost Legs */}
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

export default GhostSpirit;
