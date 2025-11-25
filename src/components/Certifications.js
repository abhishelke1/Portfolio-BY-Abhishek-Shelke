import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
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

    // Grouped Certifications
    const certificationGroups = {
        "Cyber Security": [
            { title: "Cybersecurity Awareness and Innovation", image: cert1 },
            { title: "Web Fundamentals by TryHackMe", image: webFund }
        ],
        "NPTEL": [
            { title: "Programming in Java by NPTEL", image: cert4 },
            { title: "The joy of computing using Python by NPTEL", image: cert6 },
            { title: "Employment Communication (Coursera & NPTEL)", image: cert2 },
            { title: "E-Bussiness by nptel", image: eBusiness }
        ],
        "AWS": [
            { title: "AWS Academy Cloud Foundation", image: cert9 },
            { title: "AWS Academy Cloud Architecting", image: cert8 },
            { title: "Where, Why, and How of Lambda Functions", image: cert7 }
        ],
        "Coursera": [
            { title: "AI for everyone by coursera", image: aiEveryone },
            { title: "Lambda Functions in Python by Coursera", image: cert9 } // Assuming this was the old one, keeping if valid or replacing. User said "Where, Why, and How of Lambda Functions" is cert7. I'll keep the new one in AWS/Coursera as appropriate. The user listed "Lambda Functions in Python by Coursera" in previous file, but renamed/replaced it in recent edit? I'll stick to the user's latest list.
            // Actually, user said "Where, Why, and How of Lambda Functions" in the recent edit. I'll assume that's the one.
            // And "AI for everyone".
        ],
        "Database & Other": [
            { title: "MongoDB Certified Developer (C100DEV)", image: cert3 },
            { title: "TCS iON Career Edge - Young Professional", image: cert5 },
            { title: "Network Fundamentals by infosys", image: networkFund }
        ]
    };

    // Flatten for index handling if needed, or manage state by group+index.
    // Simpler to just use a unique ID or composite key.

    const toggleCertification = (group, index) => {
        const key = `${group}-${index}`;
        setExpandedCert(expandedCert === key ? null : key);
    };

    function getCertificationSkills(title) {
        if (title.includes('Java')) return 'Java Programming, OOP Concepts';
        if (title.includes('Python')) return 'Python Programming, Lambda Functions';
        if (title.includes('MongoDB')) return 'NoSQL, Database Design';
        if (title.includes('AWS')) return 'Cloud Computing, AWS Services';
        if (title.includes('Cybersecurity') || title.includes('Web Fundamentals')) return 'Security Principles, Web Hacking, Threat Awareness';
        if (title.includes('E-Bussiness')) return 'E-Business Strategies, Digital Marketing';
        if (title.includes('Network')) return 'Networking Basics, Protocols';
        if (title.includes('AI')) return 'AI Concepts, Machine Learning Basics';
        return 'Various technical and professional skills';
    }

    return (
        <motion.section
            id="certifications"
            className="certifications-section"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
        >
            <motion.h2 className="section-title" variants={fadeInUp}>Licenses & Certifications</motion.h2>
            <div className="glass-container">
                {Object.entries(certificationGroups).map(([groupName, certs]) => (
                    <div key={groupName} className="certification-group">
                        <motion.h3
                            className="group-title"
                            variants={fadeInUp}
                            style={{
                                color: 'var(--primary)',
                                margin: '2rem 0 1rem',
                                fontSize: '1.5rem',
                                borderLeft: '4px solid var(--secondary)',
                                paddingLeft: '1rem'
                            }}
                        >
                            {groupName}
                        </motion.h3>
                        <div className="certifications-grid">
                            {certs.map((cert, index) => (
                                <motion.div
                                    key={`${groupName}-${index}`}
                                    className={`certification-card ${expandedCert === `${groupName}-${index}` ? 'expanded' : ''}`}
                                    variants={fadeInUp}
                                    whileHover={{ y: -10 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => toggleCertification(groupName, index)}
                                >
                                    <div className="certification-image-container">
                                        <img src={cert.image} alt={cert.title} className="certification-image" />
                                        <div className="certification-overlay"></div>
                                    </div>
                                    <div className="certification-content">
                                        <h3 className="certification-title">{cert.title}</h3>
                                        <div className="certification-toggle">
                                            {expandedCert === `${groupName}-${index}` ? <FaChevronUp /> : <FaChevronDown />}
                                        </div>
                                        <AnimatePresence>
                                            {expandedCert === `${groupName}-${index}` && (
                                                <motion.div
                                                    className="certification-details"
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: 'auto', opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                >
                                                    <p>Skills gained: {getCertificationSkills(cert.title)}</p>
                                                    <div className="certification-badge">
                                                        <div className="badge-glow"></div>
                                                        Certified
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </motion.section>
    );
};

export default Certifications;
