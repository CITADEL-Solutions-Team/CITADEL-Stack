<template>
    <section class="grid grid-cols-5">
        <!-- Two distinct sub-sections. Left will be the header and logo, right will be the list -->
        <div class="col-span-5 lg:col-span-2 grid place-content-center-safe">
            <component :is="tagType" class="font-bold text-[40px] text-center text-(--Accent)">
                {{ props.header }}
            </component>
            
            <div class="w-full flex aspect-square justify-center-safe" v-if="isWide">
                <Logo class="w-full h-full max-w-42 max-h-42" :style="{ color: '#1E90FF'}"/>
            </div>
        </div>
        
        <!-- The Actual list. We'll render this from a prop -->
        <div class="col-span-5 lg:col-span-3 lg:border lg:border-(--Accent) rounded-[20px] px-11 py-9 lg:bg-(--AltCard)">
            <ul>
                <li v-for="(i, index) in props.list" :key="index" class="mb-4 bg-(--AltCard) rounded-[20px] lg:bg-none border-(--Accent) border lg:border-0 px-11 lg:px-0 py-9 lg:py-0">
                    <div class="flex items-center gap-2">
                        <span class="w-2.5 h-2.5 rounded-full shrink-0" :style="{ backgroundColor: 'var(--Accent)' }"></span>
                        <component :is="listTagType" class="underline text-2xl">{{ i.header }}</component>
                    </div>
                    <p>{{ i.body }}</p>
                </li>
            </ul>
        </div>
    </section>
</template>

<script setup lang="ts">
    import { computed, type ComputedRef } from 'vue';
    import Logo from '@/assets/Tailwind CITADEL Logo.svg'

    interface ListItem {
        header: string,
        body: string,
    }

    interface Props {
        header?: string,
        tagLevel?: 1|2|3|4|5|6,
        list?: ListItem[]
    }

    const props = withDefaults(defineProps<Props>(), {
        header: "Section is missing header!",
        tagLevel: 2,
        list: () => ([
            {
                header: "Needs Header!",
                body: "Needs Body!",
            },
            {
                header: "Needs Header!",
                body: "Needs Body!",
            },
        ])
    })

    const isWide: ComputedRef<boolean> = computed(() => window.matchMedia('(min-width: 1024px)').matches)

    const tagType: ComputedRef<string> = computed(() => "h" + props.tagLevel)
    const listTagType: ComputedRef<string> = computed(() => "h" + (props.tagLevel + 1))
</script>