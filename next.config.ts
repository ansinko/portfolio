import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    allowedDevOrigins: ['192.168.0.113', '*.local'],
};

export default nextConfig;
