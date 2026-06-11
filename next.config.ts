import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

// SRI (experimental.sri) adds integrity="sha256-..." to all <script> tags at build
// time, so browsers verify scripts haven't been tampered with without needing nonces.
// This is compatible with PPR and Vercel CDN caching (nonces are not).
const csp = [
  "default-src 'none'",
  // No 'unsafe-inline' — SRI covers script integrity. 'unsafe-eval' only in dev
  // because React uses eval to reconstruct server-side error stacks in the browser.
  isDev ? "script-src 'self' 'unsafe-eval' 'unsafe-inline'" : "script-src 'self' ",
  // Inline styles carry much lower XSS risk than inline scripts; 'unsafe-inline' is
  // acceptable here because CSS cannot exfiltrate data the way scripts can.
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' blob: data: https://images.unsplash.com",
  "font-src 'self'",
  "object-src 'none'",
  "media-src 'self' blob:",
  isDev ? "connect-src 'self' ws://localhost:* wss://localhost:*" : "connect-src 'self'",
  "worker-src blob:",
  "manifest-src 'self'",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "upgrade-insecure-requests",
].join("; ");

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,

  experimental: {
    sri: {
      algorithm: "sha256",
    },
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "Content-Security-Policy", value: csp },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), interest-cohort=()" },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
          { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
          { key: "Cross-Origin-Resource-Policy", value: "same-origin" },
          { key: "Cross-Origin-Embedder-Policy", value: "require-corp" },
        ],
      },
    ];
  },
};

export default nextConfig;

