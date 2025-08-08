import React from 'react';
import { motion } from 'framer-motion';

interface SlideUpProps {
  children: React.ReactNode;
}

const slideUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const SlideUp: React.FC<SlideUpProps> = ({ children }) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={slideUpVariants}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105"
    >
      {children}
    </motion.div>
  );
};

const LuxuryLRPCosmetics: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-orange-500">
      <header className="text-white text-4xl font-bold mb-8">
        Welcome to luxury LRP cosmetics
      </header>
      <SlideUp>
        <h2 className="text-orange-500 text-3xl font-semibold mb-4">
          Elevate Your Beauty
        </h2>
        <p className="text-gray-700 mb-4">
          Discover our exclusive range of high-end cosmetics designed to enhance your natural beauty. At luxury LRP cosmetics, we believe in the power of luxury and elegance.
        </p>
        <button className="bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-700 transition-colors">
          Shop Now
        </button>
      </SlideUp>
    </div>
  );
};

export default LuxuryLRPCosmetics;