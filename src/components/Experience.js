import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

const Experience = ({ staggerContainer, fadeInUp, darkMode }) => {
    const timelineRef = useRef(null);

    // Track scroll progress for timeline line animation
    const { scrollYProgress } = useScroll({
        target: timelineRef,
        offset: ["start center", "end center"]
    });

    // Apply spring physics for smooth animation
    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const experiences = [
        {
            type: 'work',
            title: 'Freelance Developer',
            company: 'Self-Employed',
            period: '2023 - Present',
            description: 'Developing custom web and mobile applications for clients. Specializing in React, Node.js, and Kotlin.',
            icon: <FaBriefcase />
        },
        {
            type: 'education',
            title: 'B.Tech Information Technology',
            company: 'Sanjivani College of Engineering Kopargaon',
            period: '2023 - 2027',
            description: 'Currently pursuing B.Tech in IT with a CGPA of 8.1+.',
            icon: <FaGraduationCap />
        },
        {
            type: 'education',
            title: 'HSC',
            company: 'S.S.S.V Sec & High Secondary School, Baghulgaon',
            period: '2022 - 2023',
            description: 'Completed Higher Secondary Certificate with 81.50%.',
            icon: <FaGraduationCap />
        },
        {
            type: 'education',
            title: 'SSC',
            company: 'Raja Shiwaji Madhyamik Vidhyalay Thangaon',
            period: '2020 - 2021',
            description: 'Completed Secondary School Certificate with 89.15%.',
            icon: <FaGraduationCap />
        }
    ];

    // Animation variants for timeline items
    const timelineItemVariants = {
        hidden: (isLeft) => ({
            opacity: 0,
            x: isLeft ? -50 : 50,
            scale: 0.95
        }),
        visible: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        }
    };

    const iconVariants = {
        hidden: { scale: 0, rotate: -180 },
        visible: {
            scale: 1,
            rotate: 0,
            transition: {
                type: "spring",
                stiffness: 200,
                damping: 15,
                delay: 0.1
            }
        }
    };

    return (
        <motion.section
            id="experience"
            className="experience-section"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
        >
            <motion.h2 className="section-title" variants={fadeInUp}>
                Experience & Education
            </motion.h2>
            <div className="glass-container">
                <div className="timeline" ref={timelineRef}>
                    {/* Animated timeline connector line */}
                    <motion.div
                        style={{
                            position: 'absolute',
                            width: '4px',
                            background: 'linear-gradient(to bottom, var(--primary), var(--secondary))',
                            top: 0,
                            bottom: 0,
                            left: '50%',
                            marginLeft: '-2px',
                            borderRadius: '2px',
                            transformOrigin: 'top',
                            scaleY: scaleY
                        }}
                    />

                    {experiences.map((exp, index) => {
                        const isLeft = index % 2 === 0;

                        return (
                            <motion.div
                                key={index}
                                className={`timeline-item ${isLeft ? 'left' : 'right'}`}
                                custom={isLeft}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                                variants={timelineItemVariants}
                            >
                                <div className="timeline-content">
                                    <motion.div
                                        className="timeline-icon"
                                        style={{ background: darkMode ? '#3b82f6' : '#2563eb' }}
                                        variants={iconVariants}
                                    >
                                        {exp.icon}
                                    </motion.div>
                                    <motion.div
                                        className="timeline-body"
                                        whileHover={{
                                            y: -5,
                                            transition: { duration: 0.2, ease: "easeOut" }
                                        }}
                                    >
                                        <span className="timeline-date">{exp.period}</span>
                                        <h3 className="timeline-title">{exp.title}</h3>
                                        <h4 className="timeline-company">{exp.company}</h4>
                                        <p className="timeline-description">{exp.description}</p>
                                    </motion.div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </motion.section>
    );
};

export default Experience;
