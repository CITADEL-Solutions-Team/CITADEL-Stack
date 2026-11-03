<template>
    <section class="flex flex-col items-center px-6 py-20">
        <component
            :is="tagType"
            class="text-4xl sm:text-6xl text-center text-(--Accent) font-bold py-2"
        >
            <slot name="Hook" />
        </component>

        <p class="max-w-3xl text-center text-(--SupText) py-8">
            <slot name="Body" />
        </p>

        <div class="flex flex-wrap justify-center gap-4">
            <a
                :href="buttonOne.to"
                class="text-(--Background) bg-(--Accent) font-semibold rounded px-5 py-2 border-2 border-(--Accent)
                       hover:border-white focus-visible:border-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
                {{ buttonOne.label }}
            </a>

            <a
                :href="buttonTwo.to"
                class="text-(--Accent) font-semibold rounded px-5 py-2 border-2 border-(--Accent)
                       hover:border-white focus-visible:border-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
                {{ buttonTwo.label }}
            </a>
        </div>
    </section>
</template>

<script lang="ts">
export interface HeroButton {
    label: string;
    to: string;
}
</script>

<script setup lang="ts">
import { computed } from 'vue';
import type { ComputedRef } from 'vue';

const props = withDefaults(
    defineProps<{
        tagLevel?: 1 | 2 | 3 | 4 | 5 | 6;
        buttonOne: HeroButton;
        buttonTwo: HeroButton;
    }>(),
    { tagLevel: 2 },
);

const tagType: ComputedRef<string> = computed(() => `h${props.tagLevel}`);
</script>