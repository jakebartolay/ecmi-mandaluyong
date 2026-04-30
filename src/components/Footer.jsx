import React from 'react';
import { ArrowUpRight, Facebook, Instagram, Music2, Youtube } from 'lucide-react';
import logo from '../assets/logo.png';

const mapsLink = 'https://www.google.com/maps/place/Albeso+Space/@14.5793337,121.0476797,21z/data=!4m6!3m5!1s0x3397c95165564011:0xfc35408cb045a1ff!8m2!3d14.5794386!4d121.0478301!16s%2Fg%2F11yl_g9k59?entry=ttu&g_ep=EgoyMDI2MDQyNi4wIKXMDSoASAFQAw%3D%3D';

const footerLinks = [
  { href: '#top', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#events', label: 'Events' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#live-stream', label: 'Media' },
  { href: '#give', label: 'Give' },
  { href: '#visit', label: 'Visit Us' }
];

const socialLinks = [
  { label: 'Facebook', href: 'https://www.facebook.com/officialecmimakati', icon: Facebook },
  { label: 'YouTube', href: '#', icon: Youtube },
  { label: 'Instagram', href: '#', icon: Instagram },
  { label: 'TikTok', href: '#', icon: Music2 }
];

export default function Footer() {
  return (
    <footer id="footer" className="site-footer-section">
      <div className="footer-cta-panel" data-aos="fade-up">
        <div className="footer-cta-image" aria-hidden="true" />
        <div className="footer-cta-content">
          <div className="footer-section-number">007</div>
          <h2>Want to know more?</h2>
          <a href="mailto:ecmi.mandaluyong@gmail.com" className="footer-cta-button">
            Get in Touch
            <ArrowUpRight size={20} />
          </a>
        </div>
      </div>

      <div className="footer-directory" data-aos="fade-up" data-aos-delay="120">
        <div className="footer-brand-block">
          <a href="#top" aria-label="Back to top" className="footer-logo-link">
            <img src={logo} alt="ECMI Mandaluyong logo" />
          </a>
          <p>
            Emmanuel Church Ministries International - Mandaluyong. A community growing together in worship,
            fellowship, and faith.
          </p>
        </div>

        <nav className="footer-column" aria-label="Footer navigation">
          <h3>Menu</h3>
          {footerLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="footer-column footer-contact-column">
          <h3>Contacts</h3>
          <a href="tel:+6321234567">(02) 123-4567</a>
          <a href="mailto:ecmi.mandaluyong@gmail.com">ecmi.mandaluyong@gmail.com</a>
          <a href={mapsLink} target="_blank" rel="noreferrer">
            Albeso Space, Mandaluyong City
          </a>
        </div>

        <div className="footer-column">
          <h3>Social</h3>
          <div className="footer-social-icons">
            {socialLinks.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noreferrer' : undefined}
                  aria-label={social.label}
                  title={social.label}
                >
                  <Icon size={22} />
                </a>
              );
            })}
          </div>
        </div>

        <div className="footer-legal-row">
          <span>© 2026 ECMI Mandaluyong. All Rights Reserved.</span>
          <span>Emmanuel Church Ministries International</span>
        </div>
      </div>
    </footer>
  );
}
