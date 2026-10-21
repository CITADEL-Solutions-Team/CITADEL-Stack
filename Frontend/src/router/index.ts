// index.ts
import { createRouter, createWebHistory } from 'vue-router'
import type { RouteLocationNormalized } from 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    title?: string
    description?: string
    noindex?: boolean
  }
}

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        top: 80,
        behavior: 'smooth',
      }
    }
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0 }
  },
  routes: [
    {
        component: () => import('@/views/Home.vue'),
        path: "/",
        name: "Home",
        meta: { title: "CITADEL Solutions | Secure Today. Protect Tomorrow.", description: "Straightforward cybersecurity, computer services, and web development for small businesses and individuals. Book a free, no-pressure consultation." },
    },
    {
        path: "/about-us",
        children: [
            {
                path: "",
                component: () => import('@/views/About/About.vue'),
                name: "AboutUs",
                meta: { title: "About Us | CITADEL Solutions", description: "Meet the CITADEL Solutions team: our leadership, web developers, cybersecurity specialists, and IT technicians who deliver every service we offer." },
            },
            {
                path: ":slug",
                component: () => import('@/views/About/TeamMember.vue'),
                name: "AboutTeamMember",
                meta: { title: "Team Member | CITADEL Solutions", description: "Profile of a CITADEL Solutions team member, part of the team providing cybersecurity, computer services, and web development to our clients." },
            }
        ]
    },
    {
        component: () => import('@/views/Mission.vue'),
        path: "/our-mission",
        name: "OurMission",
        meta: { title: "Our Mission | CITADEL Solutions", description: "Our mission is to make secure, reliable, and understandable technology available to everyone, from individuals and homeowners to small businesses." },
    },
    {
        path: "/services",
		children: [
            {
                path: "",
                name: "ServicesOverview",    
                meta: { title: "Services | CITADEL Solutions", description: "Search and filter CITADEL Solutions services for businesses and individuals, including website development and computer services, or browse bundles." },
                component: () => import('@/views/Services/ServiceDirectory.vue'),
                props: (route) => ({ Personal: route.query.section === 'personal' }),
            },
            {
                path: "/services/bundles",
                name: "Bundles",
                redirect: "/services",
                children: [
                    {
                        path: "/services/bundles/business",
                        name: "BusinessBundles",
                        meta: { title: "Business Service Bundles | CITADEL Solutions", description: "Website development bundles for businesses, from starter sites to e-commerce and custom builds. Every bundle includes a free onboarding call." },
                        component: () => import('@/views/Services/Bundles/Business.vue'),
                    },
                    {
                        path: "/services/bundles/personal",
                        name: "PersonalBundles",
                        meta: { title: "Personal Service Bundles | CITADEL Solutions", description: "Website and computer service bundles for individuals: portfolio sites, blogs, PC cleanups, new PC setup, and custom builds, with free onboarding." },
                        component: () => import('@/views/Services/Bundles/Personal.vue'),
                    }
                ]
            },
        ]
    },
    {
        component: () => import('@/views/Contact/Contact.vue'),
        path: "/contact-us",
        name: "ContactUs",
        meta: { title: "Contact Us | CITADEL Solutions", description: "Contact CITADEL Solutions about cybersecurity, website development, or computer services. We reply within 24 business hours, or call us directly." },
    },
    {
        component: () => import('@/views/DevPage.vue'),
        path: "/dev",
        name: "ComponentPreview",
        meta: { title: "Component Preview | CITADEL Solutions", description: "Internal development page the CITADEL Solutions team uses to preview website components. It is not intended for visitors and is not in our sitemap.", noindex: true },
    },
    {
        path: "/policies",
        name: "Policies",
        redirect: "/policies/privacy-policy",
        children: [
            {
                path: "privacy-policy",
                name: "PrivacyPolicy",
                meta: { title: "Privacy Policy | CITADEL Solutions", description: "How CITADEL Solutions collects, uses, and protects the contact details you share with us. We never sell your information or share it for marketing." },
                component: () => import('@/views/Policies/Privacy.vue')
            },
            {
                path: "cookie-policy",
                name: "CookiePolicy",
                meta: { title: "Cookie Policy | CITADEL Solutions", description: "CITADEL Solutions uses only strictly necessary Cloudflare security cookies. No marketing, advertising, or tracking cookies, and analytics are cookie-free." },
                component: () => import('@/views/Policies/Cookies.vue')
            },
            {
                path: "terms-of-service",
                name: "TermsOfService",
                meta: { title: "Terms of Service | CITADEL Solutions", description: "The terms for using the CITADEL Solutions website, covering acceptable use, intellectual property, disclaimers, liability limits, and governing law." },
                component: () => import('@/views/Policies/TermsOfService.vue')
            },
            {
                path: "accessibility-statement",
                name: "AccessibilityStatement",
                meta: { title: "Accessibility Statement | CITADEL Solutions", description: "Our commitment to an accessible website as we work toward WCAG 2.1 AA, the assistive technologies we support, and how to report accessibility barriers." },
                component: () => import('@/views/Policies/Accessibility.vue')
            }
        ],
    },
    {
        path: "/faq",
        name: "FAQ",
        meta: { title: "FAQ | CITADEL Solutions", description: "Answers to common questions about CITADEL Solutions: free consultations, billing, remote and on-site support, cybersecurity, websites, and PC repair." },
        component: () => import('@/views/FAQ.vue')
    },
    {
        path: "/glossary",
        name: "Glossary",
        meta: { title: "Glossary | CITADEL Solutions", description: "A glossary of common cybersecurity, IT, and web development terms, explained in plain language for the small businesses and individuals we serve." },
        component: () => import('@/views/Glossary.vue')
    },
    {
        path: "/:pathMatch(.*)*",
        name: "NotFound",
        meta: { title: "Page Not Found | CITADEL Solutions", description: "Sorry, we couldn't find the page you were looking for on the CITADEL Solutions website. It may have been moved, renamed, or may never have existed.", noindex: true },
        component: () => import('@/views/Errors/error404.vue')
    }
  ]
})

// Defaults come from index.html, read once before any navigation changes them.
const defaultTitle: string = document.title
const defaultDescription: string =
  document.head.querySelector<HTMLMetaElement>('meta[name="description"]')?.content ?? ''

router.afterEach((to: RouteLocationNormalized): void => {
  document.title = to.meta.title ?? defaultTitle

  let descriptionTag: HTMLMetaElement | null = document.head.querySelector<HTMLMetaElement>('meta[name="description"]')
  if (!descriptionTag) {
    descriptionTag = document.createElement('meta')
    descriptionTag.name = 'description'
    document.head.appendChild(descriptionTag)
  }
  descriptionTag.content = to.meta.description ?? defaultDescription

  const robotsTag: HTMLMetaElement | null = document.head.querySelector<HTMLMetaElement>('meta[name="robots"]')
  if (to.meta.noindex) {
    if (!robotsTag) {
      const newRobotsTag: HTMLMetaElement = document.createElement('meta')
      newRobotsTag.name = 'robots'
      newRobotsTag.content = 'noindex'
      document.head.appendChild(newRobotsTag)
    }
  } else {
    robotsTag?.remove()
  }
})

export default router