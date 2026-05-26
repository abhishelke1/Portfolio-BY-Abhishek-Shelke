import { useState, useEffect, useCallback } from 'react'

const DOMAINS = ['backend', 'android', 'data']

const DOMAIN_COLORS = {
  backend: {
    '--bg-primary': '#0a0a0a',
    '--text-primary': '#e8e8e8',
    '--text-muted': '#888888',
    '--accent': '#00ff9d',
    '--accent-dim': 'rgba(0, 255, 157, 0.1)',
    '--accent-glow': 'rgba(0, 255, 157, 0.3)',
    '--surface': '#141414',
    '--border-color': '#222222',
  },
  android: {
    '--bg-primary': '#0d1117',
    '--text-primary': '#f0f6ff',
    '--text-muted': '#8b949e',
    '--accent': '#4f9cf9',
    '--accent-dim': 'rgba(79, 156, 249, 0.1)',
    '--accent-glow': 'rgba(79, 156, 249, 0.3)',
    '--surface': '#161b22',
    '--border-color': '#21262d',
  },
  data: {
    '--bg-primary': '#0b0c10',
    '--text-primary': '#c5c6c7',
    '--text-muted': '#7a7b7d',
    '--accent': '#f4a261',
    '--accent-dim': 'rgba(244, 162, 97, 0.1)',
    '--accent-glow': 'rgba(244, 162, 97, 0.3)',
    '--surface': '#131419',
    '--border-color': '#1f2029',
  },
}

function getInitialDomain() {
  const hash = window.location.hash.replace('#', '')
  if (DOMAINS.includes(hash)) return hash
  return 'backend'
}

export function useDomain() {
  const [domain, setDomainState] = useState(getInitialDomain)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const applyColors = useCallback((d) => {
    const root = document.documentElement
    const colors = DOMAIN_COLORS[d]
    if (!colors) return
    Object.entries(colors).forEach(([key, value]) => {
      root.style.setProperty(key, value)
    })
    root.setAttribute('data-domain', d)
  }, [])

  const setDomain = useCallback((newDomain) => {
    if (!DOMAINS.includes(newDomain) || newDomain === domain) return
    setIsTransitioning(true)
    // Brief delay for glitch overlay to start
    setTimeout(() => {
      setDomainState(newDomain)
      applyColors(newDomain)
      window.history.pushState(null, '', `#${newDomain}`)
      setTimeout(() => setIsTransitioning(false), 350)
    }, 50)
  }, [domain, applyColors])

  // Apply initial colors on mount
  useEffect(() => {
    applyColors(domain)
    window.history.replaceState(null, '', `#${domain}`)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  // Listen for hash changes (back/forward navigation)
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '')
      if (DOMAINS.includes(hash) && hash !== domain) {
        setDomainState(hash)
        applyColors(hash)
      }
    }
    window.addEventListener('hashchange', handleHash)
    return () => window.removeEventListener('hashchange', handleHash)
  }, [domain, applyColors])

  return { domain, setDomain, isTransitioning, DOMAINS }
}
