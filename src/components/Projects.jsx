import React, { useState } from "react";
import "../styles/Projects.css";
import exp from "../assets/expense.png";
import movie from "../assets/movie.png";
import portf from "../assets/portfolio.png";
import restarent from "../assets/restarunt.png";
import weather from "../assets/weather.png";
import crud from "../assets/crud_card.png";
import tcrud from "../assets/tkintercrud.png";
import tbill from "../assets/tkinterbill.png";
import musicApp from "../assets/musicapp.png";
import edtechApp from "../assets/edtech.png";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "The Golden Bite Restaurant",
      description:
        "A visually appealing and interactive website designed with HTML, CSS, and JavaScript with React Js Framework. It features menus, dish details, and smooth navigation to enhance user experience. This project demonstrates front-end design and UI development skills.",
      image: restarent,
      category: "frontend",
      technologies: ["React", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/Shakir-MUI/Restaurant.git",
      live: "https://restaurantidm.netlify.app/",
    },
    {
      id: 2,
      title: "Movies Hub",
      description:
        "A sleek movie browsing platform built using HTML, CSS, and JavaScript with API integration. Users can search, filter, and explore various movies effortlessly. This project highlights working with APIs and dynamic content rendering.",
      image: movie,
      category: "frontend",
      technologies: [
        "React",
        "HTML",
        "CSS",
        "JavaScript",
        "Movie API (like TMDB API )",
      ],
      github: "https://github.com/Shakir-MUI/Movie-Website.git",
      live: "https://moviewebsiteidm.netlify.app/",
    },
    {
      id: 3,
      title: "Portfolio",
      description:
        "A personal portfolio website showcasing skills, projects, and experience using HTML, CSS, and JavaScript. It offers a clean layout and professional presentation to impress recruiters and clients. This project reflects design and content organization abilities.",
      image: portf,
      category: "frontend",
      technologies: ["React", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/Shakir-MUI/Portfolio",
      live: "https://shakirportfolio.netlify.app/",
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description:
        "A weather information dashboard built with HTML, CSS, JavaScript, and OpenWeatherMap API. Users can search for cities and get real-time weather data including temperature and humidity. This project focuses on API integration and responsive UI.",
      image: weather,
      category: "frontend",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Shakir-MUI/Weather-Dashboard.git",
      live: "https://weatherdasboardidm.netlify.app/",
    },
    {
      id: 5,
      title: "Expense Tracker",
      description:
        "A user-friendly expense tracker developed with HTML, CSS, and JavaScript. It allows users to add, manage, and view expenses with instant updates. This project showcases practical problem-solving and client-side data handling.",
      image: exp,
      category: "frontend",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Shakir-MUI/Expense-Tracker.git",
      live: "https://expensetrackeridm.netlify.app/",
    },
    {
      id: 6,
      title: "CRUD Card",
      description:
        "The CRUD Card Project is a web app built using HTML, CSS, and JavaScript with a Mock API. It allows users to create, view, update, and delete data dynamically through stylish interactive cards. This project showcases frontend development, API integration, and responsive UI design.",
      image: crud,
      category: "frontend",
      technologies: ["HTML", "CSS3", "JavaScript", "Mock API"],
      github: "https://github.com/Shakir-MUI/CRUD_Card",
      live: "https://crudcardproj.netlify.app/",
    },
    {
      id: 7,
      title: " Tkinter CRUD ",
      description:
        "The Tkinter CRUD Project is a desktop application built using Python and Tkinter. It allows users to create, view, update, and delete data through a graphical user interface. This project showcases Python programming skills and GUI development.",
      image: tcrud,
      category: "backend",
      technologies: ["Python", "Tkinter"],
      github: "https://github.com/Shakir-MUI/Tkinter_CRUD",
      live: "desktop",
    },
    {
      id: 8,
      title: "Tkinter Billing System",
      description:
        "The Tkinter Billing System is a desktop application built using Python and Tkinter. It allows users to manage billing and invoicing through a graphical user interface. This project showcases Python programming skills and GUI development.",
      image: tbill,
      category: "backend",
      technologies: ["Python", "Tkinter"],
      github: "https://github.com/Shakir-MUI/Tkinter_Billing",
      live: "desktop",
    },
    {
      id: 9,
      title: "Music Streaming Web App",
      description:
        "A full-stack Music Streaming Web Application developed with React (Vite) for the frontend and Django REST Framework for the backend. Users can search songs via the iTunes Search API, play previews, fetch lyrics dynamically, and manage favorites with authentication. The backend uses PostgreSQL and is deployed on Render, while the frontend is deployed on Vercel.",
      image: musicApp,
      category: "fullstack",
      technologies: [
        "React.js (Vite)",
        "Django REST Framework",
        "PostgreSQL",
        "Axios",
        "iTunes Search API",
        "Lyrics.ovh API",
        "Render",
        "Vercel",
      ],
      github: {
        frontend: "https://github.com/Shakir-MUI/Music-App-FS-Frontend",
        backend: "https://github.com/Shakir-MUI/Music-App-FS-Backend",
      },
      live: "https://music-app-fs-frontend.vercel.app/home",
    },
    {
      id: 10,
      title: "EdTech Learning Platform",
      description:
        "A production-ready full-stack EdTech Learning Management System built using React (Vite) and Django REST Framework. The platform features secure JWT-based authentication, structured course-topic-lesson hierarchy, interactive quizzes with scoring logic, real-time progress tracking, and integrated Text-to-Speech functionality using the Web Speech API for accessibility. The backend is powered by PostgreSQL and deployed on Render, while the frontend is deployed on Vercel with environment-based API configuration and secure CORS handling.",
      image: edtechApp,
      category: "fullstack",
      technologies: [
        "React.js (Vite)",
        "Django REST Framework",
        "PostgreSQL",
        "JWT Authentication",
        "Web Speech API (Text-to-Speech)",
        "Axios",
        "RESTful APIs",
        "Role-Based Access Control",
        "Render (Backend Deployment)",
        "Vercel (Frontend Deployment)",
        "CORS Configuration",
        "Gunicorn + Whitenoise",
      ],
      github: {
        frontend: "https://github.com/Shakir-MUI/EdTech-FS-Frontend",
        backend: "https://github.com/Shakir-MUI/EdTech-FS-Backend",
      },
      live: "https://ed-tech-fs-frontend.vercel.app/",
    },
  ];

  const filterButtons = [
    { label: "All Projects", value: "all" },
    { label: "Frontend", value: "frontend" },
    { label: "Backend", value: "backend" },
    { label: "Full Stack", value: "fullstack" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-header text-center">
              <h2 className="section-title">My Projects</h2>
              <p className="section-subtitle">
                Some of my recent work and personal projects
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="filter-buttons text-center">
              {filterButtons.map((button, index) => (
                <button
                  key={index}
                  className={`filter-btn ${activeFilter === button.value ? "active" : ""}`}
                  onClick={() => setActiveFilter(button.value)}
                >
                  {button.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-actions">
                    {typeof project.github === "string" ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline-light btn-sm"
                      >
                        <i className="fab fa-github"></i> Code
                      </a>
                    ) : (
                      <div className="d-flex gap-2 flex-wrap">
                        <a
                          href={project.github.frontend}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-outline-light btn-sm"
                        >
                          <i className="fab fa-github"></i> Frontend
                        </a>

                        <a
                          href={project.github.backend}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-outline-light btn-sm"
                        >
                          <i className="fab fa-github"></i> Backend
                        </a>
                      </div>
                    )}
                    {project.live === "desktop" ? (
                      <button
                        className="btn btn-primary btn-sm"
                        onClick={() =>
                          alert(
                            "⚠️ This project is a Desktop GUI. You can copy the code and run it in your code editor on your laptop. Thank You ✨",
                          )
                        }
                      >
                        <i className="fas fa-external-link-alt"></i> Live Demo
                      </button>
                    ) : (
                      <a
                        href={project.live}
                        className="btn btn-primary btn-sm"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fas fa-external-link-alt"></i> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <br />

        <div className="row">
          <div className="col-12 text-center">
            <a
              href="https://github.com/Shakir-MUI?tab=repositories"
              target="_blank"
            >
              <button className="btn btn-primary btn-lg">
                View All Projects on GitHub
              </button>
            </a>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-12 text-center">
            <a
              href="https://app.netlify.com/teams/shakir-mui/projects"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn btn-primary btn-lg">
                View All Projects on Netlify
              </button>
            </a>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-12 text-center">
            <a
              href="https://vercel.com/shakir-ahameds-projects"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn btn-primary btn-lg">
                View All Projects on Vercel
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
