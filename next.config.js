/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  // output: 'export', // Ensure this is commented out or removed
  output: 'export',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig // Ensure "exports" is in lowercase
