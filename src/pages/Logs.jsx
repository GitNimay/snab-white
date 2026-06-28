import React from 'react';

export default function Logs() {
  const changelogs = [
    {
      version: "v1.3.0",
      date: "June 28, 2026",
      title: "Multi-page routed layout & UI refinements",
      description: "Refactored the application architecture from a single-page layout to a multi-page routed application. Upgraded styling tokens and visual cards.",
      changes: [
        "Integrated react-router-dom with active route state tracking",
        "Created Blog and Careers modules with interactive slide-in modal views",
        "Added Logs page to track release histories and development updates",
        "Refined visual cards with premium glassmorphism styling and lift-on-hover shadows",
        "Added ScrollToTop and Location path re-evaluation hooks"
      ]
    },
    {
      version: "v1.2.0",
      date: "May 14, 2026",
      title: "AI core agents & generative validation pipelines",
      description: "Integrated advanced LLM prompts management and validation schemas to output structured JSON representations from generative models.",
      changes: [
        "Integrated LangChain framework for LLM agent coordination",
        "Built mock client profile assessment matrix with strengths & considerations scoring",
        "Added AI chatbots testing logs to record mock system response latencies",
        "Optimized prompt context window injection layers"
      ]
    },
    {
      version: "v1.1.0",
      date: "April 22, 2026",
      title: "DevOps pipelines & PostgreSQL pooling",
      description: "Established secure continuous deployment structures and optimized database queries configurations to handle higher request concurrency.",
      changes: [
        "Created Terraform scripts for automated multi-region AWS serverless setups",
        "Implemented Docker and Kubernetes container orchestration pipelines",
        "Configured PgBouncer connection pooling to support up to 5,000 concurrent database queries",
        "Added automated GitHub Actions for unit testing on commits"
      ]
    },
    {
      version: "v1.0.0",
      date: "March 10, 2026",
      title: "Initial core release",
      description: "Launches the foundational infrastructure, reset templates, and core brand components.",
      changes: [
        "Configured base React Vite project setup templates",
        "Drafted core style guides, color variables, and Lora/Inter typography rules",
        "Setup SSL certifications, DNS domain mappings, and HIPAA compliance policies"
      ]
    }
  ];

  return (
    <section className="careers-section" style={{ backgroundColor: 'transparent' }}>
      <div className="section-title-wrapper">
        <span className="section-tag">System Logs</span>
        <h2 className="section-title">Product Updates & System Changelog</h2>
      </div>

      <div className="jobs-list" style={{ position: 'relative' }}>
        {/* Central visual line for changelog timeline */}
        <div 
          style={{
            position: 'absolute',
            left: '30px',
            top: '20px',
            bottom: '20px',
            width: '2px',
            backgroundColor: '#09543F',
            zIndex: 1
          }}
        ></div>

        {changelogs.map((log, idx) => (
          <div 
            className="job-card" 
            key={idx} 
            style={{ 
              marginLeft: '60px', 
              position: 'relative', 
              zIndex: 2, 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'flex-start',
              gap: '16px'
            }}
          >
            {/* Timeline node marker */}
            <div 
              style={{
                position: 'absolute',
                left: '-41px',
                top: '28px',
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                backgroundColor: '#09543F',
                border: '4px solid #FFFFFF',
                boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
              }}
            ></div>

            <div className="job-info-col" style={{ width: '100%' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
                <h3 className="job-title" style={{ margin: 0 }}>{log.title}</h3>
                <span className="job-pill job-pill-accent" style={{ fontSize: '0.85rem' }}>{log.version}</span>
              </div>
              <span className="job-salary" style={{ fontSize: '0.85rem' }}>Released on: {log.date}</span>
              <p className="grey-text" style={{ fontSize: '0.95rem', marginTop: '8px', lineHeight: '1.5' }}>
                {log.description}
              </p>
            </div>
            
            <div className="process-card-divider" style={{ margin: '8px 0', width: '100%' }}></div>
            
            <ul className="process-card-list" style={{ width: '100%' }}>
              {log.changes.map((change, cIdx) => (
                <li key={cIdx} className="process-card-list-item">
                  <span className="process-card-bullet-dot"></span>
                  {change}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
