import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
  const [state, handleSubmit] = useForm("xojolqky");

  return (
    <section className="contact-section" id="contact">
      <div className="contact-grid">
        
        {/* Info Column */}
        <div className="contact-info-side">
          <span className="section-tag">Get in Touch</span>
          <h2 className="contact-info-title">Let's Turn Your Vision into Reality</h2>
          <p className="grey-text" style={{ fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '32px' }}>
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
              <div className="contact-value">
                <a href="mailto:info.snabinnovations@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>
                  info.snabinnovations@gmail.com
                </a>
              </div>
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
              <div className="contact-value">
                <a href="tel:9545556045" style={{ color: 'inherit', textDecoration: 'none' }}>9545556045</a> / <a href="tel:8767401706" style={{ color: 'inherit', textDecoration: 'none' }}>8767401706</a>
              </div>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="9" r="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <span className="contact-label">Office Address</span>
              <div className="contact-value" style={{ fontSize: '0.9rem', lineHeight: '1.5' }}>
                Office No. 5 or 6, Janki Plaza,<br />
                Dwarka Circle, Nashik - 422006
              </div>
            </div>
          </div>

          <div className="contact-item" style={{ marginBottom: '0' }}>
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

          {/* Styled Google Maps iframe integrated according to the theme */}
          <div 
            className="glass-card" 
            style={{ 
              marginTop: '32px', 
              borderRadius: '20px', 
              overflow: 'hidden', 
              border: '1px solid var(--color-border)',
              height: '240px',
              width: '100%',
              position: 'relative'
            }}
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d239.84197938085202!2d73.79708480301295!3d19.99243517548137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeafd1b3f8a81%3A0xe6711c4d916b72e9!2sJanki%20Plaza!5e0!3m2!1sen!2sin!4v1782675410861!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ 
                border: 0, 
                filter: 'grayscale(1) contrast(1.05) opacity(0.9)', 
                pointerEvents: 'auto',
                display: 'block'
              }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="strict-origin-when-cross-origin"
              title="SNAB Nashik Office Map Location"
            ></iframe>
          </div>
        </div>

        {/* Form Column */}
        <div>
          {state.succeeded ? (
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
                  placeholder="John Doe"
                />
                <ValidationError prefix="Name" field="name" errors={state.errors} style={{ color: '#EF4444', fontSize: '0.8rem', marginTop: '4px' }} />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="email">Work Email</label>
                <input 
                  className="form-input" 
                  type="email" 
                  id="email"
                  name="email" 
                  required 
                  placeholder="john@company.com"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} style={{ color: '#EF4444', fontSize: '0.8rem', marginTop: '4px' }} />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="projectType">How Can We Help?</label>
                <select 
                  className="form-input" 
                  id="projectType"
                  name="projectType"
                  defaultValue="ai"
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
                  placeholder="Tell us about the project goals, timelines, and key integrations..."
                ></textarea>
                <ValidationError prefix="Message" field="message" errors={state.errors} style={{ color: '#EF4444', fontSize: '0.8rem', marginTop: '4px' }} />
              </div>

              {state.errors && state.errors.length > 0 && (
                <div style={{ color: '#EF4444', fontSize: '0.85rem', marginBottom: '12px', fontWeight: '600' }}>
                  There was a validation error submitting your request. Please check fields.
                </div>
              )}

              <button 
                className="btn btn-primary" 
                type="submit" 
                disabled={state.submitting}
                style={{ width: '100%', marginTop: '10px', opacity: state.submitting ? 0.7 : 1, cursor: state.submitting ? 'not-allowed' : 'pointer' }}
              >
                {state.submitting ? 'Sending Request...' : 'Submit Request'} <span className="arrow-right">→</span>
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
