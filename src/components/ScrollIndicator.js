import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import './ScrollIndicator.css';

const ScrollIndicator = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            // Hide after scrolling past hero section (e.g., 500px)
            setIsVisible(window.scrollY < 500);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToNext = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    };

    if (!isVisible) return null;

    return (
        <motion.div
            className="scroll-indicator"
            onClick={scrollToNext}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
        >
            <span className="scroll-text">Scroll to explore</span>
            <motion.div
                className="scroll-arrow"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
                <FaChevronDown />
            </motion.div>
        </motion.div>
    );
};

export default ScrollIndicator;
