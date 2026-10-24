import { FiArrowUpRight } from "react-icons/fi";

export default function About() {
  return (
    <section className="about-section" id="about" aria-labelledby="about-title">
      <div className="container about-grid">
        <div className="about-note">
          <span className="eyebrow">02 / THE PERSON BEHIND THE CODE</span>
          <div className="monogram-art" aria-hidden="true">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <span>
              as<span className="monogram-dot">.</span>
            </span>
            <i>✳</i>
          </div>
          <div className="about-caption">
            <span>ABHISHEK SHELKE</span>
            <span>INDIA ↗</span>
          </div>
        </div>
        <div className="about-copy">
          <h2 id="about-title">
            Curious by nature.
            <br /> <span className="serif">Builder by choice.</span>
          </h2>
          <p>
            I’m Abhishek, an engineering student and developer based in India. I
            like figuring out how things work — and then finding a way to make
            them work better.
          </p>
          <p>
            My projects take me from backend systems to mobile experiences and
            applied AI. What connects them is a simple question: will this make
            someone’s day a little easier?
          </p>
          <p>
            I care about the details that add up: a clear interface, a reliable
            API, and code that the next person can understand. I’m still
            learning, and I like it that way.
          </p>
          <a
            className="text-link"
            href="https://www.linkedin.com/in/abhishek-shelke-it/"
            target="_blank"
            rel="noopener noreferrer"
          >
            A little more about me <FiArrowUpRight />
          </a>
          <div className="about-principles">
            <span>Stay curious.</span>
            <span>Build with care.</span>
            <span>Keep improving.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
