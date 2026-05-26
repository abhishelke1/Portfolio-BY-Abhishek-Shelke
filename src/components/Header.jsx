import DomainSwitcher from './DomainSwitcher'
import { FiGithub } from 'react-icons/fi'

export default function Header({ domain, setDomain, DOMAINS }) {
  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backdropFilter: 'blur(16px) saturate(180%)',
        WebkitBackdropFilter: 'blur(16px) saturate(180%)',
        background: 'color-mix(in srgb, var(--bg-primary) 85%, transparent)',
        borderBottom: '1px solid var(--border-color)',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '56px',
        }}
      >
        {/* Logo */}
        <a
          href="#"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.85rem',
            fontWeight: 700,
            color: 'var(--text-primary)',
            textDecoration: 'none',
            letterSpacing: '0.02em',
          }}
        >
          ABHISHEK<span style={{ color: 'var(--accent)' }}>.SH</span>
        </a>

        {/* Domain Switcher (center) */}
        <DomainSwitcher domain={domain} setDomain={setDomain} DOMAINS={DOMAINS} />

        {/* Right: GitHub */}
        <a
          href="https://github.com/abhishelke1"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--text-muted)', display: 'flex' }}
          aria-label="GitHub"
        >
          <FiGithub size={18} />
        </a>
      </div>
    </header>
  )
}
