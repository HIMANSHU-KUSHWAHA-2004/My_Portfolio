import React from "react";
import "./Home.css";
import profileImg from "../assets/Profile.jpeg";
import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa";

function Home() {
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
          <h2>Computer Science Student</h2>
          <p>
            Aspiring Data Analyst and Machine Learning enthusiast with a strong
            foundation in Python and C++. Passionate about Data Science and
            currently exploring Data Structures, Algorithms, and Competitive
            Programming to enhance analytical and problem-solving skills.
          </p>
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
        </div>
      </div>
    </section>
  );
}

export default Home;
