/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: ['image/avif', 'image/webp'],
        remotePatterns: [
            { protocol: 'https', hostname: 'edukyu.com', pathname: '/**' },
        ],
    },
    experimental: {
        optimizePackageImports: [
            'react',
            'next',
            'next/image',
        ],
    },
};

export default nextConfig;
