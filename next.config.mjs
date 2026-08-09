/** @type {import('next').NextConfig} */
const nextConfig = {
  // Fully static frontend — no server, no Node runtime needed.
  // `next build` emits ./out, which is what Cloudflare Pages serves.
  output: 'export',

  // Cloudflare Pages serves /courses/ as /courses/index.html, so emit
  // directory-style URLs to keep links working without redirects.
  trailingSlash: true,

  // The Next.js image optimizer is a server feature; static export needs it off.
  images: { unoptimized: true },

  reactStrictMode: true,
  productionBrowserSourceMaps: false,
};

export default nextConfig;
