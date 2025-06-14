/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "kirzcizpmcnhdxozfnkc.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/cabin-images/***",
      },
    ],
    unoptimized: true,
  },
  output: "export",
};

export default nextConfig;
