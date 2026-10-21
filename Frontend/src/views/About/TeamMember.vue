<template>
    <component :is="currentComponent" v-if="currentComponent"/>
    <error404 v-else/>
</template>

<script setup lang="ts">
    import error404 from '@/views/Errors/error404.vue'
    import { computed, defineAsyncComponent, watch } from 'vue'

    import type { Component } from 'vue'
    import { useRoute, useRouter } from 'vue-router'
    import type { RouteLocationNormalizedLoaded, Router } from 'vue-router'

    const route: RouteLocationNormalizedLoaded = useRoute()
    const router: Router = useRouter()

    const modules = import.meta.glob<{ default: Component }>('@/views/Team/*.vue')

    function resolveComponent(slug: string): (() => Promise<{ default: Component }>) | undefined {
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
        const importer = resolveComponent(convertPath(route.path))
        return importer ? defineAsyncComponent(importer) : null
    })

    // Unknown slug: show the 404 view but keep the URL the visitor typed.
    // The name check stops this firing on the way out to another page.
    watch(() => route.path, (path: string): void => {
        if (route.name !== 'AboutTeamMember') return
        const isKnownMember: boolean = resolveComponent(convertPath(path)) !== undefined
        if (!isKnownMember) {
            router.replace({
                name: 'NotFound',
                params: { pathMatch: route.path.substring(1).split('/') },
                query: route.query,
                hash: route.hash,
            })
        }
    }, { immediate: true })
</script>
