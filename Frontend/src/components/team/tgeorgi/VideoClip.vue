<template>
  <!-- Native player: controls on, no autoplay, nothing downloads until play.
       The clips have no audio, so the visible description is their full
       text alternative. -->
  <figure>
    <video
      controls
      playsinline
      preload="none"
      :poster="video.poster.src"
      :width="video.width"
      :height="video.height"
      :aria-describedby="describedbyId"
      class="w-full h-auto rounded-2xl"
    >
      <source :src="video.src" type="video/mp4" />
    </video>
    <figcaption :id="describedbyId" class="pt-2 text-sm italic">{{ video.description }}</figcaption>
  </figure>
</template>

<script setup lang="ts">
import type { Video } from './content';

defineProps<{
  video: Video;
  describedbyId: string;
}>();
</script>
