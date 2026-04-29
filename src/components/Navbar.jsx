import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import logo from '../assets/logo.png';

export default function Navbar({ isScrolled }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('top');
  const isSolidNav = isScrolled || isMenuOpen;

  useEffect(() => {
    if (!isMenuOpen) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMenuOpen]);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#events', label: 'Events' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#live-stream', label: 'Live' },
    { href: '#give', label: 'Give' }
  ];
  const topNavLinks = [{ href: '#top', label: 'Home' }, ...navLinks];

  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.href.replace('#', ''));

    const updateActiveSection = () => {
      const currentSection = sectionIds.reduce((current, sectionId) => {
        const section = document.getElementById(sectionId);

        if (!section) {
          return current;
        }

        const sectionTop = section.getBoundingClientRect().top;
        return sectionTop <= 140 ? sectionId : current;
      }, 'top');

      setActiveSection(currentSection);
    };

    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection);

    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, []);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`site-nav ${isScrolled ? 'is-top-hidden' : ''}`}
      style={{
        '--mobile-nav-surface': isSolidNav ? 'rgba(255, 255, 255, 0.98)' : 'transparent',
        '--mobile-nav-border': isSolidNav ? '1px solid rgba(30, 64, 175, 0.1)' : '0 solid transparent',
        '--mobile-nav-blur': isSolidNav ? 'blur(10px)' : 'none'
      }}
    >
      <button
        className={`nav-backdrop ${isMenuOpen ? 'is-open' : ''}`}
        type="button"
        aria-label="Close navigation menu"
        onClick={closeMenu}
      />
      <div className="site-nav-inner">
        <div className="nav-spacer" />

        <button
          className={`nav-menu-button ${isMenuOpen ? 'is-open' : ''} ${isSolidNav ? 'is-solid' : ''}`}
          type="button"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>

        <a
          className="mobile-nav-logo"
          href="#top"
          aria-label="Back to top"
          onClick={closeMenu}
        >
          <img src={logo} alt="ECMI Mandaluyong logo" />
        </a>

        <div className={`nav-links ${isMenuOpen ? 'is-open' : ''}`}>
          {topNavLinks.map((link) => (
            <a
              key={link.href}
              className={`nav-link ${activeSection === link.href.replace('#', '') ? 'is-active' : ''} ${isSolidNav ? 'is-solid' : ''}`}
              href={link.href}
              onClick={closeMenu}
              style={{
                color: isSolidNav ? '#1e293b' : 'white',
                textDecoration: 'none',
                transition: 'color 0.2s',
                cursor: 'pointer',
                textShadow: isSolidNav ? 'none' : '0 6px 18px rgba(15, 23, 42, 0.45)'
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
      <div className={`desktop-side-nav ${isScrolled ? 'is-visible' : ''}`} aria-label="Section navigation">
        {navLinks.map((link) => (
          <a
            key={link.href}
            className={`desktop-side-nav-link ${activeSection === link.href.replace('#', '') ? 'is-active' : ''}`}
            href={link.href}
          >
            {link.label}
          </a>
        ))}
      </div>
      <a
        className={`back-to-top-button ${isScrolled ? 'is-visible' : ''}`}
        href="#top"
        aria-label="Back to top"
      >
        <ArrowUp size={22} />
      </a>
    </nav>
  );
}
