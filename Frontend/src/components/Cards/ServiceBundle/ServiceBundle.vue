<template>
    <section class="py-4">
        <div class="flex gap-4 py-2">
            <component :is="tagType"
            class="font-semibold text-[32px] underline"
            > {{ props.sectionName }} </component>
            <RouterLink :to="'/services/directory'">
                <button class="px-4 bg-(--MenuCard) rounded-2xl">View All</button>
            </RouterLink>
        </div>
        <div class="">
            <ul class="flex justify-center-safe gap-4 overflow-x-scroll lg:overflow-x-hide">
                <li v-for="card in props.serviceTiers" :key="card.tier">
                    <ServiceBundleCard
                    :tagLevel="props.tagLevel"
                    :tier="card.tier"
                    :name="card.name"
                    :tierInfo="card.tierInfo"
                    :price="card.price"
                    :pricingNote="card.pricingNote"
                    :includesPreviousTier="card.includesPreviousTier"
                    :features="card.features"
                    :color="card.color"
                    ></ServiceBundleCard>
                </li>
            </ul>
        </div>
    </section>
</template>

<script setup lang="ts">
    import { computed, type ComputedRef } from 'vue';
    import ServiceBundleCard from './ServiceBundleCard.vue';

    interface ServiceTier {
        tier?: number,
        name?: string,
        tierInfo?: string,
        price?: string,
        pricingNote?: string,
        includesPreviousTier?: boolean,
        features?: Record<string, string[]>,
        color: string,
    }

    interface Props {
        tagLevel?: 1|2|3|4|5|6,
        sectionName?: string
        serviceTiers?: ServiceTier[]
    }

    const props = withDefaults(defineProps<Props>(), {
        tagLevel: 2,
        sectionName: "Section name here",
        serviceTiers: () => []
    })

    const tagType: ComputedRef<string> = computed(() => "h" + props.tagLevel)
</script>