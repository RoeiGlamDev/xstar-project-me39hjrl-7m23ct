import React from 'react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="absolute inset-0 bg-orange-500 opacity-50"></div>
      <div className="container mx-auto flex flex-col items-center justify-center h-screen text-center relative z-10">
        <motion.div
          className="text-5xl md:text-7xl font-bold text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Welcome to luxury LRP cosmetics
        </motion.h1>
        <motion.div
          className="mt-4 text-lg md:text-xl text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Discover the elegance of premium beauty products crafted for the discerning individual.
        </motion.p>
        <motion.div
          className="mt-6 px-6 py-3 bg-white text-orange-500 font-semibold rounded-lg shadow-lg hover:bg-orange-500 hover:text-white transition duration-300"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
        >
          Shop Now
        </motion.button>
      </div>
    </section>
  );
};

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-orange-500">Our Luxurious Features</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-10">
          <motion.div
            className="bg-orange-100 p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-xl font-semibold text-orange-500">Premium Ingredients</h3>
            <p className="mt-2 text-gray-700">
              Our products are formulated with the finest ingredients to ensure quality and efficacy.
            </p>
          </motion.div>
          <motion.div
            className="bg-orange-100 p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold text-orange-500">Elegant Packaging</h3>
            <p className="mt-2 text-gray-700">
              Each product is beautifully packaged, reflecting the luxury of our brand.
            </p>
          </motion.div>
          <motion.div
            className="bg-orange-100 p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold text-orange-500">Sustainable Practices</h3>
            <p className="mt-2 text-gray-700">
              We are committed to sustainability, ensuring our products are eco-friendly and responsibly sourced.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const LuxuryLRPCosmetics: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
    </div>
  );
};

export default LuxuryLRPCosmetics;