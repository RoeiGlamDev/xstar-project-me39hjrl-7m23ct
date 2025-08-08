import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['example.com'], // Replace with your image hosting domain
    formats: ['image/avif', 'image/webp']
},
  experimental: {
    optimizeCss: true
},
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
});
    return config;
  },
  env: {
    BRAND_NAME: 'luxury LRP cosmetics',
    PRIMARY_COLOR: '#FFA500', // Orange
    SECONDARY_COLOR: '#FFFFFF', // White
  }
};

export default nextConfig;