import React, { useEffect, useRef } from 'react';
import { Clock, MapPin } from 'lucide-react';

const mapsLink = 'https://www.google.com/maps/place/Albeso+Space/@14.5793337,121.0476797,21z/data=!4m6!3m5!1s0x3397c95165564011:0xfc35408cb045a1ff!8m2!3d14.5794386!4d121.0478301!16s%2Fg%2F11yl_g9k59?entry=ttu&g_ep=EgoyMDI2MDQyNi4wIKXMDSoASAFQAw%3D%3D';

const bibleVerses = [
  {
    text: 'For God so loved the world that He gave His only Son.',
    reference: 'John 3:16'
  },
  {
    text: 'The Lord is my shepherd; I shall not want.',
    reference: 'Psalm 23:1'
  },
  {
    text: 'I can do all things through Christ who strengthens me.',
    reference: 'Philippians 4:13'
  },
  {
    text: 'Be still, and know that I am God.',
    reference: 'Psalm 46:10'
  },
  {
    text: 'Walk by faith, not by sight.',
    reference: '2 Corinthians 5:7'
  }
];

const verseBackgroundImages = [
  'https://images.unsplash.com/photo-1507692049790-de58290a4334?w=900&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=900&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=900&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=900&auto=format&fit=crop'
];

export default function AboutSection() {
  const verseStripRef = useRef(null);
  const verseBgRef = useRef(null);

  useEffect(() => {
    const updateVerseBackground = () => {
      const strip = verseStripRef.current;
      const background = verseBgRef.current;

      if (!strip || !background) return;

      const rect = strip.getBoundingClientRect();
      const progress = Math.min(Math.max((window.innerHeight - rect.top) / (window.innerHeight + rect.height), 0), 1);
      const offset = (progress - 0.5) * 70;

      background.style.transform = `translate3d(0, ${offset}px, 0) scale(1.12)`;
    };

    updateVerseBackground();
    window.addEventListener('scroll', updateVerseBackground, { passive: true });
    window.addEventListener('resize', updateVerseBackground);

    return () => {
      window.removeEventListener('scroll', updateVerseBackground);
      window.removeEventListener('resize', updateVerseBackground);
    };
  }, []);

  return (
    <section id="about" className="page-section-anchor lagom-section about-section" style={{ padding: '4.5rem 0 0', minHeight: '100vh', display: 'block' }}>
      <div className="about-content-shell" style={{ width: '100%', maxWidth: '1280px', margin: '0 auto', padding: '0 2rem 5rem' }}>
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

      <div ref={verseStripRef} className="about-verse-strip" data-aos="fade-up">
        <div ref={verseBgRef} className="about-verse-bg-parallax" aria-hidden="true">
          <div className="about-verse-bg-track">
            {[...verseBackgroundImages, ...verseBackgroundImages].map((image, index) => (
              <div
                className="about-verse-bg-panel"
                key={`${image}-${index}`}
                style={{ backgroundImage: `url("${image}")` }}
              />
            ))}
          </div>
        </div>
        <div className="about-verse-overlay" aria-hidden="true" />
        <div className="about-verse-track">
          {[...bibleVerses, ...bibleVerses].map((verse, index) => (
            <div className="about-verse-item" key={`${verse.reference}-${index}`}>
              <strong>"{verse.text}"</strong>
              <span>{verse.reference}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
