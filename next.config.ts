import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Add trailing slashes to match existing URL structure
  trailingSlash: true,
  
  // Optimize images
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // Enable static exports for maximum performance (optional)
  // output: "export",
  
  // Compress responses
  compress: true,
  
  // Generate ETags for caching
  generateEtags: true,
  
  // Power header for security
  poweredByHeader: false,
  
  // Strict mode for better React development
  reactStrictMode: true,
};

export default nextConfig;
