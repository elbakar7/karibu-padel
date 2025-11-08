import { Suspense, lazy, useState } from 'react';
import { MotionConfig } from 'motion/react';

import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { SEO } from './components/SEO';
import { SectionFallback } from './components/SectionFallback';
import { usePrefersReducedMotion } from './hooks/usePrefersReducedMotion';
import {
  courtsidePicture,
  defaultOgImageUrl,
  heroPicture,
  loungePicture,
  walkwayPicture,
} from './media/images';

const AboutSection = lazy(() =>
  import('./components/About').then((module) => ({ default: module.About })),
);
const CourtExperienceSection = lazy(() =>
  import('./components/CourtExperience').then((module) => ({
    default: module.CourtExperience,
  })),
);
const EventsSection = lazy(() =>
  import('./components/Events').then((module) => ({ default: module.Events })),
);
const GallerySection = lazy(() =>
  import('./components/Gallery').then((module) => ({ default: module.Gallery })),
);
const ContactSection = lazy(() =>
  import('./components/Contact').then((module) => ({ default: module.Contact })),
);
const FloatingWhatsAppButton = lazy(() =>
  import('./components/FloatingWhatsApp').then((module) => ({
    default: module.FloatingWhatsApp,
  })),
);
const BookingDialogModal = lazy(() =>
  import('./components/BookingDialog').then((module) => ({
    default: module.BookingDialog,
  })),
);

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

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
    <MotionConfig reducedMotion={prefersReducedMotion ? 'always' : 'never'}>
      <SEO ogImage={defaultOgImageUrl} />
      <div className="relative bg-[#002B5B] overflow-x-hidden">
        <Navigation onBookingClick={() => setIsBookingOpen(true)} />
        <main id="main-content" tabIndex={-1} className="focus:outline-none">
          <Hero backgroundImage={heroImage} onBookingClick={() => setIsBookingOpen(true)} />
          <Suspense
            fallback={
              <SectionFallback
                title="Discover Karibu Padel"
                description="Loading details about our club, coaches, and tropical ambience."
              />
            }
          >
            <AboutSection images={aboutImages} />
          </Suspense>
          <Suspense
            fallback={
              <SectionFallback
                title="Court Experience"
                description="Preparing a walkthrough of our courts and VIP lounge."
                className="bg-[#001a3d]"
              />
            }
          >
            <CourtExperienceSection courtImage={courtImage} />
          </Suspense>
          <Suspense
            fallback={
              <SectionFallback
                title="Community Events"
                description="Gathering upcoming tournaments, mixers, and clinics."
              />
            }
          >
            <EventsSection eventImages={eventImages} />
          </Suspense>
          <Suspense
            fallback={
              <SectionFallback
                title="Gallery"
                description="Curating a visual tour of Karibu Padel."
                className="bg-[#001a3d]"
              />
            }
          >
            <GallerySection images={galleryImages} />
          </Suspense>
          <Suspense
            fallback={
              <SectionFallback
                title="Contact Karibu Padel"
                description="Loading contact details and booking options."
              />
            }
          >
            <ContactSection backgroundImage={contactBg} />
          </Suspense>
        </main>
        <Suspense fallback={null}>
          <FloatingWhatsAppButton />
        </Suspense>
        <Suspense fallback={null}>
          {isBookingOpen ? (
            <BookingDialogModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
          ) : null}
        </Suspense>
      </div>
    </MotionConfig>
  );
}
