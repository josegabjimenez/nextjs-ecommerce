const withPWA = require('next-pwa');

/** @type {import('next').NextConfig} */
const nextConfig = withPWA({
  pwa: {
    dest: 'public',
    register: true,
    mode: 'production',
    disable: false,
  },
  reactStrictMode: true,
  //Other configurations
  images: {
    domains: ['placeimg.com', 'images.pexels.com', 'api.lorem.space'],
  },
});

module.exports = nextConfig;
