import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import courierImage from '../assets/courier.png';
import agroImage from '../assets/agroeasy1.jpg';
import portfolioImage from '../assets/portfolio.png';
import spaceShooterImage from '../assets/spaceshooter.png';
import aiProject from '../assets/ai_project.png';
import chatWithDataImage from '../assets/chat_with_data.png';
import predictiveMaintenanceImage from '../assets/predictive_maintenance.png';

const Projects = ({ staggerContainer, fadeInUp }) => {
    const [activeCategory, setActiveCategory] = useState('All');

    const projects = [
        {
            title: "Logistics & Fleet Management System",
            description: "Comprehensive web-based application built with PHP, MySQL, HTML, CSS, and JavaScript to streamline courier and logistics operations. Features role-based access control for Admin, Manager, and Delivery Personnel with automated order processing, real-time tracking, and intelligent delivery assignment.",
            tech: "PHP | MySQL | HTML | CSS | JavaScript",
            demoLink: "http://couriermanagement.infy.uk",
            githubLink: "https://github.com/abhishelke1/Courier-Management-System-PHP-based-.git",
            image: courierImage,
            category: "Web Development"
        },
        {
            title: "Modern Portfolio Website",
            description: "A modern, fully responsive portfolio website showcasing my professional skills, projects, and certifications. Built with React and featuring smooth animations, interactive category filtering, dark/light theme toggle, and a clean, professional design optimized for all devices.",
            tech: "React | CSS3 | JavaScript | Framer Motion",
            demoLink: "#",
            githubLink: "https://github.com/abhishelke1/Portfolio-BY-Abhishek-Shelke.git",
            image: portfolioImage,
            category: "Web Development"
        },
        {
            title: "Space Shooter with QuadTree Optimization",
            description: "Advanced 2D space shooter game featuring sophisticated collision detection and QuadTree spatial partitioning algorithm. Developed in Java with optimized performance for efficient handling of dynamic interactions between hundreds of projectiles and enemies simultaneously.",
            tech: "Java | Game Development | QuadTree | Algorithms",
            demoLink: "https://www.linkedin.com/posts/abhishek-shelke-7b2830287_java-gamedevelopment-datastructures-activity-7262055055514603521-s1hB",
            githubLink: "https://github.com/abhishelke1/-Space-Shooter-Game-with-Collision-Detection-and-QuadTree-Optimization.git",
            image: spaceShooterImage,
            category: "Web Development"
        },
        {
            title: "AgroEasy – Smart Agriculture Platform",
            description: "Revolutionary agro-tech Android application built with Kotlin, featuring dual-language support (English/Hindi), secure user authentication, real-time weather updates, AI-powered plant health analysis using image recognition, integrated online marketplace for farmers, and educational video content to empower agricultural communities.",
            tech: "Kotlin | Android | Firebase | AI/ML",
            demoLink: "https://www.linkedin.com/posts/abhishek-shelke-7b2830287_agroeasy-appdevelopment-kotlin-activity-7280923821916762113-5KUa",
            githubLink: "https://github.com/abhishelke1/AgroEasy.git",
            image: agroImage,
            category: "Android Development"
        },
        {
            title: "AI-Powered E-Commerce Shopping Assistant",
            description: "Engineered a full-stack intelligent e-commerce platform with GenAI-powered voice and text assistant for smart product discovery. Implemented dynamic product listing with MongoDB integration and FastAPI microservices architecture. Achieved 45% reduction in search time and 30% increase in user retention through AI-driven recommendations.",
            tech: "React.js | Tailwind CSS | FastAPI | MongoDB | GenAI",
            demoLink: "https://www.youtube.com/watch?v=DS-zF_qomWY",
            githubLink: "https://github.com/hiteshpatil2005/Smart-Shopping-Assistant.git",
            image: aiProject,
            category: "AI Projects"
        },
        {
            title: "Chat with Your Data (GenAI & RAG)",
            description: "Built a Retrieval-Augmented Generation (RAG) tool allowing users to upload PDFs/CSVs and query them using natural language. Implemented vector embeddings for semantic search to retrieve instant, context-aware answers from unstructured documents.",
            tech: "Python | LangChain | OpenAI/Gemini API | FAISS | Streamlit",
            demoLink: "#",
            githubLink: "https://github.com/abhishelke1/AI-Document-Analyst.git",
            image: chatWithDataImage,
            category: "AI Projects"
        },
        {
            title: "Predictive Maintenance System (IoT & ML)",
            description: "Developed an end-to-end IoT system using the NASA Turbofan dataset to predict machine failure (Remaining Useful Life). Engineered a real-time data pipeline and dashboard to visualize sensor health, providing early warnings to prevent costly industrial downtime.",
            tech: "Python | XGBoost | FastAPI | Docker | Streamlit | Time-Series Analysis",
            demoLink: "#",
            githubLink: "https://github.com/abhishelke1/Predictive-Maintenance-System-for-Industrial-Equipment.git",
            image: predictiveMaintenanceImage,
            category: "AI Projects"
        }
    ];

    const categories = [
        'All',
        'Web Development',
        'Android Development',
        'AI Projects'
    ];

    const filteredProjects = activeCategory === 'All'
        ? projects
        : projects.filter(project => project.category === activeCategory);

    const getCategoryCount = (category) => {
        if (category === 'All') return projects.length;
        return projects.filter(p => p.category === category).length;
    };

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

            {/* Category Filter Tabs */}
            <motion.div className="project-categories" variants={fadeInUp}>
                {categories.map((category) => (
                    <button
                        key={category}
                        className={`category-btn ${activeCategory === category ? 'active' : ''}`}
                        onClick={() => setActiveCategory(category)}
                    >
                        {category}
                        <span className="category-count">{getCategoryCount(category)}</span>
                    </button>
                ))}
            </motion.div>

            <div className="glass-container">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeCategory}
                        className="projects-grid"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={`${project.title}-${index}`}
                                className="project-card"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
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
                    </motion.div>
                </AnimatePresence>
            </div>
        </motion.section>
    );
};

export default Projects;
