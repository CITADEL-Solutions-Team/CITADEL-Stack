<template>
    <section>
        <h1 class="text-center text-5xl font-bold text-(--Accent) py-6">Services</h1>

        <!-- Search and filters -->
        <div class="flex flex-col gap-4 px-6 sm:px-10 py-6 bg-linear-to-b from-[#1062B2] to-[#072A4C] border-y-2 border-(--Accent)">
            <div class="flex flex-col gap-1">
                <label for="service-search" class="font-semibold">Search services</label>
                <input
                    id="service-search"
                    type="search"
                    v-model="searchQuery"
                    placeholder="e.g. hosting, SEO, malware"
                    class="bg-white rounded-lg text-black text-lg py-1 px-2
                           focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                />
            </div>

            <fieldset class="flex flex-col gap-1">
                <legend class="font-semibold">Filter by category</legend>
                <div class="pl-4 flex flex-col">
                    <label v-for="option in categoryOptions" :key="option.value" class="inline-flex items-center gap-2">
                        <input type="checkbox" :value="option.value" v-model="categoryFilters" class="w-4 h-4 accent-(--Accent)" />
                        {{ option.label }}
                    </label>
                </div>
            </fieldset>

            <div class="flex flex-wrap items-center gap-3">
                <span class="font-semibold">Service section:</span>
                <label class="inline-flex items-center gap-3 cursor-pointer">
                    <span aria-hidden="true" :class="isPersonal ? 'text-(--SupText)' : 'font-semibold'">Business</span>
                    <input
                        type="checkbox"
                        role="switch"
                        v-model="isPersonal"
                        aria-label="Show personal services"
                        class="sr-only peer"
                    />
                    <span
                        aria-hidden="true"
                        class="relative w-11 h-6 bg-black rounded-full border border-(--Accent)
                               peer-checked:bg-(--Accent)
                               peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-white
                               after:content-[''] after:absolute after:top-0.5 after:left-0.5
                               after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all
                               peer-checked:after:translate-x-5"
                    ></span>
                    <span aria-hidden="true" :class="isPersonal ? 'font-semibold' : 'text-(--SupText)'">Personal</span>
                </label>
            </div>
        </div>

        <!-- Bundles -->
        <section class="my-8 px-6 text-center">
            <h2 class="font-semibold text-[28px]">Want to look through our service bundles?</h2>
            <p class="text-lg">Choose between our Business or Personal bundles to explore!</p>

            <nav aria-label="Service bundles" class="flex justify-center gap-6 sm:gap-16 pt-4">
                <a v-for="bundle in bundleLinks" :key="bundle.to" :href="bundle.to" :class="bundleLinkClass">
                    {{ bundle.label }}
                </a>
            </nav>
        </section>

        <!-- Results -->
        <p class="sr-only" aria-live="polite">{{ resultCount }} {{ resultCount === 1 ? 'service' : 'services' }} found</p>

        <div class="border-t-2 border-(--Accent) px-6 transition-opacity duration-200" :class="ready ? 'opacity-100' : 'opacity-0'">
            <h2 class="sr-only">Results</h2>

            <p v-if="resultCount === 0" class="py-8 text-center text-(--SupText)">
                No services match your search. Try different keywords or fewer filters.
            </p>

            <section v-for="[group, services] in groupedServices" :key="group" class="pt-6">
                <h3 class="text-2xl underline font-semibold">{{ group }}</h3>
                <ul>
                    <li v-for="svc in services" :key="svc.id" class="mb-2 p-4">
                        <DirServiceCard :info="svc" />
                    </li>
                </ul>
            </section>
        </div>
    </section>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue';
import type { ComputedRef, Ref } from 'vue';
import type { Service } from '@/components/services/data/service';
import { filterServices } from '@/components/services/data/search';
import DirServiceCard from './DirServiceCard.vue';

const categoryOptions: { value: Service['category']; label: string }[] = [
    { value: 'WebDev', label: 'Web Development' },
    { value: 'PCServices', label: 'Computer Services' },
];

const bundleLinks: { label: string; to: string }[] = [
    { label: 'Business', to: '/services/bundles/business' },
    { label: 'Personal', to: '/services/bundles/personal' },
];

const bundleLinkClass: string =
    'text-center bg-(--AltCard) px-6 py-8 text-3xl font-semibold border-2 border-(--Accent) rounded-xl ' +
    'hover:border-white hover:bg-(--MenuCard) focus-visible:border-white focus-visible:bg-(--MenuCard) ' +
    'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white';

const searchQuery: Ref<string> = ref('');
const categoryFilters: Ref<Service['category'][]> = ref([]);
const isPersonal: Ref<boolean> = ref(false);

// Results stay hidden until the URL has been read, so a ?section=personal
// link doesn't flash business results first.
const ready: Ref<boolean> = ref(false);

onMounted(() => {
    const section: string | null = new URLSearchParams(window.location.search).get('section');
    isPersonal.value = section === 'personal';
    ready.value = true;
});

// Keep the URL in sync. replaceState (not pushState) so toggling doesn't
// fill the back button with history entries.
watch(isPersonal, (personal: boolean) => {
    const url: URL = new URL(window.location.href);
    url.searchParams.set('section', personal ? 'personal' : 'business');
    window.history.replaceState(null, '', url);
});

const audience: ComputedRef<Service['audience']> = computed(() => (isPersonal.value ? 'Personal' : 'Business'));

const filteredServices: ComputedRef<Service[]> = computed(() =>
    filterServices(searchQuery.value, categoryFilters.value, [audience.value]),
);

const resultCount: ComputedRef<number> = computed(() => filteredServices.value.length);

const groupedServices: ComputedRef<Map<string, Service[]>> = computed(() => {
    const map: Map<string, Service[]> = new Map();
    for (const service of filteredServices.value) {
        if (!map.has(service.group)) map.set(service.group, []);
        map.get(service.group)!.push(service);
    }
    return map;
});
</script>