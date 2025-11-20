import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect } from 'react';
import type { MouseEvent as ReactMouseEvent } from 'react';
import type { PictureAsset } from '../types/media';
import { ResponsivePicture } from './ResponsivePicture';

interface ImageLightboxProps {
  isOpen: boolean;
  images: PictureAsset[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export function ImageLightbox({
  isOpen,
  images,
  currentIndex,
  onClose,
  onNavigate,
}: ImageLightboxProps) {
  const isFirstImage = currentIndex === 0;
  const isLastImage = currentIndex === images.length - 1;

  const handlePrevClick = (event: ReactMouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    if (!isFirstImage) {
      onNavigate(currentIndex - 1);
    }
  };

  const handleNextClick = (event: ReactMouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    if (!isLastImage) {
      onNavigate(currentIndex + 1);
    }
  };

  const handleCloseClick = (event: ReactMouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    onClose();
  };

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
        onNavigate(currentIndex - 1);
      } else if (e.key === 'ArrowRight' && currentIndex < images.length - 1) {
        onNavigate(currentIndex + 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    // Prevent body scroll when lightbox is open
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, currentIndex, images.length, onClose, onNavigate]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md"
          onClick={onClose}
        >

          {/* Image Counter - Top Center */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, delay: 0.15 }}
            className="absolute top-4 left-1/2 -translate-x-1/2 z-50 px-5 py-2.5 sm:px-6 sm:py-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full shadow-xl"
          >
            <span className="text-white text-sm sm:text-base font-semibold">
              {currentIndex + 1} <span className="text-white/60">of</span> {images.length}
            </span>
          </motion.div>

          {/* Previous Button - Left Side */}
          <motion.button
            type="button"
            onClick={handlePrevClick}
            disabled={isFirstImage}
            aria-label="Previous image"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className={`absolute left-6 top-1/2 -translate-y-1/2 z-50 group ${
              isFirstImage ? 'opacity-40 cursor-not-allowed' : ''
            }`}
          >
            <div
              className={`relative w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white/10 backdrop-blur-xl border-2 border-white/20 flex items-center justify-center shadow-2xl transition-all duration-300 ${
                !isFirstImage ? 'hover:bg-white/20 hover:border-[#00BFA6]/60 hover:scale-110' : ''
              }`}
            >
              <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8 text-white drop-shadow-lg" />
              {/* Animated Glow on Hover */}
              {!isFirstImage && (
                <motion.div
                  className="absolute inset-0 rounded-full bg-[#00BFA6]/30 blur-xl opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
              )}
            </div>
          </motion.button>

          {/* Next Button - Right Side */}
          <motion.button
            type="button"
            onClick={handleNextClick}
            disabled={isLastImage}
            aria-label="Next image"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className={`absolute right-6 top-1/2 -translate-y-1/2 z-50 group ${
              isLastImage ? 'opacity-40 cursor-not-allowed' : ''
            }`}
          >
            <div
              className={`relative w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white/10 backdrop-blur-xl border-2 border-white/20 flex items-center justify-center shadow-2xl transition-all duration-300 ${
                !isLastImage ? 'hover:bg-white/20 hover:border-[#00BFA6]/60 hover:scale-110' : ''
              }`}
            >
              <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8 text-white drop-shadow-lg" />
              {/* Animated Glow on Hover */}
              {!isLastImage && (
                <motion.div
                  className="absolute inset-0 rounded-full bg-[#00BFA6]/30 blur-xl opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
              )}
            </div>
          </motion.button>

          {/* Image Container - Centered Modal with 50vw width */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-[50vw] max-h-[80vh] flex items-center justify-center bg-transparent"
          >
            {/* Close Button - Top Right of Image Container */}
            <motion.button
              type="button"
              onClick={handleCloseClick}
              aria-label="Close lightbox"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="absolute top-2 right-2 z-50 group"
            >
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/50 backdrop-blur-xl border-2 border-white/20 flex items-center justify-center shadow-2xl hover:bg-black/70 hover:border-white/40 hover:scale-110 transition-all duration-300">
                <X className="w-5 h-5 sm:w-6 sm:h-6 text-white drop-shadow-lg" />
              </div>
            </motion.button>

            <ResponsivePicture
              image={images[currentIndex]}
              alt={`Gallery image ${currentIndex + 1}`}
              pictureClassName="block"
              imgClassName="object-contain max-w-full max-h-full rounded-xl shadow-xl"
              loading="eager"
              fetchPriority="high"
              sizes="50vw"
            />
          </motion.div>

          {/* Keyboard Hints - Bottom Center */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-50 hidden sm:flex items-center gap-4 px-6 py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full"
          >
            <div className="flex items-center gap-2">
              <kbd className="px-2 py-1 bg-white/10 border border-white/20 rounded text-white text-xs font-mono">←</kbd>
              <span className="text-white/60 text-sm">Previous</span>
            </div>
            <div className="w-px h-4 bg-white/20" />
            <div className="flex items-center gap-2">
              <kbd className="px-2 py-1 bg-white/10 border border-white/20 rounded text-white text-xs font-mono">→</kbd>
              <span className="text-white/60 text-sm">Next</span>
            </div>
            <div className="w-px h-4 bg-white/20" />
            <div className="flex items-center gap-2">
              <kbd className="px-2 py-1 bg-white/10 border border-white/20 rounded text-white text-xs font-mono">Esc</kbd>
              <span className="text-white/60 text-sm">Close</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
