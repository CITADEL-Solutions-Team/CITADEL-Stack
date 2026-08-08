<template>
    <div 
    class="flex flex-col items-center py-20"
    >
        <div id="Text"
        class="px-20 py-4"
        >
            <h1 id="Hook"
            class="text-5xl text-center text-(--Accent) font-bold
            py-2"
            >
                <slot name="Hook">
                    Hook will go here
                </slot>
            </h1>
            <p id="Body"
            class="text-center text-(--SupText) py-8"
            >
                <slot name="Body">
                    Body will go here
                </slot>
            </p>
        </div>
       <div id="Buttons"
        class="grid grid-flow-col gap-4"
        >
            <RouterLink 
            class="text-(--Background) bg-(--Accent) rounded p-1"
            :to="ButtonOne.to"
            > 
                {{ ButtonOne.label }}
            </RouterLink>
            <RouterLink 
            class="text-(--Accent) border-2 border-(--Accent) rounded p-1"
            :to="ButtonTwo.to"> 
                {{ ButtonTwo.label }}
            </RouterLink>
        </div> 
    </div>
</template>

<script setup lang="ts">
    const props = defineProps<{
        ButtonOne: { label: string, to: string }
        ButtonTwo: { label: string, to: string }
    }>()
</script>