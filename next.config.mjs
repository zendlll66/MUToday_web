/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'mu-dev-storage.s3.ap-southeast-7.amazonaws.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'pub-84690884fe94462e83399faa03011cbe.r2.dev',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'trscgkhvrgonyogctiqb.supabase.co',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
