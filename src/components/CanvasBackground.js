import React, { useRef, useEffect } from 'react';

const CanvasBackground = ({ darkMode }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let particles = [];
        let mouse = { x: null, y: null };

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        const handleMouseMove = (event) => {
            mouse.x = event.clientX;
            mouse.y = event.clientY;
        };

        window.addEventListener('mousemove', handleMouseMove);

        // Particle Class
        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.vx = (Math.random() - 0.5) * (darkMode ? 0.5 : 1.0);
                this.vy = (Math.random() - 0.5) * (darkMode ? 0.5 : 1.0);
                this.size = Math.random() * (darkMode ? 2 : 3);

                // Vibrant colors for Light Mode
                if (darkMode) {
                    this.baseColor = 'rgba(255, 255, 255, 0.5)';
                } else {
                    const colors = [
                        'rgba(59, 130, 246, 0.6)', // Blue
                        'rgba(139, 92, 246, 0.6)', // Purple
                        'rgba(236, 72, 153, 0.6)', // Pink
                        'rgba(16, 185, 129, 0.6)'  // Emerald
                    ];
                    this.baseColor = colors[Math.floor(Math.random() * colors.length)];
                }
                this.color = this.baseColor;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                // Bounce off edges
                if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
                if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

                // Mouse interaction
                if (mouse.x != null) {
                    const dx = mouse.x - this.x;
                    const dy = mouse.y - this.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    const maxDistance = 150;

                    if (distance < maxDistance) {
                        if (darkMode) {
                            // Spotlight effect: push particles away slightly and brighten
                            const forceDirectionX = dx / distance;
                            const forceDirectionY = dy / distance;
                            const force = (maxDistance - distance) / maxDistance;
                            const directionX = forceDirectionX * force * 2; // Push strength
                            const directionY = forceDirectionY * force * 2;

                            this.x -= directionX;
                            this.y -= directionY;
                            this.color = 'rgba(255, 255, 255, 1)'; // Brighten
                        } else {
                            // Light mode: particles are attracted to mouse
                            const forceDirectionX = dx / distance;
                            const forceDirectionY = dy / distance;
                            const force = (maxDistance - distance) / maxDistance;
                            const directionX = forceDirectionX * force * 2;
                            const directionY = forceDirectionY * force * 2;

                            this.x += directionX;
                            this.y += directionY;
                        }
                    } else {
                        this.color = this.baseColor;
                    }
                }
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.fill();
            }
        }

        // Initialize Particles
        const initParticles = () => {
            particles = [];
            // Reduced particle count for better performance (Low Latency)
            const particleCount = darkMode ? 80 : 40;
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        };

        initParticles();

        // Animation Loop
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });

            // Connect particles in Light Mode
            if (!darkMode) {
                connectParticles();
            }

            // Draw Spotlight in Dark Mode
            if (darkMode && mouse.x != null) {
                const gradient = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 200);
                gradient.addColorStop(0, 'rgba(59, 130, 246, 0.15)');
                gradient.addColorStop(1, 'rgba(59, 130, 246, 0)');
                ctx.fillStyle = gradient;
                ctx.fillRect(0, 0, canvas.width, canvas.height);
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        const connectParticles = () => {
            const maxDistance = 150;
            for (let i = 0; i < particles.length; i++) {
                for (let j = i; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < maxDistance) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(59, 130, 246, ${1 - distance / maxDistance})`;
                        ctx.lineWidth = 1;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, [darkMode]);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1, // Behind content but in front of gradient
                pointerEvents: 'none'
            }}
        />
    );
};

export default CanvasBackground;
