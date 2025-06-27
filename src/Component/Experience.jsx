import React from "react";
import "./Experience.css";

const Experience = () => {
  return (
    <section className="experience-section">
      <h2 className="experience-title">My Experience</h2>
      <div className="experience-timeline">
        <div className="experience-entry">
          <div className="experience-role">Data Analyst Intern</div>
          <div className="experience-company">ELEVATE LAB (Remote)</div>
          <div className="experience-duration">
            21 April 2025 – 25 May 2025 · 1 month
          </div>
          <div className="experience-desc">
          Successfully completed a 🎓 government-certified Data Analyst Internship with Elevate Labs under the Skill India – MSME initiative. During this virtual internship, I worked on 8+ real-world tasks involving 🧹 data cleaning, 📊 dashboard creation, and 📈 visualization using Excel, Power BI, and Python (Pandas, Matplotlib). I also contributed to 2 major projects, applying 🔍 data analysis and storytelling to generate insights. This hands-on experience boosted my confidence in interpreting datasets and making 📌 data-driven decisions. 🏅 Recognized as the Best Performer, I consistently demonstrated strong analytical and problem-solving skills.
          </div>
        </div>

        <div className="experience-entry">
          <div className="experience-role">Python Developer Intern</div>
          <div className="experience-company">CodeAlpha (Remote)</div>
          <div className="experience-duration">
            April 2025 – May 2025 · 1 month
          </div>
          <div className="experience-desc">
           ✅ Successfully completed a virtual internship in Python Programming with CodeAlpha. This internship focused on building 🛠️ practical projects that strengthened my core understanding of 🐍 Python. I worked on real-world applications involving 🧠 problem-solving and 🧩 logic building, which helped me gain 💻 hands-on experience in software development and significantly improved my programming foundation. 🚀
          </div>
        </div>

        <div className="experience-entry">
          <div className="experience-role">Software Developer Intern</div>
          <div className="experience-company">Prodigy InfoTech (Remote)</div>
          <div className="experience-duration">
            April 2025 – May 2025 · 2 months
          </div>
          <div className="experience-desc">
          ✅ Completed a Software Development Internship at Prodigy InfoTech, where I applied 💻 programming skills to real-world scenarios. I contributed by writing ✍️ clean, efficient code and gained exposure to 🔁 agile development workflows. The internship enhanced my 🐞 debugging skills, 🧠 logical thinking, and overall professional coding practices. It also sparked a deeper interest in 🧩 problem-solving and strengthened my understanding of C++. 🚀
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
