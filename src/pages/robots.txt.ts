import type { APIRoute } from "astro";

export const GET: APIRoute = ({ site }) => {
  const base = (site ?? new URL("https://eldarda.com")).href.replace(/\/$/, "");
  const body = `User-agent: *\nAllow: /\n\nSitemap: ${base}/sitemap.xml\n`;
  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
