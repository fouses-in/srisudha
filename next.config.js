/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa");
const nextConfig = withPWA({
  pwa: {
    dest: "public",
    buildExcludes: [/middleware-manifest\.json$/],
  },
  env: {
    BUCKET_URL: "https://srisudha.s3.ap-south-1.amazonaws.com",
  },
  images: {
    domains: ["srisudha.s3.ap-south-1.amazonaws.com"],
  },
});

module.exports = nextConfig;
