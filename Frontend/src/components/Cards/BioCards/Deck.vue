<template>
  <div
    class="deck-container relative w-full h-full flex items-center justify-center overflow-x-hidden"
    role="region"
    aria-roledescription="carousel"
    aria-label="Team members"
    @touchstart.passive="handleTouchStart"
    @touchend="handleTouchEnd"
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

const viewportWidth = ref(window.innerWidth);

function updateWidth() {
  viewportWidth.value = window.innerWidth;
}

const touchStartX = ref<number | null>(null);
const touchStartY = ref<number | null>(null);

function handleTouchStart(e: TouchEvent) {
  touchStartX.value = e.touches[0].clientX;
  touchStartY.value = e.touches[0].clientY;
}

function handleTouchEnd(e: TouchEvent) {
  if (touchStartX.value === null) return;
  const deltaX = e.changedTouches[0].clientX - touchStartX.value;
  const deltaY = e.changedTouches[0].clientY - (touchStartY.value ?? 0);
  touchStartX.value = null;
  touchStartY.value = null;

  // ignore short or mostly-vertical swipes so page-scroll gestures pass through
  if (Math.abs(deltaX) < 40 || Math.abs(deltaX) < Math.abs(deltaY)) return;

  if (deltaX < 0) {
    moveTo(Math.min(currentIndex.value + 1, props.members.length - 1));
  } else {
    moveTo(Math.max(currentIndex.value - 1, 0));
  }
}

function moveTo(index: number) {
  currentIndex.value = index;
  focusCurrent();
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
  selectCard(0);
});
onUnmounted(() => {
  window.removeEventListener('resize', updateWidth);
  window.removeEventListener('keydown', handleKeydown);
});

const angleStep = computed(() => (viewportWidth.value < 640 ? 10 : 8));

const radius = computed(() => {
  const isMobile = viewportWidth.value < 640;
  const min = isMobile ? 140 : 200;
  const max = isMobile ? 260 : 600;
  const factor = isMobile ? 0.5 : 0.4;
  const preferred = viewportWidth.value * factor;
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
  const angleDeg = offset * angleStep.value; // .value added
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