import React from 'react';
import { Play } from 'lucide-react';

export default function LiveStreamSection() {
  return (
    <section id="live-stream" className="page-section-anchor" style={{ padding: '8rem 2rem', background: 'white', minHeight: '82vh', display: 'flex', alignItems: 'center' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
        <h2 className="reveal-on-scroll reveal-up" style={{
          fontFamily: '"Playfair Display", serif',
          fontSize: '3rem',
          fontWeight: 700,
          color: '#1e40af',
          marginBottom: '2rem'
        }}>
          Watch Us Live
        </h2>
        <p className="reveal-on-scroll reveal-up reveal-delay-1" style={{ fontSize: '1.1rem', color: '#475569', marginBottom: '2rem', lineHeight: 1.8 }}>
          Can't make it to church? Join us online every Sunday at 9:00 AM and 5:00 PM
        </p>
        <div className="reveal-on-scroll reveal-scale reveal-delay-2" style={{
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
