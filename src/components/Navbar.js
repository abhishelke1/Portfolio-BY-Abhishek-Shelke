import React, { useState, useEffect, useRef } from 'react';
import { FaSun, FaMoon, FaFileDownload, FaBars, FaTimes } from 'react-icons/fa';
import resumePDF from '../assets/120_Abhishek shelke.pdf';

const Navbar = ({ activeSection, setActiveSection, darkMode, toggleDarkMode }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const headerRef = useRef(null);

    const handleNavClick = (section) => {
        const targetSection = section === 'education' ? 'experience' : section;
        setActiveSection(targetSection);
        setIsMenuOpen(false);

        const element = document.getElementById(targetSection);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`header ${isMenuOpen ? 'menu-open' : ''} ${scrolled ? 'scrolled' : ''}`} ref={headerRef}>
            <div className="header-content">
                <div className="logo">
                    <span className="logo-text">AS</span>
                </div>

                <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
                    {isMenuOpen ? <FaTimes /> : <FaBars />}
                </button>

                <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
                    {['home', 'about', 'skills', 'education', 'certifications', 'projects', 'contact'].map((section) => (
                        <a
                            key={section}
                            href={`#${section}`}
                            className={`nav-link ${activeSection === section ? 'active' : ''}`}
                            onClick={() => handleNavClick(section)}
                        >
                            {section.charAt(0).toUpperCase() + section.slice(1)}
                        </a>
                    ))}

                    <div className="header-right">
                        <a
                            href={resumePDF}
                            download="Abhishek_Shelke_Resume.pdf"
                            className="resume-button"
                        >
                            <FaFileDownload /> Resume
                        </a>
                        <button className="theme-toggle" onClick={toggleDarkMode}>
                            {darkMode ? <FaSun /> : <FaMoon />}
                        </button>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
