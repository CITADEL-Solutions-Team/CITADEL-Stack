<template>
    <section class="text-center py-4">
        <h1 class="text-4xl font-bold pb-4">{{ title }}</h1>
        <div class="bg-(--AltCard) rounded-2xl p-6">
            <h2 class="text-3xl font-bold">{{ subtitle }}</h2>
            <p class="text-lg font-semibold">{{ lead }}</p>
            <p class="text-(--SupText)">
                Bundles shown are starting points, not limits. All bundles include a free onboarding call and monthly check-in.
            </p>
        </div>
    </section>
</template>

<script setup lang="ts">
defineProps<{
    title: string;
    subtitle: string;
    lead: string;
}>();
</script>