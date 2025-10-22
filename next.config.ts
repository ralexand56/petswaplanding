import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false, // Ensures no trailing slashes
  
  async redirects() {
    return [
      // Redirect www to non-www
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.thepetswap.com',
          },
        ],
        destination: 'https://thepetswap.com/:path*',
        permanent: true,
      },
      // Redirect any trailing slashes to non-trailing slash (except root)
      {
        source: '/:path+/',
        destination: '/:path+',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
