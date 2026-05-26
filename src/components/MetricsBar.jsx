import { useEffect, useRef, useState } from 'react'

function Counter({ value, suffix }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    hasAnimated.current = false
    setCount(0)
  }, [value])

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          animateCount()
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [value]) // eslint-disable-line react-hooks/exhaustive-deps

  const animateCount = () => {
    const duration = 1200
    const isFloat = value % 1 !== 0
    const start = performance.now()

    const tick = (now) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = eased * value

      setCount(isFloat ? parseFloat(current.toFixed(1)) : Math.floor(current))

      if (progress < 1) {
        requestAnimationFrame(tick)
      }
    }

    requestAnimationFrame(tick)
  }

  return (
    <div ref={ref} style={{ textAlign: 'center', padding: '0 1rem' }}>
      <div className="stat-number">
        {count}
        {suffix && <span style={{ fontSize: '0.6em' }}>{suffix}</span>}
      </div>
      <div className="stat-label">{/* label is rendered by parent */}</div>
    </div>
  )
}

export default function MetricsBar({ metrics, domain }) {
  return (
    <section
      className="container"
      style={{
        padding: '3rem 2rem',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${metrics.length}, 1fr)`,
          gap: '0.5rem',
          borderLeft: '2px solid var(--accent)',
          paddingLeft: '1.5rem',
        }}
        className="metrics-grid"
      >
        {metrics.map((m, i) => (
          <div key={`${domain}-${i}`} style={{ textAlign: 'left' }}>
            <Counter value={m.value} suffix={m.suffix} />
            <div className="stat-label" style={{ textAlign: 'center' }}>
              {m.label}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 640px) {
          .metrics-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1.5rem !important;
          }
        }
      `}</style>
    </section>
  )
}
