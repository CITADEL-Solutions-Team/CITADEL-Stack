<template>
    <div 
    class="flex flex-col border rounded-2xl text-center min-w-80 h-80 px-6 pb-6 pt-2"
    :style="{ background: 'radial-gradient(circle,' + props.color + ', #000000 200%)'}"
    >
        <component :is="tagType"
        class="text-4xl font-extrabold"
        >Tier {{ props.tier }}</component>
        <p class="flex-none"> {{ props.tierInfo }} </p>
        <p class="text-2xl font-bold flex-1 text-center content-center"> {{ props.price }} </p>

        <div class="flex justify-center-safe items-end">
            <ul class="flex flex-col gap-4">
                <li v-for="feature in props.features" class="grid grid-cols-3">
                    <p> ✓             </p>
                    <p class="col-span-2"> {{ feature }} </p>
                </li>
            </ul>
        </div>        
    </div>
</template>

<script setup lang="ts">
import { computed, type ComputedRef } from 'vue';

    interface Props {
        tagLevel?: 1|2|3|4|5|6,
        tier?: number,
        tierInfo?: string,
        price?: string,
        userNumber?: string | null,
        features?: string[],

        color?: string
    }

    const props = withDefaults(defineProps<Props>(), {
        color: "#FFFFFF",
        tagLevel: 2,
        tier: 1,
        tierInfo: "Needs tier info",
        price: "$TBD  /mo. or yr.",
        userNumber: null,
        features: () => [],
    })

    const tagType: ComputedRef<string> = computed(() => "h" + (props.tagLevel + 1))
</script>