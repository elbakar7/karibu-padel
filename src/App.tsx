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
import {
  courtsidePicture,
  defaultOgImageUrl,
  heroPicture,
  loungePicture,
  walkwayPicture,
} from './media/images';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const heroImage = heroPicture;

  const aboutImages = [courtsidePicture, walkwayPicture, loungePicture];

  const courtImage = courtsidePicture;

  const eventImages = [courtsidePicture, walkwayPicture, heroPicture, loungePicture];

  const galleryImages = [
    courtsidePicture,
    heroPicture,
    walkwayPicture,
    loungePicture,
    courtsidePicture,
    walkwayPicture,
  ];

  const contactBg = walkwayPicture;

  return (
    <>
      <SEO ogImage={defaultOgImageUrl} />
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
