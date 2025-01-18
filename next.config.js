/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // Only use this if the app is fully static
  images: {
    unoptimized: true, // Required for static export
  },
};

module.exports = nextConfig;
