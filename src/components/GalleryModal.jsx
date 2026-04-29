import React from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

export default function GalleryModal({ images, selectedImage, onClose, onNext, onPrevious }) {
  if (selectedImage === null) {
    return null;
  }

  const image = images[selectedImage];

  return (
    <div
      onClick={onClose}
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
        onClick={onClose}
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
        onClick={(e) => { e.stopPropagation(); onPrevious(); }}
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
        onClick={(e) => { e.stopPropagation(); onNext(); }}
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
          src={image?.url}
          alt={image?.caption}
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
          {image?.caption}
        </p>
      </div>
    </div>
  );
}
