import React, { useState } from 'react';

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'ai',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate submission
    setFormSubmitted(true);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-grid">
        
        {/* Info Column */}
        <div className="contact-info-side">
          <span className="section-tag">Get in Touch</span>
          <h2 className="contact-info-title">Let's Turn Your Vision into Reality</h2>
          <p className="grey-text" style={{ fontSize: '1.05rem', lineHeight: '1.7' }}>
            Whether you have a specific software spec ready to build or just want to explore how AI can automate your operations, our consulting team is here to help.
          </p>
          
          <div className="contact-item">
            <div className="contact-icon">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22 6l-10 7L2 6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <span className="contact-label">Email</span>
              <div className="contact-value">info@snabinnovations.com</div>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <span className="contact-label">Phone</span>
              <div className="contact-value">+91-XXXXXXXXXX</div>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 6v6l4 2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <span className="contact-label">Business Hours</span>
              <div className="contact-value">Monday – Friday: 9:00 AM – 6:00 PM</div>
            </div>
          </div>
        </div>

        {/* Form Column */}
        <div>
          {formSubmitted ? (
            <div className="contact-form" style={{ textAlign: 'center', padding: '60px 40px' }}>
              <div className="contact-icon" style={{ margin: '0 auto 24px', width: '60px', height: '60px' }}>✓</div>
              <h3 className="process-detail-title">Request Submitted!</h3>
              <p className="grey-text" style={{ marginTop: '12px' }}>
                Thank you for reaching out. A technology strategist from SNAB Innovations will review your message and contact you within 24 hours.
              </p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3 className="process-item-title" style={{ fontSize: '1.25rem', marginBottom: '8px' }}>Schedule a Consultation</h3>
              
              <div className="form-group">
                <label className="form-label" htmlFor="name">Your Name</label>
                <input 
                  className="form-input" 
                  type="text" 
                  id="name"
                  name="name" 
                  required 
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="email">Work Email</label>
                <input 
                  className="form-input" 
                  type="email" 
                  id="email"
                  name="email" 
                  required 
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@company.com"
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="projectType">How Can We Help?</label>
                <select 
                  className="form-input" 
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                >
                  <option value="ai">AI & Machine Learning Solutions</option>
                  <option value="software">Custom Software Development</option>
                  <option value="web">Web & E-Commerce Platforms</option>
                  <option value="mobile">Mobile App Development</option>
                  <option value="cloud">Cloud Migration & DevOps</option>
                  <option value="other">General Tech Consulting</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="message">Briefly Outline Your Idea</label>
                <textarea 
                  className="form-input" 
                  id="message"
                  name="message" 
                  rows="4" 
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about the project goals, timelines, and key integrations..."
                ></textarea>
              </div>

              <button className="btn btn-primary" type="submit" style={{ width: '100%', marginTop: '10px' }}>
                Submit Request <span className="arrow-right">→</span>
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
