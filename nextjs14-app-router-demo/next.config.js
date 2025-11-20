/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['easy-email-core', 'easy-email-editor', 'easy-email-extensions'],
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    };
    return config;
  },
};

module.exports = nextConfig;
