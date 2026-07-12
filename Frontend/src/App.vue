<template>
    <div class="flex flex-col">
        <Banner class="flex-none">
            <template v-slot:Logo>
                <img class="aspect-square p-5" src="./assets/CITADEL Logo.svg" alt="">
            </template>
        </Banner>
        <Nav class="flex-none" :NavItems="NavItems"/>
        <RouterView class="grow" />
    </div>
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
            to: "/services"
        },
        {
            label: "Request Services",
            to: "/contact-us"
        },
        
    ]
</script>
