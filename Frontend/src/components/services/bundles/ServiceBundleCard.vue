<template>
    <div
        class="flex flex-col h-full min-w-72 sm:min-w-80 px-6 pb-6 pt-2 text-center border rounded-2xl"
        :style="{ background: `radial-gradient(circle, ${card.color}, #000000 200%)` }"
    >
        <component :is="tagType" class="text-4xl font-extrabold">{{ card.name || `Tier ${card.tier}` }}</component>
        <p v-if="card.tierInfo">{{ card.tierInfo }}</p>
        <p class="text-2xl font-bold flex-1 content-center">{{ card.price }}</p>
        <p v-if="card.pricingNote" class="text-sm">{{ card.pricingNote }}</p>
        <p v-if="card.includesPreviousTier" class="text-sm italic">Everything in the previous tier, plus:</p>

        <div class="flex flex-col gap-4 pt-4 text-left">
            <div v-for="(groupFeatures, groupName) in card.features" :key="groupName">
                <p class="font-semibold uppercase text-sm">{{ groupName }}</p>
                <ul class="flex flex-col gap-1">
                    <li v-for="feature in groupFeatures" :key="feature" class="flex gap-4">
                        <span aria-hidden="true">✓</span>
                        <span>{{ feature }}</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { ComputedRef } from 'vue';
import type { ServiceTier } from './ServiceBundle.vue';

const props = withDefaults(
    defineProps<{
        card: ServiceTier;
        tagLevel?: 1 | 2 | 3 | 4 | 5 | 6;
    }>(),
    { tagLevel: 2 },
);

const tagType: ComputedRef<string> = computed(() => `h${Math.min(props.tagLevel + 1, 6)}`);
</script>