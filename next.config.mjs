/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Force rebuild to clear Vercel cache
  generateBuildId: async () => {
    return `build-${Date.now()}`;
  },
};

export default nextConfig;
