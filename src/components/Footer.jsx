import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-grid">
          {/* Logo and Tagline Column */}
          <div className="footer-logo-side">
            <Link to="/" className="logo" style={{ color: '#FFFFFF' }}>
              <svg className="logo-icon" width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="32" rx="8" fill="#FFFFFF"/>
                <path d="M10 22L16 16M16 16L22 22M16 16V10M16 10L22 10" stroke="#111B18" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="16" cy="16" r="3.5" fill="#09543F" stroke="#111B18" strokeWidth="1.5"/>
                <circle cx="10" cy="22" r="2.5" fill="#111B18"/>
                <circle cx="22" cy="22" r="2.5" fill="#111B18"/>
                <circle cx="16" cy="10" r="2.5" fill="#111B18"/>
              </svg>
              <span className="logo-text" style={{ color: '#FFFFFF', textTransform: 'uppercase', letterSpacing: '0.05em' }}>snab</span>
            </Link>
            <p className="footer-tagline">
              Innovating Today. Empowering Tomorrow.
            </p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-links-col">
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/about" className="footer-link">About</Link></li>
              <li><Link to="/services" className="footer-link">Services</Link></li>
              <li><Link to="/portfolio" className="footer-link">Portfolio</Link></li>
              <li><Link to="/blog" className="footer-link">Blog</Link></li>
              <li><Link to="/careers" className="footer-link">Careers</Link></li>
              <li><Link to="/logs" className="footer-link">Logs</Link></li>
              <li><Link to="/contact" className="footer-link">Contact</Link></li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="footer-col-title">Services</h4>
            <ul className="footer-links-col">
              <li><Link to="/services" className="footer-link">AI Solutions</Link></li>
              <li><Link to="/services" className="footer-link">Software Development</Link></li>
              <li><Link to="/services" className="footer-link">Web Development</Link></li>
              <li><Link to="/services" className="footer-link">Mobile Apps</Link></li>
              <li><Link to="/services" className="footer-link">Cloud Services</Link></li>
              <li><Link to="/services" className="footer-link">DevOps</Link></li>
              <li><Link to="/services" className="footer-link">Cybersecurity</Link></li>
            </ul>
          </div>

          {/* Follow Us Column */}
          <div>
            <h4 className="footer-col-title">Follow Us</h4>
            <ul className="footer-links-col">
              <li><a href="#linkedin" className="footer-link">LinkedIn</a></li>
              <li><a href="#github" className="footer-link">GitHub</a></li>
              <li><a href="#x" className="footer-link">X (Twitter)</a></li>
              <li><a href="#instagram" className="footer-link">Instagram</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Rights Bar */}
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} SNAB Innovations. All Rights Reserved.</p>
          <div className="footer-bottom-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
