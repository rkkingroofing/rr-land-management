/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Cloudflare Pages doesn't run Next.js's built-in image optimizer.
    // Photos in /public/gallery are already pre-sized to 1600px so this is fine.
    // (To re-enable runtime optimization later, set up Cloudflare Images and
    //  remove this line.)
    unoptimized: true,
  },
};

export default nextConfig;
