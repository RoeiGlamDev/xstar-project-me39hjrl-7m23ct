import React from 'react';
import { motion } from 'framer-motion';

interface TeamMember {
  name: string;
  position: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Sophia Martinez',
    position: 'Founder & CEO',
    image: '/images/sophia.jpg',
  },
  {
    name: 'Liam Johnson',
    position: 'Head of Product Development',
    image: '/images/liam.jpg',
  },
  {
    name: 'Olivia Brown',
    position: 'Marketing Director',
    image: '/images/olivia.jpg',
  },
];

const About: React.FC = () => {
  return (
    <div className="bg-white text-orange-600">
      <header className="text-center py-10">
        <motion.div
          className="text-5xl font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          About luxury LRP cosmetics
        </motion.h1>
      </header>

      <section className="max-w-4xl mx-auto px-4 py-10">
        <motion.div
          className="text-3xl font-semibold mb-4"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Our History
        </motion.h2>
        <p className="mb-6">
          Founded in 2020, luxury LRP cosmetics emerged from a passion for high-quality beauty products that enhance natural beauty. Our commitment to excellence and innovation has positioned us as a leader in the luxury cosmetics industry. Each product is meticulously crafted with the finest ingredients, ensuring that our customers experience the epitome of luxury with every application.
        </p>

        <motion.div
          className="text-3xl font-semibold mb-4"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Our Values
        </motion.h2>
        <ul className="list-disc list-inside mb-6">
          <li>Quality: We prioritize the highest standards in our products.</li>
          <li>Innovation: We continuously seek to innovate and improve.</li>
          <li>Sustainability: We are committed to eco-friendly practices.</li>
          <li>Inclusivity: Our products are designed for all skin types and tones.</li>
        </ul>

        <motion.div
          className="text-3xl font-semibold mb-4"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Meet Our Team
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <motion.div
              key={member.name}
              className="bg-orange-100 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-orange-500">{member.position}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;