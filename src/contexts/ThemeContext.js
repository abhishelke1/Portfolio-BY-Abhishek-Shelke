import React, { createContext, useState, useContext, useEffect } from 'react';

const ThemeContext = createContext();

export const themes = {
    light: {
        name: 'Light',
        colors: {
            bgPrimary: '#ffffff',
            bgSecondary: '#f9fafb',
            textPrimary: '#111827',
            textSecondary: '#6b7280',
            primary: '#3b82f6',
            secondary: '#8b5cf6',
            accent: '#ec4899',
            cardBg: 'rgba(255, 255, 255, 0.8)',
            borderColor: 'rgba(59, 130, 246, 0.2)',
            shadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            navBg: 'rgba(255, 255, 255, 0.8)',
            gradientStart: 'hsla(210, 100%, 97%, 1)',
            gradientMid: 'hsla(220, 70%, 95%, 1)',
            gradientEnd: 'hsla(240, 50%, 95%, 1)'
        }
    },
    dark: {
        name: 'Dark',
        colors: {
            bgPrimary: '#111827',
            bgSecondary: '#1f2937',
            textPrimary: '#f3f4f6',
            textSecondary: '#d1d5db',
            primary: '#3b82f6',
            secondary: '#8b5cf6',
            accent: '#ec4899',
            cardBg: 'rgba(31, 41, 55, 0.8)',
            borderColor: 'rgba(255, 255, 255, 0.1)',
            shadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
            navBg: 'rgba(17, 24, 39, 0.95)',
            gradientStart: 'hsla(253, 16%, 7%, 1)',
            gradientMid: 'hsla(225, 39%, 20%, 1)',
            gradientEnd: 'hsla(339, 49%, 20%, 1)'
        }
    },
    hacker: {
        name: 'Hacker',
        colors: {
            bgPrimary: '#0a0e14',
            bgSecondary: '#0f1419',
            textPrimary: '#00ff00',
            textSecondary: '#00cc00',
            primary: '#00ff41',
            secondary: '#39ff14',
            accent: '#00ff00',
            cardBg: 'rgba(0, 20, 0, 0.8)',
            borderColor: 'rgba(0, 255, 0, 0.3)',
            shadow: '0 4px 6px rgba(0, 255, 0, 0.2)',
            navBg: 'rgba(10, 14, 20, 0.95)',
            gradientStart: 'hsla(120, 100%, 5%, 1)',
            gradientMid: 'hsla(120, 100%, 10%, 1)',
            gradientEnd: 'hsla(120, 100%, 8%, 1)'
        }
    },
    sunset: {
        name: 'Sunset',
        colors: {
            bgPrimary: '#1a1625',
            bgSecondary: '#2d2438',
            textPrimary: '#ffdab9',
            textSecondary: '#ffb6c1',
            primary: '#ff6b6b',
            secondary: '#ff8e53',
            accent: '#feca57',
            cardBg: 'rgba(45, 36, 56, 0.8)',
            borderColor: 'rgba(255, 107, 107, 0.3)',
            shadow: '0 4px 6px rgba(255, 107, 107, 0.2)',
            navBg: 'rgba(26, 22, 37, 0.95)',
            gradientStart: 'hsla(280, 30%, 10%, 1)',
            gradientMid: 'hsla(15, 100%, 60%, 0.3)',
            gradientEnd: 'hsla(45, 100%, 70%, 0.3)'
        }
    }
};

export const ThemeProvider = ({ children }) => {
    const [currentTheme, setCurrentTheme] = useState(() => {
        const saved = localStorage.getItem('portfolioTheme');
        return saved && themes[saved] ? saved : 'dark';
    });

    const applyTheme = (themeName) => {
        const theme = themes[themeName];
        if (!theme) return;

        // Apply each color as a CSS variable
        Object.entries(theme.colors).forEach(([key, value]) => {
            document.documentElement.style.setProperty(`--${key}`, value);
        });

        // Update body class for legacy support
        document.body.className = `${themeName}-theme`;
    };

    useEffect(() => {
        localStorage.setItem('portfolioTheme', currentTheme);
        applyTheme(currentTheme);
    }, [currentTheme]);

    const value = {
        currentTheme,
        setCurrentTheme,
        themes,
        themeName: themes[currentTheme]?.name
    };

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within ThemeProvider');
    }
    return context;
};

export default ThemeContext;
