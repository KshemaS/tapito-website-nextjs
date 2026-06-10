import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Hide X-Powered-By header to prevent technology stack disclosure
  poweredByHeader: false,

  // Enable React strict mode for better development warnings
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },

  // Security Headers Configuration
  async headers() {
    const isDevelopment = process.env.NODE_ENV === 'development';

    return [
      {
        source: "/:path*",
        headers: [
          // Prevent MIME type sniffing
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          // Prevent clickjacking attacks
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          // Enable XSS filter in older browsers
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          // Control referrer information
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          // Disable unnecessary browser features
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
          },
          // Content Security Policy
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'none'",
              // Production: strict | Development: allow unsafe-eval/inline for HMR
              isDevelopment
                ? "script-src 'self' 'unsafe-eval' 'unsafe-inline'"
                : "script-src 'self' 'unsafe-inline'",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: https://images.unsplash.com",
              "font-src 'self' data:",
              "media-src 'self' blob:",
              // Development: allow WebSocket for HMR
              isDevelopment
                ? "connect-src 'self' ws://localhost:*"
                : "connect-src 'self'",
              "worker-src blob:",
              "manifest-src 'self'",
              "frame-ancestors 'none'",
              "base-uri 'self'",
              "form-action 'self'",
              "upgrade-insecure-requests",
            ].join("; "),
          },
          // HSTS - Force HTTPS (only enable in production with HTTPS)
          // Uncomment when deploying to production with HTTPS:
          // {
          //   key: "Strict-Transport-Security",
          //   value: "max-age=63072000; includeSubDomains; preload",
          // },
          // Cross-Origin policies
          {
            key: "Cross-Origin-Opener-Policy",
            value: "same-origin",
          },
          {
            key: "Cross-Origin-Resource-Policy",
            value: "same-origin",
          },
          {
            key: "Cross-Origin-Embedder-Policy",
            value: "require-corp",
          },
        ],
      },
    ];
  },
};

export default nextConfig;

