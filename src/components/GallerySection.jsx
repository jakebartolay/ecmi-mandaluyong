import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Play } from 'lucide-react';

export default function GallerySection({ images, onImageSelect }) {
  const sectionRef = useRef(null);
  const imageRefs = useRef([]);

  const floatingImages = [
    { image: images[0], index: 0, className: 'gallery-float gallery-float-left' },
    { image: images[1], index: 1, className: 'gallery-float gallery-float-right' },
    { image: images[2], index: 2, className: 'gallery-float gallery-float-bottom' },
    { image: images[3], index: 3, className: 'gallery-float gallery-float-top-small' },
    { image: images[4], index: 4, className: 'gallery-float gallery-float-left-small' },
    { image: images[5], index: 5, className: 'gallery-float gallery-float-right-small' },
    { image: images[6], index: 6, className: 'gallery-float gallery-float-far-left' },
    { image: images[7], index: 7, className: 'gallery-float gallery-float-far-right' },
    { image: images[8], index: 8, className: 'gallery-float gallery-float-top-mid' },
    { image: images[9], index: 9, className: 'gallery-float gallery-float-bottom-left' }
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const imageElements = imageRefs.current.filter(Boolean);
    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

    if (!section || !canHover) {
      return undefined;
    }

    const mouseMovement = [
      { x: 42, y: 30, rotate: -2.2 },
      { x: 34, y: 26, rotate: 2 },
      { x: 34, y: 24, rotate: -1.5 },
      { x: 24, y: 18, rotate: 1.4 },
      { x: 24, y: 20, rotate: -1.6 },
      { x: 24, y: 20, rotate: 1.6 },
      { x: 18, y: 18, rotate: -1.2 },
      { x: 18, y: 18, rotate: 1.2 },
      { x: 18, y: 16, rotate: 1 },
      { x: 18, y: 16, rotate: -1 }
    ];
    const scrollMovement = [
      -36,
      32,
      -28,
      24,
      -22,
      24,
      -18,
      20,
      -20,
      22
    ];
    let mouseProgress = { x: 0, y: 0 };
    let scrollProgress = 0;

    const applyMotion = () => {
      imageElements.forEach((imageElement, index) => {
        const mouseMotion = mouseMovement[index] || mouseMovement[0];
        const scrollY = scrollMovement[index] || 0;

        gsap.to(imageElement, {
          x: mouseProgress.x * mouseMotion.x,
          y: mouseProgress.y * mouseMotion.y + scrollProgress * scrollY,
          rotate: mouseProgress.x * mouseMotion.rotate,
          duration: 0.85,
          ease: 'power2.out'
        });
      });
    };

    const updateScrollProgress = () => {
      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      scrollProgress = Math.min(Math.max((viewportHeight - rect.top) / (viewportHeight + rect.height), 0), 1) - 0.5;
      applyMotion();
    };

    const handleMouseMove = (event) => {
      const rect = section.getBoundingClientRect();

      mouseProgress = {
        x: (event.clientX - rect.left) / rect.width - 0.5,
        y: (event.clientY - rect.top) / rect.height - 0.5
      };

      applyMotion();
    };

    const handleMouseLeave = () => {
      mouseProgress = { x: 0, y: 0 };
      applyMotion();
    };

    updateScrollProgress();
    section.addEventListener('mousemove', handleMouseMove);
    section.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('scroll', updateScrollProgress, { passive: true });
    window.addEventListener('resize', updateScrollProgress);

    return () => {
      section.removeEventListener('mousemove', handleMouseMove);
      section.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('scroll', updateScrollProgress);
      window.removeEventListener('resize', updateScrollProgress);
      gsap.killTweensOf(imageElements);
    };
  }, []);

  return (
    <section id="gallery" ref={sectionRef} className="page-section-anchor community-gallery-section">
      {floatingImages.filter(({ image }) => image).map(({ image, index, className }) => (
        <button
          key={image.caption}
          ref={(element) => {
            imageRefs.current[index] = element;
          }}
          type="button"
          className={className}
          onClick={() => onImageSelect(index)}
          aria-label={`Open ${image.caption}`}
        >
          <img src={image.url} alt={image.caption} />
          {index === 0 && (
            <span className="gallery-play-badge" aria-hidden="true">
              <Play size={44} fill="currentColor" strokeWidth={0} />
            </span>
          )}
        </button>
      ))}

      <div className="gallery-center-copy">
        <div className="section-kicker">003 / Community Gallery</div>
        <h2>Gallery</h2>
        <p>Stories of worship, fellowship, and faith from our ECMI Mandaluyong family.</p>
        <button type="button" onClick={() => onImageSelect(0)}>
          View Our Community
        </button>
      </div>
    </section>
  );
}
