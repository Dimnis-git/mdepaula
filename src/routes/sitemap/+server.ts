export const prerender = true;

import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
    const pages = [
        '/', // Página inicial
    ];

    const sitemap = `<?xml version="1.0" encoding="UTF-8" ?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages.map(page => `
        <url>
          <loc>https://marcenariadepaula.com.br${page}</loc>
          <priority>1.0</priority>
        </url>
      `).join('')}
    </urlset>`;

    return new Response(sitemap, {
        headers: {
            'Content-Type': 'application/xml',
        },
    });
};