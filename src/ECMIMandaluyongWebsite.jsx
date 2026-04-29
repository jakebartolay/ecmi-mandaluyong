import React, { useEffect, useState } from 'react';
import AboutSection from './components/AboutSection.jsx';
import EventsSection from './components/EventsSection.jsx';
import Footer from './components/Footer.jsx';
import GalleryModal from './components/GalleryModal.jsx';
import GallerySection from './components/GallerySection.jsx';
import GiveSection from './components/GiveSection.jsx';
import GlobalStyles from './components/GlobalStyles.jsx';
import HeroSection from './components/HeroSection.jsx';
import LiveStreamSection from './components/LiveStreamSection.jsx';
import Navbar from './components/Navbar.jsx';

const galleryImages = [
  { url: 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=800', caption: 'Sunday Worship Service' },
  { url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800', caption: 'Youth Fellowship' },
  { url: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=800', caption: 'Community Outreach' },
  { url: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800', caption: 'Prayer Meeting' },
  { url: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=800', caption: 'Bible Study' },
  { url: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800', caption: 'Worship Team' }
];

const upcomingEvents = [
  { date: 'April 26, 2026', time: '9:00 AM', title: 'ECMI 55th Anniversary', location: 'Main Sanctuary' },
  { date: 'May 4, 2026', time: '9:00 AM', title: 'Sunday Celebration Service', location: 'Main Sanctuary' },
  { date: 'May 7, 2026', time: '7:00 PM', title: 'Midweek Prayer & Bible Study', location: 'Fellowship Hall' },
  { date: 'May 11, 2026', time: '9:00 AM', title: 'Sunday Worship Service', location: 'Main Sanctuary' },
  { date: 'May 14, 2026', time: '6:00 PM', title: 'Youth Night', location: 'Youth Center' }
];

export default function ECMIMandaluyongWebsite() {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const revealItems = document.querySelectorAll('.reveal-on-scroll');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.16,
      rootMargin: '0px 0px -8% 0px'
    });

    revealItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const openGalleryModal = (index) => {
    setSelectedImage(index);
    setIsGalleryOpen(true);
  };

  const closeGalleryModal = () => {
    setIsGalleryOpen(false);
    setSelectedImage(null);
  };

  const nextImage = () => {
    setSelectedImage((previousIndex) => (previousIndex + 1) % galleryImages.length);
  };

  const previousImage = () => {
    setSelectedImage((previousIndex) => (previousIndex - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <div style={{
      fontFamily: '"Crimson Pro", Georgia, serif',
      background: 'linear-gradient(135deg, #faf8f3 0%, #f5f1e8 100%)',
      minHeight: '100vh'
    }}>
      <Navbar isScrolled={isScrolled} />
      <HeroSection />
      <AboutSection />
      <EventsSection events={upcomingEvents} />
      <GallerySection images={galleryImages} onImageSelect={openGalleryModal} />
      <LiveStreamSection />
      <GiveSection />
      <Footer />

      {isGalleryOpen && (
        <GalleryModal
          images={galleryImages}
          selectedImage={selectedImage}
          onClose={closeGalleryModal}
          onNext={nextImage}
          onPrevious={previousImage}
        />
      )}

      <GlobalStyles />
    </div>
  );
}
