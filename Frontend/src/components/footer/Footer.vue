<template>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 border-t-4 border-(--Accent) px-6 lg:px-16 py-8">
        <!-- Contact info and socials -->
        <div class="flex flex-col gap-12">
            <div>
                <p class="font-exo text-4xl text-(--Accent) pb-2 font-semibold">{{ Company.Name }}</p>
                <p>
                    <a :href="`mailto:${Company.Email}`" class="hover:underline focus-visible:underline">
                        {{ Company.Email }}
                    </a>
                </p>
                <p>
                    <a :href="`tel:${Company.PhoneHref}`" class="hover:underline focus-visible:underline">
                        {{ Company.Phone }}
                    </a>
                </p>
            </div>

            <div>
                <p class="text-2xl mb-2">{{ Company.TagLine }}</p>
                <ul class="flex gap-4">
                    <li v-for="social in Socials" :key="social.Label">
                        <a
                            :href="social.To"
                            class="block rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                        >
                            <img :src="social.Icon.src" :alt="social.Label" width="24" height="24" class="w-6 h-6" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>

        <!-- Page links -->
        <nav aria-label="Footer" class="flex gap-18 lg:justify-self-end lg:pt-8">
            <div v-for="section in Sections" :key="section.Name">
                <h2 class="font-bold text-lg pb-4">{{ section.Name }}</h2>
                <ul class="flex flex-col gap-2 text-pretty">
                    <li v-for="link in section.Links" :key="link.To">
                        <a :href="link.To" class="hover:underline focus-visible:underline">{{ link.Label }}</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script setup lang="ts">
import type { Company, SocialLink, FooterSection } from './items';

const props = defineProps<{
    Company: Company;
    Socials: SocialLink[];
    Sections: FooterSection[];
}>();
</script>