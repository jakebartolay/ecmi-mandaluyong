import React, { useState, useEffect } from 'react';
import { Calendar, Clock, MapPin, Heart, Play, ChevronRight, ChevronLeft, X } from 'lucide-react';

export default function ECMIMandaluyongWebsite() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // Gallery images (placeholder - replace with actual church photos)
  const galleryImages = [
    { url: 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=800', caption: 'Sunday Worship Service' },
    { url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800', caption: 'Youth Fellowship' },
    { url: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=800', caption: 'Community Outreach' },
    { url: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800', caption: 'Prayer Meeting' },
    { url: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=800', caption: 'Bible Study' },
    { url: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800', caption: 'Worship Team' }
  ];

  const upcomingEvents = [
    { date: 'May 4, 2026', time: '9:00 AM', title: 'Sunday Celebration Service', location: 'Main Sanctuary' },
    { date: 'May 7, 2026', time: '7:00 PM', title: 'Midweek Prayer & Bible Study', location: 'Fellowship Hall' },
    { date: 'May 11, 2026', time: '9:00 AM', title: 'Sunday Worship Service', location: 'Main Sanctuary' },
    { date: 'May 14, 2026', time: '6:00 PM', title: 'Youth Night', location: 'Youth Center' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openGalleryModal = (index) => {
    setSelectedImage(index);
    setIsGalleryOpen(true);
  };

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <div style={{
      fontFamily: '"Crimson Pro", Georgia, serif',
      background: 'linear-gradient(135deg, #faf8f3 0%, #f5f1e8 100%)',
      minHeight: '100vh'
    }}>
      {/* Navigation */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: isScrolled ? 'rgba(255, 255, 255, 0.98)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(30, 64, 175, 0.1)' : 'none',
        padding: '1.5rem 0',
        transition: 'all 0.3s ease'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{
              width: '50px',
              height: '50px',
              background: 'linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)',
              clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)',
              position: 'relative',
              transition: 'transform 0.3s ease'
            }}>
              <div style={{
                position: 'absolute',
                top: '40%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '3px',
                height: '18px',
                background: '#1e40af'
              }} />
              <div style={{
                position: 'absolute',
                top: '40%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '14px',
                height: '3px',
                background: '#1e40af'
              }} />
            </div>
            <div>
              <div style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.5rem', fontWeight: 700, color: '#1e40af', fontStyle: 'italic' }}>
                emmanuel
              </div>
              <div style={{ fontSize: '0.7rem', letterSpacing: '1px', color: '#2563eb', fontWeight: 600 }}>
                MANDALUYONG
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '2.5rem', fontFamily: '"Outfit", sans-serif', fontSize: '0.95rem', fontWeight: 500 }}>
            <a href="#about" style={{ color: '#1e293b', textDecoration: 'none', transition: 'color 0.2s', cursor: 'pointer' }}>About</a>
            <a href="#services" style={{ color: '#1e293b', textDecoration: 'none', transition: 'color 0.2s', cursor: 'pointer' }}>Services</a>
            <a href="#events" style={{ color: '#1e293b', textDecoration: 'none', transition: 'color 0.2s', cursor: 'pointer' }}>Events</a>
            <a href="#gallery" style={{ color: '#1e293b', textDecoration: 'none', transition: 'color 0.2s', cursor: 'pointer' }}>Gallery</a>
            <a href="#give" style={{ color: '#1e293b', textDecoration: 'none', transition: 'color 0.2s', cursor: 'pointer' }}>Give</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{
        position: 'relative',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #fffbf0 0%, #fef3e2 50%, #fde8c8 100%)'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.03,
          backgroundImage: 'radial-gradient(circle at 2px 2px, #1e40af 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
        
        <div style={{ textAlign: 'center', zIndex: 10, padding: '0 2rem', animation: 'fadeInUp 1s ease-out' }}>
          <div style={{
            fontSize: '1rem',
            letterSpacing: '3px',
            color: '#f59e0b',
            fontWeight: 600,
            marginBottom: '1rem',
            fontFamily: '"Outfit", sans-serif',
            animation: 'fadeIn 1.5s ease-out'
          }}>
            EMMANUEL CHURCH MINISTRIES INT'L
          </div>
          <h1 style={{
            fontFamily: '"Playfair Display", serif',
            fontSize: 'clamp(3rem, 8vw, 6rem)',
            fontWeight: 700,
            color: '#1e40af',
            marginBottom: '1.5rem',
            lineHeight: 1.1,
            animation: 'fadeInUp 1s ease-out 0.2s backwards'
          }}>
            God With Us
          </h1>
          <p style={{
            fontSize: '1.3rem',
            color: '#475569',
            maxWidth: '600px',
            margin: '0 auto 3rem',
            lineHeight: 1.8,
            animation: 'fadeInUp 1s ease-out 0.4s backwards'
          }}>
            Join us in worship, fellowship, and growing together in faith at ECMI Mandaluyong
          </p>
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
          animation: 'bounce 2s infinite'
        }}>
          <ChevronRight style={{ transform: 'rotate(90deg)', color: '#1e40af', opacity: 0.5 }} size={32} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={{ padding: '6rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
          <div>
            <h2 style={{
              fontFamily: '"Playfair Display", serif',
              fontSize: '3rem',
              fontWeight: 700,
              color: '#1e40af',
              marginBottom: '1.5rem'
            }}>
              Welcome Home
            </h2>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.9, color: '#475569', marginBottom: '1.5rem' }}>
              ECMI Mandaluyong is a vibrant community of believers passionate about knowing God, making disciples, and transforming lives through the power of the Gospel.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.9, color: '#475569' }}>
              Whether you're new to faith or have been walking with Christ for years, there's a place for you here. Come as you are, and experience the love of God in our midst.
            </p>
          </div>
          <div style={{
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
              <p style={{ opacity: 0.9, lineHeight: 1.7 }}>
                123 Shaw Boulevard<br />
                Mandaluyong City<br />
                Metro Manila, Philippines
              </p>
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
      </section>

      {/* Events Section */}
      <section id="events" style={{ padding: '6rem 2rem', background: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontFamily: '"Playfair Display", serif',
            fontSize: '3rem',
            fontWeight: 700,
            color: '#1e40af',
            marginBottom: '3rem',
            textAlign: 'center'
          }}>
            Upcoming Events
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2rem' }}>
            {upcomingEvents.map((event, index) => (
              <div key={index} style={{
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

      {/* Gallery Section */}
      <section id="gallery" style={{ padding: '6rem 2rem', background: 'linear-gradient(135deg, #faf8f3 0%, #f5f1e8 100%)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
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
            {galleryImages.map((image, index) => (
              <div
                key={index}
                onClick={() => openGalleryModal(index)}
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

      {/* Live Stream Section */}
      <section id="live-stream" style={{ padding: '6rem 2rem', background: 'white' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{
            fontFamily: '"Playfair Display", serif',
            fontSize: '3rem',
            fontWeight: 700,
            color: '#1e40af',
            marginBottom: '2rem'
          }}>
            Watch Us Live
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#475569', marginBottom: '2rem', lineHeight: 1.8 }}>
            Can't make it to church? Join us online every Sunday at 9:00 AM and 5:00 PM
          </p>
          <div style={{
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

      {/* Give Section */}
      <section id="give" style={{ padding: '6rem 2rem', background: 'linear-gradient(135deg, #fef3e2 0%, #fde8c8 100%)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{
            fontFamily: '"Playfair Display", serif',
            fontSize: '3rem',
            fontWeight: 700,
            color: '#1e40af',
            marginBottom: '2rem'
          }}>
            Give Online
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#475569', marginBottom: '3rem', lineHeight: 1.8 }}>
            Your generous giving helps us continue our mission to spread the Gospel and serve our community. Thank you for your support!
          </p>
          <div style={{
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

      {/* Footer */}
      <footer style={{
        background: 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)',
        color: 'white',
        padding: '4rem 2rem 2rem',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '3rem',
            marginBottom: '3rem',
            textAlign: 'left'
          }}>
            <div>
              <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.8rem', marginBottom: '1rem', fontStyle: 'italic' }}>
                emmanuel
              </h3>
              <p style={{ opacity: 0.9, lineHeight: 1.8 }}>
                Emmanuel Church Ministries International - Mandaluyong
              </p>
            </div>
            <div>
              <h4 style={{ fontFamily: '"Outfit", sans-serif', fontSize: '1.2rem', marginBottom: '1rem', fontWeight: 600 }}>
                Contact Us
              </h4>
              <p style={{ opacity: 0.9, lineHeight: 1.8 }}>
                123 Shaw Boulevard<br />
                Mandaluyong City<br />
                Email: info@ecmimandaluyong.org<br />
                Phone: (02) 123-4567
              </p>
            </div>
            <div>
              <h4 style={{ fontFamily: '"Outfit", sans-serif', fontSize: '1.2rem', marginBottom: '1rem', fontWeight: 600 }}>
                Quick Links
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <a href="#about" style={{ color: 'white', opacity: 0.9, textDecoration: 'none' }}>About Us</a>
                <a href="#events" style={{ color: 'white', opacity: 0.9, textDecoration: 'none' }}>Events</a>
                <a href="#give" style={{ color: 'white', opacity: 0.9, textDecoration: 'none' }}>Give</a>
                <a href="#live-stream" style={{ color: 'white', opacity: 0.9, textDecoration: 'none' }}>Watch Live</a>
              </div>
            </div>
          </div>
          <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.2)', paddingTop: '2rem', opacity: 0.8 }}>
            © 2026 Emmanuel Church Ministries International - Mandaluyong. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Gallery Modal */}
      {isGalleryOpen && (
        <div
          onClick={() => setIsGalleryOpen(false)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.95)',
            zIndex: 2000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem'
          }}
        >
          <button
            onClick={() => setIsGalleryOpen(false)}
            style={{
              position: 'absolute',
              top: '2rem',
              right: '2rem',
              background: 'white',
              border: 'none',
              borderRadius: '50%',
              width: '50px',
              height: '50px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 2001
            }}
          >
            <X size={24} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            style={{
              position: 'absolute',
              left: '2rem',
              background: 'white',
              border: 'none',
              borderRadius: '50%',
              width: '50px',
              height: '50px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 2001
            }}
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            style={{
              position: 'absolute',
              right: '2rem',
              background: 'white',
              border: 'none',
              borderRadius: '50%',
              width: '50px',
              height: '50px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 2001
            }}
          >
            <ChevronRight size={24} />
          </button>
          <div onClick={(e) => e.stopPropagation()} style={{ maxWidth: '90%', maxHeight: '90%' }}>
            <img
              src={galleryImages[selectedImage]?.url}
              alt={galleryImages[selectedImage]?.caption}
              style={{
                maxWidth: '100%',
                maxHeight: '80vh',
                objectFit: 'contain',
                borderRadius: '12px'
              }}
            />
            <p style={{
              color: 'white',
              textAlign: 'center',
              marginTop: '1rem',
              fontFamily: '"Outfit", sans-serif',
              fontSize: '1.2rem'
            }}>
              {galleryImages[selectedImage]?.caption}
            </p>
          </div>
        </div>
      )}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,700&family=Outfit:wght@400;500;600;700&family=Crimson+Pro:wght@400;600&display=swap');
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(10px); }
        }
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        a:hover {
          color: #f59e0b !important;
        }
        
        button:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 40px rgba(30, 64, 175, 0.4) !important;
        }
      `}</style>
    </div>
  );
}