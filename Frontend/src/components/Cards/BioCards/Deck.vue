<!-- TeamDeck.vue -->
<template>
  <div class="deck-container relative w-full h-112 flex items-center justify-center">
    <TeamCard
      v-for="(member, index) in members"
      :key="member.Name"
      :Info="member"
      :IsFlipped="flippedIndex === index"
      :style="getCardStyle(index)"
      class="absolute origin-bottom transition-transform duration-300 ease-out cursor-pointer"
      @click="selectCard(index)"
      @flip="toggleFlip(index)"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import TeamCard from './BioCard.vue';
import type { Bio } from './BioInfo';

const props = defineProps<{ members: Bio[] }>();

const currentIndex = ref(Math.floor(props.members.length / 2));
const flippedIndex = ref<number | null>(null);

const angleStep = 8;   // degrees between each card
const radius = 600;    // pivot radius — controls how tight/loose the arc is

function selectCard(index: number) {
  currentIndex.value = index;
}

function toggleFlip(index: number) {
  flippedIndex.value = flippedIndex.value === index ? null : index;
}

function getCardStyle(index: number) {
  const offset = index - currentIndex.value;
  const angleDeg = offset * angleStep;
  const angleRad = (angleDeg * Math.PI) / 180;

  const translateX = radius * Math.sin(angleRad);
  const translateY = radius * (1 - Math.cos(angleRad));

  const isSelected = offset === 0;
  const scale = isSelected ? 1.1 : Math.max(1 - Math.abs(offset) * 0.04, 0.8);
  const lift = isSelected ? -40 : 0;

  return {
    transform: `translateX(${translateX}px) translateY(${translateY + lift}px) rotate(${angleDeg}deg) scale(${scale})`,
    zIndex: isSelected ? 100 : 100 - Math.abs(offset),
  };
}
</script>