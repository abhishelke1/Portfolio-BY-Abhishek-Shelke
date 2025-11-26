import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSun, FaMoon, FaTerminal, FaMountain, FaPalette } from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = () => {
    const { currentTheme, setCurrentTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);

    const themeOptions = [
        { name: 'light', icon: <FaSun />, label: 'Light', color: '#3b82f6' },
        { name: 'dark', icon: <FaMoon />, label: 'Dark', color: '#8b5cf6' },
        { name: 'hacker', icon: <FaTerminal />, label: 'Hacker', color: '#00ff41' },
        { name: 'sunset', icon: <FaMountain />, label: 'Sunset', color: '#ff6b6b' }
    ];

    const currentThemeData = themeOptions.find(t => t.name === currentTheme);

    return (
        <div className="theme-toggle-wrapper">
            <motion.button
                className="theme-toggle-btn"
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle theme selector"
                style={{ color: currentThemeData?.color }}
            >
                {currentThemeData?.icon || <FaPalette />}
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            className="theme-dropdown-backdrop"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                        />

                        {/* Dropdown */}
                        <motion.div
                            className="theme-dropdown"
                            initial={{ opacity: 0, scale: 0.95, y: -10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: -10 }}
                            transition={{ duration: 0.15, ease: "easeOut" }}
                        >
                            {themeOptions.map((theme) => (
                                <motion.button
                                    key={theme.name}
                                    className={`theme-option ${currentTheme === theme.name ? 'active' : ''}`}
                                    onClick={() => {
                                        setCurrentTheme(theme.name);
                                        setIsOpen(false);
                                    }}
                                    whileHover={{ x: 4 }}
                                    transition={{ duration: 0.15 }}
                                    aria-label={`Switch to ${theme.label} theme`}
                                >
                                    <span className="theme-icon" style={{ color: theme.color }}>
                                        {theme.icon}
                                    </span>
                                    <span className="theme-label">{theme.label}</span>
                                    {currentTheme === theme.name && (
                                        <motion.div
                                            className="theme-check"
                                            layoutId="activeTheme"
                                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                        >
                                            ✓
                                        </motion.div>
                                    )}
                                </motion.button>
                            ))}
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ThemeToggle;
