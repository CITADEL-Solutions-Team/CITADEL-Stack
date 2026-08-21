<template>
  <div
    class="deck-container relative w-full h-260 flex items-center justify-center"
    role="region"
    aria-roledescription="carousel"
    aria-label="Team members"
  >
    <TeamCard
      v-for="(member, index) in members"
      :key="member.Name"
      :ref="el => cardRefs[index] = el"
      :Info="member"
      :IsFlipped="flippedIndex === index"
      :Active="currentIndex === index"
      :style="getCardStyle(index)"
      class="absolute origin-bottom transition-transform duration-300 ease-out cursor-pointer"
      @click="selectCard(index)"
      @mouseenter="hoveredIndex = index"
      @mouseleave="hoveredIndex = null"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue';
import TeamCard from './BioCard.vue';
import type { Bio } from './BioInfo';

const props = defineProps<{ members: Bio[] }>();

const currentIndex = ref(0);
const flippedIndex = ref<number | null>(null);
const hoveredIndex = ref<number | null>(null);
const cardRefs = ref<any[]>([]);

const angleStep = 8;

const viewportWidth = ref(window.innerWidth);

function updateWidth() {
  viewportWidth.value = window.innerWidth;
}

function focusCurrent() {
  nextTick(() => cardRefs.value[currentIndex.value]?.focus());
}

function handleKeydown(e: KeyboardEvent) {
  if (e.key === 'ArrowRight') {
    selectCard(Math.min(currentIndex.value + 1, props.members.length - 1));
    focusCurrent();
  } else if (e.key === 'ArrowLeft') {
    selectCard(Math.max(currentIndex.value - 1, 0));
    focusCurrent();
  }
}

onMounted(() => {
  window.addEventListener('resize', updateWidth);
  window.addEventListener('keydown', handleKeydown);
});
onUnmounted(() => {
  window.removeEventListener('resize', updateWidth);
  window.removeEventListener('keydown', handleKeydown);
});

const radius = computed(() => {
  const min = 200;
  const max = 600;
  const preferred = viewportWidth.value * 0.4;
  return Math.min(Math.max(preferred, min), max);
});

function selectCard(index: number) {
  currentIndex.value = index;
  focusCurrent();
  toggleFlip(index)
}

function toggleFlip(index: number) {
  flippedIndex.value = flippedIndex.value === index ? null : index;
}

function getCardStyle(index: number) {
  const offset = index - currentIndex.value;
  const angleDeg = offset * angleStep;
  const angleRad = (angleDeg * Math.PI) / 180;

  const translateX = radius.value * Math.sin(angleRad);
  const translateY = radius.value * (1 - Math.cos(angleRad));

  const isSelected = offset === 0;
  const scale = isSelected ? 1.1 : Math.max(1 - Math.abs(offset) * 0.04, 0.8);
  const lift = isSelected ? -40 : 0;

  const isHovered = hoveredIndex.value === index;
  const hoverLift = isHovered ? -20 : 0;
  const hoverScale = isHovered ? 1.05 : 1;

  return {
    transform: `translateX(${translateX}px) translateY(${translateY + lift + hoverLift}px) rotate(${angleDeg}deg) scale(${scale * hoverScale})`,
    zIndex: isSelected ? (isHovered ? 150 : 100) : 100 - Math.abs(offset),
    filter: isHovered ? 'drop-shadow(0 20px 15px rgb(0 0 0 / 0.3))' : 'none',
  };
}
</script>

<style>
  .deck-container {
    overflow: hidden;
  }
</style>