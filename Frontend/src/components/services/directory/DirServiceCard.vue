<template>
    <div>
        <h4>
            <button
                type="button"
                class="flex gap-4 items-stretch w-full text-start group rounded-lg
                       focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                :aria-expanded="open"
                :aria-controls="panelId"
                @click="open = !open"
            >
                <span
                    class="flex-1 flex gap-4 px-2 py-2 rounded-lg border border-(--Accent)
                           bg-linear-to-b from-[#1062B2] to-[#072A4C]
                           group-hover:from-(--Accent) group-focus-visible:from-(--Accent)"
                >
                    <span class="flex-1">{{ info.name }}</span>
                    <span v-if="info.price">{{ info.price }}</span>
                </span>
                <span
                    aria-hidden="true"
                    class="aspect-square flex items-center justify-center px-2 rounded border border-(--Accent)
                           bg-linear-to-b from-[#1062B2] to-[#072A4C]
                           group-hover:from-(--Accent) group-focus-visible:from-(--Accent)"
                >
                    {{ open ? '▾' : '▸' }}
                </span>
            </button>
        </h4>

        <div v-show="open" :id="panelId" class="mx-2 p-2">
            <ServiceCard :features="info.features" :why="info.description" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { Ref } from 'vue';
import type { Service } from '@/components/services/data/service';
import ServiceCard from './ServiceCard.vue';

const props = defineProps<{ info: Service }>();

const open: Ref<boolean> = ref(false);
const panelId: string = `service-${props.info.id}`;
</script>