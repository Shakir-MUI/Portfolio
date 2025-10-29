import React, { useState } from 'react'
import '../styles/Projects.css'
import exp from '../assets/expense.png'
import movie from '../assets/movie.png'
import portf from '../assets/portfolio.png'
import restarent from '../assets/restarunt.png'
import weather from '../assets/weather.png'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  
  const projects = [
    {
      id: 1,
      title: 'The Golden Bite Restaurant',
      description: 'A visually appealing and interactive website designed with HTML, CSS, and JavaScript with React Js Framework. It features menus, dish details, and smooth navigation to enhance user experience. This project demonstrates front-end design and UI development skills.',
      image: restarent,
      category: 'frontend',
      technologies: ['React', 'HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/Shakir-MUI/Restaurant.git',
      live: 'https://restaurantidm.netlify.app/'
    },
    {
      id: 2,
      title: 'Movies Hub',
      description: 'A sleek movie browsing platform built using HTML, CSS, and JavaScript with API integration. Users can search, filter, and explore various movies effortlessly. This project highlights working with APIs and dynamic content rendering.',
      image: movie,
      category: 'frontend',
      technologies: ['React', 'HTML', 'CSS', 'JavaScript', 'Movie API (like OMDB API )'],
      github: 'https://github.com/Shakir-MUI/Movie-Website.git',
      live: 'https://moviewebsiteidm.netlify.app/'
    },
    {
      id: 3,
      title: 'Portfolio',
      description: 'A personal portfolio website showcasing skills, projects, and experience using HTML, CSS, and JavaScript. It offers a clean layout and professional presentation to impress recruiters and clients. This project reflects design and content organization abilities.',
      image: portf,
      category: 'frontend',
      technologies: ['React', 'HTML', 'CSS', 'JavaScript'],
      github: '#',
      live: '#'
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      description: 'A weather information dashboard built with HTML, CSS, JavaScript, and OpenWeatherMap API. Users can search for cities and get real-time weather data including temperature and humidity. This project focuses on API integration and responsive UI.',
      image: weather,
      category: 'frontend',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/Shakir-MUI/Weather-Dashboard.git',
      live: 'https://weatherdasboardidm.netlify.app/'
    },
    {
      id: 5,
      title: 'Expense Tracker',
      description: 'A user-friendly expense tracker developed with HTML, CSS, and JavaScript. It allows users to add, manage, and view expenses with instant updates. This project showcases practical problem-solving and client-side data handling.',
      image: exp,
      category: 'frontend',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/Shakir-MUI/Expense-Tracker.git',
      live: 'https://expensetrackeridm.netlify.app/'
    }
    // {
    //   id: 6,
    //   title: 'Portfolio Website',
    //   description: 'Responsive portfolio website with modern design and animations',
    //   image: 'https://via.placeholder.com/400x300/1ABC9C/ffffff?text=Portfolio',
    //   category: 'frontend',
    //   technologies: ['React', 'Bootstrap', 'CSS3'],
    //   github: '#',
    //   live: '#'
    // }
  ]

  const filterButtons = [
    { label: 'All Projects', value: 'all' },
    { label: 'Frontend', value: 'frontend' },
    { label: 'Backend', value: 'backend' },
    { label: 'Full Stack', value: 'fullstack' }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-header text-center">
              <h2 className="section-title">My Projects</h2>
              <p className="section-subtitle">Some of my recent work and personal projects</p>
            </div>
          </div>
        </div>
        
        <div className="row">
          <div className="col-12">
            <div className="filter-buttons text-center">
              {filterButtons.map((button, index) => (
                <button
                  key={index}
                  className={`filter-btn ${activeFilter === button.value ? 'active' : ''}`}
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
                      <a href={project.github} className="btn btn-outline-light btn-sm">
                        <i className="fab fa-github"></i> Code
                      </a>
                      <a href={project.live} className="btn btn-primary btn-sm">
                        <i className="fas fa-external-link-alt"></i> Live Demo
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-technologies">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              
            </div>
          ))}
        </div>
        
        <br />

        <div className="row">
          <div className="col-12 text-center">
            <a href="https://github.com/Shakir-MUI?tab=repositories" target='_blank'>
              <button className="btn btn-primary btn-lg">
                View All Projects on GitHub
              </button>
            </a>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-12 text-center">
            <a href="https://app.netlify.com/teams/shakir-mui/projects" target='_blank'>
              <button className="btn btn-primary btn-lg">
                View All Projects on Netlify
              </button>
            </a>
            
          </div>
        </div>
      
      </div>
    </section>
  )
}

export default Projects