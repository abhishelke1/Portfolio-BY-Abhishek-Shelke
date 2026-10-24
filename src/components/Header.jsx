import { useEffect, useRef, useState } from "react";
import { FiArrowUpRight, FiMenu, FiX, FiPause, FiPlay } from "react-icons/fi";

import { useMotionPreference } from "./MotionProvider";
const links = [
  ["#projects", "Work"],
  ["#about", "About"],
  ["#skills", "Toolkit"],
];

export default function Header() {
  const { paused, toggle: toggleMotion } = useMotionPreference();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const toggle = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-15% 0px -55% 0px" },
    );
    document
      .querySelectorAll("main section[id]")
      .forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    const close = (event) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [open]);
  return (
    <header className="header">
      <div className="container header-inner">
        <a
          className="wordmark"
          href="#home"
          aria-label="Abhishek Shelke, home"
          onClick={() => setOpen(false)}
        >
          abhishek<span>®</span>
        </a>
        <button
          className="motion-toggle"
          onClick={toggleMotion}
          aria-label={paused ? "Resume animations" : "Pause animations"}
          title={paused ? "Resume animations" : "Pause animations"}
        >
          {paused ? <FiPlay /> : <FiPause />}
          <span>{paused ? "Play motion" : "Pause motion"}</span>
        </button>
        <button
          ref={toggle}
          className="menu-toggle"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="main-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
        <nav
          id="main-nav"
          aria-label="Main navigation"
          className={`nav ${open ? "is-open" : ""}`}
        >
          {links.map(([href, label]) => (
            <a
              key={href}
              href={href}
              aria-current={active === href ? "location" : undefined}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
          <a
            className="nav-contact"
            href="#contact"
            onClick={() => setOpen(false)}
          >
            Let’s talk <FiArrowUpRight />
          </a>
        </nav>
      </div>
    </header>
  );
}
