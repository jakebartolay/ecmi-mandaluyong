import React from 'react';
import { Play } from 'lucide-react';

export default function LiveStreamSection() {
  return (
    <section id="live-stream" className="page-section-anchor lagom-section" style={{ padding: '10rem 2rem', background: 'white', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <div style={{ maxWidth: '1080px', width: '100%', margin: '0 auto' }}>
        <div className="section-kicker" data-aos="fade-up">004 / Live</div>
        <h2 data-aos="fade-up" style={{
          fontFamily: '"Playfair Display", serif',
          fontSize: 'clamp(3.5rem, 8vw, 7.8rem)',
          fontWeight: 700,
          color: '#1e40af',
          marginBottom: '2rem',
          lineHeight: 0.95
        }}>
          Watch Us Live
        </h2>
        <p data-aos="fade-up" data-aos-delay="120" style={{ fontSize: '1.1rem', color: '#475569', marginBottom: '2rem', lineHeight: 1.8 }}>
          Can't make it to church? Join us online every Sunday at 9:00 AM and 5:00 PM
        </p>
        <div data-aos="zoom-in" data-aos-delay="180" style={{
          position: 'relative',
          paddingBottom: '56.25%',
          background: 'linear-gradient(135deg, #1e40af 0%, #2563eb 100%)',
          borderRadius: '16px',
          overflow: 'hidden',
          boxShadow: '0 20px 60px rgba(30, 64, 175, 0.3)'
        }}>
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            color: 'white'
          }}>
            <Play size={80} style={{ marginBottom: '1rem', opacity: 0.9 }} />
            <div style={{ fontFamily: '"Outfit", sans-serif', fontSize: '1.5rem', fontWeight: 600 }}>
              Live Stream Coming Soon
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
