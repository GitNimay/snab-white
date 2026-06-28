import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
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

        {/* Right Side: Clean Textual Core Focus Card */}
        <div 
          className="hero-planner-card glass-card" 
          style={{ 
            padding: '36px', 
            minHeight: '400px', 
            display: 'flex', 
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '24px'
          }}
        >
          <div>
            <span className="blog-card-tag" style={{ fontSize: '0.75rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Core Expertise</span>
            <h3 className="process-item-title" style={{ fontSize: '1.35rem', marginTop: '6px', color: 'var(--color-text-main)' }}>Engineering Capabilities</h3>
            <p className="grey-text" style={{ fontSize: '0.85rem', marginTop: '6px', lineHeight: '1.4' }}>
              We partner with businesses to deliver scalable cloud architecture and intelligent digital products.
            </p>
          </div>

          <div className="process-card-divider" style={{ margin: 0 }}></div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <h4 className="perk-title" style={{ fontSize: '0.95rem', color: '#09543F', margin: 0 }}>
                Intelligent AI Solutions
              </h4>
              <p className="grey-text" style={{ fontSize: '0.8rem', margin: 0, lineHeight: '1.4' }}>
                Building vector search pipelines, custom contextual LLM agents, and safety validation guardrails.
              </p>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <h4 className="perk-title" style={{ fontSize: '0.95rem', color: '#09543F', margin: 0 }}>
                High-Performance Infrastructure
              </h4>
              <p className="grey-text" style={{ fontSize: '0.8rem', margin: 0, lineHeight: '1.4' }}>
                Designing auto-scaling serverless clusters, PgBouncer database pooling, and redundant replica clouds.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <h4 className="perk-title" style={{ fontSize: '0.95rem', color: '#09543F', margin: 0 }}>
                Modern Digital Products
              </h4>
              <p className="grey-text" style={{ fontSize: '0.8rem', margin: 0, lineHeight: '1.4' }}>
                Delivering highly responsive web and mobile interfaces built in React, Next.js, and Swift.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
