<template>
    <section class="flex flex-col items-center py-20">
        <component :is="tagType"
        class="text-5xl text-center text-(--Accent) font-bold py-2"
        >
            <slot name="Hook">
                Hook will go here
            </slot>
        </component>
        <p class="text-center text-(--SupText) py-8">
            <slot name="Body">
                Body will go here
            </slot>
        </p>

        <div class="grid grid-flow-col gap-4">
            <RouterLink 
            class="text-(--Background) bg-(--Accent) rounded p-1"
            :to="props.buttonOne.to"
            > 
                {{ props.buttonOne.label }}
            </RouterLink>
            
            <RouterLink 
            class="text-(--Accent) border-2 border-(--Accent) rounded p-1"
            :to="props.buttonTwo.to"
            > 
                {{ props.buttonTwo.label }}
            </RouterLink>
        </div> 
    </section>
</template>

<script setup lang="ts">
import { computed, type ComputedRef } from 'vue';

    interface HeroButton {
        label: string,
        to: string
    }

    interface Props {
        tagLevel?: 1|2|3|4|5|6,
        buttonOne?: HeroButton
        buttonTwo?: HeroButton
    }

    const props = withDefaults(defineProps<Props>(), {
        tagLevel: 2,
        buttonOne: () => ({
            label: "Button 1: Needs Label!",
            to: "/404",
        }),
        buttonTwo: () => ({
            label: "Button 2: Needs Label!",
            to: "/404",
        }),
    })

    const tagType: ComputedRef<string> = computed(() => "h" + props.tagLevel)
</script>