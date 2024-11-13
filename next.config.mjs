/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    TUTOR_PANEL: process.env.TUTOR_PANEL,
    GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY,
    CLOUDINARY_NAME: process.env.CLOUDINARY_NAME,
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },
};

export default nextConfig;
