/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  //Añadir la siguiente configuración
  images: {
    domains: ['placeimg.com'],
  },
};

module.exports = nextConfig;
