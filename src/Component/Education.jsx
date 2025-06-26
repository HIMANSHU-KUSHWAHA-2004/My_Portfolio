import React from "react";
import "./Education.css";
import { BiColor } from "react-icons/bi";

const educationData = [
  {
    title: "B.Tech in Computer Science",
    institution: "Guru Jambheswar University Of Science And Technology",
    year: "2023 - 2027",
    description:
      "Specialized in software engineering, data structures, and AI.",
    side: "left",
  },
  {
    title: "12th Grade (CBSE)",
    institution: "Vidya Mandir Public School, Faridabad",
    year: "2021 - 2022",
    description: "Studied PCM with Computer Science. Scored 90%.",
    side: "right",
  },
  {
    title: "10th Grade (CBSE)",
    institution: "Vidya Mandir Public School, Faridabad",
    year: "2020 - 2021",
    description: "Focused on science fundamentals and scored 80%.",
    side: "left",
  },
];

const Education = () => {
  return (
    <section className="edu-section">
      <h2 className="edu-title">Education</h2>
      <div className="edu-timeline">
        <div className="edu-center-line" />
        {educationData.map((edu, index) => (
          <div key={index} className={`edu-row ${edu.side}`}>
            {edu.side === "left" && (
              <div className="edu-box-wrapper">
                <div className="edu-box">
                  <h3>{edu.title}</h3>
                  <h4>{edu.institution}</h4>
                  <span className="edu-year">{edu.year}</span>
                  <p>{edu.description}</p>
                </div>
                <div className="edu-horizontal-line" />
              </div>
            )}
            {edu.side === "right" && (
              <div className="edu-box-wrapper">
                <div className="edu-horizontal-line" />
                <div className="edu-box">
                  <h3>{edu.title}</h3>
                  <h4>{edu.institution}</h4>
                  <span className="edu-year">{edu.year}</span>
                  <p>{edu.description}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
