import React from 'react';
import { motion } from 'framer-motion';

interface Testimonial {
  name: string;
  photo: string;
  review: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: 'Sophia Martinez',
    photo: '/images/testimonials/sophia.jpg',
    review: 'Luxury LRP cosmetics transformed my skincare routine! The quality is unmatched, and my skin has never felt better.',
    rating: 5,
  },
  {
    name: 'Isabella Johnson',
    photo: '/images/testimonials/isabella.jpg',
    review: 'I absolutely love the luxurious feel of the products. They are worth every penny!',
    rating: 5,
  },
  {
    name: 'Olivia Brown',
    photo: '/images/testimonials/olivia.jpg',
    review: 'The packaging is stunning, and the results are even better. Luxury LRP cosmetics is my go-to brand now!',
    rating: 5,
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-orange-600 mb-8">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-orange-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <img src={testimonial.photo} alt={testimonial.name} className="w-24 h-24 rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-orange-600">{testimonial.name}</h3>
              <p className="text-gray-700 mb-4">{testimonial.review}</p>
              <div className="flex justify-center">
                {Array.from({ length: testimonial.rating }, (_, i) => (
                  <svg key={i} className="w-5 h-5 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.121-6.536L0 6.545l6.545-.954L10 0l2.455 5.591L20 6.545l-5.243 4.009 1.121 6.536z" />
                  </svg>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;