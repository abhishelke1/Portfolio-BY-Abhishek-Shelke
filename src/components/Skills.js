import React from 'react';
import { motion } from 'framer-motion';

const Skills = ({ staggerContainer, fadeInUp, darkMode }) => {
    const skillsData = [
        { name: 'Kotlin', icon: 'devicon-kotlin-plain-wordmark', level: 90 },
        { name: 'JavaScript', icon: 'devicon-javascript-plain', level: 85 },
        { name: 'React', icon: 'devicon-react-original', level: 80 },
        { name: 'Node.js', icon: 'devicon-nodejs-plain', level: 75 },
        { name: 'Python', icon: 'devicon-python-plain-wordmark', level: 70 },
        { name: 'Java', icon: 'devicon-java-plain-wordmark', level: 80 },
        { name: 'HTML5', icon: 'devicon-html5-plain-wordmark', level: 95 },
        { name: 'CSS3', icon: 'devicon-css3-plain-wordmark', level: 90 },
        { name: 'MongoDB', icon: 'devicon-mongodb-plain-wordmark', level: 75 },
        { name: 'MySQL', icon: 'devicon-mysql-plain-wordmark', level: 80 },
        { name: 'Git', icon: 'devicon-git-plain-wordmark', level: 85 },
        { name: 'AWS', icon: 'devicon-amazonwebservices-plain-wordmark', level: 70 },
        { name: 'Android', icon: 'devicon-android-plain', level: 75 },
        { name: 'Firebase', icon: 'devicon-firebase-plain-wordmark', level: 70 },
        { name: 'Linux', icon: 'devicon-linux-plain', level: 65 },
        { name: 'PHP', icon: 'devicon-php-plain', level: 60 },
        { name: 'Web Hacking', icon: 'devicon-network-plain', level: 70 }, // Using a generic network icon or similar if specific one unavailable
        { name: 'E-Business', icon: 'devicon-google-plain', level: 75 }, // Placeholder icon
        { name: 'Networking', icon: 'devicon-network-plain', level: 70 },
        { name: 'AI Concepts', icon: 'devicon-python-plain', level: 65 } // Python icon as proxy for AI
    ];

    return (
        <motion.section
            id="skills"
            className="skills-section"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
        >
            <motion.h2 className="section-title" variants={fadeInUp}>My Skills</motion.h2>
            <div className="glass-container">
                <div className="skills-container">
                    {skillsData.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            className="skill-item"
                            variants={fadeInUp}
                            whileHover={{ scale: 1.05, y: -5 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <div className="skill-icon-container">
                                <i className={`${skill.icon} colored skill-icon`}></i>
                                <div className="skill-bg-glow"></div>
                                <div className="skill-particles">
                                    {[...Array(8)].map((_, i) => (
                                        <div
                                            key={i}
                                            className="skill-particle"
                                            style={{
                                                transform: `rotate(${i * 45}deg) translateY(-20px)`,
                                                animationDelay: `${i * 0.1}s`
                                            }}
                                        ></div>
                                    ))}
                                </div>
                            </div>
                            <span className="skill-name">{skill.name}</span>
                            <div className="skill-progress">
                                <div
                                    className="skill-progress-bar"
                                    style={{
                                        width: `${skill.level}%`,
                                        background: `linear-gradient(90deg, var(--primary), ${darkMode ? '#8b5cf6' : '#ec4899'})`
                                    }}
                                ></div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default Skills;
