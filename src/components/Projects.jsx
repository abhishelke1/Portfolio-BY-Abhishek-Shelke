import { FiExternalLink } from 'react-icons/fi'

export default function Projects({ projects, domain }) {
  return (
    <section className="section container" id="projects">
      <div className="section-label">// Projects</div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '1.25rem',
        }}
        className="projects-grid"
      >
        {projects.map((project, i) => (
          <div key={`${domain}-${i}`} className="project-card">
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: '0.75rem',
                flexWrap: 'wrap',
                gap: '0.5rem',
              }}
            >
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  margin: 0,
                }}
              >
                {project.title}
              </h3>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{
                  padding: '5px 12px',
                  fontSize: '0.65rem',
                  gap: '4px',
                }}
              >
                <FiExternalLink size={12} />
                View Code
              </a>
            </div>

            <p
              style={{
                fontSize: '0.9rem',
                color: 'var(--text-muted)',
                lineHeight: 1.6,
                marginBottom: '1rem',
                maxWidth: '600px',
              }}
            >
              {project.impact}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {project.stack.map((tech) => (
                <span key={tech} className="pill">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @media (min-width: 768px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          /* Make the last card span full width if odd count */
          .projects-grid > :last-child:nth-child(odd) {
            grid-column: 1 / -1;
          }
        }
      `}</style>
    </section>
  )
}
