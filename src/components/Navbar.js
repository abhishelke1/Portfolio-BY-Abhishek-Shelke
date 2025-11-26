import React, { useState, useEffect, useRef } from 'react';
import { FaSun, FaMoon, FaFileDownload, FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';
import resumePDF from '../assets/120_Abhishek shelke.pdf';

const Navbar = ({ activeSection, setActiveSection, darkMode, toggleDarkMode }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [blobStyle, setBlobStyle] = useState({ left: 0, width: 0 });
    const [supportsFilter, setSupportsFilter] = useState(true);
    const headerRef = useRef(null);
    const navLinksRef = useRef({});

    const sections = ['home', 'about', 'education', 'skills', 'certifications', 'projects', 'contact'];

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

    // Check for SVG filter support
    useEffect(() => {
        if (typeof window !== 'undefined' && window.CSS && window.CSS.supports) {
            setSupportsFilter(window.CSS.supports('filter', 'url(#gooey-blob)'));
        }
    }, []);

    // Update blob position based on active section
    useEffect(() => {
        const updateBlobPosition = () => {
            const activeLink = navLinksRef.current[activeSection];
            if (activeLink && window.innerWidth > 768) {
                const { offsetLeft, offsetWidth } = activeLink;
                setBlobStyle({
                    left: offsetLeft,
                    width: offsetWidth
                });
            }
        };

        updateBlobPosition();
        window.addEventListener('resize', updateBlobPosition);
        return () => window.removeEventListener('resize', updateBlobPosition);
    }, [activeSection]);

    return (
        <header className={`header ${isMenuOpen ? 'menu-open' : ''} ${scrolled ? 'scrolled' : ''}`} ref={headerRef}>
            {/* SVG Gooey Filter */}
            <svg style={{ position: 'absolute', width: 0, height: 0 }} aria-hidden="true">
                <defs>
                    <filter id="gooey-blob">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                        <feColorMatrix
                            in="blur"
                            mode="matrix"
                            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                            result="goo"
                        />
                        <feComposite in="SourceGraphic" in2="goo" operator="atop" />
                    </filter>
                </defs>
            </svg>

            <div className="header-content">
                <div className="logo">
                    <span className="logo-text">AS</span>
                </div>

                <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
                    {isMenuOpen ? <FaTimes /> : <FaBars />}
                </button>

                <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
                    {/* Gooey blob indicator */}
                    {supportsFilter && !isMenuOpen && (
                        <motion.div
                            className="nav-blob"
                            initial={false}
                            animate={{
                                left: blobStyle.left,
                                width: blobStyle.width
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 30
                            }}
                            style={{
                                filter: 'url(#gooey-blob)'
                            }}
                        />
                    )}

                    {sections.map((section) => (
                        <a
                            key={section}
                            ref={(el) => (navLinksRef.current[section] = el)}
                            href={`#${section}`}
                            className={`nav-link ${activeSection === section ? 'active' : ''}`}
                            onClick={(e) => {
                                e.preventDefault();
                                handleNavClick(section);
                            }}
                            onTouchStart={() => {
                                // Touch support for mobile
                                handleNavClick(section);
                            }}
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
