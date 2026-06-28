<template>
    <div id="Section"
    class="flex"
    >
        <div id="Header"
        class="flex-1"
        >
            <slot name="Header">Header go here</slot>
        </div>

        <div id="List"
        class="flex-1 flex flex-row"
        >
            <slot name="List">
                list go here
            </slot>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>