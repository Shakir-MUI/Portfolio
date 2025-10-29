import React, { useState } from 'react'
import '../styles/Contact.css'
import emailjs from 'emailjs-com'

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [successMsg, setSuccessMsg] = useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSuccessMsg('')

    const serviceId = 'service_0xyfyva'     // ← replace with your service ID
    const templateId = 'template_xv81pn9'   // ← replace with your template ID
    const publicKey = 't0RXzAG_7AB0ORuvu'        // ← replace with your public/user ID

    // templateParams keys must match the variables you used in the EmailJS template
    const templateParams = {
      from_name: formData.from_name,
      from_email: formData.from_email,
      subject: formData.subject,
      message: formData.message,
      reply_to: formData.from_email // optional, useful to set reply-to
    }

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        setSuccessMsg('✅ Your message was successfully sent!')
        setFormData({ from_name: '', from_email: '', subject: '', message: '' })

        // Auto Hide message after 3 seconds
        setTimeout(() => {
          setSuccessMsg('')
        },3000)
      })
      .catch((err) => {
        console.error('EmailJS error:', err)
        setSuccessMsg('❌ Something went wrong. Please try again later.')

        // Auto hide message after 3 seconds
        setTimeout(() => {
          setSuccessMsg('')
        },3000)
      })
      .finally(() => setIsSubmitting(false))
  }

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'shakirahameds260@gmail.com',
      link: 'https://mail.google.com/mail/?view=cm&fs=1&to=shakirahameds260@gmail.com',
      target: '_blank'
    },
    {
      icon: '📱',
      title: 'Phone',
      value: '+91 9952876617',
      link: 'https://api.whatsapp.com/send?phone=919952876617&text=Hello',
      target: '_blank'
    },
    {
      icon: '📍',
      title: 'Location',
      value: ' Kalingiyam , Gobichettipalayam ',
      link: 'https://maps.app.goo.gl/C19KfWCDKh9qUns98',
      target: '_blank'
    }
  ]

  const socialLinks = [
    { name: 'LinkedIn', icon: 'fab fa-linkedin', url: 'https://www.linkedin.com/feed/', color: '#0077b5' },
    { name: 'GitHub', icon: 'fab fa-github', url: 'https://github.com/Shakir-MUI', color: '#333' },
    // { name: 'Netlify', icon: 'fab fa-netlify', url:'https://app.netlify.com/teams/shakir-mui/projects', color: '#00c7b7' },
    { 
     name: 'Netlify', 
     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg',
     url: 'https://app.netlify.com/teams/shakir-mui/projects', 
     color: 'cyan' 
    }
    // { name: 'Twitter', icon: 'fab fa-twitter', url: 'https://twitter.com/Shakir_MUI', color: '#1da1f2' },
    // { name: 'Instagram', icon: 'fab fa-instagram', url: 'https://www.instagram.com/shakirahameds260/', color: '#e4405f' }
  ]

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-header text-center">
              <h2 className="section-title">Get In Touch</h2>
              <p className="section-subtitle">Let's discuss your next project</p>
            </div>
          </div>
        </div>
        
        <div className="row">
          <div className="col-lg-8">
            <div className="contact-form-wrapper">
              <h3 className="form-title">Send Me A Message</h3>
              <form onSubmit={handleSubmit} className="contact-form p-4 bg-light rounded shadow">
                <h3 className="mb-4 text-center fw-bold">Send Me A Message</h3>

                <div className="mb-3">
                  <input
                    type="text"
                    name="from_name"
                    value={formData.from_name}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Your Name "
                    required
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="email"
                    name="from_email"
                    value={formData.from_email}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Your Email "
                    required
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Subject "
                    required
                  />
                </div>

                <div className="mb-4">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-control"
                    rows="6"
                    placeholder="Your Message "
                    required
                  ></textarea>
                </div>

                <div className="text-center">
                  <button 
                    type="submit" 
                    className="btn btn-primary px-4 py-2 fw-semibold"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2"></span>
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </div>

                {successMsg && (
                  <p className="text-success text-center mt-3 fw-semibold">
                    {successMsg}
                  </p>
                )}
              </form>
            </div>
          </div>
          
          <div className="col-lg-4">
            <div className="contact-info">
              <h3 className="info-title">Contact Information</h3>
              <p className="info-description">
                Feel free to reach out to me through any of these channels. 
                I'm always open to discussing new opportunities and projects.
              </p>
              
              <div className="contact-details">
                {contactInfo.map((info, index) => (
                  <div key={index} className="contact-item">
                    <div className="contact-icon">{info.icon}</div>
                    <div className="contact-text">
                      <h5>{info.title}</h5>
                      <a href={info.link}>{info.value}</a>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="social-links">
                <h4>Follow Me</h4>
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
        </div>
      </div>
    </section>
  )
}

export default Contact