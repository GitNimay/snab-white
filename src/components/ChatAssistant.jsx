import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: "Hello! I am SNAB's virtual assistant. How can I help you discover our intelligent solutions today?" }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  const responses = {
    services: {
      question: "What services do you offer?",
      answer: "We specialize in Custom AI Agents, Enterprise Software Development, Cloud Architectures, DevOps, and Tech Consulting. You can view our full listings on our Services page!",
      link: "/services",
      linkLabel: "View Services Page"
    },
    careers: {
      question: "Are there any remote jobs?",
      answer: "Yes! We are remote-first. We are hiring AI Engineers, Full-Stack Developers, UI/UX Designers, and DevOps Architects. Explore open roles on our Careers page!",
      link: "/careers",
      linkLabel: "Explore Careers Page"
    },
    consultation: {
      question: "How do I book a consultation?",
      answer: "You can book a free tech consultation with our architects. Fill out the form on our Contact page and we'll reach out!",
      link: "/contact",
      linkLabel: "Book Consultation Now"
    }
  };

  const handleQuickClick = (key) => {
    const selected = responses[key];
    if (!selected) return;

    // Print user question
    setMessages(prev => [...prev, { sender: 'user', text: selected.question }]);
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, { 
        sender: 'bot', 
        text: selected.answer,
        link: selected.link,
        linkLabel: selected.linkLabel
      }]);
    }, 900);
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  return (
    <div style={{ position: 'fixed', bottom: '30px', right: '30px', zIndex: 1000, fontFamily: 'var(--font-sans)' }}>
      {/* Floating Action Button (FAB) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          backgroundColor: '#09543F',
          color: '#FFFFFF',
          border: 'none',
          boxShadow: '0 8px 24px rgba(9, 84, 63, 0.25)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
          outline: 'none'
        }}
        className="chat-fab-btn"
      >
        {isOpen ? (
          <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>✕</span>
        ) : (
          <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
        )}
      </button>

      {/* Chat Window Panel */}
      {isOpen && (
        <div
          className="glass-card"
          style={{
            position: 'absolute',
            bottom: '80px',
            right: 0,
            width: '340px',
            height: '460px',
            borderRadius: '24px',
            backgroundColor: '#FFFFFF',
            boxShadow: '0 12px 40px rgba(0, 0, 0, 0.12)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            border: '1px solid var(--color-border)',
            animation: 'pageEnter 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          {/* Panel Header */}
          <div style={{ backgroundColor: '#09543F', padding: '20px', color: '#FFFFFF', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#10B981', animation: 'pulse 2s infinite' }}></div>
            <div>
              <h4 style={{ margin: 0, fontSize: '0.95rem', fontWeight: '700' }}>SNAB Assistant</h4>
              <span style={{ fontSize: '0.75rem', opacity: 0.8 }}>Online &bull; AI Guide</span>
            </div>
          </div>

          {/* Messages Body */}
          <div style={{ flexGrow: 1, overflowY: 'auto', padding: '20px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {messages.map((msg, idx) => (
              <div 
                key={idx} 
                style={{
                  alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                  maxWidth: '85%',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px'
                }}
              >
                <div 
                  style={{
                    backgroundColor: msg.sender === 'user' ? '#09543F' : '#F3F4F6',
                    color: msg.sender === 'user' ? '#FFFFFF' : '#111B18',
                    padding: '12px 16px',
                    borderRadius: msg.sender === 'user' ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
                    fontSize: '0.85rem',
                    lineHeight: '1.4',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.02)'
                  }}
                >
                  {msg.text}
                </div>
                {msg.link && (
                  <Link 
                    to={msg.link} 
                    onClick={() => setIsOpen(false)}
                    style={{
                      fontSize: '0.8rem',
                      fontWeight: '700',
                      color: '#09543F',
                      textDecoration: 'underline',
                      alignSelf: 'flex-start',
                      marginLeft: '4px'
                    }}
                  >
                    {msg.linkLabel} &rarr;
                  </Link>
                )}
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div style={{ alignSelf: 'flex-start', backgroundColor: '#F3F4F6', padding: '12px 16px', borderRadius: '18px 18px 18px 4px', display: 'flex', gap: '4px', alignItems: 'center' }}>
                <span className="dot" style={{ width: '6px', height: '6px', backgroundColor: '#9CA3AF', borderRadius: '50%', animation: 'bounce 1.4s infinite' }}></span>
                <span className="dot" style={{ width: '6px', height: '6px', backgroundColor: '#9CA3AF', borderRadius: '50%', animation: 'bounce 1.4s infinite', animationDelay: '0.2s' }}></span>
                <span className="dot" style={{ width: '6px', height: '6px', backgroundColor: '#9CA3AF', borderRadius: '50%', animation: 'bounce 1.4s infinite', animationDelay: '0.4s' }}></span>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Quick reply selection action tray */}
          <div style={{ padding: '16px', borderTop: '1px solid var(--color-border)', backgroundColor: '#F8F7F4', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Ask a Question:</span>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              <button 
                onClick={() => handleQuickClick('services')}
                style={{ padding: '6px 12px', borderRadius: '100px', border: '1px solid #E5E7EB', backgroundColor: '#FFFFFF', fontSize: '0.75rem', fontWeight: '600', cursor: 'pointer', transition: 'var(--transition-fast)' }}
                className="chip-btn"
              >
                💼 Services
              </button>
              <button 
                onClick={() => handleQuickClick('careers')}
                style={{ padding: '6px 12px', borderRadius: '100px', border: '1px solid #E5E7EB', backgroundColor: '#FFFFFF', fontSize: '0.75rem', fontWeight: '600', cursor: 'pointer', transition: 'var(--transition-fast)' }}
                className="chip-btn"
              >
                🚀 Remote Jobs
              </button>
              <button 
                onClick={() => handleQuickClick('consultation')}
                style={{ padding: '6px 12px', borderRadius: '100px', border: '1px solid #E5E7EB', backgroundColor: '#FFFFFF', fontSize: '0.75rem', fontWeight: '600', cursor: 'pointer', transition: 'var(--transition-fast)' }}
                className="chip-btn"
              >
                📅 Consultation
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
