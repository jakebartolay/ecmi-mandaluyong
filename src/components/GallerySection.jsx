import React from 'react';

export default function GallerySection({ images, onImageSelect }) {
  return (
    <section id="gallery" className="page-section-anchor" style={{ padding: '8rem 2rem', background: 'linear-gradient(135deg, #faf8f3 0%, #f5f1e8 100%)', minHeight: '82vh', display: 'flex', alignItems: 'center' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 className="reveal-on-scroll reveal-up" style={{
          fontFamily: '"Playfair Display", serif',
          fontSize: '3rem',
          fontWeight: 700,
          color: '#1e40af',
          marginBottom: '3rem',
          textAlign: 'center'
        }}>
          Our Community
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          gap: '1.5rem'
        }}>
          {images.map((image, index) => (
            <div
              key={image.caption}
              className={`reveal-on-scroll reveal-up reveal-delay-${Math.min(index + 1, 4)}`}
              onClick={() => onImageSelect(index)}
              style={{
                position: 'relative',
                height: '300px',
                borderRadius: '12px',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'transform 0.3s',
                animation: `fadeIn 0.8s ease-out ${index * 0.1}s backwards`
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <img
                src={image.url}
                alt={image.caption}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'linear-gradient(to top, rgba(30, 64, 175, 0.9), transparent)',
                padding: '2rem 1rem 1rem',
                color: 'white',
                fontFamily: '"Outfit", sans-serif',
                fontWeight: 500
              }}>
                {image.caption}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
