<template>
    <div 
    class="border-2 border-(--Accent) rounded-lg
    bg-linear-to-r from-(--MenuCard) to-(#03191C)
    mx-8 my-4 grid grid-cols-2"
    >
        <div
        class="p-4 grid grid-cols-5 col-span-2"
        >
            <ul id="BulletPoints"
            class="px-4 col-span-3"
            >
                <li v-for="feature in props.features">
                    > {{ feature }}
                </li>    
            </ul>
            <div
            class="col-span-2 border-l-4 border-(--Accent) pt-2 pb-4 pl-2 mr-1 bg-(--MenuCard)"
            >
                <h3 class="text-xl font-bold text-(--Accent) my-2">Why it matters:</h3>
                <div class="pr-2">
                    {{ props.why }}
                </div>
            </div>            
        </div>
    </div>
</template>

<script setup lang="ts">
    interface Props {
        why?: string,
        features?: string[]
    }

    const props = withDefaults(defineProps<Props>(), {
        name: "No Name!",
        why: "Need a Reason!",
        features: () => [
            "No Features!"
        ],
    })
</script>