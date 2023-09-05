/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['i.ibb.co'], // Add image domains if required
    deviceSizes: [320, 420, 768, 1024, 1200], // Example device sizes
    imageSizes: [16, 32, 48, 64, 96], // Example image sizes
  },
};

module.exports = nextConfig;
