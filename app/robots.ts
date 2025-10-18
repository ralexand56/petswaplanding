import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin", "/api"], // optional
    },
    sitemap: "https://thepetswap.com/sitemap.xml",
  };
}
