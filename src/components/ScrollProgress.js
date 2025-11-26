import React, { useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgress = ({ activeSection, setActiveSection }) => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const [hoveredSection, setHoveredSection] = useState(null);

    const sections = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'experience', label: 'Education' },
        { id: 'skills', label: 'Skills' },
        { id: 'certifications', label: 'Certifications' },
        { id: 'projects', label: 'Projects' },
        { id: 'contact', label: 'Contact' }
    ];

    const handleDotClick = (sectionId) => {
        setActiveSection(sectionId);
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            {/* Horizontal progress bar at top */}
            <motion.div
                className="scroll-progress-bar"
                style={{
                    scaleX,
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "5px",
                    background: "linear-gradient(90deg, var(--primary), var(--secondary))",
                    transformOrigin: "0%",
                    zIndex: 1000
                }}
            />

            {/* Vertical section rail on the right */}
            <div className="scroll-rail">
                {sections.map((section, index) => {
                    const isActive = activeSection === section.id;
                    const isHovered = hoveredSection === section.id;

                    return (
                        <div
                            key={section.id}
                            className="scroll-rail-item"
                            onMouseEnter={() => setHoveredSection(section.id)}
                            onMouseLeave={() => setHoveredSection(null)}
                        >
                            <motion.button
                                className={`scroll-rail-dot ${isActive ? 'active' : ''}`}
                                onClick={() => handleDotClick(section.id)}
                                aria-label={`Scroll to ${section.label}`}
                                initial={false}
                                animate={{
                                    scale: isActive ? 1.4 : 1,
                                    opacity: isActive ? 1 : 0.6
                                }}
                                whileHover={{
                                    scale: 1.2,
                                    opacity: 1
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 25
                                }}
                            >
                                <span className="dot-inner"></span>
                            </motion.button>

                            {/* Tooltip */}
                            <motion.div
                                className="scroll-rail-tooltip"
                                initial={{ opacity: 0, x: 10 }}
                                animate={{
                                    opacity: isHovered ? 1 : 0,
                                    x: isHovered ? 0 : 10
                                }}
                                transition={{
                                    duration: 0.2
                                }}
                            >
                                {section.label}
                            </motion.div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default ScrollProgress;
