<template>
    <section>
        <h1 class="text-center text-5xl font-bold text-(--Accent) py-6"
        >Services</h1>
        <!-- Search and filter -->
        <div class="flex flex-col gap-4 px-10 py-6 bg-linear-to-b from-[#1062B2] to-[#072A4C] w-full border-y-2 border-(--Accent)">
            <!-- The search bard -->
            <div class="flex gap-4">
                <input 
                type="search" 
                name="searchServices"
                id="Search all services"
                v-model="searchQuery"
                placeholder="Search all services"
                class="bg-white rounded-lg border-(--Accent) text-black text-lg py-1 px-2 flex-1"
                >
                    <button 
                    class="px-4 py-2 bg-linear-to-b from-[#2D5B89] to-black border-2 border-(--Accent) rounded-lg font-bold text-xl md:text-2xl hover:border-white hover:from-(--Accent)"
                    >Search</button>
            </div>

            <!-- The filters -->
            <div class="flex flex-col">
                <p>Filter by:</p>
                <div class="pl-4">
                    <div class="flex flex-col">
                        <label>
                            <input type="checkbox" value="WebDev" v-model="categoryFilters">
                            Web Dev
                        </label>
                        <label>
                            <input type="checkbox" value="CyberSec" v-model="categoryFilters">
                            Cybersecurity
                        </label>
                        <label>
                            <input type="checkbox" value="PCServices" v-model="categoryFilters">
                            Computer Services
                        </label>
                    </div>
                    <div class="pt-4">
                        <div class="flex gap-2">
                            <p class="text-lg underline font-semibold">{{'Service Section:'}}</p>
                            <p class="text-lg">{{ label }} </p>
                        </div>
                        <div class="">
                            <label class="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" v-model="audienceToggle" class="sr-only peer">
                            <div class="w-11 h-6 bg-black rounded-full peer 
                                        peer-checked:bg-(--Accent)
                                        after:content-[''] after:absolute after:top-0.5 after:left-0.5
                                        after:bg-white after:rounded-full after:h-5 after:w-5
                                        after:transition-all
                                        peer-checked:after:translate-x-5">
                            </div> 
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Short little section on the bundles -->
        <section class="my-8">
            <h2 class="text-center font-semibold text-[28px]">
                Want to look through our service bundles? <br/>
                Choose between our Business or Personal Bundles to explore!
            </h2>

            <nav class="flex justify-center gap-16">
                <RouterLink :to="'/services/bundles/business'" 
                class="text-center bg-(--AltCard) px-4 py-8 text-3xl font-semibold border-2 border-(--Accent) rounded-xl hover:border-white hover:bg-(--MenuCard)"
                >
                    <button> Business </button>
                </RouterLink>
                <RouterLink :to="'/services/bundles/personal'"
                class="text-center bg-(--AltCard) px-4 py-8 text-3xl font-semibold border-2 border-(--Accent) rounded-xl hover:border-white hover:bg-(--MenuCard)"
                >
                    <button> Personal </button>
                </RouterLink>
            </nav>
        </section>

        <!-- The results -->
        <div class="border-t-2 border-(--Accent)">
            <section v-for="category in groupedServices">
                <h3 class="text-2xl underline font-semibold">{{ category[0] }}</h3>
                <ul>
                    <li v-for="svc in category[1]"
                    class="mb-2 p-4"
                    >
                        <DirServiceCard :info="svc"/>
                    </li>
                </ul>
            </section>
        </div>
    </section>
</template>

<script setup lang="ts">
    import type { Service } from '@/views/Services/Service';
    import { computed, ref, type ComputedRef, type Ref } from 'vue';
    import { filterServices } from '@/views/Services/SearchServices';
    import DirServiceCard from '@/components/Cards/DirServiceCard.vue';

    const searchQuery: Ref<string> = ref("");
    const categoryFilters: Ref<Service["category"][]> = ref([]);

    const audienceToggle: Ref<boolean> = ref(false)

    const label: Ref<"Business"|"Personal"> = computed(() => audienceToggle.value ? "Business" : "Personal");

    const audienceFilters: ComputedRef<Service["audience"][]> = computed(() => [label.value]);

    const filteredServices: ComputedRef<Service[]> = computed(() =>
    filterServices(searchQuery.value, categoryFilters.value, audienceFilters.value)
    );

    const groupedServices: ComputedRef<Map<string, Service[]>> = computed(() => {
    const map = new Map<string, Service[]>();

    for (const service of filteredServices.value) {
        if (!map.has(service.group)) {
        map.set(service.group, []);
        }
        map.get(service.group)!.push(service);
    }

    return map;
    });
</script>