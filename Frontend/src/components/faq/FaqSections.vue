<template>
    <div class="flex flex-col gap-10 pb-12">
        <section v-for="section in faqSections" :key="section.title">
            <h2 class="text-[32px] underline">{{ section.title }}</h2>
            <ul>
                <li v-for="faq in section.faqs" :key="faq.question">
                    <FaqItem :question="faq.question" :answer="faq.answer" />
                </li>
            </ul>
        </section>
    </div>
</template>

<script setup lang="ts">
import FaqItem from './FaqItem.vue';
import { faqSections } from './faqs';
</script>