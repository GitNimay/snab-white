import React, { useEffect, useState } from 'react';

export default function BackgroundDecorations() {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: -1, pointerEvents: 'none', overflow: 'hidden' }}>
      
      {/* 1. Neutral Spotlight follow cursor (pure colorless light, no green/gold tint) */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          background: `radial-gradient(500px circle at ${mousePos.x}px ${mousePos.y}px, rgba(17, 27, 24, 0.05) 0%, rgba(17, 27, 24, 0.01) 60%, transparent 100%)`,
          pointerEvents: 'none',
          transition: 'background 0.05s ease'
        }}
      />

      {/* 2. Geometric grid pattern overlay (neutral charcoal gray lines) */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 2,
          backgroundImage: `
            linear-gradient(rgba(17, 27, 24, 0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(17, 27, 24, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: '56px 56px',
          backgroundPosition: 'center top',
          maskImage: 'radial-gradient(circle at 50% 30%, black, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(circle at 50% 30%, black, transparent 75%)',
          pointerEvents: 'none'
        }}
      />

      {/* 3. Luxury Tactile SVG Noise Texture Overlay */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 3,
          opacity: 0.025,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          pointerEvents: 'none'
        }}
      />
    </div>
  );
}
