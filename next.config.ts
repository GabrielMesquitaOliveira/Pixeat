import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    // allow external images from ImageKit used in the hero section
    domains: ['ik.imagekit.io'],
    // alternatively you can use `remotePatterns` for more control
    // remotePatterns: [
    //   { protocol: 'https', hostname: 'ik.imagekit.io' }
    // ]
  },
};

export default nextConfig;
