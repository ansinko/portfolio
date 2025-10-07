const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    output: 'export',
    basePath: isProd ? '/portfolio' : '',
    assetPrefix: isProd ? '/portfolio/' : '',
    images: {
        unoptimized: true,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
};

export default nextConfig;
