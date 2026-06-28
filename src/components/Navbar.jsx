import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={`navbar ${isMenuOpen ? 'mobile-active' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="logo" aria-label="SNAB Innovations Home" onClick={() => setIsMenuOpen(false)}>
          <svg className="logo-icon" width="30" height="30" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="32" height="32" rx="8" fill="#111B18"/>
            <path d="M10 22L16 16M16 16L22 22M16 16V10M16 10L22 10" stroke="#E6F2ED" strokeWidth="2" strokeLinecap="round"/>
            <circle cx="16" cy="16" r="3.5" fill="#09543F" stroke="#FFFFFF" strokeWidth="1.5"/>
            <circle cx="10" cy="22" r="2.5" fill="#FFFFFF"/>
            <circle cx="22" cy="22" r="2.5" fill="#FFFFFF"/>
            <circle cx="16" cy="10" r="2.5" fill="#FFFFFF"/>
            <circle cx="22" cy="10" r="1.5" fill="#09543F"/>
          </svg>
          <span className="logo-text" style={{ textTransform: 'uppercase', letterSpacing: '0.05em' }}>snab</span>
        </Link>
        
        <nav className="nav-menu">
          <Link to="/" className="nav-item" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/about" className="nav-item" onClick={() => setIsMenuOpen(false)}>About</Link>
          <Link to="/services" className="nav-item" onClick={() => setIsMenuOpen(false)}>Services</Link>
          <Link to="/portfolio" className="nav-item" onClick={() => setIsMenuOpen(false)}>Portfolio</Link>
          <Link to="/blog" className="nav-item" onClick={() => setIsMenuOpen(false)}>Blog</Link>
          <Link to="/careers" className="nav-item" onClick={() => setIsMenuOpen(false)}>Careers</Link>
          <Link to="/logs" className="nav-item" onClick={() => setIsMenuOpen(false)}>Logs</Link>
          <Link to="/contact" className="nav-item" onClick={() => setIsMenuOpen(false)}>Contact</Link>
        </nav>
        
        <div className="nav-actions">
          <Link to="/contact" className="btn btn-primary btn-nav">Book a Consultation <span className="arrow-right">→</span></Link>
        </div>
        
        <button 
          className="mobile-menu-toggle" 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
