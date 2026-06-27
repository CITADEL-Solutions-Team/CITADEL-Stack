<template>
    <Hero
    :ButtonOne="ButtonOne"
    :ButtonTwo="ButtonTwo">
    
    </Hero>
</template>

<script setup lang="ts">
    import Hero from '@/components/Sections/Hero.vue';

    const ButtonOne: { label: string, to: string } = {
        label: "About Us",
        to: "/about-us"
    }

    const ButtonTwo: { label: string, to: string } = {
        label: "Our Mission",
        to: "/our-mission"
    }
</script>