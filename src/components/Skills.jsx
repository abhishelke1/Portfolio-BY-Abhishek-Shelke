import { useEffect, useRef, useState } from 'react'

function BackendSkills({ skills }) {
  // Group skills by category
  const grouped = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = []
    acc[skill.category].push(skill.name)
    return acc
  }, {})

  return (
    <div className="code-block">
      <span className="code-comment">{'// skills.json'}</span>
      {'\n'}
      <span className="code-bracket">{'{'}</span>
      {'\n'}
      {Object.entries(grouped).map(([category, items], ci, arr) => (
        <span key={category}>
          {'  '}
          <span className="code-key">{`"${category}"`}</span>
          <span className="code-bracket">{': ['}</span>
          {items.map((item, i) => (
            <span key={item}>
              <span className="code-string">{`"${item}"`}</span>
              {i < items.length - 1 && <span className="code-bracket">{', '}</span>}
            </span>
          ))}
          <span className="code-bracket">{']'}</span>
          {ci < arr.length - 1 && ','}
          {'\n'}
        </span>
      ))}
      <span className="code-bracket">{'}'}</span>
    </div>
  )
}

function AndroidSkills({ skills }) {
  const grouped = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = []
    acc[skill.category].push(skill.name)
    return acc
  }, {})

  const categoryIcons = {
    language: '📦',
    framework: '🧩',
    backend: '☁️',
    ml: '🧠',
    architecture: '📐',
    ui: '🎨',
  }

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
        gap: '0.75rem',
      }}
    >
      {Object.entries(grouped).map(([category, items]) => (
        <div key={category} className="android-panel">
          <div className="android-panel-header">
            <span className="icon">▸</span>
            {category}
          </div>
          {items.map((item) => (
            <div key={item} className="android-panel-item">
              {item}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

function DataSkills({ skills }) {
  const [animate, setAnimate] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true)
        }
      },
      { threshold: 0.2 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  // Re-trigger animation on skills change
  useEffect(() => {
    setAnimate(false)
    const timer = setTimeout(() => setAnimate(true), 100)
    return () => clearTimeout(timer)
  }, [skills])

  return (
    <div ref={ref} style={{ maxWidth: '600px' }}>
      {skills.map((skill) => (
        <div key={skill.name} className="bar-row">
          <span className="bar-label">{skill.name}</span>
          <div className="bar-track">
            <div
              className="bar-fill"
              data-value={`${skill.level}%`}
              style={{
                width: animate ? `${skill.level}%` : '0%',
              }}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export default function Skills({ skills, domain }) {
  return (
    <section className="section container" id="skills">
      <div className="section-label">// Skills</div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.8rem',
            fontWeight: 700,
            color: 'var(--text-primary)',
            marginBottom: '1.5rem',
            lineHeight: 1.2,
          }}
        >
          {domain === 'backend' && 'What I work with'}
          {domain === 'android' && 'Development Toolkit'}
          {domain === 'data' && 'Analysis Stack'}
        </h2>

        {domain === 'backend' && <BackendSkills skills={skills} />}
        {domain === 'android' && <AndroidSkills skills={skills} />}
        {domain === 'data' && <DataSkills skills={skills} />}
      </div>
    </section>
  )
}
