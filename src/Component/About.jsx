import React from "react";
import "./About.css";
import profileImg from "../assets/Profile_2.png"; // ✅ Use the same image from Home
import resume from "../assets/Himanshu_resume.pdf"; // ✅ Use the same file from Home

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-heading">
        <h1>About Me</h1>
      </div>

      <div className="about-container">
        {/* Left: Text */}
        <div className="about-text">
          <p>
            I'm Himanshu Kushwaha, a Computer Science student passionate about data analysis and machine learning.
            I have a solid foundation in Python and C++, and I'm currently building my skills in data structures,
            algorithms, and competitive programming.
          </p>
          <p>
            I'm also deeply interested in applying data science to solve real-world problems,
            with growing knowledge in machine learning techniques and tools.
          </p>

          <a href={resume} download className="resume-download-btn">
            📄 Download Resume
          </a>
        </div>

        {/* Right: Image */}
        <div className="about-img-container">
          <img src={profileImg} alt="Profile" className="about-img" />
        </div>
      </div>
    </section>
  );
}

export default About;
