import React from 'react';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <span className="hero-tag">Innovating Today. Empowering Tomorrow.</span>
        <h1 className="hero-title">
          Build Smarter. <span className="green-text">Scale Faster.</span><br />
          Innovate Without Limits.
        </h1>
        <p className="hero-subheading">
          SNAB Innovations helps startups, businesses, and enterprises transform ideas into powerful digital products through AI, software development, cloud solutions, DevOps, and technology consulting.
        </p>
        
        <div className="hero-testimonial">
          <div className="testimonial-avatar-wrapper">
            <svg className="avatar-svg" width="60" height="60" viewBox="0 0 100 100">
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
          <a href="#contact" className="btn btn-primary">Get Started <span className="arrow-right">→</span></a>
          <a href="#contact" className="btn btn-secondary">Book a Free Consultation</a>
        </div>
      </div>
    </section>
  );
}
