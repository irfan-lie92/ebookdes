/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'cdn.jsdelivr.net', 'avatars.githubusercontent.com'], // tambah domain image jika perlu
  },
  reactStrictMode: true,
  swcMinify: true, // gunakan compiler SWC untuk optimasi build
  eslint: {
    ignoreDuringBuilds: true, // abaikan error eslint saat build di Vercel
  },
  typescript: {
    ignoreBuildErrors: true, // opsional: abaikan error TS saat build jika belum strict
  },
  experimental: {
    // Hanya gunakan jika butuh fitur experimental, kalau tidak bisa dihapus
  },
};

module.exports = nextConfig;
