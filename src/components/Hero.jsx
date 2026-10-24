import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiArrowDown,
  FiArrowUpRight,
  FiBox,
  FiCommand,
  FiHexagon,
  FiMove,
} from "react-icons/fi";
import Sculpture from "./Sculpture";
import { useMotionPreference } from "./MotionProvider";

const modes = [
  {
    label: "Create",
    icon: FiCommand,
    title: "Ideas, taking shape.",
    subtitle: "A little curiosity. A different perspective.",
  },
  {
    label: "Connect",
    icon: FiHexagon,
    title: "Everything connects.",
    subtitle: "Interfaces. Systems. Intelligence.",
  },
  {
    label: "Build",
    icon: FiBox,
    title: "One piece at a time.",
    subtitle: "From the first idea to the last detail.",
  },
];

export default function Hero() {
  const [mode, setMode] = useState(0);
  const { paused } = useMotionPreference();
  return (
    <div className="hero-shell">
      <div className="hero-grid-background" aria-hidden="true" />
      <section
        className="hero container"
        id="home"
        aria-labelledby="hero-title"
      >
        <div className="hero-intro">
          <span className="eyebrow">
            <span className="status-dot" /> OPEN TO OPPORTUNITIES
          </span>
          <span className="hero-location">
            INDEPENDENT MIND. CONNECTED THINKING.
          </span>
        </div>
        <div className="hero-grid">
          <div className="hero-copy">
            <motion.p
              className="hello"
              initial={paused ? false : { opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Hey, I’m Abhishek Shelke <span aria-hidden="true">↗</span>
            </motion.p>
            <h1 id="hero-title" aria-label="Ideas into impact.">
              <span className="title-mask">
                <motion.span
                  initial={paused ? false : { y: "110%", rotate: 4 }}
                  animate={{ y: 0, rotate: 0 }}
                  transition={{
                    duration: 1,
                    delay: 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  Ideas into
                </motion.span>
              </span>
              <span className="title-mask">
                <motion.span
                  className="serif impact-word"
                  initial={paused ? false : { y: "110%", rotate: 4 }}
                  animate={{ y: 0, rotate: 0 }}
                  transition={{
                    duration: 1.1,
                    delay: 0.25,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  impact<span className="impact-dot">.</span>
                </motion.span>
              </span>
            </h1>
            <motion.div
              initial={paused ? false : { opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <p className="hero-description">
                A developer with a curious mind and a hands-on approach. I build
                the interfaces, systems, and intelligence that bring good ideas
                to life.
              </p>
              <div className="hero-actions">
                <a className="button button-dark" href="#projects">
                  Step into my work <FiArrowDown />
                </a>
                <a
                  className="text-link"
                  href="https://github.com/abhishelke1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Explore GitHub <FiArrowUpRight />
                </a>
              </div>
              <div className="hero-specialties">
                <span>BACKEND</span>
                <i />
                <span>MOBILE</span>
                <i />
                <span>APPLIED AI</span>
              </div>
            </motion.div>
          </div>
          <div className="sculpture-stage">
            <div className="sculpture-halo" aria-hidden="true" />
            <div className="stage-coordinate coord-top" aria-hidden="true">
              AS / EXPERIMENT 001 <span>↗</span>
            </div>
            <Sculpture mode={mode} paused={paused} />
            <div className="floating-label label-code" aria-hidden="true">
              <span>⌘</span>
              <div>
                Built with curiosity<small>CRAFT MEETS CODE</small>
              </div>
            </div>
            <div className="floating-label label-status" aria-hidden="true">
              <i className="status-dot" /> ALWAYS IN MOTION
            </div>
            <div className="sculpture-description" aria-live="polite">
              <span className="serif">{modes[mode].title}</span>
              <small>{modes[mode].subtitle}</small>
            </div>
            <div
              className="sculpture-controls"
              role="group"
              aria-label="Change 3D sculpture"
            >
              {modes.map((item, i) => (
                <button
                  key={item.label}
                  onClick={() => setMode(i)}
                  aria-pressed={mode === i}
                >
                  <item.icon />
                  {item.label}
                </button>
              ))}
            </div>
            <span className="drag-hint">
              <FiMove /> DRAG TO EXPLORE IN 3D
            </span>
          </div>
        </div>
        <div className="hero-bottom">
          <span>BASED IN INDIA · BUILDING FOR EVERYWHERE</span>
          <a href="#projects">
            <span className="scroll-indicator" aria-hidden="true" /> SCROLL TO
            DISCOVER <FiArrowDown />
          </a>
          <span className="edition">PORTFOLIO / 2026</span>
        </div>
      </section>
    </div>
  );
}
