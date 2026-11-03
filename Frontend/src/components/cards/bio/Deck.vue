<template>
    <div
        class="deck-container relative w-full h-240 lg:pt-36 xl:pt-56 flex items-center justify-center"
        :class="{ 'is-ready': ready }"
        role="region"
        aria-roledescription="carousel"
        aria-label="Team members"
        @keydown="handleKeydown"
        @touchstart.passive="handleTouchStart"
        @touchend="handleTouchEnd"
    >
        <TeamCard
            v-for="(member, index) in members"
            :key="member.slug"
            :ref="(el) => (cardRefs[index] = el)"
            :Info="member"
            :IsFlipped="flippedIndex === index"
            :Active="currentIndex === index"
            :style="getCardStyle(index)"
            class="absolute origin-bottom transition-transform duration-300 ease-out cursor-pointer"
            @flip="selectCard(index)"
            @mouseenter="hoveredIndex = index"
            @mouseleave="hoveredIndex = null"
        />
    </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue';
import TeamCard from './BioCard.vue';
import type { Bio } from './members';

const props = defineProps<{ members: Bio[] }>();

const currentIndex = ref<number>(0);
const flippedIndex = ref<number | null>(0);
const hoveredIndex = ref<number | null>(null);
const cardRefs = ref<any[]>([]);

// No `window` during the build: start with a desktop width, measure on mount.
const viewportWidth = ref<number>(1024);
const ready = ref<boolean>(false);

function updateWidth(): void {
    viewportWidth.value = window.innerWidth;
}

onMounted(() => {
    updateWidth();
    window.addEventListener('resize', updateWidth);
    ready.value = true;
});

onUnmounted(() => {
    window.removeEventListener('resize', updateWidth);
});

const touchStartX = ref<number | null>(null);
const touchStartY = ref<number | null>(null);

function handleTouchStart(e: TouchEvent): void {
    touchStartX.value = e.touches[0].clientX;
    touchStartY.value = e.touches[0].clientY;
}

function handleTouchEnd(e: TouchEvent): void {
    if (touchStartX.value === null) return;
    const deltaX: number = e.changedTouches[0].clientX - touchStartX.value;
    const deltaY: number = e.changedTouches[0].clientY - (touchStartY.value ?? 0);
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

function moveTo(index: number): void {
    currentIndex.value = index;
    focusCurrent();
}

function focusCurrent(): void {
    nextTick(() => cardRefs.value[currentIndex.value]?.focus());
}

function handleKeydown(e: KeyboardEvent): void {
    let next: number | null = null;
    if (e.key === 'ArrowRight') next = Math.min(currentIndex.value + 1, props.members.length - 1);
    if (e.key === 'ArrowLeft') next = Math.max(currentIndex.value - 1, 0);
    if (next === null) return;

    e.preventDefault();
    if (next !== currentIndex.value) selectCard(next);
}

const angleStep = computed<number>(() => (viewportWidth.value < 640 ? 10 : 8));

const radius = computed<number>(() => {
    const isMobile: boolean = viewportWidth.value < 640;
    const min: number = isMobile ? 140 : 200;
    const max: number = isMobile ? 260 : 600;
    const factor: number = isMobile ? 0.5 : 0.4;
    const preferred: number = viewportWidth.value * factor;
    return Math.min(Math.max(preferred, min), max);
});

function selectCard(index: number): void {
    currentIndex.value = index;
    focusCurrent();
    toggleFlip(index);
}

function toggleFlip(index: number): void {
    flippedIndex.value = flippedIndex.value === index ? null : index;
}

function getCardStyle(index: number): Record<string, string | number> {
    const offset: number = index - currentIndex.value;
    const angleDeg: number = offset * angleStep.value;
    const angleRad: number = (angleDeg * Math.PI) / 180;

    const translateX: number = radius.value * Math.sin(angleRad);
    const translateY: number = radius.value * (1 - Math.cos(angleRad));

    const isSelected: boolean = offset === 0;
    const scale: number = isSelected ? 1.1 : Math.max(1 - Math.abs(offset) * 0.04, 0.8);
    const lift: number = isSelected ? -40 : 0;

    const isHovered: boolean = hoveredIndex.value === index;
    const hoverLift: number = isHovered ? -20 : 0;
    const hoverScale: number = isHovered ? 1.05 : 1;

    return {
        transform: `translateX(${translateX}px) translateY(${translateY + lift + hoverLift}px) rotate(${angleDeg}deg) scale(${scale * hoverScale})`,
        zIndex: isSelected ? (isHovered ? 150 : 100) : 100 - Math.abs(offset),
        filter: isHovered ? 'drop-shadow(0 20px 15px rgb(0 0 0 / 0.3))' : 'none',
    };
}
</script>

<style scoped>
.deck-container {
    overflow: hidden;
    opacity: 0;
    transition: opacity 200ms;
}

.deck-container.is-ready {
    opacity: 1;
}
</style>
