import React from 'react';
import { motion } from 'framer-motion';

interface PricingOption {
  title: string;
  price: string;
  features: string[];
}

const pricingOptions: PricingOption[] = [
  {
    title: 'Luxury Facial Treatment',
    price: '$150',
    features: [
      'Deep cleansing and exfoliation',
      'Customized mask and hydration',
      'Luxury aromatherapy experience',
      'Complimentary skincare consultation',
    ],
  },
  {
    title: 'Premium Makeup Application',
    price: '$120',
    features: [
      'High-end product application',
      'Personalized makeup consultation',
      'Long-lasting and flawless finish',
      'Complimentary touch-up kit',
    ],
  },
  {
    title: 'Exclusive Skincare Package',
    price: '$300',
    features: [
      'Three luxury facial treatments',
      'Personalized skincare regimen',
      'Exclusive product samples',
      'Priority booking for future services',
    ],
  },
];

const FAQ = [
  {
    question: 'What products do you use?',
    answer: 'We use only the highest quality, luxury cosmetics that are cruelty-free and suitable for all skin types.',
  },
  {
    question: 'Do you offer group bookings?',
    answer: 'Yes, we offer special packages for group bookings. Please contact us for more details.',
  },
  {
    question: 'How can I book an appointment?',
    answer: 'You can book an appointment directly through our website or by calling our customer service.',
  },
];

const PricingPage: React.FC = () => {
  return (
    <div className="bg-white text-orange-600 p-10">
      <motion.div
        className="text-4xl font-bold mb-8 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Luxury LRP Cosmetics Pricing
      </motion.h1>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {pricingOptions.map((option, index) => (
          <div
            key={index}
            className="bg-orange-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-2xl font-semibold mb-4">{option.title}</h2>
            <p className="text-xl font-bold mb-4">{option.price}</p>
            <ul className="list-disc list-inside mb-4">
              {option.features.map((feature, idx) => (
                <li key={idx} className="text-gray-700">{feature}</li>
              ))}
            </ul>
            <button className="bg-orange-600 text-white py-2 px-4 rounded hover:bg-orange-500 transition-colors duration-300">
              Book Now
            </button>
          </div>
        ))}
      </motion.div>
      <motion.div
        className="text-3xl font-bold mt-10 mb-4 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Frequently Asked Questions
      </motion.h2>
      <div className="mt-6">
        {FAQ.map((item, index) => (
          <div key={index} className="mb-4">
            <h3 className="font-semibold text-lg text-orange-600">{item.question}</h3>
            <p className="text-gray-700">{item.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPage;