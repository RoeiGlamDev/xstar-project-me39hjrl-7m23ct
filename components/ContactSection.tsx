import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
  reason: string;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
    reason: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = (): boolean => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.message) newErrors.message = 'Message is required';
    if (!formData.reason) newErrors.reason = 'Please select a reason for contact';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      // Here you would typically send the form data to your server
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '', reason: '' });
      setErrors({});
    }
  };

  return (
    <section className="bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center text-orange-600 mb-6">Contact luxury LRP cosmetics</h2>
      <p className="text-center text-gray-600 mb-4">For inquiries about our luxury cosmetics, please fill out the form below.</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700" htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={border-2 border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-orange-500 ${errors.name ? 'border-red-500' : ''}}
            placeholder="Your Name"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>
        <div>
          <label className="block text-gray-700" htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={border-2 border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-orange-500 ${errors.email ? 'border-red-500' : ''}}
            placeholder="Your Email"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>
        <div>
          <label className="block text-gray-700" htmlFor="reason">Reason for Contact</label>
          <select
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            className={border-2 border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-orange-500 ${errors.reason ? 'border-red-500' : ''}}
          >
            <option value="">Select a reason</option>
            <option value="Product Inquiry">Product Inquiry</option>
            <option value="Order Status">Order Status</option>
            <option value="Feedback">Feedback</option>
            <option value="Other">Other</option>
          </select>
          {errors.reason && <p className="text-red-500 text-sm">{errors.reason}</p>}
        </div>
        <div>
          <label className="block text-gray-700" htmlFor="message">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={border-2 border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-orange-500 ${errors.message ? 'border-red-500' : ''}}
            placeholder="Your Message"
            rows={4}
          />
          {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
        </div>
        <motion.div
          type="submit"
          className="bg-orange-600 text-white font-bold py-2 px-4 rounded-md hover:bg-orange-500 transition duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Send Message
        </motion.button>
      </form>
      {submitted && <p className="text-green-500 text-center mt-4">Thank you for contacting luxury LRP cosmetics! We will get back to you soon.</p>}
      <div className="mt-8 text-center">
        <h3 className="text-xl font-semibold text-orange-600">Business Information</h3>
        <p className="text-gray-600">Address: 123 Luxury Lane, Glamour City, CA 90210</p>
        <p className="text-gray-600">Business Hours: Mon-Fri 9am - 5pm</p>
        <p className="text-gray-600">Email: contact@luxurylrpcosmetics.com</p>
        <p className="text-gray-600">Phone: (123) 456-7890</p>
      </div>
    </section>
  );
};

export default ContactSection;