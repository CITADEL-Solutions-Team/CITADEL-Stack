<template>
    <div 
    class="flex flex-col border rounded-2xl text-center min-w-80 px-6 pb-6 pt-2"
    :style="{ background: 'radial-gradient(circle,' + props.color + ', #000000 200%)'}"
    >
        <component :is="tagType"
        class="text-4xl font-extrabold"
        >{{ props.name || ("Tier " + props.tier) }}</component>
        <p class="flex-none"> {{ props.tierInfo }} </p>
        <p class="text-2xl font-bold flex-1 text-center content-center"> {{ props.price }} </p>
        <p v-if="props.pricingNote" class="text-sm flex-none"> {{ props.pricingNote }} </p>
        <p v-if="props.includesPreviousTier" class="text-sm italic flex-none"> Everything in the previous tier, plus: </p>

        <div class="flex justify-center-safe items-end">
            <div class="flex flex-col gap-4 text-left">
                <div v-for="(groupFeatures, groupName) in props.features" :key="groupName">
                    <p class="font-semibold uppercase text-sm">{{ groupName }}</p>
                    <ul class="flex flex-col gap-1">
                        <li v-for="feature in groupFeatures" :key="feature" class="flex">
                            <p class="pr-4"> ✓ </p>
                            <p class="col-span-2"> {{ feature }} </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>        
    </div>
</template>

<script setup lang="ts">
import { computed, type ComputedRef } from 'vue';

    interface Props {
        tagLevel?: 1|2|3|4|5|6,
        tier?: number,
        name?: string,
        tierInfo?: string,
        price?: string,
        pricingNote?: string,
        includesPreviousTier?: boolean,
        features?: Record<string, string[]>,

        color?: string
    }

    const props = withDefaults(defineProps<Props>(), {
        color: "#FFFFFF",
        tagLevel: 2,
        tier: 1,
        tierInfo: "Needs tier info",
        price: "$TBD  /mo. or yr.",
        features: () => ({}),
    })

    const tagType: ComputedRef<string> = computed(() => "h" + (props.tagLevel + 1))
</script>