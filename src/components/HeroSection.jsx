import React from 'react';
import { ChevronRight, Play } from 'lucide-react';
import logo from '../assets/logo.png';

const heroCollageImages = [
  'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=700&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=700&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=700&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=700&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=700&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=700&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=700&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1506869640319-fe1a24fd76dc?w=700&auto=format&fit=crop'
];

export default function HeroSection() {
  const filmStrips = [
    { className: 'hero-film-strip hero-film-strip-left', images: heroCollageImages },
    { className: 'hero-film-strip hero-film-strip-middle-left', images: [...heroCollageImages.slice(2), ...heroCollageImages.slice(0, 2)] },
    { className: 'hero-film-strip hero-film-strip-middle-right', images: [...heroCollageImages].reverse() },
    { className: 'hero-film-strip hero-film-strip-right', images: [...heroCollageImages.slice(4), ...heroCollageImages.slice(0, 4)] }
  ];

  return (
    <section id="top" style={{
      position: 'relative',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      background: '#0f172a'
    }}>
      <div className="hero-collage-bg" aria-hidden="true">
        {filmStrips.map((strip) => (
          <div key={strip.className} className={strip.className}>
            {[...strip.images, ...strip.images, ...strip.images].map((image, index) => (
              <div
                key={`${image}-${index}`}
                className="hero-film-frame"
                style={{ backgroundImage: `url("${image}")` }}
              />
            ))}
          </div>
        ))}
      </div>

      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.82), rgba(30, 64, 175, 0.68), rgba(253, 232, 200, 0.78))',
        zIndex: 2
      }} />

      <div style={{
        position: 'absolute',
        inset: 0,
        opacity: 0.18,
        backgroundImage: 'radial-gradient(circle at 2px 2px, #ffffff 1px, transparent 0)',
        backgroundSize: '42px 42px',
        zIndex: 3
      }} />

      <div className="hero-desktop-bottom-glow" aria-hidden="true" />

      <div style={{ textAlign: 'center', zIndex: 10, padding: '0 2rem', animation: 'fadeInUp 1s ease-out' }}>
        <img
          src={logo}
          alt="ECMI Mandaluyong logo"
          className="hero-main-logo"
          style={{
            width: 'clamp(165px, 20vw, 260px)',
            height: 'auto',
            objectFit: 'contain',
            margin: '0 auto 1rem',
            display: 'block',
            filter: 'drop-shadow(0 0 12px rgba(255, 255, 255, 0.8)) drop-shadow(0 12px 28px rgba(15, 23, 42, 0.35))',
            animation: 'fadeIn 1.5s ease-out'
          }}
        />
        <h1 style={{
          fontFamily: '"Playfair Display", serif',
          fontSize: 'clamp(3rem, 8vw, 6rem)',
          fontWeight: 700,
          color: 'white',
          textShadow: '0 18px 45px rgba(15, 23, 42, 0.55)',
          marginBottom: '1.5rem',
          lineHeight: 1.1,
          animation: 'fadeInUp 1s ease-out 0.2s backwards'
        }}>
          God With Us
        </h1>
        <p style={{
          fontSize: 'clamp(1.35rem, 2vw, 1.65rem)',
          color: 'rgba(255, 255, 255, 0.88)',
          maxWidth: '980px',
          margin: '0 auto 1.35rem',
          lineHeight: 1.8,
          animation: 'fadeInUp 1s ease-out 0.4s backwards'
        }}>
          Join us in worship, fellowship, and growing together in faith at ECMI Mandaluyong
        </p>
        <div style={{
          color: 'white',
          fontFamily: '"Outfit", sans-serif',
          fontSize: 'clamp(1.08rem, 1.7vw, 1.35rem)',
          fontWeight: 600,
          lineHeight: 1.7,
          margin: '0 auto 3rem',
          maxWidth: '900px',
          textShadow: '0 12px 35px rgba(15, 23, 42, 0.55)',
          animation: 'fadeInUp 1s ease-out 0.5s backwards'
        }}>
          <div>Sunday Church 2026 | 1:00 PM - 3:00 PM</div>
          <div>Albeso Space, 60 M. Guevara St. cor. Sinag, Mandaluyong City</div>
        </div>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', animation: 'fadeInUp 1s ease-out 0.6s backwards' }}>
          <a href="#live-stream" style={{
            background: 'linear-gradient(135deg, #1e40af 0%, #2563eb 100%)',
            color: 'white',
            padding: '1rem 2.5rem',
            borderRadius: '50px',
            textDecoration: 'none',
            fontFamily: '"Outfit", sans-serif',
            fontWeight: 600,
            fontSize: '1rem',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            transition: 'transform 0.3s, box-shadow 0.3s',
            boxShadow: '0 10px 30px rgba(30, 64, 175, 0.3)',
            cursor: 'pointer'
          }}>
            <Play size={20} /> Watch Live
          </a>
          <a href="#events" style={{
            background: 'white',
            color: '#1e40af',
            padding: '1rem 2.5rem',
            borderRadius: '50px',
            textDecoration: 'none',
            fontFamily: '"Outfit", sans-serif',
            fontWeight: 600,
            fontSize: '1rem',
            border: '2px solid #1e40af',
            transition: 'all 0.3s',
            cursor: 'pointer'
          }}>
            Upcoming Events
          </a>
        </div>
      </div>

      <div style={{
        position: 'absolute',
        bottom: '3rem',
        left: '50%',
        transform: 'translateX(-50%)',
        animation: 'bounce 2s infinite',
        zIndex: 11
      }}>
        <a
          href="#about"
          aria-label="Scroll to about section"
          className="hero-scroll-down"
        >
          <ChevronRight style={{ transform: 'rotate(90deg)' }} size={32} />
        </a>
      </div>
    </section>
  );
}
