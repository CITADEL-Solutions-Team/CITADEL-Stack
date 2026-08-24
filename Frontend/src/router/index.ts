// index.ts
import { createRouter, createWebHistory } from 'vue-router'

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
    },
    {
        path: "/about-us",
        children: [
            {
                path: "",
                component: () => import('@/views/About/About.vue'),
                name: "AboutUs"
            },
            {
                path: ":slug",
                component: () => import('@/views/About/TeamMember.vue'),
                name: "AboutTeamMember",
            }
        ]
    },
    {
        component: () => import('@/views/Mission.vue'),
        path: "/our-mission",
        name: "OurMission",
    },
    {
        path: "/services",
		children: [
            {
                path: "",
                name: "ServicesOverview",    
                component: () => import('@/views/Services/ServiceDirectory.vue'),
            },
            {
                path: "/services/bundles",
                name: "Bundles",
                children: [
                    {
                        path: "/services/bundles/business",
                        name: "BusinessBundles",
                        component: () => import('@/views/Services/Bundles/Business.vue'),
                    },
                    {
                        path: "/services/bundles/personal",
                        name: "PersonalBundles",
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
    },
    {
        component: () => import('@/views/DevPage.vue'),
        path: "/dev",
        name: "ComponentPreview"
    },
    {
        path: "/policies",
        name: "Policies",
        children: [
            {
                path: "privacy-policy",
                name: "PrivacyPolicy",
                component: () => import('@/views/Policies/Privacy.vue')
            },
            {
                path: "cookie-policy",
                name: "CookiePolicy",
                component: () => import('@/views/Policies/Cookies.vue')
            },
            {
                path: "terms-of-service",
                name: "TermsOfService",
                component: () => import('@/views/Policies/TermsOfService.vue')
            },
            {
                path: "accessibility-statement",
                name: "AccessibilityStatement",
                component: () => import('@/views/Policies/Accessibility.vue')
            }
        ],
    },
    {
        path: "/faq",
        name: "FAQ",
        component: () => import('@/views/FAQ.vue')
    },
    {
        path: "/glossary",
        name: "Glossary",
        component: () => import('@/views/Glossary.vue')
    },
    {
        path: "/error",
        name: "Error",
        children: [
            {
                path: "404",
                name: "NotExist",
                component: () => import('@/views/Errors/error404.vue')
            }
        ]
    }
  ]
})

export default router