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
                                        Business
                                    </template>
                                    <template v-slot:Body>
                                        Business Service Bundles
                                    </template>
                                </InfoCard>
                            </RouterLink>
                            <RouterLink 
                            :to=services[1].To
                            >
                                <InfoCard class="bg-[#0C1218]">
                                    <template v-slot:Header>
                                        Personal
                                    </template>
                                    <template v-slot:Body>
                                        Personal Service Bundles
                                    </template>
                                </InfoCard>
                            </RouterLink>
                        </div>
                    </template>
                </InfoCard>
            </div>
        </div>
    </div>
    <WhereToStart :button="contactPage">
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
        label: "Service Directory",
        to: "/services/directory"
    }

    const services = [
        {
            Name: "Business",
            To: "/services/bundles/business"
        },
        {
            Name: "Personal",
            To: "/services/bundles/personal"
        },
    ]
</script>
