/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ["inngest"]
  }
};

export default nextConfig;
