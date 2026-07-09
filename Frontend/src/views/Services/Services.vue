<template>
    <h1 class="px-16 py-4 text-[3vw] font-extrabold">
        Service Catalog
    </h1>
    <div class="border-2 border-(--Accent) ml-16 mr-[35vw]" />
    
    <div class="px-18 py-10">
        <div class="grid grid-cols-2 gap-5">
            <div class="col-span-2">
                <InfoCard>
                    <template v-slot:Header>
                        Cyber Security
                    </template>
                    <template v-slot:Body>
                        <div class="grid grid-cols-2 gap-4 pt-2">
                            <RouterLink
                            :to=services[0].To
                            >
                                <InfoCard class="bg-[#0C1218]">
                                    <template v-slot:Header>
                                        SMB
                                    </template>
                                </InfoCard>
                            </RouterLink>
                            <RouterLink 
                            :to=services[1].To
                            >
                                <InfoCard class="bg-[#0C1218]">
                                    <template v-slot:Header>
                                        Home
                                    </template>
                                </InfoCard>
                            </RouterLink>
                        </div>
                    </template>
                </InfoCard>
            </div>
            <RouterLink
            :to=services[2].To
            class="col-span-2">
                <InfoCard></InfoCard>
            </RouterLink>
            <RouterLink
            :to=services[3].To
            class="col-span-2">
                <InfoCard></InfoCard>
            </RouterLink>
        </div>
    </div>
    <WhereToStart :Button="contactPage">
        <template v-slot:Header>
            Need something outside these tiers?
        </template>
        <template v-slot:Body>
            We scope custom engagements for any business. All bundles include a free onboarding call and monthly check-in.
        </template>
    </WhereToStart>
</template>

<script setup lang="ts">
import InfoCard from '@/components/Cards/InfoCard.vue';
import WhereToStart from '@/components/Sections/WhereToStart.vue';

    const contactPage: { label: string, to: string } = {
        label: "Contact Us",
        to: "/contact-us"
    }

    const services = [
        {
            Name: "SMB Cyber Security",
            To: "/services/cyber-sec"
        },
        {
            Name: "Home Security",
            To: "/services/home-sec"
        },
        {
            Name: "PC Services",
            To: "/services/pc-repairs"
        },
        {
            Name: "Web Dev",
            To: "services/web-dev"
        }
    ]
</script>
