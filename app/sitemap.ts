import type { MetadataRoute } from "next";
import { SITE_URL } from "@/data/seo";
import { detailPages } from "@/data/caseStudies";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  // Omit lastModified until actual content update dates are tracked.
  return [
    { url: `${SITE_URL}/`, images: [`${SITE_URL}/image/profile.webp`] },
    ...Object.values(detailPages).map(page => ({ url: `${SITE_URL}${page.path}` })),
  ];
}
