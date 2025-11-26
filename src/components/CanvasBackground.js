import React, { useEffect, useRef } from 'react';
import './CanvasBackground.css';

const CanvasBackground = ({ darkMode }) => {
    const canvasRef = useRef(null);
    const particles = useRef([]);
    const mousePos = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let animationFrameId;

        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Create particles
        const createParticles = () => {
            const particleCount = window.innerWidth > 768 ? 50 : 30;
            particles.current = [];

            for (let i = 0; i < particleCount; i++) {
                particles.current.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    vx: (Math.random() - 0.5) * 0.5,
                    vy: (Math.random() - 0.5) * 0.5,
                    radius: Math.random() * 2 + 1,
                    baseX: Math.random() * canvas.width,
                    baseY: Math.random() * canvas.height
                });
            }
        };

        createParticles();

        // Mouse move handler for parallax
        const handleMouseMove = (e) => {
            mousePos.current = {
                x: (e.clientX / window.innerWidth) * 2 - 1,
                y: (e.clientY / window.innerHeight) * 2 - 1
            };
        };

        window.addEventListener('mousemove', handleMouseMove, { passive: true });

        // Animation loop
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Get theme colors
            const primaryColor = getComputedStyle(document.documentElement)
                .getPropertyValue('--primary').trim() || '#3b82f6';
            const secondaryColor = getComputedStyle(document.documentElement)
                .getPropertyValue('--secondary').trim() || '#8b5cf6';

            particles.current.forEach((particle, i) => {
                // Update position with parallax effect
                const parallaxX = mousePos.current.x * 20;
                const parallaxY = mousePos.current.y * 20;

                particle.x += particle.vx + parallaxX * 0.001;
                particle.y += particle.vy + parallaxY * 0.001;

                // Bounce off edges
                if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
                if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

                // Draw particle
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
                ctx.fillStyle = i % 2 === 0
                    ? `${primaryColor}33`
                    : `${secondaryColor}33`;
                ctx.fill();

                // Draw connections
                particles.current.forEach((otherParticle, j) => {
                    if (i === j) return;
                    const dx = particle.x - otherParticle.x;
                    const dy = particle.y - otherParticle.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 150) {
                        ctx.beginPath();
                        ctx.moveTo(particle.x, particle.y);
                        ctx.lineTo(otherParticle.x, otherParticle.y);
                        ctx.strokeStyle = `${primaryColor}${Math.floor((1 - distance / 150) * 20).toString(16).padStart(2, '0')}`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                });
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, [darkMode]);

    return (
        <>
            <canvas ref={canvasRef} className="canvas-background" />
            <div className="animated-gradient-bg" />
        </>
    );
};

export default CanvasBackground;
