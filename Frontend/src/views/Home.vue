<template>
    <!-- Hero section. Takes in 2 Button inputs to allow for that extra layer of navigation -->
    <Hero
    :tagLevel="1"
    :buttonOne="ButtonOne"
    :buttonTwo="ButtonTwo"
    >
        <template v-slot:Hook>
            Secure Today. Protect Tomorrow.
        </template>
        <template v-slot:Body>
            Straightforward cybersecurity for small and mid-sized businesses. No jargon, no bloated contracts, just real protection from a team that genuinely cares about your business.
        </template>
    </Hero>
    
    <!-- Can literally take in anything and just turns it into a list with a header to the left -->
    <ListWithHeader
    :header="'Why Citadel?'"
    :tagLevel="2"
    :list="lWHeadList"
    >
        
    </ListWithHeader>

    <ExploreServiceBundles 
    :tagLevel="2" 
    :cards="exploreSvcList"
    />

    <WhereToStart
    :button="ButtonThree"
    >
        <template v-slot:Header>
            Not sure where to start? That's what the first call is for!
        </template>
        <template v-slot:Body>
            We offer a free, no-pressure consultation for every new client. In 30 minutes we'll identify your biggest gaps and walk you through what it would take to close them. No commitment required.
        </template>
        <template v-slot:SupTxt>
            Schedule your <bdi class="text-(--Accent)">free</bdi> consultation today!
        </template>
    </WhereToStart>
</template>

<script setup lang="ts">
    import Hero from '@/components/Sections/Hero.vue';
    import ListWithHeader from '@/components/Sections/ListWithHeader.vue';
    import WhereToStart from '@/components/Sections/WhereToStart.vue';
    import ExploreServiceBundles from '@/components/Sections/ExploreServiceBundles.vue';

    const ButtonOne: { label: string, to: string } = {
        label: "About Us",
        to: "/about-us"
    }

    const ButtonTwo: { label: string, to: string } = {
        label: "Our Mission",
        to: "/our-mission"
    }

    const ButtonThree: { label: string, to: string } = {
        label: "Contact Us",
        to: "/contact-us"
    }

    const lWHeadList = [
        {
            header: "A Local Team that treats you like a client, not a ticket",
            body: "We're a local startup which means every client gets our full attention. You'll work directly with the people solving your problems, not a rotating help desk. When you call, someone who knows your setup picks up.",
        },
        {
            header: "No Jargon, No Surprises.",
            body: "We explain what we're doing and why in plain language. You'll always know exactly where you stand… no mystery invoices, no upsells you didn't ask for, no confusing reports you have to decode yourself."
        },
    ]

    const exploreSvcList = [
        {
            service: "Cybersecurity",
            business: "/services/bundles/business#Cybersecurity",
            personal: "/services/bundles/personal#Cybersecurity",
        },
        {
            service: "Website Development",
            business: "/services/bundles/business#WebsiteDevelopment",
            personal: "/services/bundles/personal#WebsiteDevelopment",
        },
        {
            service: "Computer Services",
            business: "/services/bundles/business#ComputerServices",
            personal: "/services/bundles/personal#ComputerServices",
        },
    ]
</script>