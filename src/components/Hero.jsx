import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('AI & Machine Learning');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section className="hero">
      <div className="hero-grid">
        {/* Left Side: Branding and CTAs */}
        <div className="hero-container" style={{ margin: 0, padding: 0 }}>
          <span className="hero-tag">Build Smarter. Scale Faster.</span>
          <h1 className="hero-title">
            Innovate Without <span className="green-text">Limits.</span>
          </h1>
          <p className="hero-subheading">
            SNAB Innovations helps startups, businesses, and enterprises transform ideas into powerful digital products through AI, software development, cloud solutions, DevOps, and technology consulting.
          </p>

          <div className="hero-testimonial" style={{ marginBottom: '32px' }}>
            <div className="testimonial-avatar-wrapper">
              <svg className="avatar-svg" width="50" height="50" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="50" fill="#E6F2ED"/>
                <circle cx="50" cy="40" r="16" fill="#09543F"/>
                <path d="M50 58 C35 58, 25 72, 25 85 L75 85 C75 72, 65 58, 50 58 Z" fill="#064E3B"/>
              </svg>
            </div>
            <blockquote className="hero-quote">
              <p>
                "Their AI solutions transformed our customer support operations and allowed us to scale without limits."
              </p>
              <cite className="hero-cite">— Business Owner</cite>
            </blockquote>
          </div>

          <div className="hero-actions">
            <Link to="/contact" className="btn btn-primary">Book Consultation <span className="arrow-right">→</span></Link>
            <Link to="/services" className="btn btn-secondary">Explore Services</Link>
          </div>
        </div>

        {/* Right Side: Professional B2B Consultation Form Card */}
        <div className="hero-planner-card glass-card" style={{ padding: '36px' }}>
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '20px 0' }}>
              <div className="contact-icon" style={{ margin: '0 auto 20px', width: '60px', height: '60px' }}>✓</div>
              <h3 className="process-item-title" style={{ fontSize: '1.35rem', marginBottom: '12px' }}>Request Submitted</h3>
              <p className="grey-text" style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
                Thank you, <strong>{name}</strong>. We have received your consultation inquiry. A technical strategist will contact you at <strong>{email}</strong> within 24 business hours to set up our introductory session.
              </p>
              <button 
                className="btn btn-secondary" 
                style={{ marginTop: '24px', backgroundColor: '#FFFFFF' }}
                onClick={() => {
                  setSubmitted(false);
                  setName('');
                  setEmail('');
                  setMessage('');
                }}
              >
                Submit New Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <h3 className="process-item-title" style={{ fontSize: '1.35rem', color: 'var(--color-text-main)' }}>Request a Consultation</h3>
                <p className="grey-text" style={{ fontSize: '0.85rem', marginTop: '6px' }}>Let us know about your project requirements and target timeline.</p>
              </div>

              {/* Full Name */}
              <div className="planner-form-group">
                <label className="planner-form-label" htmlFor="b2b-name">Full Name</label>
                <input 
                  type="text" 
                  id="b2b-name"
                  className="form-input" 
                  required
                  placeholder="e.g. Jane Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              {/* Business Email */}
              <div className="planner-form-group">
                <label className="planner-form-label" htmlFor="b2b-email">Business Email</label>
                <input 
                  type="email" 
                  id="b2b-email"
                  className="form-input" 
                  required
                  placeholder="e.g. jane@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              {/* Desired Service Selection */}
              <div className="planner-form-group">
                <label className="planner-form-label" htmlFor="b2b-service">Desired Service</label>
                <select 
                  id="b2b-service"
                  className="planner-select"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  style={{ backgroundColor: '#FFFFFF', padding: '12px' }}
                >
                  <option value="AI & Machine Learning">AI & Machine Learning</option>
                  <option value="Software Development">Software Development</option>
                  <option value="Cloud & DevOps Solutions">Cloud & DevOps Solutions</option>
                  <option value="Technology Consulting">Technology Consulting</option>
                </select>
              </div>

              {/* Message Details */}
              <div className="planner-form-group">
                <label className="planner-form-label" htmlFor="b2b-message">Project Description</label>
                <textarea 
                  id="b2b-message"
                  className="form-input" 
                  rows="3"
                  placeholder="Please describe your product goals, engineering requirements, and timeline..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                className="btn btn-primary"
                style={{ width: '100%', padding: '14px', marginTop: '4px' }}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting Inquiry..." : "Request Consultation"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
