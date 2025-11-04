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

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const heroImage = 'https://images.unsplash.com/photo-1699117686612-ece525e4f91a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWRlbCUyMHRlbm5pcyUyMGNvdXJ0fGVufDF8fHx8MTc2MjIyNzgyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral';
  
  const aboutImages = [
    'https://images.unsplash.com/photo-1699117686612-ece525e4f91a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWRlbCUyMHRlbm5pcyUyMGNvdXJ0fGVufDF8fHx8MTc2MjIyNzgyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    'https://images.unsplash.com/photo-1626704485431-a0dea46bbe6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvY2VhbiUyMHN1bnNldCUyMHphbnppYmFyfGVufDF8fHx8MTc2MjI3MjIzMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    'https://images.unsplash.com/photo-1673964566152-2aee6bc89929?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGx1eHVyeSUyMGJlYWNofGVufDF8fHx8MTc2MjI3MjIzMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  ];

  const courtImage = 'https://images.unsplash.com/photo-1642506538803-294fc3d9fc26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWRlbCUyMHBsYXllcnMlMjBhY3Rpb258ZW58MXx8fHwxNzYyMjcyMjMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral';

  const eventImages = [
    'https://images.unsplash.com/photo-1748698534492-746f3950d9ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBjb21tdW5pdHklMjBjZWxlYnJhdGlvbnxlbnwxfHx8fDE3NjIyNzIyMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    'https://images.unsplash.com/photo-1699117686612-ece525e4f91a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWRlbCUyMHRlbm5pcyUyMGNvdXJ0fGVufDF8fHx8MTc2MjIyNzgyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    'https://images.unsplash.com/photo-1642506538803-294fc3d9fc26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWRlbCUyMHBsYXllcnMlMjBhY3Rpb258ZW58MXx8fHwxNzYyMjcyMjMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    'https://images.unsplash.com/photo-1673964566152-2aee6bc89929?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGx1eHVyeSUyMGJlYWNofGVufDF8fHx8MTc2MjI3MjIzMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  ];

  const galleryImages = [
    'https://images.unsplash.com/photo-1699117686612-ece525e4f91a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWRlbCUyMHRlbm5pcyUyMGNvdXJ0fGVufDF8fHx8MTc2MjIyNzgyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    'https://images.unsplash.com/photo-1626704485431-a0dea46bbe6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvY2VhbiUyMHN1bnNldCUyMHphbnppYmFyfGVufDF8fHx8MTc2MjI3MjIzMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    'https://images.unsplash.com/photo-1673964566152-2aee6bc89929?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGx1eHVyeSUyMGJlYWNofGVufDF8fHx8MTc2MjI3MjIzMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    'https://images.unsplash.com/photo-1642506538803-294fc3d9fc26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWRlbCUyMHBsYXllcnMlMjBhY3Rpb258ZW58MXx8fHwxNzYyMjcyMjMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    'https://images.unsplash.com/photo-1748698534492-746f3950d9ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBjb21tdW5pdHklMjBjZWxlYnJhdGlvbnxlbnwxfHx8fDE3NjIyNzIyMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    'https://images.unsplash.com/photo-1700674233924-64812b05a10c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZXJpYWwlMjBvY2VhbiUyMHZpZXd8ZW58MXx8fHwxNzYyMjcyMjMyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  ];

  const contactBg = 'https://images.unsplash.com/photo-1700674233924-64812b05a10c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZXJpYWwlMjBvY2VhbiUyMHZpZXd8ZW58MXx8fHwxNzYyMjcyMjMyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral';

  return (
    <>
      <SEO />
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
