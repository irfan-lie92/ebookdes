/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'cdn.jsdelivr.net', 'avatars.githubusercontent.com'], // tambah domain image jika perlu
  },
  reactStrictMode: true,
  swcMinify: true, 
  eslint: {
    ignoreDuringBuilds: true, 
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
   
  },
};

module.exports = nextConfig;
