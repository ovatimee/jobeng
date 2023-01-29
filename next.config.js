/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["i.postimg.cc"],
  },
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
}

module.exports = nextConfig
