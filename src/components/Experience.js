import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

const Experience = ({ staggerContainer, fadeInUp, darkMode }) => {
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

    return (
        <motion.section
            id="experience"
            className="experience-section"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
        >
            <motion.h2 className="section-title" variants={fadeInUp}>Experience & Education</motion.h2>
            <div className="glass-container">
                <div className="timeline">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                            variants={fadeInUp}
                        >
                            <div className="timeline-content">
                                <div className="timeline-icon" style={{ background: darkMode ? '#3b82f6' : '#2563eb' }}>
                                    {exp.icon}
                                </div>
                                <div className="timeline-body">
                                    <span className="timeline-date">{exp.period}</span>
                                    <h3 className="timeline-title">{exp.title}</h3>
                                    <h4 className="timeline-company">{exp.company}</h4>
                                    <p className="timeline-description">{exp.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default Experience;
