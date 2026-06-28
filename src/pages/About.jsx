import React from 'react';
import AboutComponent from '../components/About';

export default function About() {
  const whyChooseUs = [
    {
      title: "Experienced Team",
      desc: "Highly skilled developers, solution architects, UI/UX designers, and AI research engineers who bring years of industry expertise to your project."
    },
    {
      title: "Modern Technologies",
      desc: "We leverage state-of-the-art frameworks (React, Next.js), cloud systems (AWS, GCP), and AI architectures (OpenAI, LangChain) to construct future-ready tools."
    },
    {
      title: "Agile Development",
      desc: "Transparent communication schedules combined with rapid 2-week delivery cycles ensure you see functional results and shape iterations continuously."
    },
    {
      title: "Quality Assurance",
      desc: "Comprehensive automated unit tests, logic checks, api security audits, and manual visual test cases guarantee reliable, production-ready deliverables."
    },
    {
      title: "Dedicated Support",
      desc: "Ongoing maintenance, monthly package upgrades, uptime log monitoring, and database scaling support after your product launches successfully."
    },
    {
      title: "Scalable Solutions",
      desc: "Software architecture custom designed from day one to grow alongside your expanding customer load and transactions seamlessly."
    }
  ];

  return (
    <>
      {/* Standard About Component */}
      <AboutComponent />

      {/* Why Choose Us Section */}
      <section className="why-section" style={{ backgroundColor: '#F8F7F4', borderTop: '1px solid #E5E7EB' }}>
        <div className="section-title-wrapper" style={{ marginBottom: '60px' }}>
          <span className="section-tag">Why Choose Us</span>
          <h2 className="section-title">Engineered for Quality, Scale, and Long-Term Success</h2>
        </div>
        
        <div className="why-grid">
          {whyChooseUs.map((item, idx) => (
            <div className="why-card" key={idx}>
              <h3 className="why-card-title">{item.title}</h3>
              <p className="why-card-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
