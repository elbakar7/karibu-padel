import { motion, useScroll, useTransform } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { useEffect, useState, useMemo } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import type { PictureAsset } from '../types/media';
import { ResponsivePicture } from './ResponsivePicture';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from './ui/carousel';

interface HeroCarouselProps {
  images: PictureAsset[];
  onBookingClick: () => void;
}

export function HeroCarousel({ images, onBookingClick }: HeroCarouselProps) {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);
  const scale = useTransform(scrollY, [0, 500], [1, 1.2]);
  const prefersReducedMotion = usePrefersReducedMotion();
  const [currentIndex, setCurrentIndex] = useState(0);

  const plugin = useMemo(() => {
    return Autoplay({ 
      delay: 5000,
      stopOnInteraction: false,
      stopOnMouseEnter: false
    });
  }, []);

  useEffect(() => {
    if (images.length === 0) return;
    
    const preloadLinks: HTMLLinkElement[] = [];

    // Preload all carousel images with appropriate priority
    images.forEach((image, index) => {
      const selector = `link[data-hero-preload="${index}"]`;
      let preloadLink = document.head.querySelector<HTMLLinkElement>(selector);

      if (!preloadLink) {
        preloadLink = document.createElement('link');
        preloadLink.rel = 'preload';
        preloadLink.as = 'image';
        preloadLink.fetchPriority = index === 0 ? 'high' : 'low';
        preloadLink.setAttribute('data-hero-preload', String(index));
        document.head.appendChild(preloadLink);
      }

      // Preload AVIF format for modern browsers (best compression)
      if (image.sources.length > 0 && image.sources[0].type === 'image/avif') {
        preloadLink.href = image.sources[0].srcSet.split(',')[0].trim().split(' ')[0];
        preloadLink.type = 'image/avif';
      } else {
        preloadLink.href = image.img.src;
      }

      preloadLinks.push(preloadLink);
    });

    return () => {
      preloadLinks.forEach((link) => {
        if (link?.parentElement) {
          link.parentElement.removeChild(link);
        }
      });
    };
  }, [images]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        plugins={[plugin]}
        className="absolute inset-0"
      >
        <CarouselContent className="ml-0 h-full">
          {images.map((image, index) => (
            <CarouselItem key={index} className="pl-0 h-full relative">
              <motion.div
                style={
                  prefersReducedMotion ? undefined : { opacity, scale, willChange: 'transform, opacity' }
                }
                className="relative w-full h-full"
                aria-hidden="true"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-[#001a3d]/70 via-[#001a3d]/30 to-[#002B5B]/85 z-10" />
                <ResponsivePicture
                  image={image}
                  alt={`Karibu Padel Club - Slide ${index + 1}`}
                  pictureClassName="absolute inset-0 h-full w-full"
                  imgClassName="w-full h-full object-cover"
                  loading={index <= 1 ? "eager" : "lazy"}
                  fetchPriority={index === 0 ? "high" : index === 1 ? "auto" : "low"}
                  decoding="async"
                  sizes="100vw"
                />
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="relative z-20 h-full flex flex-col items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.6, 0.05, 0.01, 0.9] }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white tracking-tight">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="block bg-gradient-to-r from-white to-[#1DB954] bg-clip-text text-transparent"
              >
                Karibu Padel Club
              </motion.span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-lg md:text-xl text-white/90 mb-8 md:mb-12 max-w-2xl mx-auto px-4"
          >
            The No.1 Padel Court & Club in Zanzibar
          </motion.p>

          <motion.button
            onClick={onBookingClick}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.7 }}
            whileHover={prefersReducedMotion ? undefined : { scale: 1.05 }}
            whileTap={prefersReducedMotion ? undefined : { scale: 0.95 }}
            className="inline-block px-10 md:px-12 py-3 md:py-4 bg-[#1DB954] rounded-full text-[#002B5B] relative overflow-hidden group shadow-lg hover:shadow-[0_0_40px_rgba(29,185,84,0.5)] transition-shadow"
          >
            <motion.div
              className="absolute inset-0 bg-[#1DB954]/90"
              initial={{ x: prefersReducedMotion ? 0 : '-100%' }}
              whileHover={prefersReducedMotion ? undefined : { x: 0 }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10">Book Your Court</span>
          </motion.button>
        </motion.div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={
            prefersReducedMotion
              ? { duration: 0.5, delay: 1 }
              : { duration: 0.5, delay: 1, repeat: Infinity, repeatType: 'reverse' }
          }
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          aria-label="Scroll down to learn more about Karibu Padel"
        >
          <motion.div
            animate={prefersReducedMotion ? undefined : { y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown className="text-white/70" size={36} />
          </motion.div>
        </motion.a>
      </div>

      <motion.div
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#002B5B] to-transparent z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        aria-hidden="true"
      />
    </section>
  );
}
