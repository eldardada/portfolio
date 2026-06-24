import type { APIRoute } from "astro";

// Static list of routes. Keep in sync with src/pages/work/*.
const routes = [
  { path: "", priority: "1.0" },
  { path: "work/valt", priority: "0.8" },
  { path: "work/massposting", priority: "0.8" },
  { path: "work/umnogor", priority: "0.8" },
  { path: "work/tkm", priority: "0.8" },
  { path: "work/monolizovna", priority: "0.8" },
];

export const GET: APIRoute = ({ site }) => {
  const base = (site ?? new URL("https://eldarda.com")).href.replace(/\/$/, "");
  const urls = routes
    .map(
      (r) =>
        `  <url>\n    <loc>${base}/${r.path}</loc>\n    <changefreq>monthly</changefreq>\n    <priority>${r.priority}</priority>\n  </url>`,
    )
    .join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
