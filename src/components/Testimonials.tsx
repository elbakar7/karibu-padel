import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Quote } from 'lucide-react';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const prefersReducedMotion = usePrefersReducedMotion();

  const testimonials = [
    {
      name: 'Marco Silva',
      role: 'Head Coach & Pro Player',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
      quote: 'Teaching padel in Zanzibar is a dream come true. The energy here is incredible, and watching players grow from beginners to competitors is what drives me every day. The ocean views don\'t hurt either!',
      rating: 5,
    },
    {
      name: 'Sarah Johnson',
      role: 'Community Manager & Coach',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
      quote: 'Karibu Padel isn\'t just a club—it\'s a family. From organizing tournaments to hosting social mixers, I love bringing people together through this amazing sport. Every day brings new friendships and unforgettable moments.',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" ref={ref} className="relative py-32 bg-gradient-to-b from-[#001a3d] to-[#002B5B] overflow-hidden">
      <motion.div
        className="absolute top-20 left-10 w-96 h-96 bg-[#1DB954]/10 rounded-full blur-3xl"
        animate={
          prefersReducedMotion
            ? undefined
            : {
                scale: [1, 1.3, 1],
                x: [0, 50, 0],
                y: [0, 30, 0],
              }
        }
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-[#1DB954]/8 rounded-full blur-3xl"
        animate={
          prefersReducedMotion
            ? undefined
            : {
                scale: [1, 1.2, 1],
                x: [0, -40, 0],
                y: [0, -60, 0],
              }
        }
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="text-[#1DB954] tracking-widest uppercase mb-4 block"
          >
            Meet Our Team
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl text-white mb-6"
          >
            <span className="bg-gradient-to-r from-white to-[#1DB954] bg-clip-text text-transparent">
              Passionate About Padel
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/70 max-w-2xl mx-auto"
          >
            Our dedicated team brings world-class expertise and island hospitality together
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={prefersReducedMotion ? undefined : { y: -10 }}
              className="relative group"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#1DB954]/20 to-[#1DB954]/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                animate={
                  prefersReducedMotion
                    ? undefined
                    : {
                        scale: [1, 1.05, 1],
                        rotate: [0, 2, 0],
                      }
                }
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              />

              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-white/30 transition-all duration-500 h-full flex flex-col">
                <motion.div
                  className="absolute top-6 right-6 text-[#1DB954] opacity-20 group-hover:opacity-40 transition-opacity"
                  whileHover={prefersReducedMotion ? undefined : { rotate: 180, scale: 1.2 }}
                  transition={{ duration: 0.4 }}
                >
                  <Quote size={48} />
                </motion.div>

                <div className="flex items-center gap-4 mb-6">
                  <motion.div
                    className="relative"
                    whileHover={prefersReducedMotion ? undefined : { scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-[#1DB954]">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <motion.div
                      className="absolute -bottom-1 -right-1 w-6 h-6 bg-[#1DB954] rounded-full flex items-center justify-center border-2 border-[#002B5B]"
                      animate={
                        prefersReducedMotion
                          ? undefined
                          : {
                              scale: [1, 1.2, 1],
                            }
                      }
                      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      <span className="text-white text-xs">✓</span>
                    </motion.div>
                  </motion.div>

                  <div className="flex-1">
                    <h3 className="text-white text-xl mb-1">{testimonial.name}</h3>
                    <p className="text-[#1DB954]">{testimonial.role}</p>
                  </div>
                </div>

                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.15 + 0.4 + i * 0.05 }}
                      className="text-[#1DB954]"
                    >
                      ★
                    </motion.span>
                  ))}
                </div>

                <p className="text-white/70 leading-relaxed italic flex-1">
                  "{testimonial.quote}"
                </p>

                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1DB954] to-[#1DB954]/80 rounded-b-3xl"
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 + 0.5 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <motion.div
            className="inline-block bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-8 py-4"
            whileHover={prefersReducedMotion ? undefined : { scale: 1.05 }}
          >
            <p className="text-white/80">
              Want to train with our team?{' '}
              <a
                href="#contact"
                className="text-[#1DB954] hover:underline transition-all"
              >
                Book a session →
              </a>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
