/** @type {import('next').NextConfig} */
const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" }
    ]
  },
  basePath: isGitHubPages ? "/pangasinan-heritage-showcase" : "",
  assetPrefix: isGitHubPages ? "/pangasinan-heritage-showcase/" : ""
};

export default nextConfig;