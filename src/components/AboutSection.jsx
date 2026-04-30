import React from 'react';
import { Clock, MapPin } from 'lucide-react';

const mapsLink = 'https://www.google.com/maps/place/Albeso+Space/@14.5793337,121.0476797,21z/data=!4m6!3m5!1s0x3397c95165564011:0xfc35408cb045a1ff!8m2!3d14.5794386!4d121.0478301!16s%2Fg%2F11yl_g9k59?entry=ttu&g_ep=EgoyMDI2MDQyNi4wIKXMDSoASAFQAw%3D%3D';

export default function AboutSection() {
  return (
    <section id="about" className="page-section-anchor lagom-section about-section" style={{ padding: '4.5rem 2rem 10rem', maxWidth: '1280px', margin: '0 auto', minHeight: '100vh', display: 'flex', alignItems: 'flex-start' }}>
      <div style={{ width: '100%' }}>
        <div className="section-kicker" data-aos="fade-up">001 / About</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.15fr) minmax(320px, 0.85fr)', gap: '5rem', alignItems: 'center' }}>
        <div data-aos="fade-up">
          <h2 style={{
            fontFamily: '"Playfair Display", serif',
            fontSize: 'clamp(3.5rem, 8vw, 7.8rem)',
            fontWeight: 700,
            color: '#1e40af',
            marginBottom: '2rem',
            lineHeight: 0.95
          }}>
            ECMI
          </h2>
          <p style={{ fontSize: 'clamp(1.15rem, 1.8vw, 1.45rem)', lineHeight: 1.9, color: '#475569', marginBottom: '1.5rem', maxWidth: '760px' }}>
            ECMI Mandaluyong is a vibrant community of believers passionate about knowing God, making disciples, and transforming lives through the power of the Gospel.
          </p>
          <p style={{ fontSize: 'clamp(1.05rem, 1.45vw, 1.2rem)', lineHeight: 1.9, color: '#475569', maxWidth: '720px' }}>
            Whether you're new to faith or have been walking with Christ for years, there's a place for you here. Come as you are, and experience the love of God in our midst.
          </p>
        </div>
        <div data-aos="fade-up" data-aos-delay="120" style={{
          background: 'linear-gradient(135deg, #1e40af 0%, #2563eb 100%)',
          borderRadius: '20px',
          padding: '3rem',
          color: 'white',
          boxShadow: '0 20px 60px rgba(30, 64, 175, 0.2)'
        }}>
          <div style={{ marginBottom: '2rem' }}>
            <MapPin size={40} style={{ marginBottom: '1rem' }} />
            <h3 style={{ fontFamily: '"Outfit", sans-serif', fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.5rem' }}>
              Our Location
            </h3>
            <a
              href={mapsLink}
              target="_blank"
              rel="noreferrer"
              style={{ color: 'white', opacity: 0.9, lineHeight: 1.7, textDecoration: 'none', display: 'inline-block' }}
            >
              Albeso Space<br />
              Mandaluyong City<br />
              Metro Manila, Philippines
            </a>
          </div>
          <div>
            <Clock size={40} style={{ marginBottom: '1rem' }} />
            <h3 style={{ fontFamily: '"Outfit", sans-serif', fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.5rem' }}>
              Service Times
            </h3>
            <p style={{ opacity: 0.9, lineHeight: 1.7 }}>
              Sunday: 9:00 AM & 5:00 PM<br />
              Wednesday: 7:00 PM<br />
              Friday Youth: 7:00 PM
            </p>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
