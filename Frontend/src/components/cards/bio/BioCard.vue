<template>
    <!--
        HOLOGRAPHIC "RARE" CARD SYSTEM — how it works, in one paragraph:

        1. A `mousemove` listener on .card-tilt converts cursor position into
           CSS custom properties (--mx, --my, --rx, --ry, --holo-opacity).
        2. Those custom properties cascade down to every .holo-* element below,
           so one JS calculation drives multiple independent visual effects
           at once (tilt, logo shimmer, text shimmer, border shimmer).
        3. Each .holo-* element is a SEPARATE overlay element sitting on top
           of the real content (logo / text / border), not a modification
           of the real content itself. Each uses a different CSS trick to
           constrain the rainbow gradient to a specific shape:
             - holo-logo  -> mask-image (uses the SVG's own alpha channel)
             - holo-text  -> background-clip: text (fills glyph shapes)
             - holo-border -> two-layer mask-composite (carves a ring shape)
        4. `mix-blend-mode: screen` is what makes the rainbow visible against
           this card's dark (#1b1b1b) background specifically. On a light
           background, `color-dodge` reads better — swap if you reuse this
           on lighter cards.
        5. Only members with Info.Rare === true render any of this — everyone
           else gets zero extra DOM/CSS cost.
    -->
    <div class="card-outer aspect-2/3 w-[clamp(200px,34vw,320px)]" @click="emit('flip')">
        <!-- The real flip control: keyboard and screen-reader users interact with
             this button; mouse users can click anywhere on the card. -->
        <button
            ref="flipRef"
            type="button"
            class="flip-btn sr-only"
            :tabindex="Active ? 0 : -1"
            :aria-pressed="IsFlipped"
            @click.stop="emit('flip')"
        >
            Flip {{ Info.Name }}'s card, {{ Info.Role }}
        </button>

        <div
            ref="tiltRef"
            class="card-tilt"
            :style="{ ...holoStyle, '--logo-mask-url': `url(${logoUrl})` }"
            @mousemove="handleMouseMove"
            @mouseleave="handleMouseLeave"
        >
            <div
                class="card-inner"
                :style="{ transform: IsFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }"
            >
                <div
                    class="card-front flex flex-col px-6 py-4 border-4 rounded-2xl relative"
                    :style="{
                        'border-color': Info.Color,
                        'pointer-events': IsFlipped ? 'none' : 'auto',
                    }"
                >
                    <!-- Holo border ring for the FRONT face. Sits on top of the
                         real border-4, same rounded-2xl radius, ring-shaped via
                         mask-composite (see .holo-border in <style>). -->
                    <div v-if="Info.Rare" class="holo-border absolute -inset-1 rounded-2xl" aria-hidden="true"></div>

                    <div class="flex flex-col">
                        <div class="flex-col basis-1">
                            <div class="w-fit items-center text-center">
                                <div class="relative inline-block font-extrabold" :style="{ color: Info.Color }">
                                    {{ Info.Team }}
                                    <span v-if="Info.Rare" class="holo-text absolute inset-0" aria-hidden="true">{{ Info.Team }}</span>
                                </div>
                                <div class="basis-1 relative w-8 h-8">
                                    <Logo class="w-full h-full" :style="{ color: Info.Color }" aria-hidden="true" />
                                    <div v-if="Info.Rare" class="holo-logo absolute inset-0" aria-hidden="true"></div>
                                </div>
                            </div>
                            <div class="grow"></div>
                        </div>
                    </div>
                    <!-- Top left logo -->

                    <div class="basis-2 grow m-8 relative">
                        <Logo class="w-full h-full" :style="{ color: Info.Color }" aria-hidden="true" />
                        <div v-if="Info.Rare" class="holo-logo absolute inset-0" aria-hidden="true"></div>
                    </div>
                    <!-- Middle logo -->

                    <div class="flex-col basis-1 rotate-180">
                        <div class="items-center w-fit text-center">
                            <div class="relative inline-block font-extrabold flex-none" :style="{ color: Info.Color }">
                                {{ Info.Team }}
                                <span v-if="Info.Rare" class="holo-text absolute inset-0" aria-hidden="true">{{ Info.Team }}</span>
                            </div>
                            <div class="basis-1 relative w-8 h-8">
                                <Logo class="w-full h-full" :style="{ color: Info.Color }" aria-hidden="true" />
                                <div v-if="Info.Rare" class="holo-logo absolute inset-0" aria-hidden="true"></div>
                            </div>
                        </div>
                        <div class="grow"></div>
                    </div>
                    <!-- Bottom right logo -->
                </div>

                <div
                    class="card-back flex flex-col px-[4cqw] py-[6cqw] border-4 rounded-2xl relative"
                    :style="{
                        'border-color': Info.Color,
                        'pointer-events': IsFlipped ? 'auto' : 'none',
                    }"
                >
                    <!-- Holo border ring for the BACK face. Independent element from
                         the front's ring since each face is a separate absolutely-
                         positioned box (per the flip-card structure). -->
                    <div v-if="Info.Rare" class="holo-border absolute -inset-1 rounded-2xl" aria-hidden="true"></div>

                    <div class="flex-none text-center">
                        <p class="text-[12cqw] font-bold">Secure Today</p>
                        <p class="text-[9cqw] font-semibold">Protect Tomorrow</p>
                    </div>
                    <div class="flex-1 min-h-0 flex items-center justify-center relative">
                        <Logo class="px-[16cqw] w-full h-full" :style="{ color: Info.Color }" aria-hidden="true" />
                        <!-- padding here MUST match the visible Logo's padding above —
                             mask-origin/mask-clip: content-box makes the mask respect
                             it, but only if the box itself is sized identically. -->
                        <div v-if="Info.Rare" class="holo-logo absolute inset-0 px-[16cqw]" aria-hidden="true"></div>
                    </div>
                    <div class="flex-none text-center">
                        <p class="text-[7cqw] pt-1">{{ Info.Name }}</p>
                        <p class="text-[6cqw] pb-2">{{ Info.Role }}</p>
                        <a
                            :href="Info.To"
                            :tabindex="IsFlipped ? 0 : -1"
                            class="text-[6.25cqw] text-blue-400 italic py-1"
                            @click.stop
                        >
                            About Me<span class="sr-only">: {{ Info.Name }}</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Logo from '@/components/brand/Logo.vue';
import type { Bio } from './members';

const props = defineProps<{
    Info: Bio;
    IsFlipped: boolean;
    Active: boolean;
}>();

const emit = defineEmits<{
    flip: [];
}>();

// Served from public/, used only as the mask shape for the holo shimmer.
const logoUrl: string = '/logo.svg';

const flipRef = ref<HTMLButtonElement | null>(null);
defineExpose({
    focus: (): void => flipRef.value?.focus(),
});

const tiltRef = ref<HTMLElement | null>(null);

// These custom properties are the single source of truth for the holo
// effect. Every .holo-* CSS rule reads from these — one mousemove handler
// drives tilt, logo shimmer, text shimmer, and border shimmer at once.
const holoStyle = ref<Record<string, string>>({
    '--mx': '50%',
    '--my': '50%',
    '--rx': '0deg',
    '--ry': '0deg',
    '--holo-opacity': '0',
});

function handleMouseMove(e: MouseEvent): void {
    if (!tiltRef.value) return;
    const rect: DOMRect = tiltRef.value.getBoundingClientRect();
    const px: number = (e.clientX - rect.left) / rect.width; // 0 (left edge) to 1 (right edge)
    const py: number = (e.clientY - rect.top) / rect.height; // 0 (top edge) to 1 (bottom edge)

    const maxTilt: number = 14; // degrees of tilt at the very edge of the card
    const rx: number = (py - 0.5) * -maxTilt;
    const ry: number = (px - 0.5) * maxTilt;

    holoStyle.value = {
        '--mx': `${px * 100}%`,
        '--my': `${py * 100}%`,
        '--rx': `${rx}deg`,
        '--ry': `${ry}deg`,
        '--holo-opacity': '1',
    };
}

