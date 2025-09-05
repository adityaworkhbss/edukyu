/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: ['image/avif', 'image/webp'],
        // domains: ['edukyu.com'],
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
