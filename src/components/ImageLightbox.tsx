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

  const controlButtonClass =
    'flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 rounded-full text-white transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60';

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
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
          onClick={onClose}
        >
            {/* Controls cluster - Top Center */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: 0.1 }}
              className="absolute top-4 sm:top-6 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-1 text-white"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
                <button
                  type="button"
                  onClick={handlePrevClick}
                  disabled={isFirstImage}
                  aria-label="Previous image"
                  className={`${controlButtonClass} ${
                    isFirstImage
                      ? 'opacity-40 cursor-not-allowed'
                      : 'hover:bg-white/20 hover:scale-110'
                  }`}
                >
                  <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>

                <button
                  type="button"
                  onClick={handleCloseClick}
                  aria-label="Close lightbox"
                  className={`${controlButtonClass} hover:bg-white/20 hover:scale-110`}
                >
                  <X className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>

                <button
                  type="button"
                  onClick={handleNextClick}
                  disabled={isLastImage}
                  aria-label="Next image"
                  className={`${controlButtonClass} ${
                    isLastImage
                      ? 'opacity-40 cursor-not-allowed'
                      : 'hover:bg-white/20 hover:scale-110'
                  }`}
                >
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              </div>

              <span className="text-xs sm:text-sm font-medium text-white/80">
                {currentIndex + 1} / {images.length}
              </span>
            </motion.div>

          {/* Image */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-[90vw] max-h-[90vh] w-full h-full flex items-center justify-center p-4 sm:p-8"
          >
            <ResponsivePicture
              image={images[currentIndex]}
              alt={`Gallery image ${currentIndex + 1}`}
              pictureClassName="block max-w-full max-h-full"
              imgClassName="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              loading="eager"
              fetchPriority="high"
              sizes="90vw"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
