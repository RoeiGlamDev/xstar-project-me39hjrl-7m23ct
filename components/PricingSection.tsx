import React from 'react';
import { motion } from 'framer-motion';

interface PricingTier {
  title: string;
  price: string;
  features: string[];
}

const pricingTiers: PricingTier[] = [
  {
    title: 'Essential Glow Package',
    price: '$99',
    features: [
      'Skin Analysis Consultation',
      'Personalized Skincare Regimen',
      'Luxury LRP Cosmetics Sample Kit',
      'Exclusive Access to Online Tutorials',
    ],
  },
  {
    title: 'Radiant Luxe Package',
    price: '$199',
    features: [
      'All Essential Glow Package Features',
      'One-on-One Makeup Application Session',
      'Custom Color Matching',
      'Luxury LRP Cosmetics Gift Set',
    ],
  },
  {
    title: 'Ultimate Glam Experience',
    price: '$299',
    features: [
      'All Radiant Luxe Package Features',
      'VIP Access to Exclusive Events',
      'Personalized Makeup Masterclass',
      'Luxury LRP Cosmetics Membership',
    ],
  },
];

const PricingSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <motion.div
          className="text-4xl font-bold text-orange-600 mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Luxury LRP Cosmetics Pricing
        </motion.h2>
        <motion.div
          className="text-lg text-gray-700 mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Discover our exclusive packages designed to elevate your beauty experience.
        </motion.p>
        <div className="flex flex-wrap justify-center">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 m-4 transition-transform transform hover:scale-105"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-2xl font-semibold text-orange-600 mb-4">{tier.title}</h3>
              <p className="text-xl font-bold text-gray-800 mb-4">{tier.price}</p>
              <ul className="list-disc list-inside mb-6">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="text-gray-600">{feature}</li>
                ))}
              </ul>
              <button className="bg-orange-600 text-white py-2 px-4 rounded hover:bg-orange-500 transition duration-300">
                Choose This Package
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;