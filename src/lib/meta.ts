import { siteConfig, isConfigured } from "@/config/site";

export interface RouteMetaInput {
  /** Full <title> for the page. */
  title: string;
  /** Meta description; falls back to the site-wide description. */
  description?: string;
  /** Absolute path for this route, e.g. "/features". Used for canonical + og:url. */
  path: string;
  /** Optional social share image (absolute URL or root-relative path). */
  image?: string;
  /** Set true to ask crawlers not to index this route (e.g. the dashboard). */
  noindex?: boolean;
}

type MetaTag = Record<"title" | "name" | "property" | "content", string>;
type LinkTag = Record<"rel" | "href", string>;

/** Build an absolute URL when a public site URL is configured, otherwise keep it root-relative. */
function toUrl(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (isConfigured(siteConfig.siteUrl)) {
    return `${siteConfig.siteUrl.replace(/\/$/, "")}${normalized === "/" ? "" : normalized}`;
  }
  return normalized;
}

/**
 * Shared `head()` builder for file routes. Keeps title/description/OG/canonical
 * consistent across pages so individual routes only declare what is unique.
 */
export function createFileRouteMetaHelper(input: RouteMetaInput): {
  meta: Array<Partial<MetaTag>>;
  links: LinkTag[];
} {
  const description = input.description ?? siteConfig.description;
  const url = toUrl(input.path);
  const image = input.image ? toUrl(input.image) : undefined;

  const meta: Array<Partial<MetaTag>> = [
    { title: input.title },
    { name: "description", content: description },
    { property: "og:title", content: input.title },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:url", content: url },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: input.title },
    { name: "twitter:description", content: description },
  ];

  if (image) {
    meta.push({ property: "og:image", content: image });
    meta.push({ name: "twitter:image", content: image });
  }

  if (input.noindex) {
    meta.push({ name: "robots", content: "noindex, nofollow" });
  }

  return {
    meta,
    links: [{ rel: "canonical", href: url }],
  };
}
