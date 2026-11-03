<template>
    <details class="group/item py-4">
        <summary
            class="group/summary flex gap-4 p-5 cursor-pointer list-none rounded
                   [&::-webkit-details-marker]:hidden
                   focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
            <span
                class="flex-1 text-center font-exo text-xl lg:text-2xl rounded border border-(--Accent)
                       bg-linear-to-b from-[#1062B2] to-[#072A4C]
                       group-hover/summary:from-(--Accent) group-focus-visible/summary:from-(--Accent)"
            >
                {{ question }}
            </span>
            <span
                aria-hidden="true"
                class="self-end aspect-square flex items-center justify-center p-2 rounded border border-(--Accent)
                       bg-linear-to-b from-[#1062B2] to-[#072A4C]
                       group-hover/summary:from-(--Accent) group-focus-visible/summary:from-(--Accent)"
            >
                <span class="group-open/item:hidden">▸</span>
                <span class="hidden group-open/item:inline">▾</span>
            </span>
        </summary>

        <p class="pl-8">
            <template v-for="(part, index) in parts" :key="index">
                <a
                    v-if="part.href && isExternal(part.href)"
                    :href="part.href"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-blue-400 underline hover:text-(--Accent) focus-visible:text-(--Accent)"
                >{{ part.text }}<span class="sr-only"> (opens in a new tab)</span></a>
                <a
                    v-else-if="part.href"
                    :href="part.href"
                    class="text-blue-400 underline hover:text-(--Accent) focus-visible:text-(--Accent)"
                >{{ part.text }}</a>
                <template v-else>{{ part.text }}</template>
            </template>
        </p>
    </details>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { ComputedRef } from 'vue';
import { parseAnswer } from './faqs';
import type { AnswerPart } from './faqs';

const props = defineProps<{
    question: string;
    answer: string;
}>();

const parts: ComputedRef<AnswerPart[]> = computed(() => parseAnswer(props.answer));

function isExternal(href: string): boolean {
    return href.startsWith('http');
}
</script>