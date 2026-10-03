import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Serve the coffeehouse as static documents while retaining legacy routes.
  async rewrites() {
    const documents = [
      ["/", "/index.html"],
      ["/agents", "/agents/index.html"],
      ["/entrance", "/entrance/index.html"],
      ["/welcome.md", "/welcome.md"],
      ["/llms.txt", "/llms.txt"],
      ["/coffeehouse.json", "/coffeehouse.json"],
      ["/.well-known/agents.json", "/.well-known/agents.json"],
      ["/style.css", "/style.css"],
      ["/app.js", "/app.js"],
      ["/content.js", "/content.js"],
      ["/assets/:path*", "/assets/:path*"],
      ["/entrance/entrance.css", "/entrance/entrance.css"],
      ["/entrance/entrance.js", "/entrance/entrance.js"],
    ];
    return {
      beforeFiles: documents.map(([source, destination]) => ({
        source,
        destination: `/coffeehouse${destination}`,
      })),
      afterFiles: [],
      fallback: [],
    };
  },
};

export default nextConfig;
