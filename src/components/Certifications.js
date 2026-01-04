import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaCalendar, FaCertificate } from 'react-icons/fa';
import cert1 from '../assets/cert1.jpg';
import cert2 from '../assets/cert2.jpg';
import cert3 from '../assets/cert3.jpg';
import cert4 from '../assets/cert4.jpg';
import cert5 from '../assets/cert5.jpg';
import cert6 from '../assets/cert6.jpg';
import cert7 from '../assets/cert7.jpg';
import cert8 from '../assets/cert8.jpg';
import cert9 from '../assets/cert9.jpg';
import webFund from '../assets/Web_Fundamentals.png';
import eBusiness from '../assets/E-E-Bussiness.png';
import networkFund from '../assets/network.png';
import aiEveryone from '../assets/Ai.png';

const Certifications = ({ staggerContainer, fadeInUp }) => {
    const [expandedCert, setExpandedCert] = useState(null);
    const [activeCategory, setActiveCategory] = useState('All');

    // Enhanced certification data with issuer and date
    const certifications = [
        // Cyber Security
        {
            title: "Cybersecurity Awareness and Innovation",
            image: cert1,
            issuer: "Cybersecurity Organization",
            date: "2023",
            description: "Security Principles, Web Hacking, Threat Awareness",
            category: "Cyber Security"
        },
        {
            title: "Web Fundamentals",
            image: webFund,
            issuer: "TryHackMe",
            date: "2023",
            description: "Web Security, Penetration Testing, Vulnerability Assessment",
            category: "Cyber Security"
        },

        // NPTEL
        {
            title: "Programming in Java",
            image: cert4,
            issuer: "NPTEL",
            date: "2023",
            description: "Java Programming, OOP Concepts, Data Structures",
            category: "Programming"
        },
        {
            title: "The Joy of Computing using Python",
            image: cert6,
            issuer: "NPTEL",
            date: "2023",
            description: "Python Programming, Algorithms, Problem Solving",
            category: "Programming"
        },
        {
            title: "Employment Communication",
            image: cert2,
            issuer: "Coursera & NPTEL",
            date: "2023",
            description: "Professional Communication, Business Writing, Soft Skills",
            category: "Professional Development"
        },
        {
            title: "E-Business",
            image: eBusiness,
            issuer: "NPTEL",
            date: "2023",
            description: "E-Business Strategies, Digital Marketing, E-Commerce",
            category: "Business"
        },

        // AWS
        {
            title: "AWS Academy Cloud Foundation",
            image: cert9,
            issuer: "AWS Academy",
            date: "2024",
            description: "Cloud Computing Fundamentals, AWS Core Services, Cloud Architecture",
            category: "Cloud Computing"
        },
        {
            title: "AWS Academy Cloud Architecting",
            image: cert8,
            issuer: "AWS Academy",
            date: "2024",
            description: "Advanced Cloud Architecture, High Availability, Scalability",
            category: "Cloud Computing"
        },
        {
            title: "Where, Why, and How of Lambda Functions",
            image: cert7,
            issuer: "AWS Training",
            date: "2024",
            description: "Serverless Computing, AWS Lambda, Function Development",
            category: "Cloud Computing"
        },

        // Other
        {
            title: "AI for Everyone",
            image: aiEveryone,
            issuer: "Coursera",
            date: "2023",
            description: "AI Concepts, Machine Learning Basics, AI Applications",
            category: "Artificial Intelligence"
        },
        {
            title: "MongoDB Certified Developer (C100DEV)",
            image: cert3,
            issuer: "MongoDB University",
            date: "2023",
            description: "NoSQL Database Design, MongoDB Operations, Data Modeling",
            category: "Database"
        },
        {
            title: "TCS iON Career Edge - Young Professional",
            image: cert5,
            issuer: "TCS iON",
            date: "2023",
            description: "Professional Skills, Industry Readiness, Career Development",
            category: "Professional Development"
        },
        {
            title: "Network Fundamentals",
            image: networkFund,
            issuer: "Infosys Springboard",
            date: "2023",
            description: "Networking Basics, Protocols, Network Architecture",
            category: "Networking"
        }
    ];

    // Get unique categories from certifications
    const categories = ['All', ...Array.from(new Set(certifications.map(cert => cert.category)))];

    const filteredCertifications = activeCategory === 'All'
        ? certifications
        : certifications.filter(cert => cert.category === activeCategory);

    const getCategoryCount = (category) => {
        if (category === 'All') return certifications.length;
        return certifications.filter(cert => cert.category === category).length;
    };

    const toggleCertification = (index) => {
        setExpandedCert(expandedCert === index ? null : index);
    };

    const handleKeyPress = (e, index) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleCertification(index);
        }
    };

    return (
        <motion.section
            id="certifications"
            className="certifications-section"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
        >
            <motion.h2 className="section-title" variants={fadeInUp}>
                Licenses & Certifications
            </motion.h2>

            {/* Category Filter Tabs */}
            <motion.div className="certification-categories-filter" variants={fadeInUp}>
                {categories.map((category) => (
                    <button
                        key={category}
                        className={`category-btn ${activeCategory === category ? 'active' : ''}`}
                        onClick={() => {
                            setActiveCategory(category);
                            setExpandedCert(null); // Close any expanded cert when changing category
                        }}
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
                        className="certifications-accordion"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        {filteredCertifications.map((cert, index) => {
                            const isExpanded = expandedCert === index;

                            return (
                                <motion.div
                                    key={`${cert.title}-${index}`}
                                    className="certification-accordion-item"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3, delay: index * 0.05 }}
                                >
                                    <button
                                        className="certification-header"
                                        onClick={() => toggleCertification(index)}
                                        onKeyPress={(e) => handleKeyPress(e, index)}
                                        aria-expanded={isExpanded}
                                        aria-controls={`cert-content-${index}`}
                                    >
                                        <div className="certification-header-left">
                                            <FaCertificate className="cert-icon" />
                                            <div className="certification-header-text">
                                                <h3 className="certification-name">{cert.title}</h3>
                                                <span className="certification-category">{cert.category}</span>
                                            </div>
                                        </div>
                                        <motion.div
                                            className="certification-chevron"
                                            animate={{ rotate: isExpanded ? 180 : 0 }}
                                            transition={{ duration: 0.2, ease: "easeOut" }}
                                        >
                                            <FaChevronDown />
                                        </motion.div>
                                    </button>

                                    <AnimatePresence initial={false}>
                                        {isExpanded && (
                                            <motion.div
                                                id={`cert-content-${index}`}
                                                className="certification-expanded-content"
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{
                                                    height: "auto",
                                                    opacity: 1,
                                                    transition: {
                                                        height: { duration: 0.25, ease: "easeOut" },
                                                        opacity: { duration: 0.2, delay: 0.1 }
                                                    }
                                                }}
                                                exit={{
                                                    height: 0,
                                                    opacity: 0,
                                                    transition: {
                                                        height: { duration: 0.2, ease: "easeIn" },
                                                        opacity: { duration: 0.15 }
                                                    }
                                                }}
                                            >
                                                <div className="certification-expanded-inner">
                                                    <motion.div
                                                        className="certification-image-wrapper"
                                                        initial={{ scale: 0.95, opacity: 0 }}
                                                        animate={{ scale: 1, opacity: 1 }}
                                                        transition={{ duration: 0.25, delay: 0.15 }}
                                                    >
                                                        <img
                                                            src={cert.image}
                                                            alt={cert.title}
                                                            className="certification-image"
                                                            loading="lazy"
                                                            decoding="async"
                                                        />
                                                    </motion.div>
                                                    <div className="certification-details">
                                                        <div className="certification-meta">
                                                            <div className="meta-item">
                                                                <FaCertificate />
                                                                <span><strong>Issuer:</strong> {cert.issuer}</span>
                                                            </div>
                                                            <div className="meta-item">
                                                                <FaCalendar />
                                                                <span><strong>Date:</strong> {cert.date}</span>
                                                            </div>
                                                        </div>
                                                        <p className="certification-description">
                                                            <strong>Skills:</strong> {cert.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </AnimatePresence>
            </div>
        </motion.section>
    );
};

export default Certifications;
