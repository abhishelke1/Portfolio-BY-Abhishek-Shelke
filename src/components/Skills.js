import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Skills = ({ staggerContainer, fadeInUp }) => {
    const [activeCategory, setActiveCategory] = useState('All');

    const skillsData = {
        "Web Development": [
            { name: 'React', icon: 'devicon-react-original colored' },
            { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
            { name: 'HTML5', icon: 'devicon-html5-plain colored' },
            { name: 'CSS3', icon: 'devicon-css3-plain colored' },
            { name: 'Node.js', icon: 'devicon-nodejs-plain colored' },
            { name: 'PHP', icon: 'devicon-php-plain colored' }
        ],
        "AI/ML": [
            { name: 'Python', icon: 'devicon-python-plain colored' },
            { name: 'TensorFlow', icon: 'devicon-tensorflow-original colored' },
            { name: 'PyTorch', icon: 'devicon-pytorch-original colored' },
            { name: 'Pandas', icon: 'devicon-python-plain colored', badge: '🐼' },
            { name: 'NumPy', icon: 'devicon-python-plain colored', badge: '🔢' }
        ],
        "Android Development": [
            { name: 'Kotlin', icon: 'devicon-kotlin-plain colored' },
            { name: 'Android', icon: 'devicon-android-plain colored' },
            { name: 'Java', icon: 'devicon-java-plain colored' }
        ],
        "DevOps & Tools": [
            { name: 'Git', icon: 'devicon-git-plain colored' },
            { name: 'AWS', icon: 'devicon-amazonwebservices-plain-wordmark colored' },
            { name: 'Linux', icon: 'devicon-linux-plain colored' },
            { name: 'Firebase', icon: 'devicon-firebase-plain colored' },
            { name: 'Docker', icon: 'devicon-docker-plain colored' }
        ],
        "Database": [
            { name: 'MongoDB', icon: 'devicon-mongodb-plain colored' },
            { name: 'MySQL', icon: 'devicon-mysql-plain colored' }
        ]
    };

    const categories = ['All', 'Web Development', 'AI/ML', 'Android Development', 'DevOps & Tools', 'Database'];

    const getFilteredSkills = () => {
        if (activeCategory === 'All') {
            return Object.entries(skillsData).flatMap(([category, skills]) =>
                skills.map(skill => ({ ...skill, category }))
            );
        }
        return skillsData[activeCategory]?.map(skill => ({ ...skill, category: activeCategory })) || [];
    };

    const getCategoryCount = (category) => {
        if (category === 'All') {
            return Object.values(skillsData).reduce((acc, skills) => acc + skills.length, 0);
        }
        return skillsData[category]?.length || 0;
    };

    const filteredSkills = getFilteredSkills();

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.2,
                ease: "easeOut"
            }
        }
    };

    return (
        <motion.section
            id="skills"
            className="skills-section"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
        >
            <motion.h2 className="section-title" variants={fadeInUp}>
                My Skills
            </motion.h2>

            {/* Category Filter Tabs */}
            <motion.div className="skill-categories-filter" variants={fadeInUp}>
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
                        className="skills-grid-container"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="skills-grid">
                            {filteredSkills.map((skill, index) => (
                                <motion.div
                                    key={`${skill.name}-${index}`}
                                    className="skill-card"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3, delay: index * 0.05 }}
                                    variants={cardVariants}
                                    whileHover={{
                                        scale: 1.08,
                                        transition: { duration: 0.15, ease: "easeOut" }
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <div className="skill-icon-wrapper">
                                        <i className={skill.icon}></i>
                                        {skill.badge && <span className="skill-badge">{skill.badge}</span>}
                                    </div>
                                    <span className="skill-name">{skill.name}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </motion.section>
    );
};

export default Skills;
