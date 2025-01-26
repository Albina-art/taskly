import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  env: {
    PLAYWRIGHT: process.env.PLAYWRIGHT,
  },
};

export default nextConfig;
