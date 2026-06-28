import React, { useState } from 'react';
import ServicesComponent from '../components/Services';

export default function Services() {
  const [activeTab, setActiveTab] = useState('frontend');

  const techCategories = {
    frontend: {
      label: "Frontend",
      skills: ["React", "Next.js", "Angular", "Vue.js", "HTML5", "CSS3", "Tailwind CSS"]
    },
    backend: {
      label: "Backend",
      skills: ["Node.js", "Python", "Java", ".NET", "PHP"]
    },
    databases: {
      label: "Databases",
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis"]
    },
    cloud: {
      label: "Cloud",
      skills: ["AWS", "Azure", "Google Cloud", "Cloud Migration", "Serverless"]
    },
    devops: {
      label: "DevOps",
      skills: ["Docker", "Kubernetes", "Jenkins", "GitHub Actions", "Terraform"]
    },
    ai: {
      label: "AI & ML",
      skills: ["OpenAI APIs", "LangChain", "TensorFlow", "PyTorch", "Hugging Face"]
    }
  };

  return (
    <>
      <ServicesComponent />

      {/* Technologies We Use Section */}
      <section className="tech-section">
        <div className="tech-container">
          <div className="section-title-wrapper">
            <span className="section-tag">Technology Stack</span>
            <h2 className="section-title">Our Modern Engineering Arsenal</h2>
          </div>
          
          {/* Tab buttons */}
          <div className="tech-tabs">
            {Object.keys(techCategories).map((key) => (
              <button 
                key={key}
                className={`tech-tab-btn ${activeTab === key ? 'active' : ''}`}
                onClick={() => setActiveTab(key)}
              >
                {techCategories[key].label}
              </button>
            ))}
          </div>

          {/* Tab content skills grid */}
          <div className="tech-items-grid">
            {techCategories[activeTab].skills.map((skill, idx) => (
              <div className="tech-item" key={idx}>
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
