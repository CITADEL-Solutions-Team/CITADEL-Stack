<template>
  <!-- WebP in two widths, JPG fallback. Width and height are set so the
       layout doesn't jump while the image loads. -->
  <figure>
    <picture>
      <source
        type="image/webp"
        :srcset="`${photo.small.src} ${photo.small.width}w, ${photo.large.src} ${photo.large.width}w`"
        :sizes="sizes"
      />
      <img
        :src="photo.fallback.src"
        :width="photo.fallback.width"
        :height="photo.fallback.height"
        :alt="photo.alt"
        :loading="eager ? 'eager' : 'lazy'"
        decoding="async"
        :class="imgClass"
      />
    </picture>
    <figcaption v-if="photo.caption" class="pt-2 text-sm italic">{{ photo.caption }}</figcaption>
  </figure>
</template>

<script setup lang="ts">
import type { Photo } from './content';

withDefaults(
  defineProps<{
    photo: Photo;
    sizes?: string;
    eager?: boolean;
    imgClass?: string;
  }>(),
  { sizes: '(min-width: 768px) 50vw, 100vw', eager: false, imgClass: 'w-full h-auto rounded-2xl' },
);
</script>
