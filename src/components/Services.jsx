import React from 'react';

export default function Services() {
  const services = [
    {
      title: "AI & Machine Learning",
      desc: "Transform your business with intelligent automation.",
      items: ["AI Chatbots", "Generative AI Applications", "Recommendation Systems", "Predictive Analytics", "NLP Solutions", "Computer Vision"],
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Custom Software Development",
      desc: "Tailor-made software built for your business.",
      items: ["Enterprise Applications", "Business Management Systems", "CRM & ERP Solutions", "Internal Dashboards", "SaaS Platforms"],
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M16 18L22 12L16 6M8 6L2 12L8 18" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Web Development",
      desc: "Modern websites built for speed and growth.",
      items: ["Corporate Websites", "Landing Pages", "E-Commerce", "Progressive Web Apps", "CMS Development"],
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Mobile App Development",
      desc: "Native and cross-platform applications.",
      items: ["Business Apps", "Healthcare & FinTech Apps", "Flutter & React Native Dev", "Android & iOS Apps", "Logistics & Delivery Solutions"],
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 18h.01" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Cloud Solutions",
      desc: "Build reliable infrastructure on the cloud.",
      items: ["AWS, Azure & Google Cloud", "Cloud Migration", "Serverless Architecture", "Infrastructure Automation", "Security & Disaster Recovery"],
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "DevOps & Automation",
      desc: "Deliver software faster with modern DevOps practices.",
      items: ["CI/CD Pipelines", "Docker & Kubernetes", "Infrastructure as Code", "Monitoring & Alerts", "Security Automation"],
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "UI/UX Design",
      desc: "Beautiful experiences designed for users.",
      items: ["Wireframing & Prototyping", "User Research & Testing", "Mobile & Web UI Design", "Dashboard Design", "Product Design Strategy"],
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 6V12L16 14" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Cybersecurity",
      desc: "Protect your business with enterprise-grade security.",
      items: ["Security Audits & Pen Testing", "Vulnerability Assessment", "Cloud Infrastructure Security", "Corporate Security Consulting"],
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  return (
    <section className="services-section" id="services">
      <div className="section-title-wrapper">
        <span className="section-tag">Our Services</span>
        <h2 className="section-title">Comprehensive Tech Solutions Tailored to Your Goals</h2>
      </div>
      
      <div className="services-grid">
        {services.map((ser, idx) => (
          <div className="service-card" key={idx}>
            <div className="service-icon-box">
              {ser.icon}
            </div>
            <h3 className="service-name">{ser.title}</h3>
            <p className="service-desc">{ser.desc}</p>
            <ul className="service-list">
              {ser.items.map((item, itemIdx) => (
                <li className="service-list-item" key={itemIdx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
