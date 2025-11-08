import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { MapPin, Phone, Instagram, MessageCircle } from 'lucide-react';
import type { PictureAsset } from '../types/media';
import { ResponsivePicture } from './ResponsivePicture';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';

interface ContactProps {
  backgroundImage: PictureAsset;
}

export function Contact({ backgroundImage }: ContactProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });
  const prefersReducedMotion = usePrefersReducedMotion();

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Location',
      value: 'Shangani, Zanzibar',
      detail: 'Inside Africa House Garden',
      link: 'https://maps.google.com/?q=Africa+House+Garden+Zanzibar',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+255 760 777 333',
      detail: 'Call or WhatsApp',
      link: 'tel:+255760777333',
    },
    {
      icon: Instagram,
      title: 'Instagram',
      value: '@karibupadelclub',
      detail: 'Follow our journey',
      link: 'https://www.instagram.com/karibupadelclub',
    },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-20 md:py-32 overflow-hidden min-h-screen flex items-center"
      aria-labelledby="contact-heading"
    >
      <div className="absolute inset-0 z-0">
        <ResponsivePicture
          image={backgroundImage}
          alt="Karibu Padel walkway overlooking the Indian Ocean"
          pictureClassName="absolute inset-0 h-full w-full"
          imgClassName="w-full h-full object-cover"
          loading="lazy"
          decoding="async"
          sizes="100vw"
          lazyRootMargin="50% 0px"
          lazyThreshold={0.1}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#002B5B]/90 via-[#002B5B]/80 to-[#002B5B]" />
      </div>

      <motion.div
        className="absolute top-20 right-20 w-96 h-96 bg-[#00BFA6]/20 rounded-full blur-3xl pointer-events-none"
        animate={
          prefersReducedMotion
            ? undefined
            : {
                scale: [1, 1.3, 1],
                x: [0, 50, 0],
                y: [0, -50, 0],
              }
        }
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-96 h-96 bg-[#FFD479]/20 rounded-full blur-3xl pointer-events-none"
        animate={
          prefersReducedMotion
            ? undefined
            : {
                scale: [1, 1.4, 1],
                x: [0, -30, 0],
                y: [0, 40, 0],
              }
        }
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12 md:mb-20"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="text-[#00BFA6] tracking-widest uppercase mb-4 block"
          >
            Get In Touch
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-6xl text-white mb-4 md:mb-6"
            id="contact-heading"
          >
            <span className="bg-gradient-to-r from-white via-[#FFD479] to-[#00BFA6] bg-clip-text text-transparent">
              Book Your Session
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-white/70 max-w-2xl mx-auto mb-8 md:mb-12 px-4"
          >
            Ready to experience the best padel in Zanzibar? Reach out and let's get you on the court.
          </motion.p>

          <motion.a
            href="https://wa.me/255760777333?text=Hi%20Karibu%20Padel!%20I'd%20like%20to%20book%20a%20padel%20session."
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            whileHover={prefersReducedMotion ? undefined : { scale: 1.05 }}
            whileTap={prefersReducedMotion ? undefined : { scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 md:px-12 py-4 md:py-5 bg-gradient-to-r from-[#00BFA6] to-[#FFD479] rounded-full text-[#002B5B] shadow-lg hover:shadow-[0_0_40px_rgba(0,191,166,0.5)] transition-shadow"
          >
            <MessageCircle size={24} />
            <span>Book via WhatsApp</span>
          </motion.a>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-20">
          {contactInfo.map((item, index) => (
            <motion.a
              key={item.title}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={prefersReducedMotion ? undefined : { y: -10, scale: 1.02 }}
              className="relative group"
            >
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 hover:border-white/30 transition-all duration-300 h-full">
                <motion.div
                  className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-[#00BFA6] to-[#FFD479] flex items-center justify-center mb-4 md:mb-6"
                  whileHover={prefersReducedMotion ? undefined : { rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                >
                  <item.icon className="text-white" size={24} />
                </motion.div>

                <h3 className="text-white mb-2">{item.title}</h3>
                <p className="text-[#00BFA6] mb-1 break-words">{item.value}</p>
                <p className="text-white/60 text-sm">{item.detail}</p>

                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00BFA6] to-[#FFD479]"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="text-center"
        >
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.6 }}
              className="mb-6 md:mb-8"
            >
              <div className="inline-flex items-center gap-3 px-6 md:px-8 py-3 bg-gradient-to-r from-[#00BFA6]/20 to-[#FFD479]/20 border border-white/10 rounded-full">
                <span className="text-2xl md:text-3xl" role="img" aria-label="Tropical island">
                  🏝️
                </span>
                <span className="text-white text-sm md:text-base">Zanzibar's Premier Padel Destination</span>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.7 }}
              className="text-white/60 max-w-2xl mx-auto mb-6 md:mb-8 text-sm md:text-base px-4"
            >
              Whether you're a seasoned pro or picking up a paddle for the first time, Karibu Padel welcomes you to experience the perfect blend of world-class sport and island paradise.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.8 }}
              className="flex flex-wrap justify-center gap-3 md:gap-6"
            >
              {['Beginner Friendly', 'Pro Coaching', 'Equipment Rental', 'Ocean Views'].map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: 0.9 + index * 0.05 }}
                  whileHover={prefersReducedMotion ? undefined : { scale: 1.1, y: -3 }}
                  className="px-4 md:px-6 py-2 bg-white/5 border border-white/10 rounded-full text-white/70 text-xs md:text-sm"
                >
                  {feature}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>

        <motion.div
          className="absolute bottom-0 left-0 right-0 py-6 md:py-8 border-t border-white/10 bg-[#002B5B]/50 backdrop-blur-sm z-10"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.4, delay: 1 }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex flex-col md:flex-row items-center gap-2 text-center md:text-left">
                <p className="text-white/50 text-xs md:text-sm">© 2025 Karibu Padel. All rights reserved.</p>
                <motion.a
                  href="https://islandtechsolution.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={prefersReducedMotion ? undefined : { scale: 1.05 }}
                  className="text-blue-400 hover:text-blue-300 transition-colors text-xs md:text-sm"
                >
                  Designed by Island Tech Solution
                </motion.a>
              </div>
              <div className="flex items-center gap-6">
                <motion.a
                  href="https://www.instagram.com/karibupadelclub"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={prefersReducedMotion ? undefined : { scale: 1.2 }}
                  className="text-white/50 hover:text-[#00BFA6] transition-colors"
                >
                  <Instagram size={20} />
                </motion.a>
                <motion.a
                  href="https://wa.me/255760777333"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={prefersReducedMotion ? undefined : { scale: 1.2 }}
                  className="text-white/50 hover:text-[#FFD479] transition-colors"
                >
                  <MessageCircle size={20} />
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
    </section>
  );
}
