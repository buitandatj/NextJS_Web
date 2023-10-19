/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  images: {
    domains: ["product.hstatic.net"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.example.com",
        port: "",
        pathname: "/account123/**",
      },
    ],
  },
};
