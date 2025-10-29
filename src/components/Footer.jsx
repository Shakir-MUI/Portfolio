import React from 'react'
import '../styles/Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ]

  const services = [
    '1. Web Application Development',
    '2. UI/UX Design & Frontend Development',
    '3. Mobile-Friendly Web Apps',
    '4. Backend Development & Database Management',
    '5. Deployment & Maintenance'
  ]

  const socialLinks = [
    { name: 'LinkedIn', icon: 'fab fa-linkedin', url: 'https://www.linkedin.com/feed/' },
    { name: 'GitHub', icon: 'fab fa-github', url: 'https://github.com/Shakir-MUI' },
    { 
     name: 'Netlify', 
     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg',
     url: 'https://app.netlify.com/teams/shakir-mui/projects', 
     color: 'cyan' 
    }
    // { name: 'Twitter', icon: 'fab fa-twitter', url: '#' },
    // { name: 'Instagram', icon: 'fab fa-instagram', url: '#' }
  ]

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="footer-content">
              <h3 className="footer-title">Shakir Ahamed S</h3>
              <p className="footer-description">
                Full Stack Developer passionate about creating exceptional digital 
                experiences with modern web technologies. Let's build something amazing together.
              </p>
              <div className="social-links">
                <div className="social-icons">
                  {socialLinks.map((social, index) => (
                    <a 
                      key={index} 
                      href={social.url} 
                      className="social-link"
                      style={{'--social-color': social.color}}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {social.icon.endsWith('.svg') ? (
                        <img 
                          src={social.icon} 
                          alt={social.name} 
                          style={{ width: '22px', height: '22px', filter: 'drop-shadow(0 0 2px var(--social-color))' }} 
                        />
                      ) : (
                        <i className={social.icon}></i>
                    )}
                      {/* <i className={social.icon}></i> */}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-lg-2 col-md-6">
            <div className="footer-content">
              <h4 className="footer-subtitle">Quick Links</h4>
              <ul className="footer-links">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault()
                        document.querySelector(link.href).scrollIntoView({
                          behavior: 'smooth'
                        })
                      }}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="col-lg-3 col-md-6">
            <div className="footer-content">
              <h4 className="footer-subtitle">Services</h4>
              <ul className="footer-links">
                {services.map((service, index) => (
                  <li key={index}>
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="col-lg-3 col-md-6">
            <div className="footer-content">
              <h4 className="footer-subtitle">Get In Touch</h4>
              <div className="contact-info">
                <p><i className="fas fa-envelope"></i> shakirahameds260@gmail.com</p>
                <p><i className="fas fa-phone"></i> +91 9952876617</p>
                <p><i className="fas fa-map-marker-alt"></i> Kalingiyam, Gobichettipalayam</p>
              </div>
              <button 
                className="btn btn-primary back-to-top"
                onClick={scrollToTop}
              >
                <i className="fas fa-arrow-up"></i> Back to Top
              </button>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="row">
            <div className="col-md-6">
              <p className="copyright">
                © {currentYear} Shakir. All rights reserved.
              </p>
            </div>
            <div className="col-md-6 text-md-end">
              <p className="footer-note">
                Made with ❤️ using React & Bootstrap
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer