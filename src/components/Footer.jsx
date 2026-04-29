import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import logo from '../assets/logo.png';

const mapsLink = 'https://www.google.com/maps/place/Albeso+Space/@14.5793337,121.0476797,21z/data=!4m6!3m5!1s0x3397c95165564011:0xfc35408cb045a1ff!8m2!3d14.5794386!4d121.0478301!16s%2Fg%2F11yl_g9k59?entry=ttu&g_ep=EgoyMDI2MDQyNi4wIKXMDSoASAFQAw%3D%3D';

const contactItems = [
  {
    icon: Mail,
    title: 'Email',
    value: 'ecmi.mandaluyong@gmail.com',
    href: 'mailto:ecmi.mandaluyong@gmail.com'
  },
  {
    icon: MapPin,
    title: 'Find Us',
    value: 'Albeso Space, Mandaluyong City, Metro Manila',
    href: mapsLink
  },
  {
    icon: Phone,
    title: 'Call Us',
    value: '(02) 123-4567',
    href: 'tel:+6321234567'
  }
];

const footerLinks = [
  { href: '#top', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#events', label: 'Events' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#live-stream', label: 'Media' },
  { href: '#give', label: 'Give' }
];

const socialLinks = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/officialecmimakati',
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
        <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.84c0-2.52 1.49-3.91 3.77-3.91 1.09 0 2.23.2 2.23.2v2.47h-1.26c-1.24 0-1.63.78-1.63 1.57v1.89h2.78l-.44 2.91h-2.34V22C18.34 21.24 22 17.08 22 12.06Z" />
      </svg>
    )
  },
  {
    label: 'YouTube',
    href: '#',
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
        <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z" />
      </svg>
    )
  },
  {
    label: 'Instagram',
    href: '#',
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
        <path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm0 2A3.8 3.8 0 0 0 4 7.8v8.4A3.8 3.8 0 0 0 7.8 20h8.4a3.8 3.8 0 0 0 3.8-3.8V7.8A3.8 3.8 0 0 0 16.2 4H7.8Zm8.7 1.7a1.3 1.3 0 1 1 0 2.6 1.3 1.3 0 0 1 0-2.6ZM12 7.2A4.8 4.8 0 1 1 12 16.8 4.8 4.8 0 0 1 12 7.2Zm0 2A2.8 2.8 0 1 0 12 14.8 2.8 2.8 0 0 0 12 9.2Z" />
      </svg>
    )
  },
  {
    label: 'TikTok',
    href: '#',
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
        <path d="M16.6 2c.3 2.5 1.7 4 4.2 4.2v3.2a7.4 7.4 0 0 1-4.2-1.3v7.2a6.7 6.7 0 1 1-6.7-6.7c.4 0 .8 0 1.2.1v3.4a3.2 3.2 0 1 0 2.2 3V2h3.3Z" />
      </svg>
    )
  }
];

export default function Footer() {
  return (
    <footer style={{
      background: '#101010',
      color: '#f8fafc',
      padding: '4rem 2rem 3.5rem',
      fontFamily: '"Outfit", sans-serif'
    }}>
      <div className="footer-shell" style={{ maxWidth: '1180px', margin: '0 auto' }}>
        <div className="footer-main-layout" style={{
          display: 'grid',
          gridTemplateColumns: '220px 1fr',
          gap: '4rem',
          alignItems: 'start'
        }}>
          <div className="footer-brand-panel">
            <a href="#top" aria-label="Back to top" style={{ display: 'inline-flex', textDecoration: 'none' }}>
              <img
                src={logo}
                alt="ECMI Mandaluyong logo"
                style={{
                  width: '150px',
                  height: '150px',
                  objectFit: 'contain',
                  display: 'block',
                  filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.62))'
                }}
              />
            </a>

            <p className="footer-brand-text" style={{
              marginTop: '1.8rem',
              maxWidth: '190px',
              color: 'rgba(248, 250, 252, 0.72)',
              lineHeight: 1.7,
              fontSize: '0.98rem'
            }}>
              Emmanuel Church Ministries International - Mandaluyong
            </p>

            <div style={{ marginTop: '2rem' }}>
              <h3 style={{
                color: '#f8fafc',
                fontSize: '1rem',
                fontWeight: 800,
                marginBottom: '0.85rem'
              }}>
                Social Links
              </h3>
              <div className="footer-social-row" style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel={social.href.startsWith('http') ? 'noreferrer' : undefined}
                    aria-label={social.label}
                    title={social.label}
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '50%',
                      color: '#101010',
                      background: '#fbbf24',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textDecoration: 'none',
                      boxShadow: '0 14px 34px rgba(251, 191, 36, 0.18)'
                    }}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="footer-contact-layout" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
              gap: '3rem',
              paddingTop: '2.1rem'
            }}>
              {contactItems.map((item) => {
                const Icon = item.icon;
                const content = (
                  <>
                    <Icon size={28} fill="currentColor" strokeWidth={0} style={{ color: '#f8fafc', marginBottom: '1.45rem' }} />
                    <h3 style={{
                      fontSize: '1.25rem',
                      lineHeight: 1.2,
                      marginBottom: '1.3rem',
                      fontWeight: 800
                    }}>
                      {item.title}
                    </h3>
                    <p style={{
                      color: 'rgba(248, 250, 252, 0.82)',
                      lineHeight: 1.65,
                      fontSize: '1rem',
                      maxWidth: '250px'
                    }}>
                      {item.value}
                    </p>
                  </>
                );

                return item.href ? (
                  <a className="footer-contact-item" key={item.title} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noreferrer' : undefined} style={{ color: 'inherit', textDecoration: 'none' }}>
                    {content}
                  </a>
                ) : (
                  <div className="footer-contact-item" key={item.title}>{content}</div>
                );
              })}
            </div>

            <nav className="footer-link-row" aria-label="Footer navigation" style={{
              display: 'flex',
              gap: '3rem',
              flexWrap: 'wrap',
              marginTop: '5.4rem'
            }}>
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  style={{
                    color: '#f8fafc',
                    textDecoration: 'none',
                    fontSize: '1.08rem',
                    transition: 'color 0.2s ease'
                  }}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="footer-legal" style={{ marginTop: '2.6rem', color: 'rgba(248, 250, 252, 0.46)', fontSize: '0.92rem' }}>
              <p style={{ marginBottom: '1.2rem' }}>&copy; 2026 ECMI Mandaluyong</p>
              <p>Emmanuel Church Ministries International</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
