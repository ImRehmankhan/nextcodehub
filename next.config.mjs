import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: false,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  async redirects() {
    return [
      {
        source: '/tools/fuel-cost-calculator',
        destination: '/fuel-cost-calculator',
        permanent: true,
      },
      {
        source: '/cookies-policy',
        destination: '/cookie-policy',
        permanent: true,
      },
    ];
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.alias = {
        ...config.resolve.alias,
        [path.resolve(__dirname, 'node_modules/next/dist/build/polyfills/polyfill-module.js')]: path.resolve(__dirname, 'src/utils/empty-polyfill.js'),
        '../build/polyfills/polyfill-module': path.resolve(__dirname, 'src/utils/empty-polyfill.js'),
      };
    }
    return config;
  },
};

export default nextConfig;
