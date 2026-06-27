<template>
    <div class="h-13 items-center flex 
    divide-x-2 divide-(--Accent) 
    border-x-2 border-x-(--Accent)
    border-b-2 border-b-(--Accent)
    overflow-hidden">
        <RouterLink 
        :to="Item.to"
        class="flex-1 px-10 py-4 text-center bg-(--MenuCard)"
        v-for="Item in NavItems">
            {{ Item.label }}
        </RouterLink>
    </div>
</template>

<script setup lang="ts">
    const props = defineProps<{
        NavItems: { label: string, to: string }[]
    }>()
</script>