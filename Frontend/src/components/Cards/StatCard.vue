<template>
    <div id="Card"
    class="flex flex-col
    bg-(--MenuCard) border border-(--Accent) rounded-2xl
    w-fit p-8 gap-4
    text-center"
    >
        <div id="Stat"
            class="text-4xl font-bold text-(--Accent)
            pb-4"
        >
            <slot name="Stat">000</slot>
        </div>
        
        <p id="Blurb"
        class="text-xl"
        >
            <slot name="Blurb">of X, do Y and Z</slot>
        </p>

        <p id="Source"
        class="text-(--SupText)"
        >
            <slot name="Source">Trustworthy Source</slot>
        </p>
    </div>
</template>

<script setup lang="ts">

</script>