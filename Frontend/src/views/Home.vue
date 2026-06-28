<template>
    <Hero
    :ButtonOne="ButtonOne"
    :ButtonTwo="ButtonTwo"
    >
        <template v-slot:Hook>
            Secure Today. Protect Tomorrow.
        </template>
        <template v-slot:Body>
            Straightforward cybersecurity for small and mid-sized businesses. No jargon, no bloated contracts, just real protection from a team that genuinely cares about your business.
        </template>
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