/** @type {import('next').NextConfig} */
const nextConfig = {
     eslint: {
    // ❗Builds will succeed even if there are ESLint errors.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
