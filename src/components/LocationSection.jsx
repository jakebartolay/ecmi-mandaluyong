import React, { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Clock, MapPin, Navigation } from 'lucide-react';

const mapsLink = 'https://www.google.com/maps/place/Albeso+Space/@14.5793337,121.0476797,21z/data=!4m6!3m5!1s0x3397c95165564011:0xfc35408cb045a1ff!8m2!3d14.5794386!4d121.0478301!16s%2Fg%2F11yl_g9k59?entry=ttu&g_ep=EgoyMDI2MDQyNi4wIKXMDSoASAFQAw%3D%3D';
const embedMapLink = 'https://www.google.com/maps?q=Albeso%20Space%2C%2060%20M.%20Guevara%20St.%20cor.%20Sinag%2C%20Mandaluyong%20City&output=embed';

export default function LocationSection() {
  const sectionRef = useRef(null);
  const [mapOffset, setMapOffset] = useState(0);

  useEffect(() => {
    const updateMapOffset = () => {
      const section = sectionRef.current;

      if (!section) return;

      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const progress = (viewportHeight - rect.top) / (viewportHeight + rect.height);
      const clampedProgress = Math.min(Math.max(progress, 0), 1);

      setMapOffset((clampedProgress - 0.5) * 72);
    };

    updateMapOffset();
    window.addEventListener('scroll', updateMapOffset, { passive: true });
    window.addEventListener('resize', updateMapOffset);

    return () => {
      window.removeEventListener('scroll', updateMapOffset);
      window.removeEventListener('resize', updateMapOffset);
    };
  }, []);

  return (
    <section id="visit" ref={sectionRef} className="page-section-anchor church-location-section">
      <iframe
        className="location-map-frame"
        title="ECMI Mandaluyong location map"
        src={embedMapLink}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
        style={{ transform: `translate3d(0, ${mapOffset}px, 0) scale(1.12)` }}
      />

      <div className="location-section-overlay" aria-hidden="true" />

      <div className="location-index" data-aos="fade-up">006</div>

      <div className="location-title-block" data-aos="fade-up">
        <div className="section-kicker">Visit Us</div>
        <h2>Church Location</h2>
      </div>

      <div className="location-floating-card" data-aos="fade-up" data-aos-delay="120">
        <div className="location-card-icon">
          <MapPin size={24} />
        </div>
        <p className="location-card-label">ECMI Mandaluyong</p>
        <h3>Albeso Space</h3>
        <p>
          60 M. Guevara St. cor. Sinag, Mandaluyong City, Metro Manila
        </p>
        <div className="location-service-row">
          <Clock size={18} />
          <span>Sunday Church 2026 | 1:00 PM - 3:00 PM</span>
        </div>
        <a href={mapsLink} target="_blank" rel="noreferrer">
          Open in Google Maps
          <ArrowUpRight size={18} />
        </a>
      </div>

      <div className="location-image-card" data-aos="fade-up" data-aos-delay="180" aria-hidden="true">
        <img
          src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=520&auto=format&fit=crop"
          alt=""
        />
        <div>
          <Navigation size={18} />
          <span>Easy to find, ready to welcome you.</span>
        </div>
      </div>
    </section>
  );
}
