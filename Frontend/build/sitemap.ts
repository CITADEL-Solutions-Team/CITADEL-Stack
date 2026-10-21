import type { Plugin } from 'vite'
import { pageRoutes, type PageRoute } from '../src/router/pageRoutes'

const SITE_URL: string = 'https://citadelsolutions.tech'

function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

// Fail the build instead of shipping a broken sitemap.
function assertStaticPath(route: PageRoute): void {
  const isDynamic: boolean = route.path.includes(':') || route.path.includes('*')
  if (isDynamic) {
    throw new Error(
      `[citadel-sitemap] Route "${route.name}" (${route.path}) is dynamic and can't be listed. ` +
        `Set indexable: false or replace it with concrete paths.`,
    )
  }
}

function buildSitemap(routes: readonly PageRoute[]): string {
  const indexable: PageRoute[] = routes.filter((route: PageRoute): boolean => route.indexable)
  indexable.forEach(assertStaticPath)

  const entries: string = indexable
    .map((route: PageRoute): string => {
      const loc: string = escapeXml(new URL(route.path, SITE_URL).href)
      return `  <url>\n    <loc>${loc}</loc>\n  </url>`
    })
    .join('\n')

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    entries,
    '</urlset>',
    '',
  ].join('\n')
}

export function sitemap(): Plugin {
  return {
    name: 'citadel-sitemap',
    apply: 'build',
    generateBundle() {
      const xml: string = buildSitemap(pageRoutes)
      this.emitFile({ type: 'asset', fileName: 'sitemap.xml', source: xml })
    },
  }
}
