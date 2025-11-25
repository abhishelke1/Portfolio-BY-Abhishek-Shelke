import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [cursorVariant, setCursorVariant] = useState("default");

    useEffect(() => {
        const mouseMove = (e) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            });
        };

        window.addEventListener("mousemove", mouseMove);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
        };
    }, []);

    useEffect(() => {
        const handleMouseEnter = () => setCursorVariant("text");
        const handleMouseLeave = () => setCursorVariant("default");

        const elements = document.querySelectorAll("a, button, .project-card, .certification-card, .skill-item");

        elements.forEach(el => {
            el.addEventListener("mouseenter", handleMouseEnter);
            el.addEventListener("mouseleave", handleMouseLeave);
        });

        return () => {
            elements.forEach(el => {
                el.removeEventListener("mouseenter", handleMouseEnter);
                el.removeEventListener("mouseleave", handleMouseLeave);
            });
        };
    });

    const variants = {
        default: {
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
            backgroundColor: "transparent",
            border: "2px solid var(--primary)",
        },
        text: {
            height: 80,
            width: 80,
            x: mousePosition.x - 40,
            y: mousePosition.y - 40,
            backgroundColor: "var(--primary)",
            mixBlendMode: "difference",
            border: "none",
        }
    };

    const dotVariants = {
        default: {
            x: mousePosition.x - 4,
            y: mousePosition.y - 4,
            backgroundColor: "var(--primary)",
        },
        text: {
            x: mousePosition.x - 4,
            y: mousePosition.y - 4,
            backgroundColor: "transparent",
        }
    };

    return (
        <>
            <motion.div
                className="cursor"
                variants={variants}
                animate={cursorVariant}
                transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 28
                }}
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    height: 32,
                    width: 32,
                    borderRadius: "50%",
                    pointerEvents: "none",
                    zIndex: 9999
                }}
            />
            <motion.div
                className="cursor-dot"
                variants={dotVariants}
                animate={cursorVariant}
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    height: 8,
                    width: 8,
                    borderRadius: "50%",
                    pointerEvents: "none",
                    zIndex: 9999
                }}
            />
        </>
    );
};

export default CustomCursor;
