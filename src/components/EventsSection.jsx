import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';

export default function EventsSection({ events }) {
  return (
    <section id="events" className="page-section-anchor lagom-section" style={{ padding: '10rem 2rem', background: 'white', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <div style={{ maxWidth: '1280px', width: '100%', margin: '0 auto' }}>
        <div className="section-kicker reveal-on-scroll reveal-up">002 / Events</div>
        <h2 className="reveal-on-scroll reveal-up" style={{
          fontFamily: '"Playfair Display", serif',
          fontSize: 'clamp(3.5rem, 8vw, 7.8rem)',
          fontWeight: 700,
          color: '#1e40af',
          marginBottom: '4rem',
          lineHeight: 0.95
        }}>
          Church Events
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
          {events.map((event, index) => (
            <div key={event.title} className={`reveal-on-scroll reveal-up reveal-delay-${Math.min(index + 1, 4)}`} style={{
              background: 'linear-gradient(135deg, #fef3e2 0%, #fde8c8 100%)',
              borderRadius: '16px',
              padding: '2rem',
              borderLeft: '4px solid #f59e0b',
              transition: 'transform 0.3s, box-shadow 0.3s',
              cursor: 'pointer',
              animation: `fadeInUp 0.6s ease-out ${index * 0.1}s backwards`
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginBottom: '0.5rem',
                color: '#f59e0b',
                fontFamily: '"Outfit", sans-serif',
                fontSize: '0.9rem',
                fontWeight: 600
              }}>
                <Calendar size={16} />
                {event.date}
              </div>
              <h3 style={{
                fontFamily: '"Outfit", sans-serif',
                fontSize: '1.3rem',
                fontWeight: 600,
                color: '#1e40af',
                marginBottom: '1rem'
              }}>
                {event.title}
              </h3>
              <div style={{ fontSize: '0.95rem', color: '#64748b', marginBottom: '0.5rem' }}>
                <Clock size={14} style={{ display: 'inline', marginRight: '0.5rem' }} />
                {event.time}
              </div>
              <div style={{ fontSize: '0.95rem', color: '#64748b' }}>
                <MapPin size={14} style={{ display: 'inline', marginRight: '0.5rem' }} />
                {event.location}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
