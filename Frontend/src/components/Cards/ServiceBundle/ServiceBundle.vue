<template>
    <section class="py-4">
        <div class="flex gap-4">
            <component :is="tagType"
            class="font-semibold text-[32px] underline"
            > {{ props.sectionName }} </component>
            <button>View All</button>
        </div>
        <div class="md:px-18">
            <ul class="flex justify-center-safe gap-4 overflow-x-scroll md:overflow-x-hide">
                <li v-for="card in props.serviceTiers">
                    <ServiceBundleCard
                    :tagLevel="props.tagLevel"
                    :tier="card.tier"
                    :tierInfo="card.tierInfo"
                    :price="card.price"
                    :userNumber="card.userNumber"
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
        tierInfo?: string,
        price?: string,
        userNumber?: string | null,
        features?: string[],
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