import React, { useEffect, useRef, useState } from 'react';

const MIN_THUMB_HEIGHT = 40;

export default function CustomScrollbar() {
  const railRef = useRef(null);
  const dragStateRef = useRef(null);
  const [metrics, setMetrics] = useState({
    isActive: false,
    thumbHeight: MIN_THUMB_HEIGHT,
    thumbTop: 0
  });
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const updateScrollbar = () => {
      const rail = railRef.current;
      const documentHeight = document.documentElement.scrollHeight;
      const viewportHeight = window.innerHeight;
      const scrollableHeight = documentHeight - viewportHeight;

      if (!rail || scrollableHeight <= 0) {
        setMetrics((current) => ({ ...current, isActive: false, thumbTop: 0 }));
        return;
      }

      const railHeight = rail.clientHeight;
      const thumbHeight = Math.max(MIN_THUMB_HEIGHT, (viewportHeight / documentHeight) * railHeight);
      const travelDistance = railHeight - thumbHeight;
      const thumbTop = travelDistance * (window.scrollY / scrollableHeight);

      setMetrics({
        isActive: true,
        thumbHeight,
        thumbTop
      });
    };

    updateScrollbar();

    window.addEventListener('scroll', updateScrollbar, { passive: true });
    window.addEventListener('resize', updateScrollbar);

    return () => {
      window.removeEventListener('scroll', updateScrollbar);
      window.removeEventListener('resize', updateScrollbar);
    };
  }, []);

  useEffect(() => {
    const handlePointerMove = (event) => {
      const dragState = dragStateRef.current;
      const rail = railRef.current;

      if (!dragState || !rail) return;

      const documentHeight = document.documentElement.scrollHeight;
      const viewportHeight = window.innerHeight;
      const scrollableHeight = documentHeight - viewportHeight;
      const maxThumbTop = rail.clientHeight - dragState.thumbHeight;
      const nextTop = Math.min(Math.max(0, event.clientY - dragState.startY + dragState.startTop), maxThumbTop);
      const nextScrollY = maxThumbTop > 0 ? (nextTop / maxThumbTop) * scrollableHeight : 0;

      window.scrollTo({ top: nextScrollY });
    };

    const handlePointerUp = () => {
      dragStateRef.current = null;
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener('pointermove', handlePointerMove);
      window.addEventListener('pointerup', handlePointerUp);
      window.addEventListener('pointercancel', handlePointerUp);
    }

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
      window.removeEventListener('pointercancel', handlePointerUp);
    };
  }, [isDragging]);

  const handlePointerDown = (event) => {
    event.preventDefault();
    event.currentTarget.setPointerCapture?.(event.pointerId);

    dragStateRef.current = {
      startY: event.clientY,
      startTop: metrics.thumbTop,
      thumbHeight: metrics.thumbHeight
    };

    setIsDragging(true);
  };

  return (
    <div
      ref={railRef}
      className={`custom-scrollbar body-scroll${metrics.isActive ? ' is-active' : ''}${isDragging ? ' is-dragging' : ''}`}
      data-scrollbar
      aria-hidden="true"
    >
      <div
        className="scroll-track"
        data-scrollbar-track
        onPointerDown={handlePointerDown}
        style={{
          height: `${metrics.thumbHeight}px`,
          transform: `translateY(${metrics.thumbTop}px)`
        }}
      />
    </div>
  );
}
