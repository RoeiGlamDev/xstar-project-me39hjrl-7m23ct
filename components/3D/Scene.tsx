import { useEffect } from 'react';
import React, { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';

interface SceneProps {
  title: string;
}

const Scene: React.FC<SceneProps> = ({ title }) => {
  useEffect(() => {
    // Initialize any 3D effects or animations here
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <motion.div
        className="text-5xl font-bold text-orange-600 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {title}
      </motion.h1>
      <Canvas className="w-full h-96">
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        {/ Add your 3D models here /}
        <OrbitControls />
      </Canvas>
      <motion.div
        className="text-lg text-gray-700 mt-4 max-w-xl text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Welcome to luxury LRP cosmetics, where elegance meets innovation. Explore our exclusive range of high-end cosmetics designed to enhance your natural beauty.
      </motion.p>
      <motion.div
        className="mt-6 px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg shadow-lg transition-transform transform hover:scale-105"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Shop Now
      </motion.button>
    </div>
  );
};

export default Scene;