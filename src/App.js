import React, { useEffect, useRef } from 'react';
import './App.css';
import profilePhoto from './profile.jpg'; // Make sure to add your profile photo in src folder
import cert1 from './cert1.jpg'; // Add your certification images
import cert2 from './cert2.jpg';
import cert3 from './cert3.jpg';
import cert4 from './cert4.jpg';
import cert5 from './cert5.jpg';
import cert6 from './cert6.jpg';
import cert7 from './cert7.jpg';
import cert8 from './cert8.jpg';
import cert9 from './cert9.jpg';
import agroImage from './agroeasy1.jpg';
import courierImage from './courier.png';
import portfolioImage from './portfolio.png';
import spaceShooterImage from './spaceshooter.png';

const App = () => {
  const headerRef = useRef(null);
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const certificationsRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    [heroRef.current, aboutRef.current, projectsRef.current, contactRef.current, certificationsRef.current].forEach(section => {
      if (section) {
        observer.observe(section);
      }
    });

    const headerObserver = new IntersectionObserver(
      ([entry]) => {
        headerRef.current.style.backgroundColor = entry.isIntersecting ? 'transparent' : 'rgba(17, 24, 39, 0.9)';
      },
      { threshold: 0.1 }
    );

    if (aboutRef.current) {
      headerObserver.observe(aboutRef.current);
    }

    return () => {
      observer.disconnect();
      headerObserver.disconnect();
    };
  }, []);

  return (
    <div className="app-container">
      <div className="gradient-background"></div>
      <div className="particles-background"></div>

      <header className="header" ref={headerRef}>
        <nav className="nav">
          <a href="#home" className="nav-link">Home</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#certifications" className="nav-link">Certifications</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>
      </header>

      <main className="main">
        <section id="home" className="hero-section" ref={heroRef}>
          <div className="hero-content">
            <h1 className="animated-gradient-text">Hello, I'm</h1>
            <h2 className="hero-title">Abhishek Shelke</h2>
            <h3 className="hero-subtitle">App & Web Developer</h3>
            <p className="hero-description">
              I build exceptional digital experiences that are fast, accessible, and visually appealing.
              Specializing in Kotlin, React, and full-stack development.
            </p>
            <a href="#projects" className="hero-button">View My Work</a>
          </div>
          <div className="hero-image">
            <img src={profilePhoto} alt="Abhishek Shelke" className="animated-avatar" />
          </div>
        </section>

        <section id="about" className="about-section" ref={aboutRef}>
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                I'm a passionate developer with experience in both mobile and web application development. 
                I specialize in Kotlin for Android development and JavaScript technologies for web development.
              </p>
              <p>
                My approach combines technical expertise with creative problem-solving to deliver 
                products that are both functional and user-friendly.
              </p>
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
        </section>

        <section id="skills" className="skills-section">
          <h2 className="section-title">My Skills</h2>
          <div className="skills-container">
            <div className="skill-item">
              <i className="devicon-kotlin-plain colored"></i>
              <span>Kotlin</span>
            </div>
            <div className="skill-item">
              <i className="devicon-javascript-plain colored"></i>
              <span>JavaScript</span>
            </div>
            <div className="skill-item">
              <i className="devicon-java-plain colored"></i>
              <span>Java</span>
            </div>
            <div className="skill-item">
              <i className="devicon-mysql-plain colored"></i>
              <span>MySQL</span>
            </div>
            <div className="skill-item">
              <i className="devicon-mongodb-plain colored"></i>
              <span>MongoDB</span>
            </div>
            <div className="skill-item">
              <i className="devicon-html5-plain colored"></i>
              <span>HTML5</span>
            </div>
            <div className="skill-item">
              <i className="devicon-css3-plain colored"></i>
              <span>CSS3</span>
            </div>
            <div className="skill-item">
              <i className="devicon-react-original colored"></i>
              <span>React</span>
            </div>
            <div className="skill-item">
              <i className="devicon-python-plain colored"></i>
              <span>Python</span>
            </div>
            <div className="skill-item">
              <i className="devicon-c-plain colored"></i>
              <span>C</span>
            </div>
          </div>
        </section>

        <section id="certifications" className="certifications-section" ref={certificationsRef}>
          <h2 className="section-title">Licenses & Certifications</h2>
          <div className="certifications-grid">
            <div className="certification-card">
              <img src={cert1} alt="Cybersecurity Awareness and Innovation" className="certification-image" />
              <div className="certification-content">
                <h3 className="certification-title">Cybersecurity Awareness and Innovation</h3>
              </div>
            </div>
            <div className="certification-card">
              <img src={cert2} alt="Employment Communication" className="certification-image" />
              <div className="certification-content">
                <h3 className="certification-title">Employment Communication (Coursera & NPTEL)</h3>
              </div>
            </div>
            <div className="certification-card">
              <img src={cert3} alt="MongoDB Certified Developer" className="certification-image" />
              <div className="certification-content">
                <h3 className="certification-title">MongoDB Certified Developer (C100DEV)</h3>
              </div>
            </div>
            <div className="certification-card">
              <img src={cert4} alt="Programming in Java Developer" className="certification-image" />
              <div className="certification-content">
                <h3 className="certification-title">Programming in Java by NPTEL</h3>
              </div>
            </div>
            <div className="certification-card">
                 <img src={cert5} alt="TCS iON Career Edge Certified" className="certification-image" />
              <div className="certification-content">
                <h3 className="certification-title">TCS iON Career Edge - Young Professional</h3>
              </div>
            </div>
            <div className="certification-card">
                 <img src={cert6} alt="Python by NPTEL" className="certification-image" />
              <div className="certification-content">
                <h3 className="certification-title">The joy of computing using Python by NPTEL</h3>
              </div>
            </div>
            <div className="certification-card">
                 <img src={cert7} alt="AWS Academy Certified" className="certification-image" />
              <div className="certification-content">
                <h3 className="certification-title">AWS Academy Cloud Architecting</h3>
              </div>
            </div>
            <div className="certification-card">
                 <img src={cert8} alt="AWS Academy Certified " className="certification-image" />
              <div className="certification-content">
                <h3 className="certification-title">AWS Academy Cloud Foundation</h3>
              </div>
            </div>
            <div className="certification-card">
                 <img src={cert9} alt="Python by Coursera Certified" className="certification-image" />
              <div className="certification-content">
                <h3 className="certification-title">Lambda Functions in Python by Coursera</h3>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="projects-section" ref={projectsRef}>
          <h2 className="section-title">My Projects</h2>
         <div className="projects-grid">

  {/* Courier Management System */}
  <div className="project-card">
    <img src={courierImage} alt="Courier Management System" className="project-image" />
    <div className="project-content">
      <h3 className="project-title">Courier Management System</h3>
      <p className="project-description">
        Web-based application developed with PHP, MySQL, HTML, CSS, and JavaScript to streamline courier operations.
        Features role-based access for Admin, Manager, and Delivery Personnel with automated order entry, tracking, and delivery assignment.
      </p>
      <div className="project-tech">PHP | MySQL | HTML | CSS | JavaScript</div>
      <div className="project-links">
        <a href="http://couriermanagement.infy.uk" target="_blank" rel="noopener noreferrer" className="project-link">Live Demo</a>
        <a href="https://github.com/abhishelke1/Courier-Management-System-PHP-based-.git" target="_blank" rel="noopener noreferrer" className="project-link">GitHub</a>
      </div>
    </div>
  </div>

  {/* AgroEasy App */}
  <div className="project-card">
    <img src={agroImage} alt="AgroEasy App" className="project-image" />
    <div className="project-content">
      <h3 className="project-title">AgroEasy – Empowering Agriculture</h3>
      <p className="project-description">
        Kotlin-based Android app revolutionizing agro-tech with dual-language support (English/Hindi),
        user authentication, real-time weather updates, AI-driven plant health analysis, online marketplace,
        and educational short videos for farmers.
      </p>
      <div className="project-tech">Kotlin | Android | Firebase | AI Integration</div>
      <div className="project-links">
        <a href="https://www.linkedin.com/posts/abhishek-shelke-7b2830287_agroeasy-appdevelopment-kotlin-activity-7280923821916762113-5KUa?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEW2R3YBwSr01DihVH4ILTwGJVxnhbzKzOA" target="_blank" rel="noopener noreferrer" className="project-link">Play Store</a>
        <a href="https://github.com/abhishelke1/AgroEasy.git" target="_blank" rel="noopener noreferrer" className="project-link">GitHub</a>
      </div>
    </div>
  </div>

  {/* Portfolio Website */}
  <div className="project-card">
    <img src={portfolioImage} alt="Portfolio Website" className="project-image" />
    <div className="project-content">
      <h3 className="project-title">Interactive Portfolio Website</h3>
      <p className="project-description">
        A modern, responsive portfolio website showcasing my skills, projects, and certifications.
        Features animated elements, smooth scrolling, and a clean design to effectively present my professional profile.
      </p>
      <div className="project-tech">React | CSS3 | JavaScript | Responsive Design</div>
      <div className="project-links">
        <a href="#" target="_blank" rel="noopener noreferrer" className="project-link">Live Demo</a>
        <a href="#" target="_blank" rel="noopener noreferrer" className="project-link">GitHub</a>
      </div>
    </div>
  </div>

  {/* Space Shooter Game */}
  <div className="project-card">
    <img src={spaceShooterImage} alt="Space Shooter Game" className="project-image" />
    <div className="project-content">
      <h3 className="project-title">Space Shooter Game</h3>
      <p className="project-description">
        2D space shooter game with advanced collision detection and QuadTree optimization.
        Developed in Java with spatial partitioning for efficient handling of dynamic interactions
        between projectiles and enemies.
      </p>
      <div className="project-tech">Java | Game Development | QuadTree | Collision Detection</div>
      <div className="project-links">
        <a href="#" target="_blank" rel="noopener noreferrer" className="project-link">Demo</a>
        <a href="#" target="_blank" rel="noopener noreferrer" className="project-link">GitHub</a>
      </div>
    </div>
  </div>

</div>
        </section>

        <section id="contact" className="contact-section" ref={contactRef}>
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <form className="contact-form">
              <div className="form-group">
                <input type="text" placeholder="Name" className="form-input" />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Email" className="form-input" />
              </div>
              <div className="form-group">
                <textarea placeholder="Message" rows="5" className="form-textarea"></textarea>
              </div>
              <button type="submit" className="submit-button">Send Message</button>
            </form>
            <div className="contact-info">
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <span>abhishek.shelke@example.com</span>
              </div>
              <div className="social-links">
                <a href="#" target="_blank" rel="noopener noreferrer" className="social-link"><i className="fab fa-github"></i></a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="social-link"><i className="fab fa-linkedin"></i></a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="social-link"><i className="fab fa-twitter"></i></a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p className="footer-text">© {new Date().getFullYear()} Abhishek Shelke. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;