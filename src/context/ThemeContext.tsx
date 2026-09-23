import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { DEFAULT_THEME, THEMES, ThemeContext, isTheme } from './theme';
import type { Theme } from './theme';

const STORAGE_KEY = 'theme';

/** Themes saved under an older name, mapped to their current name. */
const LEGACY_THEMES: Record<string, Theme> = { light: 'orchid' };

// Storage can be unavailable (private mode, blocked site data), so every
// access is guarded and the site falls back to the default theme.
const readStoredTheme = (): Theme => {
    try {
        const saved = window.localStorage.getItem(STORAGE_KEY);
        if (saved && LEGACY_THEMES[saved]) return LEGACY_THEMES[saved];
        if (isTheme(saved)) return saved;
    } catch {
        // ignore and use the default
    }
    return DEFAULT_THEME;
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState<Theme>(readStoredTheme);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        try {
            window.localStorage.setItem(STORAGE_KEY, theme);
        } catch {
            // the preference simply won't persist
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => THEMES[(THEMES.indexOf(prev) + 1) % THEMES.length]);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
