import React from 'react';
import { motion } from 'framer-motion';

const Skills = ({ staggerContainer, fadeInUp }) => {
    const skillsData = {
        "Frontend": [
            { name: 'React', icon: 'devicon-react-original colored' },
            { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
            { name: 'HTML5', icon: 'devicon-html5-plain colored' },
            { name: 'CSS3', icon: 'devicon-css3-plain colored' }
        ],
        "Backend": [
            { name: 'Node.js', icon: 'devicon-nodejs-plain colored' },
            { name: 'Python', icon: 'devicon-python-plain colored' },
            { name: 'Java', icon: 'devicon-java-plain colored' },
            { name: 'Kotlin', icon: 'devicon-kotlin-plain colored' },
            { name: 'PHP', icon: 'devicon-php-plain colored' }
        ],
        "DevOps & Tools": [
            { name: 'Git', icon: 'devicon-git-plain colored' },
            { name: 'AWS', icon: 'devicon-amazonwebservices-plain-wordmark colored' },
            { name: 'Linux', icon: 'devicon-linux-plain colored' },
            { name: 'Firebase', icon: 'devicon-firebase-plain colored' }
        ],
        "Mobile & Database": [
            { name: 'Android', icon: 'devicon-android-plain colored' },
            { name: 'MongoDB', icon: 'devicon-mongodb-plain colored' },
            { name: 'MySQL', icon: 'devicon-mysql-plain colored' }
        ]
    };

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
            <div className="glass-container">
                <div className="skills-categories">
                    {Object.entries(skillsData).map(([category, skills], categoryIndex) => (
                        <motion.div
                            key={category}
                            className="skill-category"
                            variants={fadeInUp}
                        >
                            <h3 className="category-header">{category}</h3>
                            <div className="skills-grid">
                                {skills.map((skill, index) => (
                                    <motion.div
                                        key={skill.name}
                                        className="skill-card"
                                        variants={cardVariants}
                                        whileHover={{
                                            scale: 1.08,
                                            transition: { duration: 0.15, ease: "easeOut" }
                                        }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <i className={skill.icon}></i>
                                        <span className="skill-name">{skill.name}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default Skills;
