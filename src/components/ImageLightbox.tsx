import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect } from 'react';
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
          {/* Close button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ delay: 0.1 }}
            onClick={onClose}
            className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-colors"
            aria-label="Close lightbox"
          >
            <X size={24} />
          </motion.button>

          {/* Image counter */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ delay: 0.1 }}
            className="absolute top-4 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white"
          >
            {currentIndex + 1} / {images.length}
          </motion.div>

          {/* Previous button */}
          {currentIndex > 0 && (
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ delay: 0.1 }}
              onClick={(e) => {
                e.stopPropagation();
                onNavigate(currentIndex - 1);
              }}
              className="absolute left-4 z-50 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft size={28} />
            </motion.button>
          )}

          {/* Next button */}
          {currentIndex < images.length - 1 && (
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ delay: 0.1 }}
              onClick={(e) => {
                e.stopPropagation();
                onNavigate(currentIndex + 1);
              }}
              className="absolute right-4 z-50 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-colors"
              aria-label="Next image"
            >
              <ChevronRight size={28} />
            </motion.button>
          )}

          {/* Image */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-[90vw] max-h-[90vh] w-full h-full flex items-center justify-center p-4"
          >
            <ResponsivePicture
              image={images[currentIndex]}
              alt={`Gallery image ${currentIndex + 1}`}
              pictureClassName="block max-w-full max-h-full"
              imgClassName="max-w-full max-h-[90vh] object-contain rounded-lg"
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
