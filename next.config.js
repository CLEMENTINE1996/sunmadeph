/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  output: 'export', 
  basePath: '/sunmadeph', 
  assetPrefix: '/sunmadeph/',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;