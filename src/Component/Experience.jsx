import React from "react";
import "./Experience.css";

const Experience = () => {
  return (
    <section className="experience-section">
      <h2 className="experience-title">My Experience</h2>
      <div className="experience-timeline">
        <div className="experience-entry">
          <div className="experience-role">Python Developer Intern</div>
          <div className="experience-company">CodeAlpha (Remote)</div>
          <div className="experience-duration">
            April 2025 – May 2025 · 1 month
          </div>
          <div className="experience-desc">
            Successfully completed a virtual internship in Python Programming
            with CodeAlpha. This internship focused on building practical
            projects that strengthened my core understanding of Python. I worked
            on real-world applications involving problem-solving and logic
            building, which helped me gain hands-on experience in software
            development and improved my programming foundation.
          </div>
        </div>

        <div className="experience-entry">
          <div className="experience-role">Software Developer Intern</div>
          <div className="experience-company">Prodigy InfoTech (Remote)</div>
          <div className="experience-duration">
            April 2025 – May 2025 · 2 months
          </div>
          <div className="experience-desc">
            Completed a software development internship at Prodigy InfoTech
            where I applied programming skills to real-world scenarios. I
            contributed by writing clean, efficient code and gained exposure to
            agile development workflows. The internship enhanced my debugging
            skills, logical thinking, and professional coding practices. It also
            encouraged deeper interest in problem-solving and furthered my
            understanding of C++.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
