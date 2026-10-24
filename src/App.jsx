import { motion, useScroll, useSpring } from "framer-motion";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";
import { useMotionPreference } from "./components/MotionProvider";

function Reveal({ children }) {
  const { paused } = useMotionPreference();
  return (
    <motion.div
      initial={paused ? false : { opacity: 0, y: 65 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: paused ? 0 : 0.85, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 25 });
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <motion.div
        className="scroll-progress"
        style={{ scaleX: progress }}
        aria-hidden="true"
      />
      <Header />
      <main id="main">
        <Hero />
        <div
          className="discipline-strip"
          aria-label="Thoughtful interfaces. Reliable systems. Useful intelligence."
        >
          <div className="marquee-track" aria-hidden="true">
            {[0, 1, 2, 3].map((i) => (
              <div className="marquee-set" key={i}>
                <span>THOUGHTFUL INTERFACES</span>
                <span className="asterisk">✳</span>
                <span>RELIABLE SYSTEMS</span>
                <span className="asterisk">✳</span>
                <span>USEFUL INTELLIGENCE</span>
                <span className="asterisk">✳</span>
              </div>
            ))}
          </div>
        </div>
        <Projects />
        <Reveal>
          <About />
        </Reveal>
        <Reveal>
          <Skills />
        </Reveal>
        <Reveal>
          <Contact />
        </Reveal>
      </main>
      <footer className="footer container">
        <a className="wordmark" href="#home">
          abhishek<span>®</span>
        </a>
        <p>© {new Date().getFullYear()} Abhishek Shelke</p>
        <a href="#home">
          Back to top <span aria-hidden="true">↑</span>
        </a>
      </footer>
    </>
  );
}
