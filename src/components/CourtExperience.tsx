import { motion, useInView, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Sunrise, Globe, Moon, Wine } from 'lucide-react';
import type { PictureAsset } from '../types/media';
import { ResponsivePicture } from './ResponsivePicture';

interface CourtExperienceProps {
  courtImage: PictureAsset;
}

export function CourtExperience({ courtImage }: CourtExperienceProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const brightnessFilter = useTransform(scrollYProgress, [0, 0.5, 1], ['brightness(0.4)', 'brightness(1)', 'brightness(0.6)']);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.2, 1, 1.1]);

  const features = [
      {
        icon: Sunrise,
        title: 'Oceanfront View',
        description: 'Play with the Indian Ocean as your backdrop',
        color: 'from-[#1DB954] to-[#1DB954]/80',
      },
      {
        icon: Globe,
        title: 'Professional Turf',
        description: 'World-class playing surface for optimal performance',
        color: 'from-[#1DB954] to-[#1DB954]/80',
      },
      {
        icon: Moon,
        title: 'Night Matches',
        description: 'Premium lighting for unforgettable evening games',
        color: 'from-[#1DB954] to-[#1DB954]/80',
      },
      {
        icon: Wine,
        title: 'VIP Lounge',
        description: 'Relax in style with ocean-view refreshments',
        color: 'from-[#1DB954] to-[#1DB954]/80',
      },
  ];

  return (
    <section id="experience" ref={ref} className="relative py-32 bg-[#001a3d] overflow-hidden">
      <motion.div className="absolute inset-0" style={{ scale }}>
        <div className="absolute inset-0 bg-gradient-to-b from-[#001a3d] via-[#001a3d]/50 to-[#001a3d] z-10" />
        <motion.div className="absolute inset-0" style={{ filter: brightnessFilter }}>
          <ResponsivePicture
            image={courtImage}
            alt="Padel Court"
            pictureClassName="absolute inset-0 h-full w-full"
            imgClassName="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
            sizes="100vw"
            lazyRootMargin="60% 0px"
            lazyThreshold={0.1}
          />
        </motion.div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="text-[#1DB954] tracking-widest uppercase mb-4 block"
          >
            Premium Facilities
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl text-white mb-6"
          >
              <span className="bg-gradient-to-r from-white to-[#1DB954] bg-clip-text text-transparent">
              The Court Experience
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-white/70 max-w-2xl mx-auto"
          >
            From sunrise sessions to moonlit matches, experience padel in paradise
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative group"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-20 rounded-3xl blur-xl transition-opacity duration-500"
                style={{ backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }}
              />
              
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 h-full hover:border-white/30 transition-all duration-500">
                <motion.div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <feature.icon className="text-white" size={28} />
                </motion.div>

                <h3 className="text-white mb-3">{feature.title}</h3>
                <p className="text-white/60 leading-relaxed">
                  {feature.description}
                </p>

                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r"
                  style={{ backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))` }}
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
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <motion.div
            className="inline-block bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 max-w-3xl"
            whileHover={{ scale: 1.02 }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: '1', label: 'Premium Courts' },
                { value: '14', label: 'Hours Daily' },
                { value: '50+', label: 'Happy Players' },
                { value: '#1', label: 'In Zanzibar' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                >
                    <motion.div
                      className="text-3xl md:text-4xl bg-gradient-to-r from-white to-[#1DB954] bg-clip-text text-transparent mb-2"
                    whileHover={{ scale: 1.1 }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-white/60">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
