import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Play } from 'lucide-react';

export default function GallerySection({ images, onImageSelect }) {
  const sectionRef = useRef(null);
  const imageRefs = useRef([]);
  const svgRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [lines, setLines] = useState([]);
  const [hoveredImageIndex, setHoveredImageIndex] = useState(null);

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
    { image: images[9], index: 9, className: 'gallery-float gallery-float-bottom-left' },
    { image: images[10], index: 10, className: 'gallery-float gallery-float-top-left-tiny' },
    { image: images[11], index: 11, className: 'gallery-float gallery-float-top-right-tiny' },
    { image: images[12], index: 12, className: 'gallery-float gallery-float-mid-left-tiny' },
    { image: images[13], index: 13, className: 'gallery-float gallery-float-mid-right-tiny' },
    { image: images[14], index: 14, className: 'gallery-float gallery-float-bottom-mid-tiny' },
    { image: images[15], index: 15, className: 'gallery-float gallery-float-bottom-right-tiny' }
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile || !sectionRef.current) return;

    const updateLines = () => {
      const section = sectionRef.current;
      if (!section) return;
      
      const centerX = section.offsetWidth / 2;
      const centerY = section.offsetHeight / 2;
      
      const newLines = imageRefs.current
        .map((el, idx) => {
          if (!el) return null;
          const rect = el.getBoundingClientRect();
          const sectionRect = section.getBoundingClientRect();
          const imageX = rect.left - sectionRect.left + rect.width / 2;
          const imageY = rect.top - sectionRect.top + rect.height / 2;
          return { idx, x1: centerX, y1: centerY, x2: imageX, y2: imageY };
        })
        .filter(Boolean);
      
      setLines(newLines);
    };

    let animationFrameId;
    const startAnimationLoop = () => {
      const loop = () => {
        updateLines();
        animationFrameId = requestAnimationFrame(loop);
      };
      loop();
    };

    startAnimationLoop();
    
    const observer = new ResizeObserver(updateLines);
    observer.observe(sectionRef.current);
    
    imageRefs.current.forEach(el => {
      if (el) observer.observe(el);
    });

    window.addEventListener('scroll', updateLines);
    window.addEventListener('resize', updateLines);

    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      window.removeEventListener('scroll', updateLines);
      window.removeEventListener('resize', updateLines);
    };
  }, [isMobile]);

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
      { x: 18, y: 16, rotate: -1 },
      { x: 14, y: 12, rotate: 0.8 },
      { x: 14, y: 12, rotate: -0.8 },
      { x: 12, y: 14, rotate: 0.8 },
      { x: 12, y: 14, rotate: -0.8 },
      { x: 14, y: 10, rotate: 0.7 },
      { x: 14, y: 10, rotate: -0.7 }
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
      22,
      -14,
      16,
      -12,
      12,
      -14,
      14
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
    <section id="gallery" ref={sectionRef} className="page-section-anchor community-gallery-section" style={{ position: 'relative' }}>
      <svg
        ref={svgRef}
        className="gallery-network-lines"
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 1
        }}
      >
        <defs>
          <marker id="star-marker" markerWidth="14" markerHeight="14" refX="7" refY="7" markerUnits="userSpaceOnUse">
            <polygon points="7,0 9,5 14,6 10,10 11,15 7,12 3,15 4,10 0,6 5,5" fill="rgba(30, 64, 175, 0.8)" />
          </marker>
        </defs>
        {lines.map((line) => {
          const isHovered = hoveredImageIndex === line.idx;
          return (
            <line
              key={`line-${line.idx}`}
              x1={line.x1}
              y1={line.y1}
              x2={line.x2}
              y2={line.y2}
              stroke={isHovered ? 'rgba(30, 64, 175, 0.85)' : 'rgba(30, 64, 175, 0.35)'}
              strokeWidth={isHovered ? '2.5' : '1.5'}
              markerEnd="url(#star-marker)"
              strokeDasharray={isHovered ? '6,2' : '4,3'}
              style={{ transition: 'all 0.3s ease' }}
            />
          );
        })}
      </svg>

      <div className="gallery-network-lines" aria-hidden="true" style={{ pointerEvents: 'none' }}>
        <span className="gallery-network-node node-center" />
      </div>

      {!isMobile && floatingImages.filter(({ image }) => image).map(({ image, index, className }) => (
        <button
          key={image.caption}
          ref={(element) => {
            imageRefs.current[index] = element;
          }}
          type="button"
          className={className}
          onClick={() => onImageSelect(index)}
          onMouseEnter={() => setHoveredImageIndex(index)}
          onMouseLeave={() => setHoveredImageIndex(null)}
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
        <div className="section-kicker">003 / Gallery</div>
        <h2>ECMI Family</h2>
        <p>Stories of worship, fellowship, and faith from our ECMI Mandaluyong family.</p>
        <button type="button" onClick={() => onImageSelect(0)}>
          Gallery
        </button>
      </div>
    </section>
  );
}
