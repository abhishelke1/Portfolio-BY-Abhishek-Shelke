import { FiArrowUpRight, FiGithub, FiLinkedin } from "react-icons/fi";

export default function Contact() {
  return (
    <section
      className="contact-section"
      id="contact"
      aria-labelledby="contact-title"
    >
      <div className="container">
        <div className="contact-top">
          <span className="eyebrow">04 / WHAT’S NEXT?</span>
          <span className="availability">
            <i className="status-dot" /> Open to opportunities
          </span>
        </div>
        <div className="contact-main">
          <div>
            <h2 id="contact-title">
              Good work starts
              <br /> with a <span className="serif">conversation.</span>
            </h2>
            <p>
              Have an interesting problem, a role in mind, or an idea?
              <br /> I’d love to hear what you’re working on.
            </p>
          </div>
          <a
            className="contact-arrow"
            href="https://www.linkedin.com/in/abhishek-shelke-it/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Connect with Abhishek on LinkedIn"
          >
            <FiArrowUpRight />
          </a>
        </div>
        <div className="contact-bottom">
          <a
            className="text-link"
            href="https://www.linkedin.com/in/abhishek-shelke-it/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiLinkedin /> Let’s connect on LinkedIn <FiArrowUpRight />
          </a>
          <a
            className="text-link"
            href="https://github.com/abhishelke1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiGithub /> Find me on GitHub <FiArrowUpRight />
          </a>
          <span>BASED IN INDIA. OPEN TO WHAT’S NEXT.</span>
        </div>
      </div>
    </section>
  );
}
