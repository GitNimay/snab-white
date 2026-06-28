import React from 'react';

export default function Portfolio() {
  const projects = [
    {
      title: "AI Customer Support Platform",
      desc: "An intelligent AI chatbot reducing customer support response times by 80% with automated ticketing, generative AI matching, and agent escalation rules.",
      tags: ["AI Chatbots", "LangChain", "Node.js", "OpenAI"],
      icon: (
        <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Healthcare Management System",
      desc: "A secure, HIPAA-compliant patient management platform for hospitals to coordinate calendar appointments, records storage, billing workflows, and telemedicine links.",
      tags: ["React", "PostgreSQL", "Cloud Security", "Node.js"],
      icon: (
        <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "E-Commerce Marketplace",
      desc: "A highly scalable custom e-commerce engine support system supporting thousands of daily concurrent checkouts, payment portal integrations, and merchant dashboard tools.",
      tags: ["Next.js", "Redis", "AWS Cloud", "Stripe API"],
      icon: (
        <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="9" cy="21" r="1"/>
          <circle cx="20" cy="21" r="1"/>
          <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Logistics & Shipment Dashboard",
      desc: "Real-time fleet tracking and package routing platform with predictive analytics, transit delay warnings, and comprehensive logistics reporting matrices.",
      tags: ["React", "Python", "Google Cloud", "Map APIs"],
      icon: (
        <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 18.83V8.058a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Learning Management Platform",
      desc: "Interactive online education dashboard featuring streaming class feeds, progress tracking, automatic test grading, and secure certification credentials.",
      tags: ["Vue.js", "MongoDB", "Express", "Kubernetes"],
      icon: (
        <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  return (
    <section className="portfolio-section" id="portfolio">
      <div className="section-title-wrapper">
        <span className="section-tag">Our Portfolio</span>
        <h2 className="section-title">Proven Case Studies of Impact and Innovation</h2>
      </div>
      
      <div className="portfolio-grid">
        {projects.map((proj, idx) => (
          <div className="portfolio-card" key={idx}>
            <div className="portfolio-art">
              {proj.icon}
            </div>
            <div className="portfolio-content">
              <div>
                <h3 className="portfolio-project-title">{proj.title}</h3>
                <p className="portfolio-project-desc">{proj.desc}</p>
              </div>
              <div className="scoring-tags">
                {proj.tags.map((tag, tagIdx) => (
                  <span className="tag" key={tagIdx}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
