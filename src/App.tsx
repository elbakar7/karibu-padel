import { useState, lazy, Suspense } from 'react';

// Critical components - load immediately
import { Navigation } from './components/Navigation';
import { SEO } from './components/SEO';
import { HeroCarousel } from './components/HeroCarousel';

// Non-critical components - lazy load
const About = lazy(() => import('./components/About').then(module => ({ default: module.About })));
const CourtExperience = lazy(() => import('./components/CourtExperience').then(module => ({ default: module.CourtExperience })));
const Events = lazy(() => import('./components/Events').then(module => ({ default: module.Events })));
const Gallery = lazy(() => import('./components/Gallery').then(module => ({ default: module.Gallery })));
const Contact = lazy(() => import('./components/Contact').then(module => ({ default: module.Contact })));
const FloatingWhatsApp = lazy(() => import('./components/FloatingWhatsApp').then(module => ({ default: module.FloatingWhatsApp })));
const BookingDialog = lazy(() => import('./components/BookingDialog').then(module => ({ default: module.BookingDialog })));
import {
  courtsidePicture,
  defaultOgImageUrl,
  heroPicture,
  heroCarouselSlide1,
  heroCarouselSlide2,
  heroCarouselSlide3,
  loungePicture,
  walkwayPicture,
  allGalleryImages,
  galleryImage00098,
  galleryImage00041,
  galleryImage00109,
  galleryImage00060,
  galleryImageIMG3051,
  galleryPexelsAction1,
  galleryImage00028,
  galleryImage00097,
  galleryImage00126,
} from './media/images';

export default function App() {
  const [isBookingDialogOpen, setIsBookingDialogOpen] = useState(false);

  // Hero carousel images - sliding background images
  const heroCarouselImages = [galleryImage00098, galleryImage00041, galleryImage00109];
  
  // Updated with new images
  const aboutImages = [galleryImage00060, galleryImage00109, galleryImageIMG3051];
  const eventImages = [galleryPexelsAction1, galleryImage00028, galleryImage00097, galleryImage00126];
  
  // Use all gallery images loaded automatically via import.meta.glob
  const galleryImages = allGalleryImages;

  const handleOpenBooking = () => setIsBookingDialogOpen(true);
  const handleCloseBooking = () => setIsBookingDialogOpen(false);

  return (
    <>
      <SEO ogImage={defaultOgImageUrl} />
      <div className="relative bg-[#002B5B] overflow-x-hidden">
        <Navigation onBookingClick={handleOpenBooking} />
        <HeroCarousel images={heroCarouselImages} onBookingClick={handleOpenBooking} />
        <Suspense fallback={<div className="min-h-screen" />}>
          <About images={aboutImages} />
          <CourtExperience courtImage={courtsidePicture} />
          <Events eventImages={eventImages} />
          <Gallery images={galleryImages} />
          <Contact backgroundImage={walkwayPicture} />
          <FloatingWhatsApp />
          <BookingDialog isOpen={isBookingDialogOpen} onClose={handleCloseBooking} />
        </Suspense>
      </div>
    </>
  );
}
