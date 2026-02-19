import React, { useEffect, useState } from "react";
import "./Projects.css";

import flappyImg from "../assets/flappy.png";
import stockImg from "../assets/stock.png";
import bankImg from "../assets/bank.png";
import musicImg from "../assets/music.png";
import sudokuImg from "../assets/sudo.webp";
import nofapImg from "../assets/Nofap.png";

const projects = [
  {
    title: "Flappy Bird Game Clone",
    description:
      "A Python-based Flappy Bird game using Tkinter and Pygame with smooth animation, collision logic, and adaptive difficulty.",
    github: "https://github.com/HIMANSHU-KUSHWAHA-2004/flappy_bird.git",
    image: flappyImg,
  },
  {
    title: "Stock Portfolio Tracker",
    description:
      "A Python tool using yfinance and public APIs to track stock performance, portfolio gain/loss, and key visual summaries.",
    github: "https://github.com/HIMANSHU-KUSHWAHA-2004/CodeAlpha_Task_2_intern.git",
    image: stockImg,
  },
  {
    title: "Band Management System",
    description:
      "A terminal-based Python management system for storing and organizing member details, schedules, and event data with JSON.",
    github: "https://github.com/HIMANSHU-KUSHWAHA-2004/Bank_management_system.git",
    image: bankImg,
  },
  {
    title: "Python Music Player",
    description:
      "A desktop music player app built with Tkinter and Pygame supporting file loading and playback controls.",
    github: "https://github.com/HIMANSHU-KUSHWAHA-2004/musix.git",
    image: musicImg,
  },
  {
    title: "Sudoku Solver",
    description:
      "A C++ Sudoku solver using backtracking to efficiently find valid solutions for solvable boards.",
    github: "https://github.com/HIMANSHU-KUSHWAHA-2004/Prodigy_Task_4_Intern.git",
    image: sudokuImg,
  },
  {
    title: "NoFap Streak Tracker",
    description:
      "A productivity app with React frontend and FastAPI backend featuring calendar tracking, certificates, and theme support.",
    github: "https://github.com/HIMANSHU-KUSHWAHA-2004/NoFap_Project.git",
    image: nofapImg,
  },
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const handleTouchStart = (event) => {
    setTouchStartX(event.targetTouches[0].clientX);
    setTouchEndX(event.targetTouches[0].clientX);
  };

  const handleTouchMove = (event) => {
    setTouchEndX(event.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    const swipeDistance = touchStartX - touchEndX;
    const minSwipeDistance = 45;

    if (swipeDistance > minSwipeDistance) {
      handleNext();
    } else if (swipeDistance < -minSwipeDistance) {
      handlePrev();
    }
  };

  useEffect(() => {
    if (isPaused) return undefined;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
    }, 3400);
    return () => clearInterval(timer);
  }, [isPaused]);

  const project = projects[currentIndex];

  return (
    <section className="projects-section">
      <h2 className="projects-title">My Projects</h2>
      <div
        className="slider-container"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="project-card">
          <div className="project-img">
            <img src={project.image} alt={project.title} />
          </div>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <button className="github-btn">
            <a href={project.github} target="_blank" rel="noreferrer">
              View on GitHub
            </a>
          </button>
        </div>
      </div>
      <div className="slider-dots">
        {projects.map((item, idx) => (
          <button
            key={item.title}
            type="button"
            className={`dot ${idx === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Open ${item.title}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
