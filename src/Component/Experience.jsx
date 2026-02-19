import React from "react";
import "./Experience.css";

const experiences = [
  {
    role: "Data Analyst Intern",
    company: "Elevate Labs (Remote)",
    duration: "April 21, 2025 - May 25, 2025",
    description:
      "Completed a government-certified data analyst internship under Skill India MSME. Worked on data cleaning, dashboard development, and insights using Excel, Power BI, and Python.",
  },
  {
    role: "Python Developer Intern",
    company: "CodeAlpha (Remote)",
    duration: "April 2025 - May 2025",
    description:
      "Built practical Python projects and improved problem-solving and logic-building skills through real project tasks.",
  },
  {
    role: "Software Developer Intern",
    company: "Prodigy InfoTech (Remote)",
    duration: "April 2025 - May 2025",
    description:
      "Contributed clean, maintainable code in a structured workflow and strengthened debugging and software development practices.",
  },
];

const Experience = () => {
  return (
    <section className="experience-section">
      <h2 className="experience-title">My Experience</h2>
      <div className="experience-timeline">
        {experiences.map((item) => (
          <div className="experience-entry" key={item.role}>
            <div className="experience-role">{item.role}</div>
            <div className="experience-company">{item.company}</div>
            <div className="experience-duration">{item.duration}</div>
            <div className="experience-desc">{item.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
