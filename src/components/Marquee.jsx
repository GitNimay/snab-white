import React from 'react';

export default function Marquee() {
  const items = [
    "AI Intelligence",
    "Secure Cloud Architectures",
    "Custom Software Engineering",
    "Enterprise DevOps Systems",
    "Digital Product Designs",
    "Zero-Downtime Deployments",
    "Tech Consultations"
  ];

  // Triplicate the array list to guarantee seamless loop wrapping offsets
  const loopItems = [...items, ...items, ...items];

  return (
    <div className="marquee-container">
      <div className="marquee-track">
        {loopItems.map((item, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <span 
              key={idx} 
              className={`marquee-text ${isEven ? 'solid' : 'outlined'}`}
            >
              {item} <span className="marquee-separator">✦</span>
            </span>
          );
        })}
      </div>
    </div>
  );
}
