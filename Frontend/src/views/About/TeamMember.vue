<template>
    <component :is="currentComponent" v-if="currentComponent"/>
    <error404 v-else/>
</template>

<script setup lang="ts">
    import error404 from '@/views/Errors/error404.vue'
    import { computed, defineAsyncComponent } from 'vue'

    import type { Component } from 'vue'
    import { useRoute } from 'vue-router'

    const modules = import.meta.glob<{ default: Component }>('@/views/Team/*.vue')

    function resolveComponent(slug: string) {
        console.log(slug)
        const match = Object.entries(modules).find(([path]) =>
            path.endsWith(`/${slug}.vue`)
        )
        return match?.[1] // the importer function, or undefined if no match
    }

    function convertPath(slug: string) {
        const name: string = slug.split("/")[2]
        return name
    }

    const currentComponent = computed(() => {
        const importer = resolveComponent(convertPath(useRoute().path))
        return importer ? defineAsyncComponent(importer) : null
    })
</script>
