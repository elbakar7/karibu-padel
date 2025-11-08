import { motion, useScroll, useTransform } from 'motion/react';
import { ChevronDown } from 'lucide-react';

import { useEffect } from 'react';
import type { PictureAsset } from '../types/media';
import { ResponsivePicture } from './ResponsivePicture';

interface HeroProps {
  backgroundImage: PictureAsset;
  onBookingClick: () => void;
}

export function Hero({ backgroundImage, onBookingClick }: HeroProps) {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);
  const scale = useTransform(scrollY, [0, 500], [1, 1.2]);

  useEffect(() => {
    const selector = 'link[data-hero-preload="true"]';
    let preloadLink = document.head.querySelector<HTMLLinkElement>(selector);

    if (!preloadLink) {
      preloadLink = document.createElement('link');
      preloadLink.rel = 'preload';
      preloadLink.as = 'image';
      preloadLink.fetchPriority = 'high';
      preloadLink.setAttribute('data-hero-preload', 'true');
      document.head.appendChild(preloadLink);
    }

    preloadLink.href = backgroundImage.img.src;

    return () => {
      if (preloadLink?.parentElement) {
        preloadLink.parentElement.removeChild(preloadLink);
      }
    };
  }, [backgroundImage]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
        <motion.div style={{ opacity, scale, willChange: 'transform, opacity' }} className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#001a3d]/70 via-[#001a3d]/30 to-[#002B5B]/85 z-10" />
          <ResponsivePicture
            image={backgroundImage}
            alt="Aerial view of the Karibu Padel courts in Zanzibar"
            pictureClassName="absolute inset-0 h-full w-full"
            imgClassName="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            sizes="100vw"
          />
        </motion.div>

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
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-2 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <span className="bg-gradient-to-r from-white via-[#FFD479] to-[#00BFA6] bg-clip-text text-transparent">
                Play.
              </span>
            </motion.h1>
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-2 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <span className="bg-gradient-to-r from-[#00BFA6] via-[#FFD479] to-white bg-clip-text text-transparent">
                Connect.
              </span>
            </motion.h1>
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              <span className="bg-gradient-to-r from-[#FFD479] via-[#FF6B5A] to-[#00BFA6] bg-clip-text text-transparent">
                Experience Zanzibar.
              </span>
            </motion.h1>
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
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-10 md:px-12 py-3 md:py-4 bg-gradient-to-r from-[#00BFA6] to-[#FFD479] rounded-full text-[#002B5B] relative overflow-hidden group shadow-lg hover:shadow-[0_0_40px_rgba(0,191,166,0.5)] transition-shadow"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#FFD479] to-[#FF6B5A]"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10">Book Your Court</span>
          </motion.button>
        </motion.div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1, repeat: Infinity, repeatType: 'reverse' }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
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
      />
    </section>
  );
}
