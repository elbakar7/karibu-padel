import useEmblaCarousel from 'embla-carousel-react';
import { motion, useInView } from 'motion/react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { PictureAsset } from '../types/media';
import { ResponsivePicture } from './ResponsivePicture';
  
interface GalleryProps {
  images: PictureAsset[];
  }

export function Gallery({ images }: GalleryProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trimSnaps',
    dragFree: false,
    skipSnaps: false,
    slidesToScroll: 1,
    speed: 25,
  });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(images.length > 1);

  useEffect(() => {
    if (!emblaApi) {
      return;
    }

    const updateNavState = () => {
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    };

    updateNavState();
    emblaApi.on('select', updateNavState);
    emblaApi.on('reInit', updateNavState);

    return () => {
      emblaApi.off('select', updateNavState);
      emblaApi.off('reInit', updateNavState);
    };
  }, [emblaApi]);

  useEffect(() => {
    setCanScrollNext(images.length > 1);
  }, [images.length]);

  const handleNavigation = useCallback(
    (direction: 'next' | 'prev') => {
      if (!emblaApi) {
        return;
      }

      if (direction === 'next') {
        emblaApi.scrollNext();
        return;
      }

      emblaApi.scrollPrev();
    },
    [emblaApi],
  );

  return (
    <section id="gallery" ref={ref} className="relative py-32 bg-[#002B5B] overflow-hidden">
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00BFA6]/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[#00BFA6] tracking-widest uppercase mb-4 block"
          >
            Captured Moments
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl text-white mb-6"
          >
            <span className="bg-gradient-to-r from-white via-[#FFD479] to-[#00BFA6] bg-clip-text text-transparent">
              Gallery
            </span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="inline-block"
          >
            <motion.p
              className="text-white/70 px-8 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full"
              whileHover={{ scale: 1.05 }}
            >
              #KaribuPadelMoments
            </motion.p>
          </motion.div>
        </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <div
              ref={emblaRef}
              className="overflow-hidden pb-8 cursor-grab active:cursor-grabbing touch-pan-y"
            >
              <motion.div className="flex gap-6 will-change-transform">
                {images.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ y: -15, scale: 1.03 }}
                    className="relative flex-shrink-0 w-[80vw] max-w-[420px] h-[420px] sm:w-[360px] sm:h-[480px] lg:w-[400px] lg:h-[520px] group"
                  >
                    <div className="relative h-full rounded-3xl overflow-hidden">
                      <ResponsivePicture
                        image={image}
                        alt={`Gallery ${index + 1}`}
                        pictureClassName="block h-full w-full"
                        imgClassName="w-full h-full object-cover"
                        draggable={false}
                        loading="lazy"
                        decoding="async"
                        sizes="(min-width: 1024px) 400px, 80vw"
                        lazyRootMargin="500px 500px"
                        lazyThreshold={0.1}
                      />

                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-[#002B5B] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      />

                      <motion.div
                        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <motion.div
                          className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center"
                          whileHover={{ scale: 1.2, rotate: 90 }}
                        >
                          <span className="text-white text-2xl">+</span>
                        </motion.div>
                      </motion.div>

                      <motion.div
                        className="absolute bottom-6 left-6 right-6 p-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        initial={{ y: 20 }}
                        whileHover={{ y: 0 }}
                      >
                        <p className="text-white">#KaribuPadelMoments</p>
                      </motion.div>

                      <motion.div
                        className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00BFA6] via-[#FFD479] to-[#FF6B5A]"
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>

                    <motion.div
                      className="absolute -inset-4 bg-gradient-to-br from-[#00BFA6]/20 to-[#FFD479]/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                    />
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-32 bg-gradient-to-r from-[#002B5B] to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-32 bg-gradient-to-l from-[#002B5B] to-transparent" />

            {images.length > 1 && (
              <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-2 sm:px-4">
                <button
                  type="button"
                  onClick={() => handleNavigation('prev')}
                  className="pointer-events-auto z-20 w-12 h-12 rounded-full bg-white/10 border border-white/20 text-white backdrop-blur-md flex items-center justify-center transition hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white disabled:opacity-40 disabled:hover:bg-white/10"
                  aria-label="Show previous gallery items"
                  disabled={!canScrollPrev}
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  type="button"
                  onClick={() => handleNavigation('next')}
                  className="pointer-events-auto z-20 w-12 h-12 rounded-full bg-white/10 border border-white/20 text-white backdrop-blur-md flex items-center justify-center transition hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white disabled:opacity-40 disabled:hover:bg-white/10"
                  aria-label="Show next gallery items"
                  disabled={!canScrollNext}
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            )}
          </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <motion.div
            className="inline-flex items-center gap-8 px-8 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              animate={{ x: [-10, 10, -10] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="text-white/60"
            >
              ← Drag to explore
            </motion.div>
            <div className="w-px h-6 bg-white/20" />
            <motion.a
              href="https://www.instagram.com/karibupadelclub"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00BFA6] hover:text-[#FFD479] transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              View More on Instagram
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
}
