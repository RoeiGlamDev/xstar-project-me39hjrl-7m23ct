import React from 'react';
import { motion } from 'framer-motion';

interface TeamMember {
  name: string;
  role: string;
  description: string;
  imageUrl: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Sophia Martinez',
    role: 'Founder & CEO',
    description: 'With over a decade of experience in the cosmetics industry, Sophia leads luxury LRP cosmetics with a vision for elegance and innovation.',
    imageUrl: '/images/sophia.jpg',
  },
  {
    name: 'James Lee',
    role: 'Head of Product Development',
    description: 'James brings expertise in formulation and design, ensuring that every product meets the highest standards of luxury and quality.',
    imageUrl: '/images/james.jpg',
  },
  {
    name: 'Olivia Chen',
    role: 'Marketing Director',
    description: 'Olivia crafts the brand’s narrative, connecting luxury LRP cosmetics with discerning customers who appreciate beauty and sophistication.',
    imageUrl: '/images/olivia.jpg',
  },
];

const AboutSection: React.FC = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-4xl font-bold text-orange-600 mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About luxury LRP cosmetics
        </motion.h2>
        <motion.div
          className="text-lg text-gray-700 mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          At luxury LRP cosmetics, we believe in the transformative power of beauty. Founded with a passion for elegance and sophistication, our brand is dedicated to creating high-quality cosmetics that enhance natural beauty. Our journey began with a vision to redefine luxury in the cosmetics industry, and today, we are proud to offer a curated selection of products that embody our commitment to excellence.
        </motion.p>
        <motion.div
          className="text-2xl font-semibold text-orange-600 mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Our Mission
        </motion.h3>
        <motion.div
          className="text-lg text-gray-700 mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Our mission at luxury LRP cosmetics is to empower individuals through beauty. We strive to create products that not only enhance appearance but also inspire confidence and self-expression. We are committed to sustainability and ethical practices, ensuring that our luxury offerings are as responsible as they are beautiful.
        </motion.p>
        <motion.div
          className="text-2xl font-semibold text-orange-600 mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          Meet Our Team
        </motion.h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <motion.div
              key={member.name}
              className="bg-gray-100 rounded-lg p-6 shadow-lg transition-transform transform hover:scale-105"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img src={member.imageUrl} alt={member.name} className="rounded-full w-24 h-24 mb-4 mx-auto" />
              <h4 className="text-xl font-bold text-orange-600">{member.name}</h4>
              <p className="text-md text-gray-600">{member.role}</p>
              <p className="text-sm text-gray-500 mt-2">{member.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;