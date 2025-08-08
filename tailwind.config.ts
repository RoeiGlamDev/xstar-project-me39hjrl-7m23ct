import { defineConfig } from 'tailwindcss';

export default defineConfig({
  theme: {
    extend: {
      colors: {
        orange: {
          light: '#FFA500', // Light orange for accents
          DEFAULT: '#FF8C00', // Main orange color
          dark: '#FF4500', // Dark orange for hover effects
        },
        white: '#FFFFFF', // Pure white for backgrounds and text
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in forwards',
        'bounce': 'bounce 1s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
});