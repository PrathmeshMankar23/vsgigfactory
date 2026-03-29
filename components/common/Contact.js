'use client'

import { useRouter } from 'next/navigation'

const Contact = () => {
  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Get form data
    const formData = {
      name: e.target.name?.value || '',
      companyName: e.target.companyName?.value || '',
      email: e.target.email.value,
      phone: e.target.phone.value,
      message: e.target.message.value
    }
    
    // Here you would normally send the data to your backend
    console.log('Contact form submitted:', formData)
    
    // Show success message (you can replace this with a proper toast/notification)
    alert('Thank you for your message! We will get back to you soon.')
    
    // Reset form
    e.target.reset()
  }

  const handleBack = () => {
    router.back()
  }

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-header">
          <div className="contact-header-content">
            <button onClick={handleBack} className="back-button">
              <span className="back-arrow">←</span>
              Back
            </button>
            <h2 className="contact-title">Get In Touch</h2>
          </div>
          <p className="contact-subtitle">
            Have a project in mind? We'd love to hear about it. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="contact-form-container">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Name <span className="optional">(Optional)</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-input"
                  placeholder="Your name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="companyName" className="form-label">
                  Company Name <span className="optional">(Optional)</span>
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  className="form-input"
                  placeholder="Your company name"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email <span className="required">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input required"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone" className="form-label">
                  Phone <span className="required">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="form-input required"
                  placeholder="+1 (555) 123-4567"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">
                Message <span className="required">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                className="form-textarea required"
                placeholder="Tell us about your project..."
                rows="6"
                required
              ></textarea>
            </div>

            <div className="form-actions">
              <button type="submit" className="submit-btn">
                Send Message
                <span className="btn-arrow">→</span>
              </button>
            </div>
          </form>
        </div>

        <div className="contact-info">
          <div className="info-item">
            <div className="info-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M3 5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21 10c0 7-9 13-9 13s9-7 9-13-9-7-9-13-9-7 9-13 9z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 17c-1.5 0-3-1.5-3-1.5s1.5-3 1.5-3 3 1.5 3 1.5-1.5 3-1.5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="info-content">
              <h4>Email</h4>
              <p>info@gigfactory.com</p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M3 5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21 10c0 7-9 13-9 13s9-7 9-13-9-7-9-13-9-7 9-13 9z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 17c-1.5 0-3-1.5-3-1.5s1.5-3 1.5-3 3 1.5 3 1.5-1.5 3-1.5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="info-content">
              <h4>Phone</h4>
              <p>+1 (555) 123-4567</p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M17.657 16.657L13.414 20.9a1 1 0 01-1.414 0l-4.243-4.243a1 1 0 01-1.414 0l4.243 4.243a1 1 0 001.414 0l4.243-4.243a1 1 0 011.414 1.414l-4.243 4.243a1 1 0 01-1.414 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 3a5 5 0 110 10h8M8 3v10m0 0l8-10m-8 0l8 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="info-content">
              <h4>Office</h4>
              <p>123 Construction Ave, Suite 100<br />City, State 12345</p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C6.48 2 2 8.52 2 12.8 2 17.52 2 22.48 2 22 17.52C22 14.48 22 14.48 22 8.52 12 2 8.52 6.48 2 6.48 2 4.48 2 4.48 2 2 2C22 4.48 2 2 4.48 2 2 6.48 2 2 6.48 2 2 8.52 12 2 8.52 12.48 2 12 2 12 2 14.48 2 14.48 2 14.48 12 2 12 2 17.52 2 17.52 12 2 12 2 17.52 2 17.52 12 2 12 2 22 17.52 22 17.52 12 2 12 2 22 17.52 22 17.52 12 2 12 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M15 7h6a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2V9a2 2 0 002-2h-8a2 2 0 002 2v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 11a1 1 0 011-1h4a1 1 0 002 1v4a1 1 0 002-1H9a1 1 0 002-1v-4a1 1 0 002-1h4a1 1 0 002 1v-1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="info-content">
              <h4>Working Hours</h4>
              <p>Mon - Fri: 9:00 AM - 6:00 PM<br />Sat - Sun: Closed</p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M21 10c0 7-9 13-9 13s9-7 9-13-9-7-9-13-9-7 9-13 9z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 17c-1.5 0-3-1.5-3-1.5s1.5-3 1.5-3 3 1.5 3 1.5-1.5 3-1.5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="info-content">
              <h4>Support</h4>
              <p>24/7 Emergency Service<br />support@gigfactory.com</p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M21 10c0 7-9 13-9 13s9-7 9-13-9-7-9-13-9-7 9-13 9z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 17c-1.5 0-3-1.5-3-1.5s1.5-3 1.5-3 3 1.5 3 1.5-1.5 3-1.5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="info-content">
              <h4>Follow Us</h4>
              <p>LinkedIn | Twitter | Instagram</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
