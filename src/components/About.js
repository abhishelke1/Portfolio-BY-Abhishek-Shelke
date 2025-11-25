import React from 'react';
import { motion } from 'framer-motion';

const About = ({ fadeInUp }) => {
    return (
        <motion.section
            id="about"
            className="about-section"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
        >
            <h2 className="section-title">About Me</h2>
            <div className="glass-container">
                <div className="about-content">
                    <div className="about-text">
                        <div className="about-text-content">
                            <p className="about-paragraph">
                                I'm a passionate developer with experience in both mobile and web application development.
                                I specialize in Kotlin for Android development and JavaScript technologies for web development.
                            </p>
                            <p className="about-paragraph">
                                My approach combines technical expertise with creative problem-solving to deliver
                                products that are both functional and user-friendly.
                            </p>
                            <div className="about-highlights">
                                <div className="highlight-item">
                                    <div className="highlight-icon">🚀</div>
                                    <div className="highlight-text">5+ Projects Completed</div>
                                </div>
                                <div className="highlight-item">
                                    <div className="highlight-icon">💻</div>
                                    <div className="highlight-text">Full Stack Experience</div>
                                </div>
                                <div className="highlight-item">
                                    <div className="highlight-icon">📱</div>
                                    <div className="highlight-text">Mobile & Web Development</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="about-image">
                        <div className="code-snippet">
                            <div className="code-line"><span className="code-keyword">const</span> <span className="code-variable">aboutMe</span> = <span className="code-brace">{'{'}</span></div>
                            <div className="code-line">  <span className="code-property">name</span>: <span className="code-string">'Abhishek Shelke'</span>,</div>
                            <div className="code-line">  <span className="code-property">role</span>: <span className="code-string">'App & Web Developer'</span>,</div>
                            <div className="code-line">  <span className="code-property">skills</span>: [</div>
                            <div className="code-line">    <span className="code-string">'Kotlin'</span>,</div>
                            <div className="code-line">    <span className="code-string">'JavaScript'</span>,</div>
                            <div className="code-line">    <span className="code-string">'React'</span>,</div>
                            <div className="code-line">    <span className="code-string">'Java'</span>,</div>
                            <div className="code-line">    <span className="code-string">'Python'</span></div>
                            <div className="code-line">  ],</div>
                            <div className="code-line">  <span className="code-property">passion</span>: <span className="code-string">'Creating innovative digital solutions'</span></div>
                            <div className="code-line"><span className="code-brace">{'}'}</span>;</div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default About;
