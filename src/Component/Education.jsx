import React, { useState, useEffect } from "react";
import "./Education.css";

const educationData = [
  {
    title: "B.Tech in Computer Science",
    institution: "Guru Jambheswar University Of Science And Technology",
    year: "2023 - 2027",
    description: "Specialized in software engineering, data structures, and AI.",
    side: "left",
    icon: "🎓",
    status: "Current"
  },
  {
    title: "12th Grade (CBSE)",
    institution: "Vidya Mandir Public School, Faridabad",
    year: "2021 - 2022",
    description: "Studied PCM with Computer Science. Scored 90%.",
    side: "right",
    icon: "📚",
    status: "Completed"
  },
  {
    title: "10th Grade (CBSE)",
    institution: "Vidya Mandir Public School, Faridabad",
    year: "2020 - 2021",
    description: "Focused on science fundamentals and scored 80%.",
    side: "left",
    icon: "📖",
    status: "Completed"
  },
];

const Education = () => {
  const [visibleItems, setVisibleItems] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems(prev => new Set(prev).add(entry.target.dataset.index));
          }
        });
      },
      { threshold: 0.3 }
    );

    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="edu-section">
      <div className="edu-container">
        {/* Header */}
        <div className="edu-header">
          <h2 className="edu-title">My Educational Journey</h2>
          <div className="edu-title-line"></div>
        </div>

        {/* Timeline */}
        <div className="edu-timeline">
          {/* Center line */}
          <div className="edu-center-line"></div>

          {educationData.map((edu, index) => (
            <div
              key={index}
              data-index={index}
              className={`timeline-item edu-row ${edu.side} ${
                visibleItems.has(index.toString()) ? 'visible' : ''
              }`}
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              {/* Timeline Dot */}
              <div className="edu-dot"></div>

              {/* Content Box */}
              <div className="edu-box-wrapper">
                <div className="edu-box">
                  {/* Status Badge */}
                  <div className={`edu-status ${edu.status.toLowerCase()}`}>
                    {edu.status}
                  </div>

                  {/* Icon */}
                  <div className="edu-icon">{edu.icon}</div>

                  {/* Content */}
                  <h3 className="edu-box-title">{edu.title}</h3>
                  <h4 className="edu-institution">{edu.institution}</h4>
                  <div className="edu-year">{edu.year}</div>
                  <p className="edu-description">{edu.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative Elements */}
        <div className="edu-decoration edu-decoration-1"></div>
        <div className="edu-decoration edu-decoration-2"></div>
        <div className="edu-decoration edu-decoration-3"></div>
      </div>
    </section>
  );
};

export default Education;