import { useEffect } from 'react';
import 'splitting/dist/splitting.css';
import 'splitting/dist/splitting-cells.css';
import Splitting from 'splitting';
import './CreativeAnimation.css';

const CreativeTitle = () => {
    useEffect(() => {
        Splitting({ target: '.creative-title', by: 'chars' });
    }, []);

    return (
        <div className="splitting-container">
            <div className="splitting-wrapper">
                <h1 className="creative-title text-4xl md:text-5xl font-heading font-bold text-white mb-6" data-splitting>
                    Creative Journey
                </h1>

                {/* The Animated Dot Element */}
                <div className="dot">
                    <div className="dot-inner">
                        <svg className="dot-wave background" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800">
                            <path d="M799.09 90s11.04 0 0 0c-80.714 0-79.621-90-200-90-120.377 0-118.607 90-200 90-81.391 0-81.215-90-200-90C80.308 0 78.68 89.29-.91 90c-6.946.062 0 0 0 0v510h800V90z" />
                        </svg>
                        <svg className="dot-wave foreground" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800">
                            <path d="M799.09 90s11.04 0 0 0c-80.714 0-79.621-90-200-90-120.377 0-118.607 90-200 90-81.391 0-81.215-90-200-90C80.308 0 78.68 89.29-.91 90c-6.946.062 0 0 0 0v510h800V90z" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreativeTitle;
