/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            // https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0f8b0d10-a51f-4c40-b5de-953012998b19/dunk-low-shoes-W544sp.png
            protocol: 'https',
            hostname: 'static.nike.com',
            port: '',
            pathname: '/a/images/**',
          },
        ],
      },
};

export default nextConfig;
