<template>
    <Banner>
        <template v-slot:Logo>
            <img class="aspect-square p-5" src="./assets/CITADEL Logo.svg" alt="">
        </template>
    </Banner>
    <Nav :NavItems="NavItems"/>
    <RouterView />
</template>

<script setup lang="ts">
    import Banner from './components/Misc/Banner.vue';
    import Nav from './components/Misc/Nav.vue';

    const NavItems: { label: string, to: string }[] = [
        {
            label: "About Us",
            to: "/about-us"
        },
        {
            label: "Our Mission",
            to: "/our-mission"
        },
        {
            label: "Our Services",
            to: "/services-overview"
        },
        {
            label: "Request Services",
            to: "/contact-us"
        },
        
    ]
</script>
