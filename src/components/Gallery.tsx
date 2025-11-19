import { motion, useInView } from 'motion/react';
import { useCallback, useRef, useState } from 'react';
import { Maximize2, Grid3x3, Instagram } from 'lucide-react';
import type { PictureAsset } from '../types/media';
import { ResponsivePicture } from './ResponsivePicture';
import { ImageLightbox } from './ImageLightbox';
  
interface GalleryProps {
  images: PictureAsset[];
}

export function Gallery({ images }: GalleryProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.05 });
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleImageClick = useCallback((index: number) => {
    setSelectedImageIndex(index);
    setLightboxOpen(true);
  }, []);

  const handleCloseLightbox = useCallback(() => {
    setLightboxOpen(false);
  }, []);

  const handleLightboxNavigate = useCallback((index: number) => {
    setSelectedImageIndex(index);
  }, []);

  // Define grid layout patterns for visual interest
  const getGridItemClass = (index: number) => {
    const patterns = [
      'md:col-span-2 md:row-span-2', // Large
      'md:col-span-1 md:row-span-1', // Small
      'md:col-span-1 md:row-span-1', // Small
      'md:col-span-1 md:row-span-2', // Tall
      'md:col-span-2 md:row-span-1', // Wide
      'md:col-span-1 md:row-span-1', // Small
    ];
    return patterns[index % patterns.length];
  };

  return (
    <section id="gallery" ref={ref} className="relative py-12 sm:py-20 md:py-32 bg-gradient-to-b from-[#002B5B] via-[#001a3d] to-[#002B5B] overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 left-10 w-[600px] h-[600px] bg-[#00BFA6]/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-[#FFD479]/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, -30, 0],
          y: [0, -50, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12 md:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-4 sm:mb-6"
          >
            <Grid3x3 className="w-5 h-5 text-[#00BFA6]" />
            <span className="text-[#00BFA6] tracking-[0.3em] uppercase text-sm font-medium">
              Captured Moments
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6"
          >
            Our{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-[#00BFA6] via-[#FFD479] to-[#FF6B5A] bg-clip-text text-transparent">
                Gallery
              </span>
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#00BFA6] via-[#FFD479] to-[#FF6B5A]"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-white/60 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-6 sm:mb-8 px-4"
          >
            Experience the energy, passion, and community that makes Karibu Padel Club extraordinary
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="inline-flex items-center gap-3"
          >
            <motion.span
              className="px-6 py-2.5 bg-gradient-to-r from-[#00BFA6]/10 to-[#FFD479]/10 backdrop-blur-sm border border-[#00BFA6]/20 rounded-full text-[#00BFA6] font-medium"
              whileHover={{ scale: 1.05, borderColor: 'rgba(0, 191, 166, 0.4)' }}
            >
              #KaribuPadelMoments
            </motion.span>
          </motion.div>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0.3 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 auto-rows-[240px] sm:auto-rows-[280px] gap-3 sm:gap-4 md:gap-6"
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0.5, y: 10 }}
              transition={{ 
                duration: 0.5, 
                delay: 0.05 * (index % 6),
                ease: [0.25, 0.4, 0.25, 1]
              }}
              className={`relative group cursor-pointer ${getGridItemClass(index)}`}
              onClick={() => handleImageClick(index)}
            >
              {/* Image Container */}
              <div className="relative h-full w-full rounded-2xl overflow-hidden bg-[#001a3d]">
                <ResponsivePicture
                  image={image}
                  alt={`Gallery ${index + 1}`}
                  pictureClassName="block h-full w-full"
                  imgClassName="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  draggable={false}
                  loading="lazy"
                  decoding="async"
                  sizes="(min-width: 1024px) 400px, (min-width: 768px) 50vw, 100vw"
                  lazyRootMargin="300px 300px"
                  lazyThreshold={0.1}
                />

                {/* Gradient Overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-[#002B5B]/90 via-[#002B5B]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={false}
                />

                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#00BFA6]/0 to-[#00BFA6]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Hover Content */}
                <motion.div
                  className="absolute inset-0 flex flex-col items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500"
                  initial={false}
                >
                  {/* Expand Icon */}
                  <motion.div
                    className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-xl border-2 border-white/30 flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Maximize2 className="w-7 h-7 text-white" />
                  </motion.div>

                  {/* Hashtag Badge */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    className="px-4 py-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full"
                  >
                    <span className="text-white text-sm font-medium">#KaribuPadel</span>
                  </motion.div>
                </motion.div>

                {/* Top Border Animation */}
                <motion.div
                  className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00BFA6] via-[#FFD479] to-[#FF6B5A]"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.5 }}
                />

                {/* Bottom Info Strip */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#002B5B] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={false}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-white/80 text-sm">Image {index + 1}</span>
                    <div className="w-2 h-2 rounded-full bg-[#00BFA6] animate-pulse" />
                  </div>
                </motion.div>
              </div>

              {/* Glow Effect */}
              <motion.div
                className="absolute -inset-1 bg-gradient-to-br from-[#00BFA6]/0 via-[#FFD479]/0 to-[#FF6B5A]/0 group-hover:from-[#00BFA6]/20 group-hover:via-[#FFD479]/20 group-hover:to-[#FF6B5A]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-12 sm:mt-16 md:mt-24"
        >
          <motion.div
            className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 px-6 sm:px-8 py-5 sm:py-6 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl border border-white/10 rounded-3xl mx-4"
            whileHover={{ scale: 1.02, borderColor: 'rgba(255, 255, 255, 0.2)' }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00BFA6] to-[#FFD479] flex items-center justify-center">
                <Instagram className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <p className="text-white font-semibold">Follow our journey</p>
                <p className="text-white/60 text-sm">@karibupadelclub</p>
              </div>
            </div>

            <div className="hidden sm:block w-px h-12 bg-white/20" />

            <motion.a
              href="https://www.instagram.com/karibupadelclub"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-gradient-to-r from-[#00BFA6] to-[#00a890] text-white font-semibold rounded-full hover:shadow-lg hover:shadow-[#00BFA6]/20 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View More on Instagram
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Lightbox */}
      <ImageLightbox
        isOpen={lightboxOpen}
        images={images}
        currentIndex={selectedImageIndex}
        onClose={handleCloseLightbox}
        onNavigate={handleLightboxNavigate}
      />
    </section>
  );
}
