import { SiMongodb, SiGooglecloud } from 'react-icons/si'
import { FaAws, FaJava } from 'react-icons/fa'

const achievements = [
  {
    title: 'OpenEnv AI Hackathon — Finalist',
    sub: 'Meta × Scaler · 70,000+ participants',
  },
  {
    title: 'Technova S2 — Finalist',
    sub: 'National-level tech competition',
  },
  {
    title: 'HackVega 2025 — Round 1',
    sub: 'Competitive hackathon',
  },
  {
    title: 'HackerRank 5★ — Python & Java',
    sub: 'Problem solving & language proficiency',
  },
]

const certifications = [
  { name: 'AWS', icon: FaAws },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'Oracle', icon: FaJava },
  { name: 'GCP', icon: SiGooglecloud },
]

export default function Achievements() {
  return (
    <section className="section container" id="achievements">
      <div className="section-label">// Achievements</div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '3rem',
        }}
        className="achievements-grid"
      >
        {/* Achievements list */}
        <div>
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
            Track record
          </h2>

          <div>
            {achievements.map((a, i) => (
              <div key={i} className="achievement-item">
                <div className="achievement-marker" />
                <div>
                  <div className="achievement-title">{a.title}</div>
                  <div className="achievement-sub">{a.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.68rem',
              color: 'var(--accent)',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              marginBottom: '1rem',
            }}
          >
            Certifications
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {certifications.map((cert) => {
              const Icon = cert.icon
              return (
                <div key={cert.name} className="cert-pill">
                  <Icon size={14} />
                  {cert.name}
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .achievements-grid {
            grid-template-columns: 1.5fr 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
