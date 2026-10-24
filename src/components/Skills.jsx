import { FiCode, FiCpu, FiSmartphone } from "react-icons/fi";

const skills = [
  {
    icon: FiCode,
    title: "The systems underneath.",
    subtitle: "BACKEND & INFRASTRUCTURE",
    description:
      "APIs, databases, and the connections that keep a product running.",
    tools: [
      "Java / Spring Boot",
      "Node.js",
      "Python / FastAPI",
      "PostgreSQL",
      "Redis",
      "Docker",
    ],
  },
  {
    icon: FiSmartphone,
    title: "The experience in your hands.",
    subtitle: "MOBILE & INTERFACES",
    description:
      "Clear interfaces and considered interactions, built around the person using them.",
    tools: [
      "Kotlin",
      "Java",
      "Android SDK",
      "Jetpack",
      "Firebase",
      "Material Design",
    ],
  },
  {
    icon: FiCpu,
    title: "The meaning in the data.",
    subtitle: "DATA & APPLIED AI",
    description:
      "Turning raw information into useful predictions, answers, and decisions.",
    tools: [
      "Pandas / NumPy",
      "SQL",
      "XGBoost",
      "LangChain",
      "ChromaDB",
      "Power BI",
    ],
  },
];

export default function Skills() {
  return (
    <section
      className="section container skills-section"
      id="skills"
      aria-labelledby="skills-title"
    >
      <div className="section-topline">
        <span className="eyebrow">03 / MY TOOLKIT</span>
        <span className="small-note">The right tool for the problem.</span>
      </div>
      <div className="section-heading">
        <h2 id="skills-title">
          Different tools.
          <br /> <span className="serif">One connected view.</span>
        </h2>
        <p>
          I enjoy working across the stack.
          <br /> It helps me see how the pieces fit together.
        </p>
      </div>
      <div className="skills-grid">
        {skills.map((skill, i) => (
          <article className="skill" key={skill.title}>
            <div className="skill-top">
              <skill.icon />
              <span>0{i + 1}</span>
            </div>
            <span className="eyebrow">{skill.subtitle}</span>
            <h3>{skill.title}</h3>
            <p>{skill.description}</p>
            <div className="skill-tools">
              {skill.tools.map((tool) => (
                <span key={tool}>{tool}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
      <div className="recognition">
        <span className="eyebrow">ALONG THE WAY</span>
        <span>
          OpenEnv AI Hackathon <strong>Finalist</strong>
        </span>
        <span>
          Technova S2 <strong>Finalist</strong>
        </span>
        <span>
          HackerRank <strong>5★ Python & Java</strong>
        </span>
      </div>
    </section>
  );
}
