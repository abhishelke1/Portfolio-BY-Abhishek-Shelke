import { FiGithub, FiLinkedin } from 'react-icons/fi'

export default function Contact() {
  return (
    <section className="section container" id="contact">
      <div className="section-label">// Contact</div>

      <div style={{ maxWidth: '560px' }}>
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 4vw, 3.2rem)',
            fontWeight: 800,
            color: 'var(--text-primary)',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            marginBottom: '1.5rem',
          }}
        >
          Let's build
          <br />
          something<span style={{ color: 'var(--accent)' }}>.</span>
        </h2>

        <p
          style={{
            fontSize: '0.95rem',
            color: 'var(--text-muted)',
            lineHeight: 1.7,
            marginBottom: '2rem',
          }}
        >
          Open to collaborations, freelance work, and full-time opportunities.
        </p>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem',
          }}
        >

          <a
            href="https://github.com/abhishelke1"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.85rem',
              color: 'var(--text-muted)',
              textDecoration: 'none',
            }}
          >
            <FiGithub size={16} />
            github.com/abhishelke1
          </a>

          <a
            href="https://www.linkedin.com/in/abhishek-shelke-it/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.85rem',
              color: 'var(--text-muted)',
              textDecoration: 'none',
            }}
          >
            <FiLinkedin size={16} />
            linkedin.com/in/abhishek-shelke-it
          </a>
        </div>
      </div>
    </section>
  )
}
