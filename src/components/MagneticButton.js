import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import './MagneticButton.css';

const MagneticButton = ({ children, className = '', ...props }) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);
    const buttonRef = useRef(null);

    const handleMouseMove = (e) => {
        if (!buttonRef.current || window.innerWidth <= 768) return;

        const rect = buttonRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const distanceX = e.clientX - centerX;
        const distanceY = e.clientY - centerY;
        const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

        // Magnetic effect within 100px radius
        if (distance < 100) {
            const strength = 0.3;
            setPosition({
                x: distanceX * strength,
                y: distanceY * strength
            });
        } else {
            setPosition({ x: 0, y: 0 });
        }
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
        setIsHovered(false);
    };

    const handleClick = (e) => {
        // Ripple effect
        const button = buttonRef.current;
        const ripple = document.createElement('span');
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = `${size}px`;
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        ripple.classList.add('ripple');

        button.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);

        if (props.onClick) {
            props.onClick(e);
        }
    };

    return (
        <motion.button
            ref={buttonRef}
            className={`magnetic-button ${className}`}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
            animate={{ x: position.x, y: position.y }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{
                type: "spring",
                stiffness: 300,
                damping: 20
            }}
            {...props}
        >
            {children}
        </motion.button>
    );
};

export default MagneticButton;
