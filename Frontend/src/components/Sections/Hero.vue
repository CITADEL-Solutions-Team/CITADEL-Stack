<template>
    <div>
        <div id="Text"
        class=""
        >
            <h1 id="Hook"
            class=""
            >
                <slot name="Hook">
                    Hook will go here
                </slot>
            </h1>
            <p id="Body"
            class=""
            >
                <slot name="Body">
                    Body will go here
                </slot>
            </p>
        </div>
       <div id="Buttons"
        class=""
        >
            <RouterLink :to="ButtonOne.to"/> {{ ButtonOne.label }}
            <RouterLink :to="ButtonTwo.to"/> {{ ButtonTwo.label }}
        </div> 
    </div>
</template>

<script setup lang="ts">
    const props = defineProps<{
        ButtonOne: { label: string, to: string }
        ButtonTwo: { label: string, to: string }
    }>()
</script>