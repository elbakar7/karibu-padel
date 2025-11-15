import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Trophy, Users, Calendar, Sparkles } from 'lucide-react';
import type { PictureAsset } from '../types/media';
import { ResponsivePicture } from './ResponsivePicture';

interface EventsProps {
  eventImages: PictureAsset[];
}

export function Events({ eventImages }: EventsProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const events = [
      {
        icon: Trophy,
        title: 'Monthly Tournaments',
        description: 'Compete with the best players in Zanzibar',
        date: 'Every Last Saturday',
        image: eventImages[0],
        color: 'from-[#1DB954] to-[#1DB954]/80',
      },
      {
        icon: Users,
        title: 'Social Mixers',
        description: 'Meet fellow padel enthusiasts and make friends',
        date: 'Every Friday Evening',
        image: eventImages[1],
        color: 'from-[#1DB954] to-[#1DB954]/80',
      },
      {
        icon: Calendar,
        title: 'Pro Clinics',
        description: 'Learn from international padel coaches',
        date: 'Weekly Sessions',
        image: eventImages[2],
        color: 'from-[#1DB954] to-[#1DB954]/80',
      },
      {
        icon: Sparkles,
        title: 'VIP Nights',
        description: 'Exclusive events with cocktails and ocean views',
        date: 'Monthly Special',
        image: eventImages[3],
        color: 'from-[#1DB954] to-[#1DB954]/80',
      },
  ];

  return (
    <section id="events" ref={ref} className="relative py-32 bg-gradient-to-b from-[#001a3d] to-[#002B5B] overflow-hidden">
        <motion.div
          className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1DB954]/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 100, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
      />
        <motion.div
          className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#1DB954]/6 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.4, 1],
          x: [0, -80, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
              <motion.span
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="text-[#1DB954] tracking-widest uppercase mb-4 block"
            >
              Join The Community
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl text-white mb-6"
              >
                <span className="bg-gradient-to-r from-white to-[#1DB954] bg-clip-text text-transparent">
                Events & Community
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-white/70 max-w-2xl mx-auto"
            >
              More than just a sport — it's a lifestyle. Join our vibrant community for tournaments, social gatherings, and unforgettable moments.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {events.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="relative group cursor-pointer"
              >
                <div className="relative h-[400px] rounded-3xl overflow-hidden">
                  <motion.div
                    className="absolute inset-0"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.4 }}
                    style={{ willChange: 'transform' }}
                  >
                    <ResponsivePicture
                      image={event.image}
                      alt={event.title}
                      pictureClassName="absolute inset-0 h-full w-full"
                      imgClassName="w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      lazyRootMargin="400px 200px"
                      lazyThreshold={0.15}
                    />
                  </motion.div>

                  <div className="absolute inset-0 bg-gradient-to-t from-[#002B5B] via-[#002B5B]/60 to-transparent" />

                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(to bottom right, ${event.color})`,
                    }}
                  />

                  <div className="absolute top-6 left-6 right-6 flex justify-between items-start">
                    <motion.div
                      className={`p-4 bg-gradient-to-br ${event.color} rounded-2xl`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <event.icon className="text-white" size={28} />
                    </motion.div>

                    <motion.div
                      className="px-4 py-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full"
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                      transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
                    >
                      <p className="text-white/90">{event.date}</p>
                    </motion.div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <motion.h3
                      className="text-white text-2xl mb-3"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.6, delay: index * 0.15 + 0.4 }}
                    >
                      {event.title}
                    </motion.h3>
                    <motion.p
                      className="text-white/80 mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.6, delay: index * 0.15 + 0.5 }}
                    >
                      {event.description}
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.6, delay: index * 0.15 + 0.6 }}
                    >
                        <motion.button
                          whileHover={{ scale: 1.05, x: 5 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-2 text-[#1DB954] group/btn"
                      >
                        <span>Learn More</span>
                        <motion.span
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          →
                        </motion.span>
                      </motion.button>
                    </motion.div>
                  </div>

                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r"
                    style={{
                      background: `linear-gradient(to right, ${event.color})`,
                    }}
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 text-center"
          >
              <motion.a
                href="https://www.instagram.com/karibupadelclub"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(29,185,84,0.4)' }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-12 py-4 bg-[#1DB954] rounded-full text-white relative overflow-hidden group"
            >
              <motion.div
                  className="absolute inset-0 bg-[#1DB954]/90"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.4 }}
              />
              <span className="relative z-10">Join the Movement → DM us on Instagram</span>
            </motion.a>
          </motion.div>
        </div>
    </section>
  );
}
