import React, { useState, useEffect } from 'react'
import '../styles/Hero.css'
import profileImg from '../assets/profile.png'
import image from '../assets/image.png'

const Hero = () => {
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)

  const roles = ['Full Stack Developer', 'Frontend Developer', 'Backend Developer']

  useEffect(() => {
    const handleTyping = () => {
      const current = loopNum % roles.length
      const fullText = roles[current]

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
      )

      setTypingSpeed(isDeleting ? 30 : 150)

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 500)
      } else if (isDeleting && text === '') {
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
      }
    }

    const timer = setTimeout(handleTyping, typingSpeed)
    return () => clearTimeout(timer)
  }, [text, isDeleting, loopNum, typingSpeed, roles])

  return (
    <section id="home" className="hero-section">
      <div className="hero-background">
        <div className="floating-shapes">
          <div className="shape shape1"></div>
          <div className="shape shape2"></div>
          <div className="shape shape3"></div>
          <div className="shape shape4"></div>
        </div>
      </div>
      
      <div className="container">
        <div className="row align-items-center min-vh-100">
          <div className="col-lg-6">
            <div className="hero-content">
              <h1 className="hero-title">
                Hi,I'm <span className="highlight">Shakir Ahamed S</span>
              </h1>
              <h2 className="hero-subtitle">
                I'm a <span className="typing-text">{text}</span>
                <span className="cursor">|</span>
              </h2>
              <p className="hero-description">
                Passionate about creating exceptional digital experiences with modern 
                web technologies. I turn ideas into beautiful, functional applications.
              </p>
              <div className="hero-buttons">
                <button 
                  className="btn btn-primary hero-btn"
                  onClick={() => document.getElementById('projects').scrollIntoView({behavior: 'smooth'})}
                >
                  View My Work
                </button>
                <button 
                  className="btn btn-outline-light hero-btn"
                  onClick={() => document.getElementById('contact').scrollIntoView({behavior: 'smooth'})}
                >
                  Get In Touch
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="hero-image">
              <div className="profile-container">
                <div className="profile-image">
                  <img src={profileImg} alt="Profile" />
                </div>
                <div className="tech-icons">
                  <div className="tech-icon">⚛️</div>
                  <div className="tech-icon">📱</div>
                  <div className="tech-icon">💻</div>
                  <div className="tech-icon">🎨</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero