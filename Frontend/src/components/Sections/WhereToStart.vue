<template>
    <div id="Section"
    class="
    px-8 md:px-16 
    py-20 md:py-30
    flex flex-col gap-12"
    >
        <div id="Text" class="flex flex-col gap-4">
            <h4 id="Header"
            class="text-xl md:text-2xl font-bold text-(--Accent)"
            >
                <slot name="Header">
                    Where to start
                </slot>
            </h4>
            
            <p id="Body">
                <slot name="Body">
                    Call out something here
                </slot>
            </p>
        </div>
        <RouterLink
        :to="Button.to"
        id="Button"
        class="px-4 py-3 
        text-center md:text-left 
        md:w-fit
        bg-(--Accent) rounded-lg"
        >
            {{ Button.label }}
        </RouterLink>
    </div>
</template>

<script setup lang="ts">
    const props = defineProps<{
        Button: { label: string, to: string }
    }>()
</script>