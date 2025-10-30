import React from 'react'
import '../styles/About.css'
import image from '../assets/image.png'

const About = () => {
  const stats = [
    { number: '10+', label: 'Projects Completed' }, 
    // { number: '3+', label: 'Years Experience' },
    { number: '100%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Support Available' },
    { number: '100%', label: 'Willingness to Learn'}
  ]

   // Function to view the CV
  const handleViewCV = () => {
    window.open('/Shakir_Ahamed_S.pdf', '_blank') // Opens in new tab
  }

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-header text-center">
              <h2 className="section-title">About Me</h2>
              <p className="section-subtitle">Get to know more about who I am</p>
            </div>
          </div>
        </div>
        
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-image">
              <div className="image-wrapper">
                <img src={image} alt="About Me" />
                {/* <div className="experience-badge">
                  <h3>3+</h3>
                  <p>Years of Experience</p>
                </div> */}
              </div>
            </div>
          </div>
          
          <div className="col-lg-6">
            <div className="about-content">
              <h3 className="about-title">I'm a Passionate Full Stack Developer</h3>
              
              <p className="about-text">
                
                  Hello! I'm Shakir Ahamed, a passionate and dedicated Electronics and Communication Engineering graduate with a strong interest in web development and programming. I am eager to grow, learn new technologies, and contribute to real-world projects with creativity and problem-solving skills.
                  <br /><br />
                  During my academic journey, I have built a solid foundation in programming languages such as <b>HTML, CSS, Bootstrap, JavaScript, Python</b>, frameworks like <b>React.js, Django</b> and Database like <b>SQLite, MySQL</b>. I am continuously exploring new tools and technologies to enhance my technical abilities and stay updated with industry trends.
                  <br /><br />
                  I believe in writing clean, efficient code and designing user-friendly interfaces. I enjoy working on projects that challenge me and help me grow both personally and professionally.

              </p>

              <p className="about-text">

                <b>EDUCATION :</b>
                <br /><br />
                <i>Al-Ameen Engineering College, Erode — B.E - ECE</i>
                <br />
                ( 2021 - 2025 )
                <br />
                <b>CGPA - 7.69</b>
                <br /><br />
                <i>Saratha Hr Sec School, Gobichettipalayam — SSLC</i>
                <br />  
                ( 2018 - 2019 )
                <br />
                <b>Percentage - 76 %</b>
                <br /><br />
                <i>Saratha Hr Sec School, Gobichettipalayam — HSC</i>
                <br />
                ( 2020 - 2021 )
                <br />
                <b>Percentage - 83 %</b>
               
              </p> 
              
              <div className="about-details">
                <div className="detail-item" style={{ fontSize: '18px', marginBottom: '8px' }}>
                  <strong>Details :</strong> 
                </div>
                <div className="detail-item">
                  <strong>Name:</strong> Shakir Ahamed S
                </div>
                <div className="detail-item">
                  <strong>Email:</strong> shakirahemeds260@gmail.com
                </div>
                <div className="detail-item">
                  <strong>Location:</strong> 19/1 , Mariyamman Kovil Street , <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Kalingiyam - 638453 , <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Gobichettipalayam. 
                </div>
                <div className="detail-item">
                  <strong>Freelance:</strong> Available
                </div>
              </div>
              
              <a href="/Shakir_Ahamed_S.pdf" download="Shakir_Ahamed_Resume.pdf">
                <button className="btn btn-primary about-btn">
                  Download CV
                </button>
              </a>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               <button
                  className="btn btn-primary about-btn"
                  onClick={handleViewCV}
                >
                  View CV
                </button>   

            </div>
          </div>
        </div>
        
        <br />

        <div className="row stats-row">
          {stats.map((stat, index) => (
            <div key={index} className="col-lg-3 col-md-6">
              <div className="stat-card">
                <h3 className="stat-number">{stat.number}</h3>
                <p className="stat-label">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About