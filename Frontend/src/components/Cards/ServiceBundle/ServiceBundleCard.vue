<template>
    <div 
    class="border rounded-2xl text-center min-w-40 px-5 pb-4 pt-2"
    :style="{ background: 'radial-gradient(circle,' + props.color + ', #000000 200%)'}"
    >
        <component :is="tagType"
        class="text-4xl font-extrabold"
        >Tier {{ props.tier }}</component>
        <p> {{ props.tierInfo }} </p>
        <p class="text-xl font-bold"> {{ props.price }} </p>

        <ul>
            <li v-for="feature in props.features">
                <p> ✓{{ feature }} </p>
            </li>
        </ul>        
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