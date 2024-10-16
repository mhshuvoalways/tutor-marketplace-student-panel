/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    TUTOR_PANEL: process.env.TUTOR_PANEL,
    GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY,
  },
};

export default nextConfig;
