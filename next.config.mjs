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
  },
  webpack: (config, { isServer, webpack }) => {
    // Exclude problematic Windows system directories
    if (config.snapshot) {
      config.snapshot.managedPaths = [];
    }
    
    // Add ignore patterns for Windows
    if (config.watchOptions) {
      config.watchOptions.ignored = [
        /node_modules/,
        /\.next/,
        /\.git/,
      ];
    }

    // Disable filesystem caching to avoid Windows permission issues
    config.cache = false;
    
    return config;
  },
};

export default nextConfig;
