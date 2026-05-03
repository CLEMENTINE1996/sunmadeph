/** @type {import('next').NextConfig} */
module.exports = {
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  output: 'export', 
  basePath: '/sunmadeph', 
  images: {
    unoptimized: true,
  },
};