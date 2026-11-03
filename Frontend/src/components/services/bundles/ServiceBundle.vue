<template>
    <section :id="anchorId" class="py-4">
        <div class="flex flex-wrap items-center gap-4 py-2">
            <component :is="tagType" class="font-semibold text-[32px] underline">{{ sectionName }}</component>
            <a
                :href="`/services?section=${category}`"
                class="px-4 py-1 bg-(--MenuCard) rounded-2xl border-2 border-transparent
                       hover:border-white focus-visible:border-white
                       focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
                View all<span class="sr-only"> {{ category }} services</span>
            </a>
        </div>

        <ul
            tabindex="0"
            :aria-label="`${sectionName} bundles`"
            class="flex justify-center-safe gap-4 overflow-x-auto pb-4
                   focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
            <li v-for="card in serviceTiers" :key="card.tier" class="flex">
                <ServiceBundleCard :card="card" :tagLevel="tagLevel" />
            </li>
        </ul>
    </section>
</template>

<script lang="ts">
export interface ServiceTier {
    tier: number;
    name?: string;
    tierInfo?: string;
    price: string;
    pricingNote?: string;
    includesPreviousTier?: boolean;
    features: Record<string, string[]>;
    color: string;
}
</script>

<script setup lang="ts">
import { computed } from 'vue';
import type { ComputedRef } from 'vue';
import ServiceBundleCard from './ServiceBundleCard.vue';

const props = withDefaults(
    defineProps<{
        anchorId: string;
        sectionName: string;
        category: 'business' | 'personal';
        serviceTiers: ServiceTier[];
        tagLevel?: 1 | 2 | 3 | 4 | 5 | 6;
    }>(),
    { tagLevel: 2 },
);

const tagType: ComputedRef<string> = computed(() => `h${props.tagLevel}`);
</script>