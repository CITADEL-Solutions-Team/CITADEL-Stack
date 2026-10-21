// Sitemap page list — read by build/sitemap.ts at build time.
// The router does NOT import this file. When you add a public page to index.ts,
// add its full URL path here too, or it won't appear in the sitemap.
// Team member pages (/about-us/:slug), /dev and the 404 route are intentionally left out.

export interface PageRoute {
  name: string
  path: string
  indexable: boolean
}

export const pageRoutes: PageRoute[] = [
  { name: 'Home', path: '/', indexable: true },
  { name: 'AboutUs', path: '/about-us', indexable: true },
  { name: 'OurMission', path: '/our-mission', indexable: true },
  { name: 'ServicesOverview', path: '/services', indexable: true },
  { name: 'BusinessBundles', path: '/services/bundles/business', indexable: true },
  { name: 'PersonalBundles', path: '/services/bundles/personal', indexable: true },
  { name: 'ContactUs', path: '/contact-us', indexable: true },
  { name: 'FAQ', path: '/faq', indexable: true },
  { name: 'Glossary', path: '/glossary', indexable: true },
  { name: 'PrivacyPolicy', path: '/policies/privacy-policy', indexable: true },
  { name: 'CookiePolicy', path: '/policies/cookie-policy', indexable: true },
  { name: 'TermsOfService', path: '/policies/terms-of-service', indexable: true },
  { name: 'AccessibilityStatement', path: '/policies/accessibility-statement', indexable: true },
]
