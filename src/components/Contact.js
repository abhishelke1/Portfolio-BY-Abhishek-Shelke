import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin, FaInstagram, FaWhatsapp, FaFacebook, FaSnapchat, FaFileDownload } from 'react-icons/fa';
import resumePDF from '../assets/120_Abhishek shelke.pdf';

const Contact = ({ fadeInUp }) => {
    return (
        <motion.section
            id="contact"
            className="contact-section"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
        >
            <h2 className="section-title">Get In Touch</h2>
            <div className="glass-container">
                <div className="contact-content">
                    <form className="contact-form">
                        <div className="form-group">
                            <input type="text" placeholder="Name" className="form-input" required />
                        </div>
                        <div className="form-group">
                            <input type="email" placeholder="Email" className="form-input" required />
                        </div>
                        <div className="form-group">
                            <textarea placeholder="Message" rows="5" className="form-textarea" required></textarea>
                        </div>
                        <motion.button
                            type="submit"
                            className="submit-button"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Send Message
                        </motion.button>
                    </form>
                    <div className="contact-info">
                        <div className="contact-item">
                            <FaEnvelope className="contact-icon" />
                            <span>abhishelke42161@gmail.com</span>
                        </div>
                        <div className="social-links">
                            <a href="https://github.com/abhishelke1" target="_blank" rel="noopener noreferrer" className="social-link">
                                <FaGithub />
                            </a>
                            <a href="https://www.linkedin.com/in/abhishek-shelke-7b2830287/" target="_blank" rel="noopener noreferrer" className="social-link">
                                <FaLinkedin />
                            </a>
                            <a href="https://www.instagram.com/abhishelke__?igsh=ejdjbmxyMzlvNXho" target="_blank" rel="noopener noreferrer" className="social-link">
                                <FaInstagram />
                            </a>
                            <a href="http://wa.me/qr/F5NUEVHHDCIEN1" target="_blank" rel="noopener noreferrer" className="social-link">
                                <FaWhatsapp />
                            </a>
                            <a href="https://www.facebook.com/Abhi.shelke09?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="social-link">
                                <FaFacebook />
                            </a>
                            <a href="https://www.snapchat.com/add/abhishelke03?share_id=dvSJSWZVO8Q&locale=en-GB" target="_blank" rel="noopener noreferrer" className="social-link">
                                <FaSnapchat />
                            </a>
                        </div>
                        <a
                            href={resumePDF}
                            download="Abhishek_Shelke_Resume.pdf"
                            className="download-resume"
                        >
                            <FaFileDownload /> Download Resume
                        </a>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Contact;
