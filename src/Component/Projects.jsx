import React, { useState } from "react";
import "./Projects.css";

// Correct image imports
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
      "A Python-based Flappy Bird game developed using Tkinter and Pygame. Features smooth animations, collision detection, and increasing difficulty over time for an engaging experience.",
    github: "https://github.com/HIMANSHU-KUSHWAHA-2004/flappy_bird.git",
    image: flappyImg,
  },
  {
    title: "Stock Portfolio Tracker",
    description:
      "A Python application that uses yfinance and public APIs to track real-time stock performance, portfolio gains/losses, and visualize holdings with graphs and summaries.",
    github: "https://github.com/HIMANSHU-KUSHWAHA-2004/CodeAlpha_Task_2_intern.git",
    image: stockImg,
  },
  {
    title: "Band Management System",
    description:
      "A terminal-based management system built in Python that stores and manages band member info, schedules, and performances using structured JSON data.",
    github: "https://github.com/HIMANSHU-KUSHWAHA-2004/Bank_management_system.git",
    image: bankImg,
  },
  {
    title: "Python Music Player",
    description:
      "A fully functional desktop music player app built with Tkinter and Pygame. Supports audio file loading, play/pause/stop controls, and basic UI interactions.",
    github: "https://github.com/HIMANSHU-KUSHWAHA-2004/musix.git",
    image: musicImg,
  },
  {
    title: "Sudoku Solver",
    description:
      "A C++ program that solves Sudoku puzzles using backtracking algorithm. Efficiently finds a valid solution for any solvable grid configuration.",
    github: "https://github.com/HIMANSHU-KUSHWAHA-2004/Prodigy_Task_4_Intern.git",
    image: sudokuImg,
  },
  {
    title: "NoFap Streak Tracker",
    description:
      "A streak-tracking productivity app developed using React for the frontend and FastAPI for the backend. Includes calendar marking, certificate generation, and theme toggling.",
    github: "https://github.com/HIMANSHU-KUSHWAHA-2004/NoFap_Project.git",
    image: nofapImg,
  },
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const project = projects[currentIndex];

  return (
    <section className="projects-section">
      <h2 className="projects-title">My Projects</h2>
      <div className="slider-container">
        <button className="slider-btn left" onClick={handlePrev}>
          ‹
        </button>
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
        <button className="slider-btn right" onClick={handleNext}>
          ›
        </button>
      </div>
    </section>
  );
};

export default Projects;
