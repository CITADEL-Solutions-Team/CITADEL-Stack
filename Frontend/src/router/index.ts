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
        component: () => import('@/views/Services.vue'),
        path: "/services-overview",
        name: "OurServices",
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
