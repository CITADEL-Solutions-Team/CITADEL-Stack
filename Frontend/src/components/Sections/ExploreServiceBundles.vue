<template>
    <section class="bg-(--MenuCard) my-8 py-8 px-8 rounded-[25px]">
        <component :is="tagType"
        class="text-2xl font-exo"
        >
            Explore Our Service Bundles:
        </component>
        <div class="lg:px-15 pt-6">
            <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <li v-for="card in props.cards"
                class="h-60 flex flex-col bg-(--AltCard) border border-(--Accent) rounded-2xl pt-8 pb-6 px-6"
                >
                    <div class="flex-1 content-center">
                        <component :is="listTagType" class="text-center text-lg md:text-2xl self-center"> {{ card.service }} </component>
                    </div>
                    <RouterLink :to="card.business" class="flex w-full justify-center self-end pt-8">
                        <button class="border-2 border-(--Accent) rounded-lg w-full p-2 hover:bg-(--MenuCard) hover:font-bold hover:border-white">
                            Business
                        </button>
                    </RouterLink>
                    <RouterLink :to="card.personal" class="flex w-full justify-center self-end pt-2">
                        <button class="border-2 border-(--Accent) rounded-lg w-full p-2 hover:bg-(--MenuCard) hover:font-bold hover:border-white">
                            Personal
                        </button>
                    </RouterLink>
                </li>
            </ul>
        </div>
    </section>
</template>

<script setup lang="ts">
    import { computed, type ComputedRef } from 'vue';

    interface ServiceCards {
        service: string,
        business: string,
        personal: string,
    }

    interface Props {
        tagLevel?: 1|2|3|4|5|6,
        cards?: ServiceCards[],
    }

    const props = withDefaults(defineProps<Props>(), {
        tagLevel: 2,
        cards: () => ([
            {
                service: "Service Name Here",
                to: "/error/404",
                business: "/error/404",
                personal: "/error/404",
            }
        ])
    })

    const tagType: ComputedRef<string> = computed(() => "h" + props.tagLevel)
    const listTagType: ComputedRef<string> = computed(() => "h" + (props.tagLevel + 1))
</script>