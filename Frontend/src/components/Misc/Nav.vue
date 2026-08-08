<template>
    <nav class="border-y border-(--Accent) w-screen" aria-label="Main Nav Bar">
        <ul class="grid grid-cols-4 gap-2 justify-center text-center px-6.5 py-2">
            <li 
            class="py-1 my-2 bg-(--MenuCard) border border-(--Accent) rounded-xl"
            v-for="nav in NavItems"
            >
                <RouterLink :to="nav.to">
                    <button>
                        {{ nav.label }}
                    </button>
                </RouterLink>
            </li>
        </ul>
    </nav>
</template>

<script setup lang="ts">
    const props = defineProps <{
        NavItems: { label: string, to: string }[]
    }>()
</script>