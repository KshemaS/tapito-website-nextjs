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

  async headers() {
    const isDevelopment = process.env.NODE_ENV === "development";

    const csp = [
      "default-src 'none'",
      // 'unsafe-inline' is required for Next.js inline scripts (hydration, route prefetch).
      // 'unsafe-eval' is only needed in dev where React uses eval for enhanced error stacks.
      isDevelopment
        ? "script-src 'self' 'unsafe-inline' 'unsafe-eval'"
        : "script-src 'self' 'unsafe-inline'",
      "style-src 'self' 'unsafe-inline'",
      // blob: required for Next.js image optimisation; data: for inline SVG/base64 sources.
      "img-src 'self' blob: data: https://images.unsplash.com",
      "font-src 'self'",
      "object-src 'none'",
      "media-src 'self' blob:",
      // ws: required for Next.js HMR websocket in development.
      isDevelopment
        ? "connect-src 'self' ws://localhost:* wss://localhost:*"
        : "connect-src 'self'",
      "worker-src blob:",
      "manifest-src 'self'",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "upgrade-insecure-requests",
    ].join("; ");

    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value:
              "camera=(), microphone=(), geolocation=(), interest-cohort=()",
          },
          {
            key: "Content-Security-Policy",
            value: csp,
          },
          // { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
          { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
          { key: "Cross-Origin-Resource-Policy", value: "same-origin" },
          { key: "Cross-Origin-Embedder-Policy", value: "require-corp" },
        ],
      },
    ];
  },
};

export default nextConfig;
