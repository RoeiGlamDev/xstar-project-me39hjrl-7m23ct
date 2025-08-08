import React from 'react';
import { motion } from 'framer-motion';

interface Feature {
  title: string;
  description: string;
  icon: JSX.Element;
}

const features: Feature[] = [
  {
    title: 'Premium Ingredients',
    description: 'At luxury LRP cosmetics, we source only the finest ingredients to ensure your skin feels rejuvenated and radiant.',
    icon: <i className="fas fa-leaf text-orange-500"></i>,
  },
  {
    title: 'Luxurious Packaging',
    description: 'Our products come in elegantly designed packaging that reflects the luxury and sophistication of luxury LRP cosmetics.',
    icon: <i className="fas fa-gift text-orange-500"></i>,
  },
  {
    title: 'Expert Formulations',
    description: 'Each product is crafted by experts to deliver exceptional results, making you feel confident and beautiful.',
    icon: <i className="fas fa-flask text-orange-500"></i>,
  },
  {
    title: 'Sustainable Practices',
    description: 'We are committed to sustainability, ensuring that our luxury LRP cosmetics are as kind to the planet as they are to your skin.',
    icon: <i className="fas fa-recycle text-orange-500"></i>,
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto text-center">
        <motion.div
          className="text-4xl font-bold text-orange-500 mb-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Discover Our Features
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-orange-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-orange-500">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;