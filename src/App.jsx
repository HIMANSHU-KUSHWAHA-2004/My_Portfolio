import { useEffect, useState } from "react";
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import About from "./Component/About";
import Education from "./Component/Education";
import Skill from "./Component/Skill";
import CodingProfiles from "./Component/CodingProfile";
import Experience from "./Component/Experience";
import Projects from "./Component/Projects";
import Contacts from "./Component/Contacts";
import Footer from "./Component/Footer";
import BackgroundEffect from "./Component/BackgroundEffect";
import "./App.css";

function App() {
  const themes = ["dark", "light", "forest"];
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const sections = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll(".app > section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.45, rootMargin: "-20% 0px -45% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const doc = document.documentElement;
      const scrollTop = doc.scrollTop;
      const scrollHeight = doc.scrollHeight - doc.clientHeight;
      const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      setScrollProgress(progress);
      setShowBackToTop(scrollTop > 420);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const currentIndex = themes.indexOf(prevTheme);
      const nextIndex = (currentIndex + 1) % themes.length;
      return themes[nextIndex];
    });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="scroll-progress">
        <span style={{ width: `${scrollProgress}%` }} />
      </div>
      <div className="ambient-layer" aria-hidden="true">
        <span className="ambient-blob blob-one" />
        <span className="ambient-blob blob-two" />
        <span className="ambient-blob blob-three" />
      </div>
      <BackgroundEffect theme={theme} />
      <Navbar theme={theme} onToggleTheme={toggleTheme} activeSection={activeSection} />
      <div className="app">
        <section id="home" className="section reveal">
          <Home />
        </section>
        <section id="about" className="section reveal">
          <About />
        </section>
        <section id="education" className="section reveal">
          <Education />
        </section>
        <section id="skills" className="section reveal">
          <Skill />
        </section>
        <section id="coding-profiles" className="section reveal">
          <CodingProfiles />
        </section>
        <section id="experience" className="section reveal">
          <Experience />
        </section>
        <section id="projects" className="section reveal">
          <Projects />
        </section>
        <section id="contact-me" className="section reveal">
          <Contacts />
        </section>
        <Footer />
      </div>
      <button
        type="button"
        className={`back-to-top ${showBackToTop ? "show" : ""}`}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        ↑
      </button>
    </>
  );
}

export default App;
