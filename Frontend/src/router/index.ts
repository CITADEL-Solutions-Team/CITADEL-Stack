import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
        component: () => import('@/views/Services/CyberSec.vue'),
        path: "/",
        name: "Home",
    },
    {
        path: "/about-us",
        name: "AboutUs",
        children: [
            {
                path: "",
                component: () => import('@/views/About/About.vue'),
            },
            {
                path: ":id",
                component: () => import('@/views/About/TeamMember.vue')
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
        name: "OurServices",
		children: [
            {
                path: "",
                component: () => import('@/views/Services/Services.vue'),
            },
			{
				component: () => import('@/views/Services/CyberSec.vue'),
        		path: "/services/cyber-sec",
        		name: "CyberSecServices"
    		},
    		{
				component: () => import('@/views/Services/HomeSec.vue'),
        		path: "/services/home-sec",
        		name: "HomeSec",
    		},
    		{
				component: () => import('@/views/Services/PCRepairs.vue'),
        		path: "/services/pc-repairs",
        		name: "PCRepairs",
    		},
    		{
				component: () => import('@/views/Services/WebDev.vue'),
        		path: "/services/web-dev",
        		name: "WebDev",
    		}		
		],
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
    }
  ]
})

export default router
