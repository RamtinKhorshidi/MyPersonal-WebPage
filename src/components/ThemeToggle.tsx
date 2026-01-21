import { useTheme } from '../context/ThemeContext';
import './ThemeToggle.css';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className="toggle-scale-wrapper">
            <div className="toggle-wrapper" title="Toggle Light/Dark Theme">
                <input
                    type="checkbox"
                    className="toggleMe"
                    checked={theme === 'dark'}
                    onChange={toggleTheme}
                    aria-label="Toggle Theme"
                />

                {/* The Sun (Visible in Light Mode / Unchecked) */}
                <div className="circle"></div>

                {/* The Moon (Visible in Dark Mode / Checked) */}
                <div className="circleOther"></div>

                <div className="flexDiv">
                    <div style={{ transitionDelay: '0ms' }}></div>
                    <div style={{ transitionDelay: '20ms' }}></div>
                    <div style={{ transitionDelay: '40ms' }}></div>
                    <div style={{ transitionDelay: '60ms' }}></div>
                    <div style={{ transitionDelay: '80ms' }}></div>
                    <div style={{ transitionDelay: '100ms' }}></div>
                    <div style={{ transitionDelay: '120ms' }}></div>
                    <div style={{ transitionDelay: '140ms' }}></div>
                    <div style={{ transitionDelay: '160ms' }}></div>
                    <div style={{ transitionDelay: '180ms' }}></div>
                </div>
            </div>
        </div>
    );
};

export default ThemeToggle;
