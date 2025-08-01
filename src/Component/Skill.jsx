import React from "react";
import "./Skill.css";

// ✅ Import images instead of using string paths
import cplusImg from "../assets/Cplus.webp";
import dataImg from "../assets/Data.jpg";
import techImg from "../assets/Tech.webp";

const skillsData = [
  {
    title: "Programming Languages",
    description: "Proficient in multiple programming languages for software development.",
    image: cplusImg,
    tags: ["Python", "C++", "JavaScript", "SQL"]
  },
  {
    title: "Data Analysis",
    description: "Skilled in analyzing data, using libraries and tools for insights.",
    image: dataImg,
    tags: ["Pandas", "NumPy","Matlotlib","Seaborn", "Power Bi", "Excel"]
  },
  {
    title: "Technologies",
    description: "Experienced with modern web, database, and version control tools.",
    image: techImg,
    tags: ["React", "Git", "Mysql", "Tkinter", "AI"]
  }
];

const Skills = () => {
  return (
    <section className="skills-section">
      <h2 className="skills-title">Skills</h2>
      <div className="skills-grid">
        {skillsData.map((skill, idx) => (
          <div className="skill-card" key={idx}>
            <div className="skill-img">
              <img src={skill.image} alt={skill.title} />
            </div>
            <div className="skill-content">
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
              <div className="skill-tags">
                {skill.tags.map((tag, i) => (
                  <span key={i} className="skill-tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
