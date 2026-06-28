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

    <ListWithHeader>
        <template v-slot:Header>
            Why CITADEL?
        </template>
        <template v-slot:List>
            <InfoCard>
                <template v-slot:Header>
                    A Local Team That Treats You Like a Client, Not a Ticket
                </template>
                <template v-slot:Body>
                    We're a local startup which means every client gets our full attention. You'll work directly with the people solving your problems, not a rotating help desk. When you call, someone who knows your setup picks up.
                </template>
            </InfoCard>
            <InfoCard>
                <template v-slot:Header>
                    No Jargon. No Surprises.
                </template>
                <template v-slot:Body>
                    We explain what we're doing and why in plain language. You'll always know exactly where you stand… no mystery invoices, no upsells you didn't ask for, no confusing reports you have to decode yourself.
                </template>
            </InfoCard>
        </template>
    </ListWithHeader>
</template>

<script setup lang="ts">
    import InfoCard from '@/components/Cards/InfoCard.vue';
import Hero from '@/components/Sections/Hero.vue';
import ListWithHeader from '@/components/Sections/ListWithHeader.vue';

    const ButtonOne: { label: string, to: string } = {
        label: "About Us",
        to: "/about-us"
    }

    const ButtonTwo: { label: string, to: string } = {
        label: "Our Mission",
        to: "/our-mission"
    }
</script>