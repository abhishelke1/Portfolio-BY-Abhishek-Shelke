import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './App.css';
import 'devicon/devicon.min.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import Experience from './components/Experience';
import GithubStats from './components/GithubStats';
import CanvasBackground from './components/CanvasBackground';

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('home');

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.className = !darkMode ? 'dark-theme' : 'light-theme';
  };

  const getRandomGradient = () => {
    const colors = [
      'rgba(59, 130, 246, 0.7)',
      'rgba(139, 92, 246, 0.7)',
      'rgba(236, 72, 153, 0.7)',
      'rgba(16, 185, 129, 0.7)',
      'rgba(245, 158, 11, 0.7)',
      'rgba(239, 68, 68, 0.7)'
    ];
    const angle = Math.floor(Math.random() * 360);
    const color1 = colors[Math.floor(Math.random() * colors.length)];
    const color2 = colors[Math.floor(Math.random() * colors.length)];

    return `linear-gradient(${angle}deg, ${color1}, ${color2})`;
  };

  useEffect(() => {
    // Set initial theme
    document.body.className = darkMode ? 'dark-theme' : 'light-theme';

    // Scroll spy logic
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'skills', 'certifications', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [darkMode]);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const scaleIn = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } }
  };

  const popIn = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const liveStagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  return (
    <div className={`app-container ${darkMode ? 'dark' : 'light'}`}>
      <div className="gradient-background"></div>
      <CanvasBackground darkMode={darkMode} />

      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />

      <CustomCursor />
      <ScrollProgress activeSection={activeSection} setActiveSection={setActiveSection} />

      <main className="main">
        <Hero
          fadeInUp={fadeInUp}
          staggerContainer={staggerContainer}
          scaleIn={scaleIn}
        />
        <About fadeInUp={popIn} />
        <Experience
          staggerContainer={liveStagger}
          fadeInUp={popIn}
          darkMode={darkMode}
        />
        <Skills
          staggerContainer={liveStagger}
          fadeInUp={popIn}
          darkMode={darkMode}
        />
        <Certifications
          staggerContainer={liveStagger}
          fadeInUp={popIn}
        />
        <Projects
          staggerContainer={liveStagger}
          fadeInUp={popIn}
        />
        <GithubStats fadeInUp={fadeInUp} darkMode={darkMode} />
        <Contact fadeInUp={popIn} />
      </main>

      <Footer />
    </div >
  );
};

export default App;