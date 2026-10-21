<template>404 Error! <br/> Unable to find this page!</template>

<script setup lang="ts">
    import { onMounted, onUnmounted } from 'vue'

    let robotsMeta: HTMLMetaElement | null = null

    onMounted((): void => {
        const meta: HTMLMetaElement = document.createElement('meta')
        meta.name = 'robots'
        meta.content = 'noindex'
        document.head.appendChild(meta)
        robotsMeta = meta
    })

    onUnmounted((): void => {
        robotsMeta?.remove()
        robotsMeta = null
    })
</script>
