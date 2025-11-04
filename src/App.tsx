import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { CourtExperience } from './components/CourtExperience';
import { Events } from './components/Events';
import { Gallery } from './components/Gallery';
import { Contact } from './components/Contact';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { BookingDialog } from './components/BookingDialog';
import { SEO } from './components/SEO';

import heroActionImage from '../pexels-criticalimagery-32896996.jpg';
import communityVibesImage from '../pexels-khezez-34079544.jpg';
import nightMatchImage from '../pexels-lluis-aragones-968548-4536850.jpg';
import oceanSunsetImage from '../pexels-roger-aribau-gisbert-19420784-8485104.jpg';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const heroImage = heroActionImage;

  const aboutImages = [heroActionImage, communityVibesImage, oceanSunsetImage];

  const courtImage = nightMatchImage;

  const eventImages = [heroActionImage, communityVibesImage, nightMatchImage, oceanSunsetImage];

  const galleryImages = [
    heroActionImage,
    communityVibesImage,
    nightMatchImage,
    oceanSunsetImage,
    communityVibesImage,
    nightMatchImage,
  ];

  const contactBg = oceanSunsetImage;

  return (
    <>
      <SEO ogImage={heroActionImage} />
      <div className="relative bg-[#002B5B] overflow-x-hidden">
        <Navigation onBookingClick={() => setIsBookingOpen(true)} />
        <Hero videoUrl={heroImage} onBookingClick={() => setIsBookingOpen(true)} />
        <About images={aboutImages} />
        <CourtExperience courtImage={courtImage} />
        <Events eventImages={eventImages} />
        <Gallery images={galleryImages} />
        <Contact backgroundImage={contactBg} />
        <FloatingWhatsApp />
        <BookingDialog isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
      </div>
    </>
  );
}
