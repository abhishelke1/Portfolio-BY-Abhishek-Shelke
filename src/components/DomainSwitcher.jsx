import { useState, useRef, useEffect } from 'react'

const DOMAIN_LABELS = {
  backend: 'Backend Dev',
  android: 'Android Dev',
  data: 'Data Analyst',
}

export default function DomainSwitcher({ domain, setDomain, DOMAINS }) {
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const dropdownRef = useRef(null)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Close dropdown on outside click
  useEffect(() => {
    const handleClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsMobileOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  // Desktop: pill tabs
  if (!isMobile) {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '2px',
          padding: '3px',
          background: 'var(--surface)',
          border: '1px solid var(--border-color)',
          borderRadius: '2px',
        }}
      >
        {DOMAINS.map((d) => (
          <button
            key={d}
            onClick={() => setDomain(d)}
            data-hover
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.68rem',
              padding: '6px 14px',
              border: 'none',
              background: domain === d ? 'var(--accent)' : 'transparent',
              color: domain === d ? 'var(--bg-primary)' : 'var(--text-muted)',
              fontWeight: domain === d ? 700 : 400,
              letterSpacing: '0.03em',
              cursor: 'none',
              transition: 'background 0.2s, color 0.2s',
            }}
          >
            {DOMAIN_LABELS[d]}
          </button>
        ))}
      </div>
    )
  }

  // Mobile: dropdown
  return (
    <div style={{ position: 'relative', display: 'flex' }} ref={dropdownRef}>
      <button
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        data-hover
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.72rem',
          padding: '6px 14px',
          background: 'var(--surface)',
          border: '1px solid var(--border-color)',
          color: 'var(--accent)',
          cursor: 'none',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
        }}
      >
        {DOMAIN_LABELS[domain]}
        <span style={{ fontSize: '0.5rem', opacity: 0.6 }}>▼</span>
      </button>

      {isMobileOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: '50%',
            transform: 'translateX(-50%)',
            marginTop: '4px',
            background: 'var(--surface)',
            border: '1px solid var(--border-color)',
            minWidth: '160px',
            zIndex: 60,
          }}
        >
          {DOMAINS.map((d) => (
            <button
              key={d}
              onClick={() => {
                setDomain(d)
                setIsMobileOpen(false)
              }}
              data-hover
              style={{
                display: 'block',
                width: '100%',
                textAlign: 'left',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                padding: '10px 16px',
                border: 'none',
                background: domain === d ? 'var(--accent-dim)' : 'transparent',
                color: domain === d ? 'var(--accent)' : 'var(--text-muted)',
                cursor: 'none',
                borderBottom: '1px solid var(--border-color)',
                transition: 'background 0.15s',
              }}
            >
              {DOMAIN_LABELS[d]}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
