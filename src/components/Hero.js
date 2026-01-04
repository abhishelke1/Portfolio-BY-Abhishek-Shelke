import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import profilePhoto from '../assets/profile.jpg';
import SpotlightEffect from './SpotlightEffect';
import ScrollIndicator from './ScrollIndicator';
import MagneticButton from './MagneticButton';

const ROLES = ["Full-Stack Web Developer", "AI & Machine Learning Engineer", "Data Scientist & AI Engineer"];

const Hero = ({ fadeInUp, staggerContainer, scaleIn }) => {
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
    const typingSpeed = 50;
    const deletingSpeed = 50;
    const pauseBetween = 200;

    useEffect(() => {
        const currentRole = ROLES[currentRoleIndex];

        const handleTyping = () => {
            if (isDeleting) {
                setDisplayText(currentRole.substring(0, displayText.length - 1));
                if (displayText === '') {
                    setIsDeleting(false);
                    setCurrentRoleIndex((prev) => (prev + 1) % ROLES.length);
                }
            } else {
                setDisplayText(currentRole.substring(0, displayText.length + 1));
                if (displayText === currentRole) {
                    setTimeout(() => setIsDeleting(true), pauseBetween);
                }
            }
        };

        const timer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
        return () => clearTimeout(timer);
    }, [displayText, isDeleting, currentRoleIndex]);

    return (
        <motion.section
            id="home"
            className="hero-section"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
        >
            <SpotlightEffect />
            <div className="hero-content">
                <motion.h1 className="animated-gradient-text" variants={fadeInUp}>Hello, I'm</motion.h1>
                <motion.h2 className="hero-title" variants={fadeInUp}>Abhishek Shelke</motion.h2>
                <motion.h3 className="hero-subtitle" variants={fadeInUp}>
                    <span className="typewriter">{displayText}</span>
                    <span className="cursor">|</span>
                </motion.h3>
                <motion.p className="hero-description" variants={fadeInUp}>
                    I build exceptional digital experiences that are fast, accessible, and visually appealing.
                    Specializing in Kotlin, React, and full-stack development.
                </motion.p>
                <motion.div className="hero-buttons" variants={fadeInUp}>
                    <MagneticButton
                        className="hero-button"
                        onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        View My Work
                    </MagneticButton>
                    <MagneticButton
                        className="hero-button-outline"
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        Contact Me
                    </MagneticButton>
                </motion.div>
            </div>
            <motion.div className="hero-image" variants={scaleIn}>
                <div className="avatar-container">
                    <div className="live-indicator">
                        <span className="live-dot"></span>
                        <span className="live-text">Open to Work</span>
                    </div>
                    <img src={profilePhoto} alt="Abhishek Shelke" className="animated-avatar" />
                    <div className="avatar-glow"></div>
                    <div className="avatar-particles">
                        {[...Array(12)].map((_, i) => (
                            <div key={i} className="avatar-particle" style={{
                                transform: `rotate(${i * 30}deg) translateY(-120px)`
                            }}></div>
                        ))}
                    </div>
                </div>
            </motion.div>
            <ScrollIndicator />
        </motion.section>
    );
};

export default Hero;
