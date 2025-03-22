/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ["tse2.mm.bing.net"],
        remotePatterns: [
          {
            
            protocol: 'https',
            hostname: 's3.amazonaws.com',
            port: '',
          },
        ],
      },
};

export default nextConfig;
