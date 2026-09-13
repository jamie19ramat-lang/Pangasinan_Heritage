const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig = {
  output: "export",
  trailingSlash: true,

  images: {
    unoptimized: true,
  },

  basePath: isGitHubPages ? "/Pangasinan_Heritage" : "",
  assetPrefix: isGitHubPages ? "/Pangasinan_Heritage/" : "",
};

export default nextConfig;