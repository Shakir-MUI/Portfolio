import React, { useState, useEffect } from 'react'
import '../styles/Header.css'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const smoothScroll = (target) => {
    const element = document.getElementById(target)
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container">
        <a className="navbar-brand" href="#home">
          <span className="brand-text">Portfolio</span>
        </a>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" onClick={() => smoothScroll('home')}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => smoothScroll('about')}>About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => smoothScroll('skills')}>Skills</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => smoothScroll('projects')}>Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => smoothScroll('contact')}>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header