<template>
    <div class="h-13 items-center flex 
    divide-x-2 divide-(--Accent) 
    border-x-2 border-x-(--Accent)
    border-b-2 border-b-(--Accent)
    overflow-hidden"
    >
        <RouterLink 
            :to="Item.to"
            class="flex-1 px-4 py-4 text-center bg-(--MenuCard) [&.router-link-active]:outline-(--Accent) [&.router-link-active]:outline-2 outline-offset-[-.5rem]"
            v-for="Item in NavItems"
            :key="Item.to"
            >
            {{ Item.label }}
        </RouterLink>
    </div>
</template>

<script setup lang="ts">
    import { ref, type Ref } from 'vue';

    // Keep track of which section is selected
    const selected: Ref<number,number> = ref(0)


    const props = defineProps<{
        NavItems: { label: string, to: string }[]
    }>()
</script>