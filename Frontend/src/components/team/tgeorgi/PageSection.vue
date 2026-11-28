<template>
  <!-- One labeled page section. The id doubles as the "On this page" anchor;
       scroll-mt keeps the heading clear of the top edge after a jump. -->
  <section :id="id" :aria-labelledby="`${id}-heading`" class="py-10 scroll-mt-8">
    <h2 :id="`${id}-heading`" class="flex items-center gap-3 pb-6">
      <span class="block w-2 h-8 rounded-full shrink-0" :style="{ backgroundColor: color }" aria-hidden="true"></span>
      {{ heading }}
    </h2>
    <slot />
  </section>
</template>

<script setup lang="ts">
defineProps<{
  id: string;
  heading: string;
  color: string;
}>();
</script>
