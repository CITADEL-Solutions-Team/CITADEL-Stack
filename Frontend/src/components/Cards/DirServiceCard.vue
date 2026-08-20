<template>
  <div class="flex gap-4 items-start">
    <div class="flex-1 flex flex-col">
        <button 
            class="bg-linear-to-b from-[#1062B2] to-[#072A4C] border border-(--Accent)
            text-start px-2 py-2 rounded-lg flex"
            @click="open = !open"
        >
            <h3 class="flex-1">{{ svc?.name }}</h3>
            <h3>{{ svc?.price }}</h3>
        </button>

        <div v-if="open" class="mx-2 p-2">
            <ServiceCard
            :features="svc?.features"
            :why="svc?.description"
            >

            </ServiceCard>
        </div>      
    </div>

    <div class="self-start bg-(--MenuCard) p-2 aspect-square flex content-center 
    rounded bg-linear-to-b from-[#1062B2] to-[#072A4C] border border-(--Accent)">
      <p v-if="open" class="self-center text-center min-w-3.75 min-h-3.75">⮟</p>
      <p v-else class="self-center text-center min-w-3.75 min-h-3.75">⮞</p>
    </div>
  </div>
</template>

<script setup lang="ts">
    import { computed, ref, type Ref } from 'vue';
    import type { Service } from '@/views/Services/Service';
    import ServiceCard from '@/components/Cards/ServiceCard.vue';
    
    const open: Ref<boolean> = ref(false)

    interface Props {
        info?: Service | null
    }

    const props = withDefaults(defineProps<Props>(), {
        info: null
    })

    const svc = computed(() => props.info)
</script>