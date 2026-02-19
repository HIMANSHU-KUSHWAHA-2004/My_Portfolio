import React from "react";
import "./About.css";
import profileImg from "../assets/Profile_2.png";
import resume from "../assets/Himanshu_resume.pdf";

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-heading">
        <h1>About Me</h1>
      </div>

      <div className="about-container">
        <div className="about-text">
          <p>
            I am Himanshu Kushwaha, a Computer Science student focused on data analysis and
            machine learning. I have a strong base in Python and C++ and I am actively improving
            my skills in data structures, algorithms, and competitive programming.
          </p>
          <p>
            I enjoy using data science to solve real-world problems and continuously explore better
            methods for machine learning and analytics.
          </p>

          <a href={resume} download className="resume-download-btn">
            Download Resume
          </a>
        </div>

        <div className="about-img-container">
          <img src={profileImg} alt="Profile" className="about-img" />
        </div>
      </div>
    </section>
  );
}

export default About;
