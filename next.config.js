/** @type {import('next').NextConfig} */

const nextConfig = {
<<<<<<< HEAD
    images: {
        domains: ['images.unsplash.com'],
    }
=======
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
>>>>>>> 323657a4a9f85b27444ee389fa415afe5735b6ee
};

if (process.env.NEXT_PUBLIC_TEMPO) {
    nextConfig["experimental"] = {
        // NextJS 13.4.8 up to 14.1.3:
        // swcPlugins: [[require.resolve("tempo-devtools/swc/0.86"), {}]],
        // NextJS 14.1.3 to 14.2.11:
        swcPlugins: [[require.resolve("tempo-devtools/swc/0.90"), {}]]

        // NextJS 15+ (Not yet supported, coming soon)
    }
}

module.exports = nextConfig;