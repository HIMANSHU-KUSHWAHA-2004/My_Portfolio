import React from "react";
import "./CodingProfile.css";

// ✅ Proper image imports
import leetImg from "../assets/leet.webp";
import codechefImg from "../assets/code.webp";

const profiles = [
  {
    name: "LeetCode",
    image: leetImg,
    description: "Used for strengthening understanding of data structures, algorithms, and classical problem-solving.",
    link: "https://leetcode.com/u/HimanshuKushwaha2004/",
  },
  {
    name: "Codechef",
    image: codechefImg,
    description: "Used for coding contests and strengthening DSA concepts through timed problem-solving and editorials.",
    link: "https://www.codechef.com/users/mr_himanshu_56",
  },
];

const CodingProfiles = () => {
  return (
    <section className="cp-section">
      <h2 className="cp-title">Coding Profiles</h2>
      <div className="cp-grid">
        {profiles.map((profile, idx) => (
          <div key={idx} className="cp-card">
            <div className="cp-img">
              <img src={profile.image} alt={profile.name} />
            </div>
            <div className="cp-content">
              <h3>{profile.name}</h3>
              <p>{profile.description}</p>
            </div>
            <div className="cp-footer">
              <a href={profile.link} target="_blank" rel="noreferrer">
                Visit {profile.name}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CodingProfiles;
