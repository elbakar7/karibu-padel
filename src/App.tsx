import { useState } from 'react';

import { About } from './components/About';
import { BookingDialog } from './components/BookingDialog';
import { Contact } from './components/Contact';
import { CourtExperience } from './components/CourtExperience';
import { Events } from './components/Events';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Gallery } from './components/Gallery';
import { Hero } from './components/Hero';
import { Navigation } from './components/Navigation';
import { SEO } from './components/SEO';
import {
  courtsidePicture,
  defaultOgImageUrl,
  heroPicture,
  loungePicture,
  walkwayPicture,
} from './media/images';

export default function App() {
  const [isBookingDialogOpen, setIsBookingDialogOpen] = useState(false);

  const aboutImages = [courtsidePicture, walkwayPicture, loungePicture];
  const eventImages = [courtsidePicture, walkwayPicture, heroPicture, loungePicture];
  const galleryImages = [
    courtsidePicture,
    heroPicture,
    walkwayPicture,
    loungePicture,
    courtsidePicture,
    walkwayPicture,
  ];

  const handleOpenBooking = () => setIsBookingDialogOpen(true);
  const handleCloseBooking = () => setIsBookingDialogOpen(false);

  return (
    <>
      <SEO ogImage={defaultOgImageUrl} />
      <div className="relative bg-[#002B5B] overflow-x-hidden">
        <Navigation onBookingClick={handleOpenBooking} />
        <Hero backgroundImage={heroPicture} onBookingClick={handleOpenBooking} />
        <About images={aboutImages} />
        <CourtExperience courtImage={courtsidePicture} />
        <Events eventImages={eventImages} />
        <Gallery images={galleryImages} />
        <Contact backgroundImage={walkwayPicture} />
        <FloatingWhatsApp />
        <BookingDialog isOpen={isBookingDialogOpen} onClose={handleCloseBooking} />
      </div>
    </>
  );
}
