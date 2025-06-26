import React from "react";
import "./Skill.css";

const skillsData = [
  {
    title: "Programming Languages",
    description: "Proficient in multiple programming languages for software development.",
    image: "src/assets/Cplus.webp",
    tags: ["Python", "C++", "JavaScript", "SQL"]
  },
  {
    title: "Data Analysis",
    description: "Skilled in analyzing data, using libraries and tools for insights.",
    image: "src/assets/Data.jpg",
    tags: ["Pandas", "NumPy", "Power Bi", "Excel"]
  },
  {
    title: "Technologies",
    description: "Experienced with modern web, database, and version control tools.",
    image: "src/assets/Tech.webp",
    tags: ["React", "Git", "Mysql", "Tkinter","AI"]
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
