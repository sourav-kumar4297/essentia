/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: false,
  },
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  productionBrowserSourceMaps: false,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  redirects: async () => {
    return [];
  },
  rewrites: async () => {
    return [];
  },
  headers: async () => {
    return [];
  },
};

export default nextConfig;

