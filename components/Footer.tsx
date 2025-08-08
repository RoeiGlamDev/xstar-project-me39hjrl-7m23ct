import React from 'react';
import { motion } from 'framer-motion';

interface FooterProps {
  companyName: string;
  links: { label: string; url: string }[];
  socialMedia: { platform: string; url: string }[];
}

const Footer: React.FC<FooterProps> = () => {
  const companyName = "luxury LRP cosmetics";
  const links = [
    { label: 'Home', url: '/' },
    { label: 'Shop', url: '/shop' },
    { label: 'About Us', url: '/about' },
    { label: 'Contact', url: '/contact' },
    { label: 'Privacy Policy', url: '/privacy' },
  ];

  const socialMedia = [
    { platform: 'Instagram', url: 'https://instagram.com/luxurylrpcosmetics' },
    { platform: 'Facebook', url: 'https://facebook.com/luxurylrpcosmetics' },
    { platform: 'Twitter', url: 'https://twitter.com/luxurylrpcosmetics' },
  ];

  return (
    <footer className="bg-white text-orange-600 py-8">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-3xl font-bold mb-4 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {companyName}
        </motion.h2>
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="flex flex-col">
            {links.map((link, index) => (
              <motion.div
                key={index}
                href={link.url}
                className="text-lg hover:text-orange-500 transition duration-300 mb-2"
                whileHover={{ scale: 1.05 }}
              >
                {link.label}
              </motion.a>
            ))}
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            {socialMedia.map((media, index) => (
              <motion.div
                key={index}
                href={media.url}
                className="text-lg hover:text-orange-500 transition duration-300"
                whileHover={{ scale: 1.05 }}
                target="_blank"
                rel="noopener noreferrer"
              >
                {media.platform}
              </motion.a>
            ))}
          </div>
        </div>
        <p className="text-center text-sm text-gray-600">
          &copy; {new Date().getFullYear()} {companyName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;