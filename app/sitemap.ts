import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastmodifedDate = new Date().toISOString(); 
  return [
    {
      url: "/",
      lastModified: lastmodifedDate,
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "/certificate",
      lastModified: lastmodifedDate,
      changeFrequency: "yearly",
      priority: 0.8,
    },
  ];
}
