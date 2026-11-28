<template>
  <!-- One project, in plain language. Text spans the card; photos and video
       sit in a row underneath, so tall media never leaves empty space.
       Extra detail is a native <details> element (no JavaScript). -->
  <article
    :aria-labelledby="`${project.id}-title`"
    class="rounded-2xl bg-(--WarmCard) border-l-4 border-(--Warm) px-6 py-6 md:px-8"
  >
    <h3 :id="`${project.id}-title`">{{ project.title }}</h3>
    <p class="pt-1 font-semibold text-(--Warm)">{{ project.when }}</p>
    <div class="max-w-3xl">
      <p v-for="(paragraph, index) in project.summary" :key="index" class="pt-3">{{ paragraph }}</p>
    </div>

    <details v-if="project.details?.length" class="pt-4 max-w-3xl">
      <summary
        class="w-fit cursor-pointer font-semibold underline underline-offset-4 py-1
               focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        {{ project.detailsLabel ?? 'A little more detail' }}<span class="sr-only">: {{ project.title }}</span>
      </summary>
      <ul class="list-disc pl-6 pt-3 space-y-2">
        <li v-for="(detail, index) in project.details" :key="index">{{ detail }}</li>
      </ul>
    </details>

    <div v-if="project.photos?.length || project.video" class="grid sm:grid-cols-2 gap-6 pt-6">
      <ResponsivePhoto
        v-for="(photo, index) in project.photos"
        :key="index"
        :photo="photo"
        sizes="(min-width: 640px) 50vw, 100vw"
      />
      <VideoClip v-if="project.video" :video="project.video" :describedby-id="`${project.id}-video-desc`" />
    </div>
  </article>
</template>

<script setup lang="ts">
import type { Project } from './content';
import ResponsivePhoto from './ResponsivePhoto.vue';
import VideoClip from './VideoClip.vue';

defineProps<{
  project: Project;
}>();
</script>
