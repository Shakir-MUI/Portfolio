import React, { useState, useEffect } from 'react'
import '../styles/Skills.css'

const Skills = () => {
  const [animated, setAnimated] = useState(false)

  const skills = [
    { name: 'HTML5', percentage: 95, color: '#e34f26' },
    { name: 'CSS3', percentage: 90, color: '#1572b6' },
    { name: 'Bootstrap', percentage: 85, color: '#f656e9ff' },
    { name: 'JavaScript', percentage: 88, color: '#f7df1e' },
    { name: 'React.js', percentage: 85, color: '#61dafb' },
    { name: 'Python', percentage: 90, color: '#216a7eff' },
    { name: 'SQLite', percentage: 88, color: '#e38abbfd' },
    { name: 'My SQL', percentage: 85, color: '#5fe685ff' },
    { name: 'Django', percentage: 89, color: '#855fe6ff' },

    
    // { name: 'Node.js', percentage: 80, color: '#339933' },
    // { name: 'Python', percentage: 75, color: '#3776ab' },
    // { name: 'MongoDB', percentage: 70, color: '#47a248' },
    // { name: 'Git', percentage: 85, color: '#f05032' }
  ]

  const tools = [
    { name: 'VS Code', icon: '💻' },
    { name: 'Firebase', icon: '🔥'},
    { name: 'GitHub', icon: '🐙'},
    { name: 'API Handling', icon: '🔗'},
    { name: 'Netlify', icon: '🚀'},
    { name: 'Vercel', icon: '⚡'},
    // { name: 'Figma', icon: '🎨' },
    // { name: 'Photoshop', icon: '🖼️' },
    // { name: 'Postman', icon: '📮' },
    // { name: 'Docker', icon: '🐳' },
    // { name: 'AWS', icon: '☁️' }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAnimated(true)
        }
      },
      { threshold: 0.3 }
    )

    const skillsSection = document.getElementById('skills')
    if (skillsSection) {
      observer.observe(skillsSection)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-header text-center">
              <h2 className="section-title">My Skills</h2>
              <p className="section-subtitle">Technologies and tools I work with</p>
            </div>
          </div>
        </div>
        
        <div className="row">
          <div className="col-lg-8">
            <div className="skills-content">
              <h3 className="skills-subtitle">Technical Skills</h3>
              <div className="skills-list">
                {skills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.percentage}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress"
                        style={{
                          width: animated ? `${skill.percentage}%` : '0%',
                          backgroundColor: skill.color,
                          transition: 'width 2s ease-in-out'
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="col-lg-4">
            <div className="tools-content">
              <h3 className="skills-subtitle">Tools & Software</h3>
              <div className="tools-grid">
                {tools.map((tool, index) => (
                  <div key={index} className="tool-item">
                    <div className="tool-icon">{tool.icon}</div>
                    <span className="tool-name">{tool.name}</span>
                  </div>
                ))}
              </div>
              
              <div className="certifications">
                <h4 className="cert-title">Certifications</h4>
                <div className="cert-item">
                  <div className="cert-icon">🏆</div>
                  <div className="cert-info">
                    <h5>C Language Certification</h5>
                    <p>C CUBE Technologies - 2024</p>
                  </div>
                </div>
                <div className="cert-item">
                  <div className="cert-icon">🎓</div>
                  <div className="cert-info">
                    <h5>AI Basics Certification</h5>
                    <p>MindLuster - 2024</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills