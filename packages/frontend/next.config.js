/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  reactStrictMode: false,
  env: {
    BASE_URL: process.env.BASE_URL,
    ENVIRONMENT: process.env.ENVIRONMENT,
    JWT_SECRET: process.env.JWT_SECRET,
  },
};

module.exports = nextConfig;
