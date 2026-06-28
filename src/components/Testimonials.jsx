import React from 'react';

export default function Testimonials() {
  const reviews = [
    {
      quote: "SNAB Innovations delivered beyond expectations. Their expertise and professionalism helped us launch our product successfully.",
      author: "Startup Founder",
      title: "Seed Stage FinTech",
      avatarFill: "#F1F5F9",
      avatarColor: "#475569",
      avatarBody: "#334155"
    },
    {
      quote: "Excellent communication, technical excellence, and timely delivery. They modernize legacy workflows with high quality.",
      author: "Enterprise Client",
      title: "Global Logistics Group",
      avatarFill: "#ECFDF5",
      avatarColor: "#047857",
      avatarBody: "#065F46"
    },
    {
      quote: "Their AI solutions transformed our customer support operations and allowed us to scale without limits.",
      author: "Business Owner",
      title: "E-Commerce Brand Owner",
      avatarFill: "#FFFBEB",
      avatarColor: "#B45309",
      avatarBody: "#92400E"
    }
  ];

  return (
    <section className="testimonials-section">
      <div className="section-container">
        <h2 className="testimonials-header">A few words from founders we hire for.</h2>
        
        <div className="testimonials-grid">
          {reviews.map((rev, idx) => (
            <div className="testimonial-card" key={idx}>
              <p className="card-quote">"{rev.quote}"</p>
              <div className="card-author">
                <svg className="avatar-svg card-avatar" width="48" height="48" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="50" fill={rev.avatarFill}/>
                  <circle cx="50" cy="40" r="16" fill={rev.avatarColor}/>
                  <path d="M50 58 C35 58, 25 72, 25 85 L75 85 C75 72, 65 58, 50 58 Z" fill={rev.avatarBody}/>
                </svg>
                <div className="author-info">
                  <h3 className="author-name">{rev.author}</h3>
                  <span className="author-title">{rev.title}</span>
                </div>
                <a href="#linkedin" className="linkedin-icon" aria-label="LinkedIn Profile">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="#0077b5">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
