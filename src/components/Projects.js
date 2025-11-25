import React from 'react';
import { motion } from 'framer-motion';
import courierImage from '../assets/courier.png';
import agroImage from '../assets/agroeasy1.jpg';
import portfolioImage from '../assets/portfolio.png';
import spaceShooterImage from '../assets/spaceshooter.png';
import aiProject from '../assets/ai_project.png';

const Projects = ({ staggerContainer, fadeInUp }) => {
    const projects = [
        {
            title: "Courier Management System",
            description: "Web-based application developed with PHP, MySQL, HTML, CSS, and JavaScript to streamline courier operations. Features role-based access for Admin, Manager, and Delivery Personnel with automated order entry, tracking, and delivery assignment.",
            tech: "PHP | MySQL | HTML | CSS | JavaScript",
            demoLink: "http://couriermanagement.infy.uk",
            githubLink: "https://github.com/abhishelke1/Courier-Management-System-PHP-based-.git",
            image: courierImage
        },
        {
            title: "AgroEasy – Empowering Agriculture",
            description: "Kotlin-based Android app revolutionizing agro-tech with dual-language support (English/Hindi), user authentication, real-time weather updates, AI-driven plant health analysis, online marketplace, and educational short videos for farmers.",
            tech: "Kotlin | Android | Firebase | AI Integration",
            demoLink: "https://www.linkedin.com/posts/abhishek-shelke-7b2830287_agroeasy-appdevelopment-kotlin-activity-7280923821916762113-5KUa",
            githubLink: "https://github.com/abhishelke1/AgroEasy.git",
            image: agroImage
        },
        {
            title: "Interactive Portfolio Website",
            description: "A modern, responsive portfolio website showcasing my skills, projects, and certifications. Features animated elements, smooth scrolling, and a clean design to effectively present my professional profile.",
            tech: "React | CSS3 | JavaScript | Responsive Design",
            demoLink: "#",
            githubLink: "https://github.com/abhishelke1/Portfolio-BY-Abhishek-Shelke.git",
            image: portfolioImage
        },
        {
            title: "Smart E-Commerce Platform with AI Assistant",
            description: "Engineered a full-stack e-commerce platform with a GenAI-powered voice/text assistant for smart product discovery. Implemented dynamic product listing with MongoDB integration and FastAPI microservices. Results: Reduced search time by 45% and boosted user retention by 30%.",
            tech: "React.js | Tailwind CSS | FastAPI | MongoDB | GenAI",
            demoLink: "https://www.youtube.com/watch?v=DS-zF_qomWY",
            githubLink: "https://github.com/hiteshpatil2005/Smart-Shopping-Assistant.git",
            image: aiProject
        },
        {
            title: "Space Shooter Game",
            description: "2D space shooter game with advanced collision detection and QuadTree optimization. Developed in Java with spatial partitioning for efficient handling of dynamic interactions between projectiles and enemies.",
            tech: "Java | Game Development | QuadTree | Collision Detection",
            demoLink: "https://www.linkedin.com/posts/abhishek-shelke-7b2830287_java-gamedevelopment-datastructures-activity-7262055055514603521-s1hB",
            githubLink: "https://github.com/abhishelke1/-Space-Shooter-Game-with-Collision-Detection-and-QuadTree-Optimization.git",
            image: spaceShooterImage
        }
    ];

    return (
        <motion.section
            id="projects"
            className="projects-section"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
        >
            <motion.h2 className="section-title" variants={fadeInUp}>My Projects</motion.h2>
            <div className="glass-container">
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="project-card"
                            variants={fadeInUp}
                            whileHover={{ y: -10, rotate: 0 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <div className="project-image-container">
                                <img src={project.image} alt={project.title} className="project-image" />
                                <div className="project-overlay">
                                    <div className="project-links">
                                        {project.demoLink !== '#' && (
                                            <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="project-link">
                                                Live Demo
                                            </a>
                                        )}
                                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
                                            GitHub
                                        </a>
                                    </div>
                                </div>
                                <div className="project-tech-badge">
                                    {project.tech.split(' | ').map((tech, i) => (
                                        <span key={i} className="tech-tag">{tech}</span>
                                    ))}
                                </div>
                            </div>
                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default Projects;
