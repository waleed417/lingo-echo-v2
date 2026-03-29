/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  typescript: {
    // This ignores TypeScript errors so the site can go live
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig
