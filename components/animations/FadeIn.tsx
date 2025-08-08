import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
}

const FadeIn: React.FC<FadeInProps> = ({ children, className }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      className={`transition-opacity duration-700 ${className`}}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

const LuxuryLRPCosmetics: React.FC = () => {
  return (
    <div className="bg-white text-orange-600 min-h-screen flex flex-col items-center justify-center">
      <header className="w-full p-6 bg-orange-600 text-white shadow-lg">
        <h1 className="text-4xl font-bold text-center">luxury LRP cosmetics</h1>
      </header>
      <main className="flex flex-col items-center p-8">
        <FadeIn className="mb-8">
          <h2 className="text-3xl font-semibold">Elevate Your Beauty</h2>
          <p className="mt-4 text-lg text-gray-700">
            Discover the exquisite range of luxury LRP cosmetics designed to enhance your natural beauty with elegance and sophistication.
          </p>
        </FadeIn>
        <FadeIn className="mb-8">
          <h3 className="text-2xl font-medium">Our Signature Products</h3>
          <ul className="mt-4 list-disc list-inside text-gray-600">
            <li>Luxurious Lipsticks</li>
            <li>Silken Foundations</li>
            <li>Radiant Highlighters</li>
            <li>Exquisite Eyeshadow Palettes</li>
          </ul>
        </FadeIn>
        <FadeIn className="mb-8">
          <h3 className="text-2xl font-medium">Why Choose Us?</h3>
          <p className="mt-4 text-lg text-gray-700">
            At luxury LRP cosmetics, we believe in quality and elegance. Our products are crafted with the finest ingredients to provide you with a luxurious experience.
          </p>
        </FadeIn>
      </main>
      <footer className="w-full p-6 bg-orange-600 text-white text-center">
        <p>&copy; {new Date().getFullYear()} luxury LRP cosmetics. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LuxuryLRPCosmetics;