function handleMouseLeave(): void {
    holoStyle.value = {
        '--mx': '50%',
        '--my': '50%',
        '--rx': '0deg',
        '--ry': '0deg',
        '--holo-opacity': '0',
    };
}
</script>

<style>
.card-outer {
    perspective: 1000px;
    container-type: inline-size;
}

/* The flip button is visually hidden, so its focus ring is drawn on the card. */
.card-outer:has(.flip-btn:focus-visible) {
    outline: 3px solid var(--Accent, #1e90ff);
    outline-offset: 4px;
    border-radius: 1rem;
}

/* Separate wrapper JUST for the mouse-driven tilt. Kept apart from
   .card-inner (flip) and the deck's fan transform (set inline by the
   parent) so all three transforms compose instead of overwriting
   each other. */
.card-tilt {
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transform: rotateX(var(--rx)) rotateY(var(--ry));
    transition: transform 0.1s ease-out;
}

.card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.6s;
    transform-style: preserve-3d;
}

.card-front,
.card-back {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    background-color: #1b1b1b;
}

.card-back {
    transform: rotateY(180deg);
    z-index: 2;
}

.card-front {
    z-index: 1;
}

/* ---------- HOLO: LOGOS ----------
   mask-image uses the logo SVG's own alpha channel as a stencil — the
   rainbow only shows where the artwork is opaque. content-box origin/
   clip makes the mask respect this element's padding, matching the
   real <Logo>'s padding so both occupy the identical rectangle. */
.holo-logo {
    mix-blend-mode: screen; /* use color-dodge instead on light backgrounds */
    pointer-events: none;
    opacity: var(--holo-opacity);
    transition: opacity 0.2s ease-out;
    background-size: 200% 200%;
    background-position: var(--mx) var(--my);
    background-image: repeating-linear-gradient(
        115deg, red 0%, yellow 12.5%, lime 25%,
        cyan 37.5%, blue 50%, magenta 62.5%, red 75%
    );
    mask-image: var(--logo-mask-url);
    mask-size: contain;
    mask-repeat: no-repeat;
    mask-position: center;
    mask-origin: content-box;
    mask-clip: content-box;
}

/* ---------- HOLO: TEXT ----------
   background-clip: text fills glyph shapes with the gradient instead
   of a solid color. Sits as an absolutely-positioned duplicate of the
   real text underneath (same string, same position), rather than
   modifying the real text's own color. */
.holo-text {
    mix-blend-mode: screen;
    pointer-events: none;
    opacity: var(--holo-opacity);
    transition: opacity 0.2s ease-out;
    background-size: 200% 200%;
    background-position: var(--mx) var(--my);
    background-image: repeating-linear-gradient(
        115deg, red 0%, yellow 12.5%, lime 25%,
        cyan 37.5%, blue 50%, magenta 62.5%, red 75%
    );
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    -webkit-text-fill-color: transparent;
}

/* ---------- HOLO: BORDER ----------
   A border has no transparent "shape" to mask against like an SVG does,
   so this uses a different trick: TWO mask layers on the same element,
   combined with mask-composite: exclude (a boolean XOR). One layer is
   the full box, the other is the inner box minus padding. XORing them
   leaves only the RING between them visible — exactly where a border
   would sit. The padding value below (4px) must match your border-4
   width, or the ring will be thicker/thinner than the real border. */
.holo-border {
    pointer-events: none;
    opacity: var(--holo-opacity);
    transition: opacity 0.2s ease-out;
    mix-blend-mode: screen;
    padding: 4px; /* must match border-4 = 4px */
    background-size: 200% 200%;
    background-position: var(--mx) var(--my);
    background-image: repeating-linear-gradient(
        115deg, red 0%, yellow 12.5%, lime 25%,
        cyan 37.5%, blue 50%, magenta 62.5%, red 75%
    );
    -webkit-mask:
        linear-gradient(#fff 0 0) content-box,
        linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor; /* Safari's older syntax for the same idea */
    mask-composite: exclude; /* standard syntax */
}

@media (prefers-reduced-motion: reduce) {
    .card-tilt {
        transform: none !important;
        transition: none !important;
    }
}
</style>