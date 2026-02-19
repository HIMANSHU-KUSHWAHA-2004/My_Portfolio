import React, { useEffect, useState } from "react";
import "./Education.css";

const educationData = [
  {
    title: "B.Tech in Computer Science",
    institution: "Guru Jambheshwar University of Science and Technology",
    year: "2023 - 2027",
    description: "Specialized in software engineering, data structures, and AI.",
    side: "left",
    icon: "CS",
    status: "Current",
  },
  {
    title: "12th Grade (CBSE)",
    institution: "Vidya Mandir Public School, Faridabad",
    year: "2021 - 2022",
    description: "Studied PCM with Computer Science. Scored 90%.",
    side: "right",
    icon: "12",
    status: "Completed",
  },
  {
    title: "10th Grade (CBSE)",
    institution: "Vidya Mandir Public School, Faridabad",
    year: "2020 - 2021",
    description: "Focused on science fundamentals and scored 80%.",
    side: "left",
    icon: "10",
    status: "Completed",
  },
];

const Education = () => {
  const [visibleItems, setVisibleItems] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) => new Set(prev).add(entry.target.dataset.index));
          }
        });
      },
      { threshold: 0.3 }
    );

    const timelineItems = document.querySelectorAll(".timeline-item");
    timelineItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="edu-section">
      <div className="edu-container">
        <div className="edu-header">
          <h2 className="edu-title">My Educational Journey</h2>
          <div className="edu-title-line" />
        </div>

        <div className="edu-timeline">
          <div className="edu-center-line" />

          {educationData.map((edu, index) => (
            <div
              key={edu.title}
              data-index={index}
              className={`timeline-item edu-row ${edu.side} ${
                visibleItems.has(index.toString()) ? "visible" : ""
              }`}
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              <div className="edu-dot" />
              <div className="edu-box-wrapper">
                <div className="edu-box">
                  <div className={`edu-status ${edu.status.toLowerCase()}`}>{edu.status}</div>
                  <div className="edu-icon">{edu.icon}</div>
                  <h3 className="edu-box-title">{edu.title}</h3>
                  <h4 className="edu-institution">{edu.institution}</h4>
                  <div className="edu-year">{edu.year}</div>
                  <p className="edu-description">{edu.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="edu-decoration edu-decoration-1" />
        <div className="edu-decoration edu-decoration-2" />
        <div className="edu-decoration edu-decoration-3" />
      </div>
    </section>
  );
};

export default Education;
