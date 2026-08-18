<template>
    <ServiceBundle
    :tagLevel="2"
    :sectionName="'Cybersecurity'"
    :serviceTiers="cybersecCards"></ServiceBundle>
    <ServiceBundle
    :tagLevel="2"
    :sectionName="'Website Development'"
    :serviceTiers="webDevCards"></ServiceBundle>
    <ServiceBundle
    :tagLevel="2"
    :sectionName="'Computer Services'"
    :serviceTiers="computerServicesCards"></ServiceBundle>

</template>

<script setup lang="ts">
    import ServiceBundle from '@/components/Cards/ServiceBundle/ServiceBundle.vue';

    const cybersecCards = [
        {
            color: "#AF0003",
            tier: 1,
            tierInfo: "Tier 1 info",
            price: "tbd",
            features: [
                "Feature 1",
                "Feature 2",
                "Feature 3",
            ],
        },
        {
            color: "#AF0003",
            tier: 2,
            tierInfo: "Tier 2 info",
            price: "tbd",
            features: [
                "Feature 1",
                "Feature 2",
                "Feature 3",
            ],
        },
        {
            color: "#AF0003",
            tier: 3,
            tierInfo: "Tier 3 info",
            price: "tbd",
            features: [
                "Feature 1",
                "Feature 2",
                "Feature 3",
            ],
        }
    ]
    const webDevCards = [
        {
            color: "#1C4BE3",
            tier: 1,
            tierInfo: "Tier 1 info",
            price: "tbd",
            features: [
                "Feature 1",
                "Feature 2",
                "Feature 3",
            ],
        },
        {
            color: "#1C4BE3",
            tier: 2,
            tierInfo: "Tier 2 info",
            price: "tbd",
            features: [
                "Feature 1",
                "Feature 2",
                "Feature 3",
            ],
        },
        {
            color: "#1C4BE3",
            tier: 3,
            tierInfo: "Tier 3 info",
            price: "tbd",
            features: [
                "Feature 1",
                "Feature 2",
                "Feature 3",
            ],
        }
    ]
    const computerServicesCards = [
        {
            color: "#7725AE",
            tier: 1,
            tierInfo: "Tier 1 info",
            price: "tbd",
            features: [
                "Feature 1",
                "Feature 2",
                "Feature 3",
            ],
        },
        {
            color: "#7725AE",
            tier: 2,
            tierInfo: "Tier 2 info",
            price: "tbd",
            features: [
                "Feature 1",
                "Feature 2",
                "Feature 3",
            ],
        },
        {
            color: "#7725AE",
            tier: 3,
            tierInfo: "Tier 3 info",
            price: "tbd",
            features: [
                "Feature 1",
                "Feature 2",
                "Feature 3",
            ],
        }
    ]

</script>