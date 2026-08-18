<template>
    <div class="py-4">
        <button class="bg-(--MenuCard) border border-(--Accent) rounded-2xl p-5 mb-8"
        @click="open = !open"
        >
            <component :is="tagType" class="text-xl lg:text-2xl">
                {{ props.question }}
            </component>
        </button>
        <p v-if="open" v-html="parsedAnswer" @click="handleLinkClick"></p>
    </div>
</template>

<script setup lang="ts">
import { computed, ref, type ComputedRef, type Ref } from 'vue';
import { useRouter } from 'vue-router';

    interface Props {
        tagLevel?: 1|2|3|4|5|6,
        question?: string,
        answer?: string,
    }

    const props = withDefaults(defineProps<Props>(), {
        tagLevel: 2,
        question: "Needs Question!",
        answer: "Needs Answer!"
    })

    const tagType: ComputedRef<string> = computed(() => "h" + props.tagLevel)

    const open: Ref<boolean> = ref(false)

    const router = useRouter()

    // Two link forms inside answer text:
    //  - [label](RouteName)      -> internal, goes through router.push
    //  - [label](https://...)    -> external, renders as a normal <a> with target="_blank"
    const parsedAnswer: ComputedRef<string> = computed(() => {
        return props.answer.replace(
            /\[([^\]]+)\]\(([^)]+)\)/g,
            (_, label, target) => {
                const isExternal = target.startsWith('http')
                if (isExternal) {
                    return `<a href="${target}" target="_blank" rel="noopener noreferrer" class="text-blue-400 underline">${label}</a>`
                }
                return `<a href="#" data-route="${target}" class="text-blue-400 underline">${label}</a>`
            }
        )
    })

    function handleLinkClick(e: MouseEvent) {
        const target = e.target as HTMLElement
        const routeName = target.dataset.route
        if (routeName) {
            e.preventDefault()
            router.push({ name: routeName })
        }
    }
</script>