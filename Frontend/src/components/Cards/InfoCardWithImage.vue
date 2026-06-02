<template>
    <div id="Card" class="
    m-3
    border-2 rounded-lg border-(--color-brand-subtle)
    grid grid-cols-4
    ">
        <div class="px-4 bg-(--color-brand-dim) rounded-t-lg text-xl col-span-4">
            <slot name="Head-Text"></slot>
        </div>    
        <div id="Info" class="col-span-2">
            <!-- The Header text will go here -->
            
            
            <!-- The Body text will go here -->
            <div class="px-4 pt-2 pb-6 text-sm">
                <slot name="Body-Text"></slot>
            </div>
        </div>
        <div id="Image" class="col-span-2">
            <slot name="Image"></slot>
        </div>
    </div>
</template>

<script lang="ts">

</script>