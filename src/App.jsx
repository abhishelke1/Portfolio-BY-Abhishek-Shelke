import { motion, AnimatePresence } from 'framer-motion'
import { useDomain } from './hooks/useDomain'
import { backend } from './data/backend'
import { android } from './data/android'
import { analytics } from './data/analytics'
import Header from './components/Header'
import Hero from './components/Hero'
import MetricsBar from './components/MetricsBar'
import Projects from './components/Projects'
import Skills from './components/Skills'
import About from './components/About'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import CustomCursor from './components/CustomCursor'

const domainData = {
  backend,
  android,
  data: analytics,
}

const pageVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
}

export default function App() {
  const { domain, setDomain, isTransitioning, DOMAINS } = useDomain()
  const data = domainData[domain]

  return (
    <>
      <CustomCursor />
      <div className={`glitch-overlay ${isTransitioning ? 'active' : ''}`} />
      <div className="grain" />

      <Header domain={domain} setDomain={setDomain} DOMAINS={DOMAINS} />

      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={domain}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.28, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <Hero data={data} domain={domain} />
            <hr className="hr-section" />
            <MetricsBar metrics={data.metrics} domain={domain} />
            <hr className="hr-section" />
            <Projects projects={data.projects} domain={domain} />
            <hr className="hr-section" />
            <Skills skills={data.skills} domain={domain} />
            <hr className="hr-section" />
            <About domain={domain} />
            <hr className="hr-section" />
            <Achievements />
            <hr className="hr-section" />
            <Contact />
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="footer">
        <div className="container">
          <p>© 2026 Abhishek Shelke — Built without Figma templates.</p>
        </div>
      </footer>
    </>
  )
}
