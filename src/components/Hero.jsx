import { useState, useEffect, useRef } from 'react'
import { FiArrowDown, FiDownload } from 'react-icons/fi'

export default function Hero({ data, domain }) {
  const [revealedChars, setRevealedChars] = useState(0)
  const [hasRevealed, setHasRevealed] = useState(false)
  const tagline = data.tagline
  const prevDomainRef = useRef(domain)

  // Char-by-char reveal on first load only
  useEffect(() => {
    if (hasRevealed) {
      setRevealedChars(tagline.length)
      return
    }

    setRevealedChars(0)
    let i = 0
    const interval = setInterval(() => {
      i++
      setRevealedChars(i)
      if (i >= tagline.length) {
        clearInterval(interval)
        setHasRevealed(true)
      }
    }, 35)

    return () => clearInterval(interval)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  // On domain switch after initial reveal, show full tagline immediately
  useEffect(() => {
    if (prevDomainRef.current !== domain && hasRevealed) {
      setRevealedChars(tagline.length)
    }
    prevDomainRef.current = domain
  }, [domain, tagline, hasRevealed])

  // Live stat counter for data domain
  const [liveStat, setLiveStat] = useState(1247)
  useEffect(() => {
    if (domain !== 'data') return
    const interval = setInterval(() => {
      setLiveStat((prev) => prev + Math.floor(Math.random() * 3) + 1)
    }, 2000)
    return () => clearInterval(interval)
  }, [domain])

  return (
    <section
      className="section container"
      id="hero"
      style={{
        minHeight: '70vh',
        maxHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '6rem',
        paddingBottom: '4rem',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '3rem',
          width: '100%',
          alignItems: 'center',
        }}
        className="hero-grid"
      >
        {/* Left column — Content */}
        <div style={{ maxWidth: '640px' }}>
          {/* Domain badge */}
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.68rem',
              color: 'var(--accent)',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              marginBottom: '1.25rem',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <span
              style={{
                width: '8px',
                height: '8px',
                background: 'var(--accent)',
                display: 'inline-block',
              }}
            />
            {data.label}
          </div>

          {/* Tagline */}
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: '-0.03em',
              color: 'var(--text-primary)',
              marginBottom: '1.5rem',
            }}
          >
            {tagline.slice(0, revealedChars)}
            {revealedChars < tagline.length && <span className="typing-cursor" />}
          </h1>

          {/* Bio */}
          <p
            style={{
              fontSize: '1.05rem',
              color: 'var(--text-muted)',
              lineHeight: 1.7,
              maxWidth: '520px',
              marginBottom: '2rem',
            }}
          >
            {data.bio}
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <a href="#projects" className="btn-primary">
              <FiArrowDown size={14} />
              View Projects
            </a>
            <a href="#" className="btn-secondary">
              <FiDownload size={14} />
              Download Resume
            </a>
          </div>

          {/* Live stat for data mode */}
          {domain === 'data' && (
            <div
              style={{
                marginTop: '2rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                color: 'var(--text-muted)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  background: 'var(--accent)',
                  borderRadius: '50%',
                  animation: 'blink 2s infinite',
                }}
              />
              {liveStat.toLocaleString()} rows processed today
            </div>
          )}
        </div>

        {/* Right column — Terminal */}
        <div className="hero-terminal" style={{ maxWidth: '420px' }}>
          <div className="terminal">
            <div className="terminal-bar">
              <div className="terminal-dot" />
              <div className="terminal-dot" />
              <div className="terminal-dot" />
              <span
                style={{
                  marginLeft: 'auto',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.6rem',
                  color: 'var(--text-muted)',
                  opacity: 0.5,
                }}
              >
                {domain === 'backend'
                  ? 'bash'
                  : domain === 'android'
                  ? 'gradle'
                  : 'python3'}
              </span>
            </div>
            <div className="terminal-body">
              {data.terminal.map((line, i) => (
                <div key={i} className={line.type}>
                  {line.text}
                </div>
              ))}
              <span className="typing-cursor" />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .hero-grid {
            grid-template-columns: 1.4fr 1fr !important;
          }
        }

        @media (max-width: 899px) {
          .hero-terminal {
            max-width: 100% !important;
          }
        }
      `}</style>
    </section>
  )
}
