import React from 'react';

export default function ResearchBanner() {
  return (
    <section className="research-section" id="reports">
      <div className="research-container">
        <div className="research-card">
          {/* Background decorative art (Golden Gate style suspension bridge) */}
          <div className="research-art-bg">
            <svg viewBox="0 0 800 200" preserveAspectRatio="none" width="100%" height="100%">
              <defs>
                <linearGradient id="bridge-sky" x1="0%" y1="100%" x2="0%" y2="0%">
                  <stop offset="0%" stop-color="#F3EAD9" stop-opacity="0.9"/>
                  <stop offset="100%" stop-color="#E2D4BA" stop-opacity="0.3"/>
                </linearGradient>
                <linearGradient id="bridge-silhouette" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stop-color="#D9C4A3"/>
                  <stop offset="50%" stop-color="#C2AD8A"/>
                  <stop offset="100%" stop-color="#B39E79"/>
                </linearGradient>
              </defs>
              <circle cx="500" cy="120" r="140" fill="#EADFCD" opacity="0.6"/>
              <rect x="250" y="40" width="8" height="160" fill="url(#bridge-silhouette)" opacity="0.5"/>
              <rect x="550" y="40" width="8" height="160" fill="url(#bridge-silhouette)" opacity="0.5"/>
              <path d="M 0 60 Q 254 150 254 60 T 554 60 T 800 60" fill="none" stroke="#C2AD8A" stroke-width="2" opacity="0.6"/>
              <line x1="0" y1="150" x2="800" y2="150" stroke="#B39E79" stroke-width="4" opacity="0.7"/>
              <line x1="100" y1="95" x2="100" y2="150" stroke="#C2AD8A" stroke-width="0.5" opacity="0.4"/>
              <line x1="180" y1="125" x2="180" y2="150" stroke="#C2AD8A" stroke-width="0.5" opacity="0.4"/>
              <line x1="350" y1="85" x2="350" y2="150" stroke="#C2AD8A" stroke-width="0.5" opacity="0.4"/>
              <line x1="450" y1="85" x2="450" y2="150" stroke="#C2AD8A" stroke-width="0.5" opacity="0.4"/>
              <path d="M 0 170 Q 200 130 400 180 T 800 160 L 800 200 L 0 200 Z" fill="#E2D0B6" opacity="0.7"/>
              <path d="M 0 185 Q 350 150 700 190 L 800 200 L 0 200 Z" fill="#CBB696" opacity="0.8"/>
            </svg>
          </div>
          
          <div className="research-content">
            <span className="research-tag">NEW RESEARCH</span>
            <h2 class="research-title">The First Ten at YC-backed Startups</h2>
            <p className="research-description">
              Profiling the first ten engineering hires inside YC-backed companies, where they came from, what they built, and how early talent signals long-term success.
            </p>
            <a href="#report" className="btn-report">Get the report <span className="arrow-right">→</span></a>
          </div>
        </div>
      </div>
    </section>
  );
}
