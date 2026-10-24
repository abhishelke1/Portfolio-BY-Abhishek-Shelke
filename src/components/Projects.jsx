import { useState } from "react";
import { motion } from "framer-motion";
import { useMotionPreference } from "./MotionProvider";
import { FiArrowUpRight, FiPlus } from "react-icons/fi";
import { projects } from "../data/projects";
import ProjectVisual from "./ProjectVisual";

const filters = ["All work", "Backend", "AI & Data", "Product"];

export default function Projects() {
  const { paused } = useMotionPreference();
  const [filter, setFilter] = useState("All work");
  const visible = projects.filter(
    (project) => filter === "All work" || project.category === filter,
  );
  return (
    <section
      className="section container work-section"
      id="projects"
      aria-labelledby="work-title"
    >
      <div className="section-topline">
        <span className="eyebrow">01 / SELECTED WORK</span>
        <span className="small-note">A few problems worth solving.</span>
      </div>
      <div className="section-heading">
        <h2 id="work-title">
          Built for a reason.
          <br /> <span className="serif">Made to be used.</span>
        </h2>
        <p>
          Different challenges. The same approach:
          <br /> understand the problem, then build with care.
        </p>
      </div>
      <div
        className="project-filters"
        role="group"
        aria-label="Filter projects"
      >
        {filters.map((item) => (
          <button
            key={item}
            aria-pressed={filter === item}
            onClick={() => setFilter(item)}
          >
            {item}
            {item === "All work" && <span>04</span>}
          </button>
        ))}
      </div>
      <p className="sr-only" role="status">
        Showing {visible.length} {filter === "All work" ? "" : filter} projects
      </p>
      <div className="projects-grid">
        {visible.map((project) => (
          <motion.article
            className="project"
            key={project.id}
            initial={paused ? false : { opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <a
              className="project-image-link"
              onPointerMove={(event) => {
                if (paused || event.pointerType !== "mouse") return;
                const r = event.currentTarget.getBoundingClientRect();
                event.currentTarget.style.setProperty(
                  "--tilt-x",
                  `${-(event.clientY - r.top - r.height / 2) / 30}deg`,
                );
                event.currentTarget.style.setProperty(
                  "--tilt-y",
                  `${(event.clientX - r.left - r.width / 2) / 35}deg`,
                );
              }}
              onPointerLeave={(event) => {
                event.currentTarget.style.setProperty("--tilt-x", "0deg");
                event.currentTarget.style.setProperty("--tilt-y", "0deg");
              }}
              href={`https://github.com/abhishelke1/${project.repository}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Explore ${project.name} on GitHub`}
            >
              <ProjectVisual type={project.id} />
              <span className="project-image-arrow">
                <FiArrowUpRight />
              </span>
            </a>
            <div className="project-meta">
              <span>{project.kind}</span>
              <span>/{project.number}</span>
            </div>
            <h3>{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-tags">
              {project.stack.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
            <div className="project-bottom">
              <details>
                <summary>
                  Behind the build <FiPlus />
                </summary>
                <div className="project-detail">
                  <strong>{project.name}</strong>
                  <p>{project.detail}</p>
                  <span>{project.focus}</span>
                </div>
              </details>
              <a
                className="text-link"
                href={`https://github.com/abhishelke1/${project.repository}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.linkLabel || "View code"} <FiArrowUpRight />
              </a>
            </div>
          </motion.article>
        ))}
      </div>
      <a
        className="all-repos text-link"
        href="https://github.com/abhishelke1?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
      >
        There’s more on GitHub <FiArrowUpRight />
      </a>
    </section>
  );
}
