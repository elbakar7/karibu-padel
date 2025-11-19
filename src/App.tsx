import { useState } from 'react';

import { About } from './components/About';
import { BookingDialog } from './components/BookingDialog';
import { Contact } from './components/Contact';
import { CourtExperience } from './components/CourtExperience';
import { Events } from './components/Events';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Gallery } from './components/Gallery';
import { HeroCarousel } from './components/HeroCarousel';
import { Navigation } from './components/Navigation';
import { SEO } from './components/SEO';
import {
  courtsidePicture,
  defaultOgImageUrl,
  heroPicture,
  heroCarouselSlide1,
  heroCarouselSlide2,
  heroCarouselSlide3,
  loungePicture,
  walkwayPicture,
  galleryPadelCourt1,
  galleryPadelCourt2,
  galleryPexelsAction1,
  galleryPexelsAction2,
  galleryPexelsAction3,
} from './media/images';

export default function App() {
  const [isBookingDialogOpen, setIsBookingDialogOpen] = useState(false);

  // Hero carousel images
  const heroCarouselImages = [heroCarouselSlide1, heroCarouselSlide2, heroCarouselSlide3];
  
  // Updated with new images
  const aboutImages = [courtsidePicture, galleryPadelCourt1, loungePicture];
  const eventImages = [galleryPexelsAction1, galleryPexelsAction2, galleryPexelsAction3, courtsidePicture];
  const galleryImages = [
    courtsidePicture,
    heroPicture,
    galleryPadelCourt1,
    galleryPadelCourt2,
    galleryPexelsAction1,
    galleryPexelsAction2,
    galleryPexelsAction3,
    walkwayPicture,
    loungePicture,
  ];

  const handleOpenBooking = () => setIsBookingDialogOpen(true);
  const handleCloseBooking = () => setIsBookingDialogOpen(false);

  return (
    <>
      <SEO ogImage={defaultOgImageUrl} />
      <div className="relative bg-[#002B5B] overflow-x-hidden">
        <Navigation onBookingClick={handleOpenBooking} />
        <HeroCarousel images={heroCarouselImages} onBookingClick={handleOpenBooking} />
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
