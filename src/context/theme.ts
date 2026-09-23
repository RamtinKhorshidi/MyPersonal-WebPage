import { createContext, useContext } from 'react';

/** Cycle order of the theme toggle. All four themes are dark palettes. */
export const THEMES = ['dark', 'orchid', 'forest', 'clay'] as const;

export type Theme = (typeof THEMES)[number];

export const DEFAULT_THEME: Theme = 'forest';

export interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const isTheme = (value: unknown): value is Theme =>
    typeof value === 'string' && (THEMES as readonly string[]).includes(value);

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
