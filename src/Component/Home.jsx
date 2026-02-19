import React, { useEffect, useState } from "react";
import "./Home.css";
import profileImg from "../assets/Profile.jpeg";
import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa";

function Home() {
  const roles = [
    "Computer Science Student",
    "Data Analyst Aspirant",
    "Machine Learning Explorer",
    "Problem Solver",
  ];
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2200);
    return () => clearInterval(timer);
  }, [roles.length]);

  return (
    <section id="home" className="home-section">
      <div className="home-container">
        {/* Left: Profile Image */}
        <div className="home-left">
          <img src={profileImg} alt="Profile" className="profile-img" />
        </div>

        {/* Right: Info */}
        <div className="home-right">
          <h1>Hi, I'm Himanshu Kushwaha</h1>
          <h2 className="rotating-role">{roles[roleIndex]}</h2>
          <div className="home-badges">
            <span>Python</span>
            <span>Data Analytics</span>
            <span>Machine Learning</span>
          </div>
          <p>
            Aspiring Data Analyst and Machine Learning enthusiast with a strong
            foundation in Python and C++. Passionate about Data Science and
            currently exploring Data Structures, Algorithms, and Competitive
            Programming to enhance analytical and problem-solving skills.
          </p>
          <div className="home-cta">
            <a href="#projects" className="cta-btn primary">
              View Projects
            </a>
            <a href="#contact-me" className="cta-btn secondary">
              Contact Me
            </a>
          </div>
          <div className="social-links">
            <a
              href="https://github.com/HIMANSHU-KUSHWAHA-2004"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/himanshu-kushwaha-49b360293"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={28} />
            </a>
            <a
              href="https://codolio.com/profile/Himanshu_Kushwaha"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Codestudio"
            >
              <FaCode size={28} />
            </a>
          </div>
          <div className="home-stats">
            <div className="stat-pill">
              <strong>6+</strong>
              <span>Projects</span>
            </div>
            <div className="stat-pill">
              <strong>3</strong>
              <span>Internships</span>
            </div>
            <div className="stat-pill">
              <strong>2023-27</strong>
              <span>B.Tech</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
