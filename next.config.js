const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['bayut-production.s3.eu-central-1.amazonaws.com'],
  },
  env: {
    RAPID_API_KEY: process.env.RAPID_API_KEY,
  },
};

module.exports = nextConfig;
