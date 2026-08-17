<template>
    <div class="py-20 md:py-30 flex flex-col gap-12">
        <div class="flex flex-col gap-4 text-center">
            <component :is="tagType"
            class="font-bold text-2xl lg:text-4xl text-(--Accent)"
            >
                <slot name="Header">
                    Where to start
                </slot>
            </component>
            
            <p>
                <slot name="Body">
                    Call out something here
                </slot>
            </p>

            <component :is="listTagType" class="font-bold text-2xl lg:text-5xl"> 
                <slot name="SupTxt">
                    Call to Action!
                </slot>
            </component>
        </div>
        <div class="flex justify-center-safe">
            <RouterLink class="px-4 py-3 bg-(--Accent) rounded-lg w-full md:w-auto text-center"
            :to="props.button.to">
                <button>{{ props.button.label }}</button>
            </RouterLink>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, type ComputedRef } from 'vue';

    interface Bttn {
        label: string,
        to: string,
    }
    
    interface Props {
        tagLevel?: 1|2|3|4|5|6,
        button?: Bttn,
    }

    const props = withDefaults(defineProps<Props>(), {
        tagLevel: 2,
        button: () => ({
            label: "Needs Label",
            to: "/error/404"
        })
    })

    const tagType: ComputedRef<string> = computed(() => "h" + props.tagLevel)   
    const listTagType: ComputedRef<string> = computed(() => "h" + (props.tagLevel + 1))
</script>