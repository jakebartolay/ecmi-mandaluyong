import React from 'react';
import { Heart } from 'lucide-react';

export default function GiveSection() {
  return (
    <section id="give" className="page-section-anchor lagom-section" style={{ padding: '10rem 2rem', background: 'linear-gradient(135deg, #fef3e2 0%, #fde8c8 100%)', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <div style={{ maxWidth: '920px', width: '100%', margin: '0 auto' }}>
        <div className="section-kicker" data-aos="fade-up">005 / Give</div>
        <h2 data-aos="fade-up" style={{
          fontFamily: '"Playfair Display", serif',
          fontSize: 'clamp(3.5rem, 8vw, 7.8rem)',
          fontWeight: 700,
          color: '#1e40af',
          marginBottom: '2rem',
          lineHeight: 0.95
        }}>
          Give Online
        </h2>
        <p data-aos="fade-up" data-aos-delay="120" style={{ fontSize: '1.1rem', color: '#475569', marginBottom: '3rem', lineHeight: 1.8 }}>
          Your generous giving helps us continue our mission to spread the Gospel and serve our community. Thank you for your support!
        </p>
        <div data-aos="zoom-in" data-aos-delay="180" style={{
          background: 'white',
          borderRadius: '20px',
          padding: '3rem',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)'
        }}>
          <Heart size={60} style={{ color: '#f59e0b', marginBottom: '1.5rem' }} />
          <h3 style={{
            fontFamily: '"Outfit", sans-serif',
            fontSize: '1.5rem',
            fontWeight: 600,
            color: '#1e40af',
            marginBottom: '1.5rem'
          }}>
            Bank Transfer Details
          </h3>
          <div style={{ textAlign: 'left', maxWidth: '400px', margin: '0 auto', lineHeight: 2, color: '#475569' }}>
            <p><strong>Bank Name:</strong> BDO Unibank</p>
            <p><strong>Account Name:</strong> ECMI Mandaluyong</p>
            <p><strong>Account Number:</strong> 1234-5678-9012</p>
            <p><strong>GCash:</strong> 0917-123-4567</p>
          </div>
          <button style={{
            marginTop: '2rem',
            background: 'linear-gradient(135deg, #1e40af 0%, #2563eb 100%)',
            color: 'white',
            padding: '1rem 3rem',
            borderRadius: '50px',
            border: 'none',
            fontFamily: '"Outfit", sans-serif',
            fontWeight: 600,
            fontSize: '1rem',
            cursor: 'pointer',
            transition: 'transform 0.3s, box-shadow 0.3s',
            boxShadow: '0 10px 30px rgba(30, 64, 175, 0.3)'
          }}>
            Give Now
          </button>
        </div>
      </div>
    </section>
  );
}
