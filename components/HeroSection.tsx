import React from 'react';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  title: string;
  subtitle: string;
}

const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    <section className="relative flex items-center justify-center h-screen bg-gradient-to-r from-orange-500 to-white">
      <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: ''url('/path/to/luxury-background.jpg')' '}} />
      <div className="relative z-10 text-center p-8">
        <motion.div
          className="text-6xl font-bold text-orange-600 mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          luxury LRP cosmetics
        </motion.h1>
        <motion.div
          className="text-xl text-gray-700 mb-8"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Discover the elegance of beauty with our premium cosmetics tailored for the discerning individual.
        </motion.p>
        <div className="flex justify-center space-x-4">
          <motion.div
            className="bg-orange-500 text-white font-semibold py-2 px-4 rounded-lg shadow-lg transform transition-transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Shop Now
          </motion.button>
          <motion.div
            className="bg-white text-orange-500 border border-orange-500 font-semibold py-2 px-4 rounded-lg shadow-lg transform transition-transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.button>
        </div>
        <div className="mt-8">
          <p className="text-sm text-gray-500">
            Trusted by beauty enthusiasts and professionals alike.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;