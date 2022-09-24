/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["en", "bg"],
    defaultLocale: "bg",
    localeDetection: false,
  },
};

module.exports = nextConfig;
