<template>
    <div id="Card" class="
    m-3
    border-2 rounded-lg border-(--color-brand-subtle)
    ">
        <!-- The Header text will go here -->
        <div class="px-4 bg-(--color-brand-dim) rounded-t-lg text-xl">
            <slot name="Head-Text"></slot>
        </div>
        
        <!-- The Body text will go here -->
        <div class="px-4 pt-2 pb-6 text-sm">
            <slot name="Body-Text"></slot>
        </div>
    </div>
</template>

<script lang="ts">

</script>