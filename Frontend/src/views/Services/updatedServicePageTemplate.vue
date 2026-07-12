<template>
    <div class="px-16 py-8">

    </div>
</template>

<script setup lang="ts">
    import ServiceCard from '@/components/Cards/ServiceCard.vue';
    import ServiceCategory from '@/components/Sections/ServiceCategory.vue';
    import type { Service, Category } from '@/views/Services/Service'

    const categories: Category[] = [
        {
            Name: "",
            Services: []
        }
    ]
</script>