/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [{ source: '/solutions', destination: '/industries', permanent: true }];
  },
};

export default nextConfig;
