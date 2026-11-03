<template>
    <section class="bg-(--MenuCard) my-8 p-6 sm:p-8 rounded-[25px]">
        <component :is="tagType" class="text-2xl">Explore Our Service Bundles</component>

        <ul class="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:px-15 pt-6">
            <li
                v-for="card in cards"
                :key="card.service"
                class="min-h-60 flex flex-col bg-(--AltCard) border border-(--Accent) rounded-2xl pt-8 pb-6 px-6"
            >
                <component :is="itemTagType" class="flex-1 content-center text-center text-lg md:text-2xl">
                    {{ card.service }}
                </component>

                <div class="flex flex-col gap-2 pt-8">
                    <a v-if="card.business" :href="card.business" :class="buttonClass">
                        Business<span class="sr-only"> {{ card.service }} bundles</span>
                    </a>
                    <a v-if="card.personal" :href="card.personal" :class="buttonClass">
                        Personal<span class="sr-only"> {{ card.service }} bundles</span>
                    </a>
                </div>
            </li>
        </ul>
    </section>
</template>

<script lang="ts">
export interface ServiceCard {
    service: string;
    business?: string;
    personal?: string;
}
</script>

<script setup lang="ts">
import { computed } from 'vue';
import type { ComputedRef } from 'vue';

const props = withDefaults(
    defineProps<{
        tagLevel?: 1 | 2 | 3 | 4 | 5 | 6;
        cards: ServiceCard[];
    }>(),
    { tagLevel: 2 },
);

const tagType: ComputedRef<string> = computed(() => `h${props.tagLevel}`);
const itemTagType: ComputedRef<string> = computed(() => `h${Math.min(props.tagLevel + 1, 6)}`);

const buttonClass: string =
    'block w-full text-center border-2 border-(--Accent) rounded-lg p-2 ' +
    'hover:bg-(--MenuCard) hover:border-white focus-visible:bg-(--MenuCard) focus-visible:border-white ' +
    'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white';
</script>