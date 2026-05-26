export default function About({ domain }) {
  return (
    <section className="section container" id="about">
      <div className="section-label">// About</div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '3rem',
          alignItems: 'start',
        }}
        className="about-grid"
      >
        {/* Left: Bio */}
        <div style={{ maxWidth: '560px' }}>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.8rem',
              fontWeight: 700,
              color: 'var(--text-primary)',
              marginBottom: '1.25rem',
              lineHeight: 1.2,
            }}
          >
            Not a "passionate developer" — just someone who ships.
          </h2>

          <p
            style={{
              fontSize: '0.95rem',
              color: 'var(--text-muted)',
              lineHeight: 1.8,
              marginBottom: '1rem',
            }}
          >
            I'm a developer based in India, currently pursuing my B.Tech in
            Computer Science. I don't specialize in one thing because the
            interesting problems live at intersections — where backend meets
            mobile, where data meets design. I've built REST APIs that handle
            real traffic, Android apps that work in low-connectivity rural
            areas, and ML models that actually shipped to production.
          </p>

          <p
            style={{
              fontSize: '0.95rem',
              color: 'var(--text-muted)',
              lineHeight: 1.8,
              marginBottom: '0',
            }}
          >
            When I'm not coding, I'm probably debugging why my Docker
            container won't start. Just kidding — sometimes I also argue about
            tabs vs spaces.
          </p>
        </div>

        {/* Right: Timeline */}
        <div>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.68rem',
              color: 'var(--accent)',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              marginBottom: '1.25rem',
            }}
          >
            Timeline
          </div>

          <div>
            <div className="timeline-item">
              <div className="timeline-year">Present</div>
              <div className="timeline-text">
                Building, shipping, learning. Open to opportunities.
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-year">2025</div>
              <div className="timeline-text">
                Technova S2 Finalist. HackVega 2025 participant.
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-year">2024</div>
              <div className="timeline-text">
                OpenEnv AI Hackathon Finalist (Meta × Scaler, 70k+
                participants). Built AgroEasy reaching 100+ farmers.
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-year">2023</div>
              <div className="timeline-text">
                Started B.Tech, Computer Science. First projects shipped.
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .about-grid {
            grid-template-columns: 1.2fr 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
