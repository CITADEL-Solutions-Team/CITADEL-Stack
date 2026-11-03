<template>
    <section class="py-10 px-6 flex flex-col gap-12">
        <div class="flex flex-col gap-4 text-center">
            <component :is="tagType" class="font-bold text-2xl lg:text-4xl text-(--Accent)">
                <slot name="Header" />
            </component>

            <p class="text-lg">
                <slot name="Body" />
            </p>

            <p class="font-bold text-2xl lg:text-5xl">
                <slot name="SupTxt" />
            </p>
        </div>

        <div class="flex justify-center-safe">
            <a
                :href="button.to"
                class="w-full md:w-auto text-center font-semibold px-6 py-3 rounded-lg
                       bg-(--Accent) text-(--Background) border-2 border-transparent
                       hover:border-white focus-visible:border-white
                       focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
                {{ button.label }}
            </a>
        </div>
    </section>
</template>

<script lang="ts">
export interface CtaButton {
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
        button: CtaButton;
    }>(),
    { tagLevel: 2 },
);

const tagType: ComputedRef<string> = computed(() => `h${props.tagLevel}`);
</script>