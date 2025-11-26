import React, { useState, useEffect } from 'react';
import './SpotlightEffect.css';

const SpotlightEffect = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Only show on desktop
        const checkDevice = () => {
            setIsVisible(window.innerWidth > 768);
        };

        checkDevice();
        window.addEventListener('resize', checkDevice);

        const handleMouseMove = (e) => {
            if (window.innerWidth > 768) {
                setPosition({ x: e.clientX, y: e.clientY });
            }
        };

        window.addEventListener('mousemove', handleMouseMove, { passive: true });

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', checkDevice);
        };
    }, []);

    if (!isVisible) return null;

    return (
        <div
            className="spotlight-effect"
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
            }}
        />
    );
};

export default SpotlightEffect;
