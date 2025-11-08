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

import aerialHeroImage from '../IMG_3097.JPG';
import courtsideImage from '../IMG_3051.JPG';
import loungeImage from '../IMG_4458.JPG';
import walkwayImage from '../IMG_4462.JPG';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const heroImage = aerialHeroImage;

  const aboutImages = [courtsideImage, walkwayImage, loungeImage];

  const courtImage = courtsideImage;

  const eventImages = [courtsideImage, walkwayImage, aerialHeroImage, loungeImage];

  const galleryImages = [courtsideImage, aerialHeroImage, walkwayImage, loungeImage, courtsideImage, walkwayImage];

  const contactBg = walkwayImage;

  return (
    <>
      <SEO ogImage={aerialHeroImage} />
      <div className="relative bg-[#002B5B] overflow-x-hidden">
        <Navigation onBookingClick={() => setIsBookingOpen(true)} />
        <Hero backgroundImage={heroImage} onBookingClick={() => setIsBookingOpen(true)} />
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
