import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
        component: () => import('@/views/Home.vue'),
        path: "/",
        name: "Home",
    },
    {
        component: () => import('@/views/About.vue'),
        path: "/about-us",
        name: "AboutUs",
    },
    {
        component: () => import('@/views/Mission.vue'),
        path: "/our-mission",
        name: "OurMission",
    },
    {
        component: () => import('@/views/Services/Services.vue'),
        path: "/services",
        name: "OurServices",
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
    },
    {
        component: () => import('@/views/Contact.vue'),
        path: "/contact-us",
        name: "ContactUs",
    },
    {
        component: () => import('@/views/DevPage.vue'),
        path: "/dev",
        name: "ComponentPreview"
    }
  ]
})

export default router
