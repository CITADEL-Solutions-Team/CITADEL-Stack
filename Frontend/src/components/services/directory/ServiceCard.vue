<template>
    <div
        class="grid grid-cols-1 md:grid-cols-5 gap-4 my-4 p-4 rounded-lg border-2 border-(--Accent)
               bg-linear-to-r from-(--MenuCard) to-[#03191C]"
    >
        <ul class="px-4 md:col-span-3">
            <li v-for="feature in features" :key="feature" class="flex gap-2">
                <span aria-hidden="true">&gt;</span>
                <span>{{ feature }}</span>
            </li>
        </ul>

        <div class="md:col-span-2 border-l-4 border-(--Accent) pt-2 pb-4 px-2 bg-(--MenuCard)">
            <p class="font-exo text-xl font-bold text-(--Accent) my-2">Why it matters</p>
            <p>{{ why }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    why: string;
    features: string[];
}>();
</script>