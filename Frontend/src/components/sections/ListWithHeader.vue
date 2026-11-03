<template>
    <section class="grid grid-cols-5 gap-y-8 px-6 lg:px-0">
        <!-- Left: header and logo -->
        <div class="col-span-5 lg:col-span-2 grid place-content-center-safe">
            <component :is="tagType" class="font-bold text-3xl lg:text-[40px] text-center text-(--Accent)">
                {{ header }}
            </component>

            <div class="hidden lg:flex w-full aspect-square justify-center-safe">
                <Logo class="w-full h-full max-w-42 max-h-42 text-(--Accent)" aria-hidden="true" />
            </div>
        </div>

        <!-- Right: the list -->
        <div class="col-span-5 lg:col-span-3 lg:border lg:border-(--Accent) rounded-[20px] lg:px-11 lg:py-9 lg:bg-(--AltCard)">
            <ul>
                <li
                    v-for="item in list"
                    :key="item.header"
                    class="mb-4 bg-(--AltCard) lg:bg-transparent rounded-[20px] border border-(--Accent) lg:border-0 px-6 lg:px-0 py-6 lg:py-0"
                >
                    <div class="flex items-center gap-2">
                        <span class="w-2.5 h-2.5 rounded-full shrink-0 bg-(--Accent)" aria-hidden="true"></span>
                        <component :is="itemTagType" class="underline text-2xl">{{ item.header }}</component>
                    </div>
                    <p>{{ item.body }}</p>
                </li>
            </ul>
        </div>
    </section>
</template>

<script lang="ts">
export interface ListItem {
    header: string;
    body: string;
}
</script>

<script setup lang="ts">
import { computed } from 'vue';
import type { ComputedRef } from 'vue';
import Logo from '@/components/brand/Logo.vue';

const props = withDefaults(
    defineProps<{
        header: string;
        tagLevel?: 1 | 2 | 3 | 4 | 5 | 6;
        list: ListItem[];
    }>(),
    { tagLevel: 2 },
);

const tagType: ComputedRef<string> = computed(() => `h${props.tagLevel}`);
const itemTagType: ComputedRef<string> = computed(() => `h${Math.min(props.tagLevel + 1, 6)}`);
</script>