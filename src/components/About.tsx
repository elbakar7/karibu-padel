import { motion, useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';

import type { PictureAsset } from '../types/media';
import { ResponsivePicture } from './ResponsivePicture';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';
  
interface AboutProps {
  images: PictureAsset[];
}

export function About({ images }: AboutProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const [currentImage, setCurrentImage] = useState(0);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (!isInView || prefersReducedMotion) {
      return undefined;
    }
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length, isInView, prefersReducedMotion]);

  return (
    <section id="about" ref={ref} className="relative py-32 bg-gradient-to-b from-[#002B5B] to-[#001a3d] overflow-hidden">
        <motion.div
        className="absolute top-20 right-10 w-72 h-72 bg-[#00BFA6]/10 rounded-full blur-3xl"
          animate={
            prefersReducedMotion
              ? undefined
              : {
                  scale: [1, 1.2, 1],
                  x: [0, 50, 0],
                  y: [0, 30, 0],
                }
          }
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-96 h-96 bg-[#FFD479]/10 rounded-full blur-3xl"
          animate={
            prefersReducedMotion
              ? undefined
              : {
                  scale: [1, 1.3, 1],
                  x: [0, -30, 0],
                  y: [0, -50, 0],
                }
          }
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.4 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="inline-block mb-4"
            >
              <span className="text-[#00BFA6] tracking-widest uppercase">Welcome to Paradise</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.3, delay: 0.15 }}
              className="text-4xl md:text-5xl lg:text-6xl text-white mb-6"
            >
              <span className="bg-gradient-to-r from-white to-[#FFD479] bg-clip-text text-transparent">
                No.1 Padel Club
              </span>
              <br />
              <span className="text-white/90">in Zanzibar</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="text-white/70 mb-6 leading-relaxed"
            >
              Nestled inside the iconic Africa House Garden, Karibu Padel combines world-class sport, vibrant lifestyle, and the unmistakable Zanzibar spirit. From expert-led lessons to competitive tournaments and unforgettable social vibes, we're more than a club — we're a community.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.3, delay: 0.25 }}
              className="text-white/70 mb-8 leading-relaxed"
            >
              Experience padel like never before, with breathtaking ocean views, premium facilities, and the warm Karibu welcome that makes every visit special.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              {[
                { icon: '🌅', text: 'Ocean Views' },
                { icon: '🎾', text: 'Pro Coaching' },
                { icon: '🌴', text: 'Tropical Vibe' },
                { icon: '🏆', text: 'Tournaments' },
              ].map((item, index) => (
                  <motion.div
                  key={item.text}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2, delay: 0.35 + index * 0.05 }}
                    whileHover={prefersReducedMotion ? undefined : { scale: 1.05, y: -3 }}
                  className="flex items-center gap-2 px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full"
                >
                  <span>{item.icon}</span>
                  <span className="text-white/80">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.4 }}
            className="relative"
          >
            <div className="relative h-[600px] rounded-3xl overflow-hidden">
                {images.map((image, index) => (
                  <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: currentImage === index ? 1 : 0 }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0"
                >
                  <ResponsivePicture
                    image={image}
                    alt={`Karibu Padel ${index + 1}`}
                    pictureClassName="block h-full w-full"
                    imgClassName="w-full h-full object-cover"
                    sizes="(min-width: 768px) 50vw, 100vw"
                    loading={currentImage === index ? 'eager' : 'lazy'}
                    decoding="async"
                    lazyRootMargin="480px 0px"
                    lazyThreshold={0.25}
                  />
                </motion.div>
              ))}
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#002B5B]/80 via-transparent to-transparent" />
              
                <motion.div
                className="absolute top-6 right-6 bg-gradient-to-br from-[#00BFA6] to-[#FFD479] px-6 py-3 rounded-full"
                  animate={prefersReducedMotion ? undefined : { y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <p className="text-[#002B5B]">#1 in Zanzibar</p>
              </motion.div>

              <div className="absolute bottom-0 left-0 right-0 p-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6"
                >
                  <div className="flex gap-2 mb-4">
                    {images.map((_, index) => (
                    <motion.div
                        key={index}
                        className={`h-1 rounded-full flex-1 ${
                          currentImage === index ? 'bg-[#00BFA6]' : 'bg-white/30'
                        }`}
                        layoutId={`indicator-${index}`}
                      />
                    ))}
                  </div>
                  <p className="text-white/90">Swipe to explore our facilities</p>
                </motion.div>
              </div>
            </div>

              <motion.div
              className="absolute -z-10 inset-0 bg-gradient-to-br from-[#00BFA6]/20 to-[#FFD479]/20 rounded-3xl blur-2xl"
                animate={
                  prefersReducedMotion
                    ? undefined
                    : {
                        scale: [1, 1.05, 1],
                        rotate: [0, 5, 0],
                      }
                }
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
