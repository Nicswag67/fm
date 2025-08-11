/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: { serverActions: true },
  headers: async () => [
    {
      source: "/(.*)",
      headers: [
        { key: "Permissions-Policy", value: "interest-cohort=()" },
        { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" }
      ]
    }
  ]
};
export default nextConfig;
