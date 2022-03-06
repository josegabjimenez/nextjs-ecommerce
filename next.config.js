/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  //Añadir la siguiente configuración
  images: {
    domains: ['placeimg.com', 'images.pexels.com'],
  },
};

module.exports = nextConfig;
