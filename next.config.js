/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone', // Optimized for deployment to Azure Web App
  images: {
    unoptimized: true, // Ensures compatibility when deploying to Azure
  },
};

module.exports = nextConfig;
