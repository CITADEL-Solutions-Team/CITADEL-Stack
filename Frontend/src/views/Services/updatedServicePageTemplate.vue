<template>
    <div class="px-16 py-8">
        <ServiceCategory v-for="category in categories">
            <template v-slot:Name>
                {{ category.Name }}
            </template>
            <template v-slot:Items>
                <ServiceCard v-for="svc in category.Services">
                    <template v-slot:>
                        {{ svc.Name }}
                    </template>
                    <template v-slot:Price>
                        {{ svc.Price }}
                    </template>
                    <template v-slot:List class="grid grid-cols-1 gap-1">
                        <li v-for="item in svc.Details"> {{ item }} </li>
                    </template>
                    <template v-slot:Why>
                        {{ svc.Why }}
                    </template>                                                         
                </ServiceCard>
            </template>
        </ServiceCategory>
    </div>
</template>

<script setup lang="ts">
    import ServiceCard from '@/components/Cards/ServiceCard.vue';
    import ServiceCategory from '@/components/Sections/ServiceCategory.vue';
    import type { Service, Category } from '@/views/Services/Service'

    const categories: Category[] = [
        {
            Name: "",
            Services: [
                {
                    Name: "",
                    Price: "",
                    Details: [

                    ],
                    Why: ""
                },

            ]
        }
    ]
</script>