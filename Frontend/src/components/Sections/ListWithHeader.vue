<template>
    <div id="Section"
    class=" px-16 py-30 gap-12
    flex"
    >
        <div id="Header"
        class="flex-2 text-5xl font-bold text-(--Accent)"
        >
            <slot name="Header">
                Header go here
            </slot>
        </div>

        <div id="List"
        class="flex-5 flex flex-col gap-4"
        >
            <slot name="List">
                list go here
            </slot>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>