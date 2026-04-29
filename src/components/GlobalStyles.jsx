import React from 'react';

export default function GlobalStyles() {
  return (
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

      .page-section-anchor {
        scroll-margin-top: 24px;
      }

      .reveal-on-scroll {
        opacity: 0;
        transition:
          opacity 0.9s cubic-bezier(0.22, 1, 0.36, 1),
          transform 0.9s cubic-bezier(0.22, 1, 0.36, 1),
          filter 0.9s cubic-bezier(0.22, 1, 0.36, 1);
        will-change: opacity, transform, filter;
      }

      .reveal-up {
        transform: translateY(58px);
        filter: blur(8px);
      }

      .reveal-scale {
        transform: translateY(42px) scale(0.96);
        filter: blur(8px);
      }

      .reveal-on-scroll.is-visible {
        opacity: 1;
        transform: translateY(0) scale(1);
        filter: blur(0);
      }

      .reveal-delay-1 {
        transition-delay: 0.1s;
      }

      .reveal-delay-2 {
        transition-delay: 0.18s;
      }

      .reveal-delay-3 {
        transition-delay: 0.26s;
      }

      .reveal-delay-4 {
        transition-delay: 0.34s;
      }

      a:hover {
        color: #f59e0b !important;
      }

      button:hover {
        transform: translateY(-2px);
        box-shadow: 0 15px 40px rgba(30, 64, 175, 0.4) !important;
      }

      .site-nav {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1000;
        padding: 1.5rem 0;
        transform: none;
        transition: all 0.3s ease;
      }

      .site-nav::before {
        content: "";
        position: absolute;
        inset: 0;
        z-index: 2;
        pointer-events: none;
      }

      .site-nav-inner {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 2rem;
        display: grid;
        grid-template-columns: 170px 1fr 170px;
        align-items: center;
        position: relative;
        z-index: 3;
        transition: opacity 0.25s ease, transform 0.25s ease;
      }

      .nav-spacer {
        display: none;
      }

      .mobile-nav-logo {
        display: none;
      }

      .nav-backdrop {
        display: none;
      }

      .nav-links {
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 2.5rem;
        font-family: "Outfit", sans-serif;
        font-size: 0.95rem;
        font-weight: 500;
        padding: 0;
      }

      @media (min-width: 769px) {
        .site-nav.is-top-hidden .site-nav-inner {
          opacity: 0;
          pointer-events: none;
          transform: translateY(-18px);
        }

        .site-nav:not(.is-side-rail) .nav-links {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }
      }

      .nav-links::before {
        display: none;
      }

      .nav-link {
        position: relative;
        padding: 0.35rem 0;
      }

      .nav-link::after {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        bottom: -0.25rem;
        height: 2px;
        border-radius: 999px;
        background: #fbbf24;
        opacity: 0;
        transform: scaleX(0.25);
        transition: opacity 0.2s ease, transform 0.2s ease;
      }

      .nav-link.is-active::after,
      .nav-link:hover::after {
        opacity: 1;
        transform: scaleX(1);
      }

      .nav-link.is-active {
        color: #fbbf24 !important;
      }

      .nav-link.is-active.is-solid {
        color: #1e40af !important;
      }

      @media (min-width: 769px) {
        .site-nav.is-side-rail {
          top: 50%;
          left: auto;
          right: 1.5rem;
          padding: 0;
          transform: translateY(-50%);
        }

        .site-nav.is-side-rail .site-nav-inner {
          display: block;
          max-width: none;
          margin: 0;
          padding: 0;
        }

        .site-nav.is-side-rail .nav-links {
          position: relative;
          left: auto;
          top: auto;
          transform: none;
          flex-direction: column;
          align-items: flex-end;
          gap: 0.85rem;
          font-size: 0.86rem;
          font-weight: 700;
          padding: 0.85rem 0.65rem 0.85rem 1.3rem;
        }

        .site-nav.is-side-rail .nav-links::before {
          content: "";
          display: block;
          position: absolute;
          top: 0.35rem;
          bottom: 0.35rem;
          right: 0.2rem;
          width: 2px;
          border-radius: 999px;
          background: linear-gradient(to bottom, transparent, rgba(30, 64, 175, 0.45), transparent);
        }

        .site-nav.is-side-rail .nav-link {
          min-width: 82px;
          padding: 0.58rem 0.85rem;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.88);
          border: 1px solid rgba(30, 64, 175, 0.16);
          backdrop-filter: blur(10px);
          box-shadow: 0 12px 32px rgba(15, 23, 42, 0.12);
          text-align: center;
        }

        .site-nav.is-side-rail .nav-link::after {
          top: 50%;
          left: auto;
          right: -0.7rem;
          bottom: auto;
          width: 9px;
          height: 9px;
          transform: translateY(-50%) scale(0.5);
        }

        .site-nav.is-side-rail .nav-link.is-active::after,
        .site-nav.is-side-rail .nav-link:hover::after {
          transform: translateY(-50%) scale(1);
        }

        .site-nav.is-side-rail .nav-link.is-active {
          background: rgba(255, 255, 255, 0.96);
          border-color: rgba(30, 64, 175, 0.28);
        }
      }

      .nav-menu-button {
        display: none;
        width: 46px;
        height: 46px;
        border: 1px solid rgba(255, 255, 255, 0.48);
        border-radius: 999px;
        background: rgba(15, 23, 42, 0.12);
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 5px;
        cursor: pointer;
        box-shadow: 0 10px 30px rgba(30, 64, 175, 0.12);
        transition: background 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
      }

      .nav-menu-button.is-solid {
        border-color: rgba(30, 64, 175, 0.16);
        background: rgba(255, 255, 255, 0.82);
      }

      .nav-menu-button:hover {
        transform: none;
        background: white;
        border-color: rgba(30, 64, 175, 0.3);
        box-shadow: 0 12px 32px rgba(30, 64, 175, 0.18) !important;
      }

      .nav-menu-button span {
        width: 20px;
        height: 2px;
        border-radius: 999px;
        background: white;
        transition: transform 0.3s ease, opacity 0.2s ease;
      }

      .nav-menu-button.is-solid span {
        background: #1e40af;
      }

      .nav-menu-button.is-open span:nth-child(1) {
        transform: translateY(7px) rotate(45deg);
      }

      .nav-menu-button.is-open span:nth-child(2) {
        opacity: 0;
      }

      .nav-menu-button.is-open span:nth-child(3) {
        transform: translateY(-7px) rotate(-45deg);
      }

      .desktop-side-nav {
        position: fixed;
        top: 50%;
        right: 1.5rem;
        z-index: 1001;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: 0.85rem;
        padding: 0.85rem 0.65rem 0.85rem 1.3rem;
        opacity: 0;
        pointer-events: none;
        transform: translateY(-50%) translateX(18px);
        transition: opacity 0.25s ease, transform 0.25s ease;
      }

      .desktop-side-nav.is-visible {
        opacity: 1;
        pointer-events: auto;
        transform: translateY(-50%) translateX(0);
      }

      .desktop-side-nav::before {
        content: "";
        position: absolute;
        top: 0.35rem;
        bottom: 0.35rem;
        right: 0.2rem;
        width: 2px;
        border-radius: 999px;
        background: linear-gradient(to bottom, transparent, rgba(30, 64, 175, 0.45), transparent);
      }

      .desktop-side-nav-link {
        position: relative;
        min-width: 82px;
        padding: 0.58rem 0.85rem;
        border-radius: 999px;
        color: #1e293b;
        background: rgba(255, 255, 255, 0.88);
        border: 1px solid rgba(30, 64, 175, 0.16);
        backdrop-filter: blur(10px);
        box-shadow: 0 12px 32px rgba(15, 23, 42, 0.12);
        text-align: center;
        text-decoration: none;
        font-family: "Outfit", sans-serif;
        font-size: 0.86rem;
        font-weight: 700;
        transition: color 0.2s ease, border-color 0.2s ease, background 0.2s ease;
      }

      .desktop-side-nav-link::after {
        content: "";
        position: absolute;
        top: 50%;
        right: -0.7rem;
        width: 9px;
        height: 9px;
        border-radius: 999px;
        background: #fbbf24;
        opacity: 0;
        transform: translateY(-50%) scale(0.5);
        transition: opacity 0.2s ease, transform 0.2s ease;
      }

      .desktop-side-nav-link.is-active,
      .desktop-side-nav-link:hover {
        color: #1e40af !important;
        background: rgba(255, 255, 255, 0.96);
        border-color: rgba(30, 64, 175, 0.28);
      }

      .desktop-side-nav-link.is-active::after,
      .desktop-side-nav-link:hover::after {
        opacity: 1;
        transform: translateY(-50%) scale(1);
      }

      .back-to-top-button {
        position: fixed;
        right: 1.6rem;
        bottom: 1.6rem;
        z-index: 1001;
        width: 48px;
        height: 48px;
        border-radius: 50%;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        color: #1e40af;
        background: rgba(255, 255, 255, 0.92);
        border: 1px solid rgba(30, 64, 175, 0.16);
        box-shadow: 0 16px 42px rgba(15, 23, 42, 0.18);
        backdrop-filter: blur(12px);
        text-decoration: none;
        opacity: 0;
        pointer-events: none;
        transform: translateY(12px);
        transition: opacity 0.22s ease, transform 0.22s ease, background 0.2s ease;
      }

      .back-to-top-button.is-visible {
        opacity: 1;
        pointer-events: auto;
        transform: translateY(0);
      }

      .back-to-top-button:hover {
        color: white !important;
        background: #1e40af;
      }

      .hero-collage-bg {
        position: absolute;
        top: -55vh;
        bottom: -55vh;
        left: 50%;
        width: 230vw;
        display: flex;
        justify-content: space-between;
        gap: clamp(0.5rem, 1vw, 1rem);
        transform: translateX(-50%) rotate(-6deg) scale(1.08);
        opacity: 0.9;
        z-index: 1;
      }

      .hero-film-strip {
        width: clamp(420px, 48vw, 780px);
        display: flex;
        flex-direction: column;
        gap: clamp(0.5rem, 1vw, 1rem);
        flex: 0 0 auto;
        will-change: transform;
      }

      .hero-film-strip-left {
        animation: filmMoveDown 34s linear infinite;
      }

      .hero-film-strip-middle-left {
        animation: filmMoveUp 38s linear infinite;
        margin-top: -16rem;
        animation-delay: -12s;
      }

      .hero-film-strip-middle-right {
        animation: filmMoveDown 36s linear infinite;
        margin-top: -7rem;
        animation-delay: -19s;
      }

      .hero-film-strip-right {
        animation: filmMoveUp 40s linear infinite;
        margin-top: -22rem;
        animation-delay: -26s;
      }

      .hero-film-frame {
        height: clamp(680px, 78vh, 1040px);
        border-radius: 0;
        background-size: cover;
        background-position: center;
        box-shadow: none;
        border: 0;
        filter: saturate(0.95) contrast(1.04);
      }

      .hero-scroll-down {
        width: 54px;
        height: 54px;
        border-radius: 50%;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        color: white;
        background: rgba(15, 23, 42, 0.46);
        border: 1px solid rgba(255, 255, 255, 0.42);
        box-shadow: 0 16px 42px rgba(15, 23, 42, 0.42), 0 0 0 7px rgba(255, 255, 255, 0.08);
        backdrop-filter: blur(12px);
        text-decoration: none;
        transition: background 0.2s ease, transform 0.2s ease, border-color 0.2s ease;
      }

      .hero-scroll-down:hover {
        color: white !important;
        background: rgba(30, 64, 175, 0.72);
        border-color: rgba(255, 255, 255, 0.72);
        transform: translateY(-2px);
      }

      .hero-desktop-bottom-glow {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: 280px;
        background:
          radial-gradient(ellipse at bottom, rgba(255, 255, 255, 0.68) 0%, rgba(255, 255, 255, 0.34) 36%, transparent 72%),
          linear-gradient(to top, rgba(255, 255, 255, 0.48), transparent);
        filter: blur(4px);
        pointer-events: none;
        z-index: 4;
      }

      @keyframes filmMoveUp {
        from { transform: translateY(0); }
        to { transform: translateY(-33.333%); }
      }

      @keyframes filmMoveDown {
        from { transform: translateY(-33.333%); }
        to { transform: translateY(0); }
      }

      @media (max-width: 980px) {
        .footer-grid {
          grid-template-columns: 1fr 1fr !important;
        }

        .footer-main-layout {
          grid-template-columns: 1fr !important;
          gap: 2.5rem !important;
        }

        .footer-contact-layout {
          grid-template-columns: 1fr 1fr !important;
          padding-top: 0 !important;
        }
      }

      @media (max-width: 768px) {
        .site-nav {
          top: 0;
          left: 0;
          right: 0;
          transform: none;
          padding: 0.85rem 0;
        }

        .page-section-anchor {
          scroll-margin-top: 86px;
          min-height: auto !important;
          padding-top: 6rem !important;
          padding-bottom: 6rem !important;
          display: block !important;
        }

        .reveal-up,
        .reveal-scale {
          transform: translateY(34px);
          filter: blur(5px);
        }

        .site-nav::before {
          background: var(--mobile-nav-surface);
          border-bottom: var(--mobile-nav-border);
          backdrop-filter: var(--mobile-nav-blur);
          transition: background 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease;
        }

        .nav-backdrop {
          position: fixed;
          inset: 0;
          display: block;
          width: 100vw;
          height: 100vh;
          padding: 0;
          border: 0;
          border-radius: 0;
          background: rgba(15, 23, 42, 0.68);
          cursor: pointer;
          opacity: 0;
          pointer-events: none;
          transform: none;
          transition: opacity 0.25s ease;
          z-index: 1;
        }

        .nav-backdrop:hover {
          transform: none;
          box-shadow: none !important;
        }

        .nav-backdrop.is-open {
          opacity: 1;
          pointer-events: auto;
        }

        .site-nav-inner {
          padding: 0 1.25rem;
          display: flex;
          justify-content: flex-end;
          min-height: 54px;
        }

        .mobile-nav-logo {
          position: absolute;
          left: 1.25rem;
          top: 50%;
          transform: translateY(-50%);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
        }

        .mobile-nav-logo img {
          width: 92px;
          height: auto;
          display: block;
          object-fit: contain;
          filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.85)) drop-shadow(0 6px 18px rgba(255, 255, 255, 0.25));
        }

        .hero-main-logo {
          display: none !important;
        }

        .nav-menu-button {
          display: flex;
        }

        .nav-links {
          position: absolute;
          top: calc(100% + 0.8rem);
          left: 1.25rem;
          right: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0;
          padding: 0.75rem;
          background: rgba(255, 255, 255, 0.98);
          border: 1px solid rgba(30, 64, 175, 0.1);
          border-radius: 14px;
          box-shadow: 0 18px 50px rgba(30, 64, 175, 0.16);
          opacity: 0;
          pointer-events: none;
          transform: translateY(-12px) scale(0.98);
          transform-origin: top right;
          transition: opacity 0.25s ease, transform 0.25s ease;
        }

        .nav-links::before {
          display: none;
        }

        .nav-links.is-open {
          opacity: 1;
          pointer-events: auto;
          transform: translateY(0) scale(1);
        }

        .nav-links a {
          width: 100%;
          min-width: 0;
          padding: 0.95rem 1rem;
          border-radius: 10px;
          font-size: 1rem;
          background: transparent;
          border: 0;
          box-shadow: none;
          backdrop-filter: none;
        }

        .nav-link::after {
          display: none;
        }

        .nav-link.is-active {
          background: #fef3e2;
          color: #1e40af !important;
          font-weight: 700;
          text-shadow: none !important;
        }

        .nav-links a:hover {
          background: #fef3e2;
        }

        .desktop-side-nav {
          display: none;
        }

        .back-to-top-button {
          right: 1rem;
          bottom: 1rem;
          width: 44px;
          height: 44px;
        }

        .footer-grid {
          grid-template-columns: 1fr !important;
        }

        .footer-contact-layout {
          grid-template-columns: 1fr !important;
          gap: 2rem !important;
        }

        .footer-shell {
          max-width: 420px !important;
        }

        .footer-main-layout {
          gap: 2.25rem !important;
        }

        .footer-brand-panel {
          text-align: center;
        }

        .footer-brand-panel a {
          justify-content: center;
        }

        .footer-brand-text {
          max-width: 280px !important;
          margin-left: auto;
          margin-right: auto;
        }

        .footer-social-row {
          justify-content: center;
        }

        .footer-contact-item {
          display: grid !important;
          justify-items: center;
          text-align: center;
          padding: 1.25rem 1rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.04);
        }

        .footer-contact-item svg {
          margin-bottom: 0.85rem !important;
        }

        .footer-contact-item p {
          max-width: 300px !important;
        }

        .footer-link-row {
          justify-content: center;
          gap: 1.05rem !important;
          margin-top: 3rem !important;
          text-align: center;
          flex-wrap: nowrap !important;
          overflow-x: auto;
          padding-bottom: 0.25rem;
          scrollbar-width: none;
        }

        .footer-link-row::-webkit-scrollbar {
          display: none;
        }

        .footer-link-row a {
          flex: 0 0 auto;
          font-size: 0.88rem !important;
        }

        .footer-legal {
          text-align: center;
          font-size: 0.78rem !important;
          line-height: 1.5;
        }

        .footer-bottom {
          flex-direction: column;
        }

        .site-footer {
          background-attachment: scroll !important;
        }

        .hero-collage-bg {
          top: -42vh;
          bottom: -42vh;
          left: 50%;
          width: 320vw;
          gap: 0.5rem;
          transform: translateX(-50%) rotate(-8deg) scale(1.06);
          opacity: 0.76;
        }

        .hero-film-strip {
          width: 78vw;
          gap: 0.5rem;
        }

        .hero-film-strip-middle-left,
        .hero-film-strip-right {
          margin-top: -5rem;
        }

        .hero-film-strip-middle-right {
          margin-top: -2rem;
        }

        .hero-film-frame {
          height: 520px;
          border-radius: 0;
        }

        .hero-scroll-down {
          width: 48px;
          height: 48px;
          box-shadow: 0 14px 34px rgba(15, 23, 42, 0.45), 0 0 0 6px rgba(255, 255, 255, 0.08);
        }

        .hero-desktop-bottom-glow {
          display: none;
        }
      }
    `}</style>
  );
}
