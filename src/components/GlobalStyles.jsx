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
        scrollbar-width: none;
        -ms-overflow-style: none;
      }

      html::-webkit-scrollbar,
      body::-webkit-scrollbar {
        width: 0;
        height: 0;
        display: none;
      }

      html::-webkit-scrollbar-track,
      body::-webkit-scrollbar-track {
        background: transparent;
      }

      html::-webkit-scrollbar-thumb,
      body::-webkit-scrollbar-thumb {
        background: linear-gradient(180deg, rgba(30, 64, 175, 0.52), rgba(245, 158, 11, 0.58));
        border: 2px solid transparent;
        border-radius: 999px;
        background-clip: padding-box;
      }

      html::-webkit-scrollbar-thumb:hover,
      body::-webkit-scrollbar-thumb:hover {
        background: linear-gradient(180deg, rgba(30, 64, 175, 0.72), rgba(245, 158, 11, 0.78));
      }

      .custom-scrollbar {
        --scrollbar-bg: rgba(56, 51, 47, 0.06);
        --scrollbar-track-bg: rgba(56, 51, 47, 0.16);
        position: absolute;
        z-index: 1200;
        display: flex;
        justify-content: center;
        border-radius: 6px;
        background: var(--scrollbar-bg);
        opacity: 0;
        pointer-events: none;
        transition: transform 0.3s ease, opacity 0.3s ease;
      }

      .custom-scrollbar.is-active {
        opacity: 1;
        pointer-events: auto;
      }

      .custom-scrollbar.body-scroll {
        position: fixed;
        top: clamp(12px, 0.938vw, 18px);
        right: clamp(8px, 0.625vw, 12px);
        bottom: clamp(12px, 0.938vw, 18px);
        width: clamp(4px, 0.313vw, 6px);
      }

      .custom-scrollbar .scroll-track {
        position: absolute;
        top: 0;
        width: 100%;
        border-radius: 6px;
        background: var(--scrollbar-track-bg);
        transition: transform 0.2s linear, background 0.2s ease;
        pointer-events: auto;
        touch-action: none;
      }

      .custom-scrollbar:hover,
      .custom-scrollbar.is-dragging {
        transform: scaleX(1.6);
      }

      .custom-scrollbar:hover .scroll-track,
      .custom-scrollbar.is-dragging .scroll-track {
        background: rgba(56, 51, 47, 0.29);
        cursor: grab;
      }

      .custom-scrollbar.is-dragging,
      .custom-scrollbar.is-dragging .scroll-track {
        cursor: grabbing;
      }

      .page-section-anchor {
        scroll-margin-top: 0;
      }

      .section-kicker {
        color: #f59e0b;
        font-family: "Outfit", sans-serif;
        font-size: 0.9rem;
        font-weight: 800;
        letter-spacing: 0.18em;
        text-transform: uppercase;
        margin-bottom: 1.6rem;
      }

      .about-verse-strip {
        position: relative;
        width: 100%;
        height: clamp(230px, 34vh, 330px);
        overflow: hidden;
        background: #141414;
      }

      .about-verse-bg-parallax {
        position: absolute;
        inset: -22%;
        overflow: hidden;
        will-change: transform;
      }

      .about-verse-bg-track {
        height: 100%;
        display: flex;
        width: max-content;
        animation: aboutVerseImageLoop 46s linear infinite;
        filter: saturate(0.9) contrast(1.08);
        will-change: transform;
      }

      .about-verse-bg-panel {
        width: max(520px, 34vw);
        height: 100%;
        flex: 0 0 auto;
        background-size: cover;
        background-position: center;
      }

      .about-verse-overlay {
        position: absolute;
        inset: 0;
        background:
          linear-gradient(90deg, rgba(20, 20, 20, 0.96), rgba(20, 20, 20, 0.58), rgba(20, 20, 20, 0.96)),
          rgba(20, 20, 20, 0.24);
      }

      .about-verse-track {
        position: relative;
        z-index: 1;
        height: 100%;
        display: flex;
        align-items: center;
        gap: clamp(4rem, 8vw, 8rem);
        width: max-content;
        animation: aboutVerseMarquee 42s linear infinite;
        will-change: transform;
      }

      .about-verse-item {
        width: clamp(330px, 28vw, 520px);
        flex: 0 0 auto;
        color: #fff;
        font-family: "Outfit", sans-serif;
        text-shadow: 0 14px 34px rgba(0, 0, 0, 0.44);
      }

      .about-verse-item strong {
        display: block;
        font-size: clamp(1.45rem, 2.2vw, 2.4rem);
        font-weight: 800;
        line-height: 1.18;
      }

      .about-verse-item span {
        display: block;
        margin-top: 1rem;
        color: rgba(255, 255, 255, 0.72);
        font-size: 0.86rem;
        font-weight: 800;
        letter-spacing: 0.16em;
        text-transform: uppercase;
      }

      @keyframes aboutVerseMarquee {
        from {
          transform: translateX(0);
        }
        to {
          transform: translateX(-50%);
        }
      }

      @keyframes aboutVerseImageLoop {
        from {
          transform: translateX(0);
        }
        to {
          transform: translateX(-50%);
        }
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
        padding: 2.35rem 0;
        transform: none;
        transition: all 0.3s ease;
      }

      .site-nav::before {
        content: "";
        position: absolute;
        inset: 0;
        z-index: 2;
        pointer-events: none;
        background: transparent;
        border-bottom: 0 solid transparent;
        backdrop-filter: none;
        transition: background 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease;
      }

      .site-nav.is-solid::before {
        background: rgba(255, 255, 255, 0.98);
        border-bottom: 1px solid rgba(30, 64, 175, 0.1);
        backdrop-filter: blur(10px);
      }

      .site-nav.is-top-hidden::before {
        background: transparent;
        border-bottom-color: transparent;
        backdrop-filter: none;
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
        gap: clamp(1.35rem, 2vw, 2.3rem);
        font-family: "Outfit", sans-serif;
        font-size: 1.08rem;
        font-weight: 650;
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
        right: 2.8rem;
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

      .desktop-side-nav-link.is-active {
        min-width: 104px;
        padding: 0.76rem 1.05rem;
        font-size: 0.95rem;
        box-shadow: 0 16px 40px rgba(15, 23, 42, 0.16);
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

      .community-gallery-section {
        position: relative;
        min-height: 100vh;
        background: #f2efe9;
        overflow: hidden;
      }

      .gallery-section-index {
        position: absolute;
        top: clamp(2rem, 4vw, 4rem);
        left: clamp(1.2rem, 4vw, 4rem);
        color: rgba(56, 51, 47, 0.45);
        font-family: "Outfit", sans-serif;
        font-size: 0.9rem;
        font-weight: 800;
        letter-spacing: 0.18em;
      }

      .gallery-center-copy {
        position: absolute;
        left: 50%;
        top: 50%;
        z-index: 3;
        width: min(720px, 58vw);
        text-align: center;
        transform: translate(-50%, -50%);
        pointer-events: none;
      }

      .gallery-center-copy .section-kicker {
        margin-bottom: 1.2rem;
      }

      .gallery-center-copy h2 {
        color: #1e40af;
        font-family: "Playfair Display", serif;
        font-size: clamp(4.5rem, 10vw, 10rem);
        font-weight: 700;
        line-height: 0.9;
        margin: 0 0 1.2rem;
      }

      .gallery-center-copy p {
        max-width: 520px;
        margin: 0 auto 2rem;
        color: rgba(56, 51, 47, 0.7);
        font-family: "Outfit", sans-serif;
        font-size: clamp(1.05rem, 1.35vw, 1.22rem);
        line-height: 1.75;
      }

      .gallery-center-copy button {
        border: 0;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-height: 54px;
        padding: 1rem 1.45rem;
        color: #f8fafc;
        background: #141414;
        border-radius: 999px;
        font-family: "Outfit", sans-serif;
        font-size: 0.86rem;
        font-weight: 800;
        line-height: 1;
        letter-spacing: 0.16em;
        text-transform: uppercase;
        text-align: center;
        cursor: pointer;
        box-shadow: 0 18px 50px rgba(15, 23, 42, 0.18);
        transition: color 0.25s ease, background 0.25s ease, transform 0.25s ease;
        pointer-events: auto;
      }

      .gallery-center-copy button:hover {
        color: #141414;
        background: #fbbf24;
        transform: translateY(-4px);
      }

      .gallery-network-lines {
        position: absolute;
        inset: 0;
        z-index: 1;
        pointer-events: none;
        opacity: 0.72;
      }

      .gallery-network-line {
        position: absolute;
        left: 50%;
        top: 50%;
        height: 1px;
        background: linear-gradient(90deg, transparent, rgba(30, 64, 175, 0.42), rgba(245, 158, 11, 0.42), transparent);
        transform-origin: left center;
        animation: galleryNetworkPulse 4.5s ease-in-out infinite;
      }

      .gallery-network-line::after {
        content: "";
        position: absolute;
        top: 50%;
        left: 0;
        width: 8px;
        height: 8px;
        border-radius: 999px;
        background: #f59e0b;
        box-shadow: 0 0 18px rgba(245, 158, 11, 0.48);
        transform: translate(-50%, -50%);
      }

      .line-left-main {
        width: min(310px, 24vw);
        transform: rotate(184deg);
      }

      .line-left-small {
        width: min(240px, 18vw);
        transform: rotate(146deg);
        animation-delay: -1s;
      }

      .line-right-main {
        width: min(310px, 24vw);
        transform: rotate(-12deg);
        animation-delay: -0.4s;
      }

      .line-right-small {
        width: min(245px, 19vw);
        transform: rotate(32deg);
        animation-delay: -1.5s;
      }

      .line-bottom-main {
        width: min(245px, 19vw);
        transform: rotate(76deg);
        animation-delay: -2s;
      }

      .line-top-main {
        width: min(215px, 16vw);
        transform: rotate(-104deg);
        animation-delay: -2.6s;
      }

      .line-cluster-left {
        width: min(155px, 12vw);
        transform: rotate(205deg);
        animation-delay: -0.8s;
      }

      .line-cluster-right {
        width: min(155px, 12vw);
        transform: rotate(-25deg);
        animation-delay: -1.8s;
      }

      .line-cluster-bottom {
        width: min(170px, 13vw);
        transform: rotate(98deg);
        animation-delay: -2.8s;
      }

      .gallery-network-node {
        position: absolute;
        z-index: 1;
        width: 11px;
        height: 11px;
        border: 2px solid rgba(30, 64, 175, 0.3);
        border-radius: 999px;
        background: rgba(242, 239, 233, 0.88);
        box-shadow: 0 0 0 8px rgba(30, 64, 175, 0.06);
        animation: galleryNodePulse 3.6s ease-in-out infinite;
      }

      .node-center {
        left: 50%;
        top: 50%;
        width: 15px;
        height: 15px;
        border-color: rgba(245, 158, 11, 0.62);
        transform: translate(-50%, -50%);
        animation-name: galleryCenterNodePulse;
      }

      .node-left {
        left: 34%;
        top: 47%;
      }

      .node-right {
        right: 34%;
        top: 46%;
      }

      .node-bottom {
        left: 54%;
        bottom: 31%;
      }

      .node-top {
        left: 47%;
        top: 32%;
      }

      .node-left-inner {
        left: 42%;
        top: 43%;
      }

      .node-right-inner {
        right: 42%;
        top: 56%;
      }

      .node-bottom-inner {
        left: 47%;
        bottom: 38%;
      }

      @keyframes galleryNetworkPulse {
        0%, 100% {
          opacity: 0.42;
          filter: saturate(0.9);
        }
        50% {
          opacity: 0.9;
          filter: saturate(1.25);
        }
      }

      @keyframes galleryNodePulse {
        0%, 100% {
          transform: scale(1);
        }
        50% {
          transform: scale(1.22);
        }
      }

      @keyframes galleryCenterNodePulse {
        0%, 100% {
          transform: translate(-50%, -50%) scale(1);
        }
        50% {
          transform: translate(-50%, -50%) scale(1.22);
        }
      }

      .gallery-circle-container {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 2;
        pointer-events: none;
      }

      .gallery-circle-image {
        position: absolute;
        width: 140px;
        height: 140px;
        border-radius: 50%;
        overflow: hidden;
        border: 0;
        padding: 0;
        background: #d7d1c6;
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transform: translate(-50%, -50%);
        pointer-events: auto;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
      }

      .gallery-circle-image:hover {
        transform: translate(-50%, -50%) scale(1.1);
        box-shadow: 0 12px 32px rgba(0, 0, 0, 0.2);
      }

      .gallery-circle-image img {
        width: 100%;
        height: 100%;
        display: block;
        object-fit: cover;
        transition: transform 0.55s cubic-bezier(0.22, 1, 0.36, 1);
      }

      .gallery-circle-image:hover img {
        transform: scale(1.08);
      }

      .gallery-float {
        position: absolute;
        z-index: 2;
        display: none;
        overflow: hidden;
        border: 0;
        padding: 0;
        background: #d7d1c6;
        box-shadow: none;
        cursor: pointer;
        will-change: transform;
      }

      .gallery-float:nth-of-type(n+6) {
        opacity: 0.88;
      }

      .gallery-float img {
        width: 100%;
        height: 100%;
        display: block;
        object-fit: cover;
        transition: transform 0.55s cubic-bezier(0.22, 1, 0.36, 1);
      }

      .gallery-float:hover img {
        transform: scale(1.06);
      }

      .gallery-float-left {
        left: clamp(-3rem, -2.4vw, -1.4rem);
        top: clamp(5rem, 8vh, 6rem);
        width: min(400px, 25vw);
        height: min(480px, 54vh);
        animation: none;
      }

      .gallery-float-right {
        right: clamp(-3rem, -2.4vw, -1.4rem);
        top: clamp(3rem, 7vh, 5.5rem);
        width: min(265px, 16vw);
        height: min(310px, 35vh);
        animation: none;
      }

      .gallery-float-bottom {
        left: auto;
        right: clamp(5rem, 13vw, 12rem);
        bottom: clamp(-2.2rem, -3vh, -1.2rem);
        width: min(310px, 20vw);
        height: min(210px, 24vh);
        z-index: 1;
        animation: galleryFloatIdle 7.5s ease-in-out infinite;
      }

      .gallery-float-top-small {
        left: 26%;
        top: clamp(1rem, 3vh, 2.4rem);
        width: min(155px, 10vw);
        height: min(120px, 13vh);
        z-index: 1;
        animation: galleryFloatIdle 6.5s ease-in-out infinite reverse;
      }

      .gallery-float-left-small {
        left: clamp(5rem, 10vw, 11rem);
        bottom: clamp(13rem, 25vh, 18rem);
        width: min(180px, 11vw);
        height: min(135px, 15vh);
        z-index: 1;
        animation: galleryFloatIdle 8.5s ease-in-out infinite;
      }

      .gallery-float-right-small {
        right: clamp(5.5rem, 11vw, 12rem);
        bottom: clamp(13rem, 25vh, 18rem);
        width: min(170px, 10.5vw);
        height: min(125px, 14vh);
        z-index: 1;
        animation: galleryFloatIdle 7.25s ease-in-out infinite reverse;
      }

      .gallery-float-far-left {
        left: clamp(-2.6rem, -2vw, -1rem);
        bottom: clamp(1rem, 4vh, 2.8rem);
        width: min(140px, 9vw);
        height: min(190px, 21vh);
        z-index: 1;
        animation: galleryFloatIdle 8s ease-in-out infinite;
      }

      .gallery-float-far-right {
        right: clamp(-2.6rem, -2vw, -1rem);
        bottom: clamp(1rem, 4vh, 2.8rem);
        width: min(140px, 9vw);
        height: min(190px, 21vh);
        z-index: 1;
        animation: galleryFloatIdle 6.8s ease-in-out infinite reverse;
      }

      .gallery-float-top-mid {
        left: auto;
        right: 29%;
        top: clamp(1rem, 3vh, 2.4rem);
        width: min(150px, 9.5vw);
        height: min(115px, 13vh);
        z-index: 1;
        animation: galleryFloatIdle 7.6s ease-in-out infinite;
      }

      .gallery-float-bottom-left {
        left: clamp(12rem, 22vw, 24rem);
        bottom: clamp(0.5rem, 3vh, 2rem);
        width: min(155px, 9.5vw);
        height: min(115px, 13vh);
        z-index: 1;
        animation: galleryFloatIdle 8.2s ease-in-out infinite reverse;
      }

      .gallery-float-top-left-tiny {
        left: clamp(7rem, 13vw, 14rem);
        top: clamp(0.75rem, 2vh, 1.6rem);
        width: min(115px, 7vw);
        height: min(88px, 10vh);
        z-index: 1;
        animation: galleryFloatIdle 6.9s ease-in-out infinite;
      }

      .gallery-float-top-right-tiny {
        right: clamp(12rem, 20vw, 22rem);
        top: clamp(0.75rem, 2vh, 1.6rem);
        width: min(115px, 7vw);
        height: min(88px, 10vh);
        z-index: 1;
        animation: galleryFloatIdle 7.4s ease-in-out infinite reverse;
      }

      .gallery-float-mid-left-tiny {
        left: clamp(2rem, 5vw, 5rem);
        top: clamp(23rem, 50vh, 30rem);
        width: min(120px, 7.5vw);
        height: min(92px, 10vh);
        z-index: 1;
        animation: galleryFloatIdle 7.8s ease-in-out infinite;
      }

      .gallery-float-mid-right-tiny {
        right: clamp(2rem, 5vw, 5rem);
        top: clamp(24rem, 52vh, 31rem);
        width: min(120px, 7.5vw);
        height: min(92px, 10vh);
        z-index: 1;
        animation: galleryFloatIdle 8.1s ease-in-out infinite reverse;
      }

      .gallery-float-bottom-mid-tiny {
        left: 45%;
        bottom: clamp(0.35rem, 2vh, 1.2rem);
        width: min(115px, 7vw);
        height: min(88px, 10vh);
        z-index: 1;
        animation: galleryFloatIdle 7.1s ease-in-out infinite;
      }

      .gallery-float-bottom-right-tiny {
        right: clamp(15rem, 26vw, 28rem);
        bottom: clamp(0.5rem, 3vh, 2rem);
        width: min(120px, 7.5vw);
        height: min(92px, 10vh);
        z-index: 1;
        animation: galleryFloatIdle 7.9s ease-in-out infinite reverse;
      }

      @keyframes galleryFloatIdle {
        0%, 100% {
          margin-top: 0;
        }
        50% {
          margin-top: -14px;
        }
      }

      @media (prefers-reduced-motion: reduce) {
        .gallery-float {
          animation: none !important;
        }
      }

      .gallery-play-badge {
        position: absolute;
        left: 50%;
        top: 50%;
        width: 74px;
        height: 74px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        color: rgba(255, 255, 255, 0.94);
        transform: translate(-50%, -50%);
      }

      .church-location-section {
        position: relative;
        min-height: 100vh;
        padding: 0;
        background: #d7d1c6;
        color: #38332f;
        overflow: hidden;
      }

      .location-map-frame {
        position: absolute;
        inset: -8%;
        width: 116%;
        height: 116%;
        border: 0;
        filter: saturate(0.86) contrast(0.98);
        transform-origin: center;
        transition: transform 0.12s linear;
        pointer-events: none;
      }

      .location-section-overlay {
        position: absolute;
        inset: 0;
        pointer-events: none;
        background:
          linear-gradient(90deg, rgba(20, 20, 20, 0.58) 0%, rgba(20, 20, 20, 0.28) 34%, rgba(20, 20, 20, 0.02) 66%),
          linear-gradient(180deg, rgba(20, 20, 20, 0.1), rgba(20, 20, 20, 0.22));
      }

      .location-index {
        position: absolute;
        top: clamp(2rem, 5vw, 4.5rem);
        left: clamp(1.5rem, 5vw, 5rem);
        z-index: 2;
        color: rgba(255, 255, 255, 0.82);
        font-family: "Outfit", sans-serif;
        font-size: 0.9rem;
        font-weight: 800;
        letter-spacing: 0.18em;
      }

      .location-title-block {
        position: absolute;
        left: clamp(1.5rem, 5vw, 5rem);
        top: clamp(6rem, 13vh, 9rem);
        z-index: 2;
        max-width: min(700px, 48vw);
      }

      .location-title-block h2 {
        color: #fff;
        font-family: "Playfair Display", serif;
        font-size: clamp(3.8rem, 7.6vw, 8rem);
        font-weight: 700;
        line-height: 0.9;
        margin: 0;
        text-shadow: 0 22px 60px rgba(0, 0, 0, 0.34);
      }

      .location-floating-card {
        position: absolute;
        left: clamp(1.5rem, 5vw, 5rem);
        bottom: clamp(1.5rem, 5vw, 4.5rem);
        z-index: 2;
        width: min(430px, calc(100% - 2.4rem));
        padding: clamp(1.35rem, 2.2vw, 2rem);
        color: #f8fafc;
        background: rgba(20, 20, 20, 0.92);
        backdrop-filter: blur(14px);
        box-shadow: 0 28px 80px rgba(15, 23, 42, 0.3);
      }

      .location-card-icon {
        width: 48px;
        height: 48px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 1.3rem;
        color: #141414;
        background: #fbbf24;
        border-radius: 999px;
      }

      .location-card-label {
        margin: 0 0 0.65rem;
        color: rgba(248, 250, 252, 0.62);
        font-size: 0.78rem;
        font-weight: 800;
        letter-spacing: 0.18em;
        text-transform: uppercase;
      }

      .location-floating-card h3 {
        margin: 0 0 0.7rem;
        font-size: clamp(1.55rem, 2vw, 2rem);
        line-height: 1.1;
      }

      .location-floating-card p {
        margin: 0;
        color: rgba(248, 250, 252, 0.78);
        font-size: 1rem;
        line-height: 1.65;
      }

      .location-service-row {
        display: flex;
        gap: 0.65rem;
        align-items: flex-start;
        margin: 1.2rem 0 1.45rem;
        color: rgba(248, 250, 252, 0.86);
        font-size: 0.95rem;
        line-height: 1.45;
      }

      .location-service-row svg {
        flex: 0 0 auto;
        margin-top: 0.1rem;
        color: #fbbf24;
      }

      .location-floating-card a {
        width: fit-content;
        display: inline-flex;
        align-items: center;
        gap: 0.55rem;
        color: #141414;
        background: #f8fafc;
        border-radius: 999px;
        padding: 0.85rem 1.05rem;
        text-decoration: none;
        font-size: 0.86rem;
        font-weight: 800;
      }

      .location-image-card {
        position: absolute;
        right: clamp(1.5rem, 5vw, 5rem);
        top: clamp(1.5rem, 5vw, 4.5rem);
        z-index: 2;
        width: min(320px, 26vw);
        color: #f8fafc;
        background: rgba(20, 20, 20, 0.9);
        box-shadow: 0 24px 70px rgba(15, 23, 42, 0.22);
      }

      .location-image-card img {
        width: 100%;
        aspect-ratio: 1.35;
        object-fit: cover;
        display: block;
      }

      .location-image-card div {
        display: flex;
        gap: 0.65rem;
        align-items: center;
        padding: 0.95rem;
        font-size: 0.9rem;
        line-height: 1.35;
      }

      .site-footer-section {
        background: #141414;
        color: #f8fafc;
        font-family: "Outfit", sans-serif;
        min-height: 100vh;
        display: grid;
        grid-template-rows: minmax(0, 1fr) auto;
      }

      .footer-cta-panel {
        position: relative;
        min-height: 0;
        display: grid;
        align-items: end;
        overflow: hidden;
        background: #38332f;
      }

      .footer-cta-image {
        position: absolute;
        inset: 0;
        background:
          linear-gradient(180deg, rgba(56, 51, 47, 0.08), rgba(56, 51, 47, 0.78)),
          url("https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=1800&auto=format&fit=crop") center/cover;
        transform: scale(1.02);
      }

      .footer-cta-content {
        position: relative;
        z-index: 1;
        width: min(1280px, calc(100% - 4rem));
        margin: 0 auto;
        padding: clamp(7rem, 11vh, 9rem) 0 clamp(2.2rem, 5vh, 4rem);
      }

      .footer-section-number {
        color: rgba(255, 255, 255, 0.72);
        font-size: 0.9rem;
        font-weight: 700;
        letter-spacing: 0.18em;
        margin-bottom: 1rem;
      }

      .footer-cta-content h2 {
        max-width: 960px;
        color: #fff;
        font-family: "Playfair Display", serif;
        font-size: clamp(3.4rem, 8.4vw, 8rem);
        font-weight: 700;
        line-height: 0.92;
        margin: 0 0 1.8rem;
      }

      .footer-cta-button {
        width: fit-content;
        display: inline-flex;
        align-items: center;
        gap: 0.85rem;
        color: #38332f;
        background: #f2efe9;
        border: 1px solid rgba(255, 255, 255, 0.42);
        border-radius: 999px;
        padding: 1rem 1.35rem 1rem 1.55rem;
        text-decoration: none;
        text-transform: uppercase;
        letter-spacing: 0.16em;
        font-size: 0.82rem;
        font-weight: 800;
        transition: transform 0.25s ease, background 0.25s ease, color 0.25s ease;
      }

      .footer-cta-button:hover {
        color: #38332f !important;
        background: #fbbf24;
      }

      .footer-directory {
        width: min(1280px, calc(100% - 4rem));
        margin: 0 auto;
        padding: clamp(1.6rem, 3.4vw, 2.8rem) 0 1.35rem;
        display: grid;
        grid-template-columns: minmax(260px, 1.5fr) repeat(3, minmax(150px, 0.75fr));
        gap: clamp(1.5rem, 4vw, 4rem);
        background: #141414;
      }

      .footer-brand-block img {
        width: 104px;
        height: 104px;
        object-fit: contain;
        display: block;
      }

      .footer-logo-link {
        display: inline-flex;
        text-decoration: none;
      }

      .footer-brand-block p {
        max-width: 380px;
        margin-top: 1.2rem;
        color: rgba(255, 255, 255, 0.76);
        font-size: clamp(1rem, 1.25vw, 1.14rem);
        line-height: 1.6;
      }

      .footer-column {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 0.62rem;
      }

      .footer-column h3 {
        color: rgba(255, 255, 255, 0.58);
        font-size: 0.78rem;
        font-weight: 800;
        letter-spacing: 0.18em;
        margin: 0 0 0.55rem;
        text-transform: uppercase;
      }

      .footer-column a {
        color: #fff;
        font-size: 1.02rem;
        line-height: 1.45;
        text-decoration: none;
      }

      .footer-contact-column a {
        max-width: 270px;
      }

      .footer-social-icons {
        display: flex;
        flex-wrap: wrap;
        gap: 0.75rem;
      }

      .footer-social-icons a {
        width: 44px;
        height: 44px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        color: #f8fafc;
        background: rgba(255, 255, 255, 0.08);
        border: 1px solid rgba(255, 255, 255, 0.14);
        border-radius: 999px;
        transition: background 0.2s ease, color 0.2s ease, transform 0.2s ease;
      }

      .footer-social-icons a:hover {
        color: #141414 !important;
        background: #fbbf24;
      }

      .footer-legal-row {
        grid-column: 1 / -1;
        border-top: 1px solid rgba(255, 255, 255, 0.22);
        padding-top: 1rem;
        display: flex;
        justify-content: space-between;
        gap: 1.5rem;
        color: rgba(255, 255, 255, 0.58);
        font-size: 0.88rem;
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
        .gallery-float-left {
          width: 30vw;
          height: 44vh;
        }

        .gallery-float-right {
          width: 20vw;
        }

        .gallery-float-bottom {
          width: 24vw;
        }

        .gallery-float-top-small {
          left: 24%;
          width: 12vw;
        }

        .gallery-float-left-small,
        .gallery-float-right-small,
        .gallery-float-far-left,
        .gallery-float-far-right,
        .gallery-float-bottom-left,
        .gallery-float-top-left-tiny,
        .gallery-float-top-right-tiny,
        .gallery-float-mid-left-tiny,
        .gallery-float-mid-right-tiny,
        .gallery-float-bottom-mid-tiny,
        .gallery-float-bottom-right-tiny {
          width: 12vw;
        }

        .gallery-float-top-mid {
          width: 11vw;
        }

        .footer-directory {
          grid-template-columns: 1.2fr 1fr 1fr !important;
        }

        .footer-brand-block {
          grid-column: 1 / -1;
        }

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
        .community-gallery-section {
          min-height: auto;
          padding: 5.5rem 1rem 4rem;
          display: grid;
          gap: 1rem;
        }

        .gallery-center-copy {
          position: relative;
          left: auto;
          top: auto;
          width: 100%;
          order: 1;
          transform: none;
          padding: 1.25rem 0 0.75rem;
        }

        .gallery-center-copy h2 {
          font-size: clamp(4rem, 18vw, 6.4rem);
        }

        .gallery-center-copy p {
          font-size: 1rem;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .gallery-network-lines {
          display: none;
        }

        .gallery-float {
          position: relative;
          left: auto !important;
          right: auto !important;
          top: auto !important;
          bottom: auto !important;
          width: 100% !important;
          height: 240px !important;
          transform: none !important;
          animation: none !important;
        }

        .gallery-float:nth-of-type(n+6) {
          display: none;
        }

        .gallery-float-left {
          order: 2;
          width: 82% !important;
          justify-self: start;
        }

        .gallery-float-right {
          order: 3;
          width: 64% !important;
          height: 190px !important;
          justify-self: end;
        }

        .gallery-float-bottom {
          order: 4;
          width: 74% !important;
          height: 210px !important;
          justify-self: center;
        }

        .gallery-float-top-small {
          order: 5;
          width: 58% !important;
          height: 170px !important;
          justify-self: start;
        }

        .church-location-section {
          min-height: 100vh;
          display: grid;
          align-content: end;
          gap: 1rem;
          padding: 6rem 1rem 1rem;
        }

        .location-section-overlay {
          background:
            linear-gradient(180deg, rgba(20, 20, 20, 0.52) 0%, rgba(20, 20, 20, 0.08) 42%, rgba(20, 20, 20, 0.46) 100%);
        }

        .location-index {
          top: 6.4rem;
          left: 1rem;
        }

        .location-title-block {
          top: 8.4rem;
          left: 1rem;
          right: 1rem;
          max-width: none;
        }

        .location-title-block h2 {
          color: #fff;
          font-size: clamp(3.4rem, 16vw, 5.8rem);
        }

        .location-floating-card {
          position: relative;
          inset: auto;
          width: 100%;
        }

        .location-image-card {
          position: relative;
          inset: auto;
          width: 100%;
          display: grid;
          grid-template-columns: 130px 1fr;
          align-items: stretch;
        }

        .location-image-card img {
          height: 100%;
          aspect-ratio: auto;
        }

        .site-footer-section {
          min-height: auto;
          display: block;
        }

        .footer-cta-panel {
          min-height: 560px;
        }

        .footer-cta-content,
        .footer-directory {
          width: min(420px, calc(100% - 2rem));
        }

        .footer-cta-content {
          padding-top: 7rem;
          padding-bottom: 3.2rem;
        }

        .footer-cta-content h2 {
          font-size: clamp(3.5rem, 17vw, 5.4rem);
          margin-bottom: 1.9rem;
        }

        .footer-cta-button {
          font-size: 0.76rem;
          padding: 0.95rem 1.18rem 0.95rem 1.35rem;
        }

        .footer-directory {
          grid-template-columns: 1fr !important;
          gap: 2.6rem;
          padding-top: 3rem;
        }

        .footer-brand-block,
        .footer-column {
          align-items: center;
          text-align: center;
        }

        .footer-brand-block p,
        .footer-contact-column a {
          max-width: 320px;
        }

        .footer-brand-block img {
          width: 118px;
          height: 118px;
          margin: 0 auto;
        }

        .footer-legal-row {
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 0.6rem;
        }

        .site-nav {
          top: 0;
          left: 0;
          right: 0;
          transform: none;
          padding: 1.15rem 0;
        }

        .page-section-anchor {
          scroll-margin-top: 74px;
          min-height: auto !important;
          padding-top: 6rem !important;
          padding-bottom: 6rem !important;
          display: block !important;
        }

        .about-section {
          padding-top: 3rem !important;
        }

        .about-content-shell {
          padding-left: 1rem !important;
          padding-right: 1rem !important;
          padding-bottom: 4rem !important;
        }

        .about-verse-strip {
          height: 260px;
        }

        .about-verse-track {
          gap: 3rem;
          animation-duration: 34s;
        }

        .about-verse-bg-track {
          animation-duration: 34s;
        }

        .about-verse-bg-panel {
          width: 78vw;
        }

        .about-verse-item {
          width: min(310px, 82vw);
        }

        .lagom-section > div > div[style*="grid-template-columns"] {
          grid-template-columns: 1fr !important;
          gap: 2.5rem !important;
        }

        .section-kicker {
          font-size: 0.78rem;
          letter-spacing: 0.14em;
          margin-bottom: 1.1rem;
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
          padding: 1rem 1.05rem;
          border-radius: 10px;
          font-size: 1.08rem;
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
