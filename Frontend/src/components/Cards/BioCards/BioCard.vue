<template>
    <div id="CardOuter" 
    class="card-outer
    aspect-2/3
    w-[clamp(120px,22vw,320px)]" 
    @click="emit('flip')"
    > <!-- has perspective -->
        <div id="CardInner"
        class="card-inner" 
        :style="{ transform: IsFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'}"
        @hover=""
        >
            <div id="CardFront" 
            class="card-front
            flex flex-col
            px-6 py-4
            border-4 rounded-2xl"
            :style="{'border-color': Info.Color}"
            >
                <!-- This will be the logo and which team -->
                 <div class="flex flex-col">
                    <div id="TopLeft" class="flex-col basis-1">
                        <div class="w-fit items-center text-center">
                            <div class="font-extrabold" :style="{ color: Info.Color }">
                                {{ Info.Team }}
                            </div>
                            <div class="basis-1">
                                <Logo class="w-8 h-8" :style="{ color: Info.Color }"/>
                            </div>
                        </div>
                        <div class="grow"></div>
                    </div>
                 </div> <!-- The top left logo -->
                 <div class="basis-2 grow m-8">
                    <Logo class="w-full h-full" :style="{ color: Info.Color }"/>
                 </div> <!-- Middle logo -->
                 <div id="BottomRight" class="flex-col basis-1 rotate-180">
                    <div class="items-center w-fit text-center">
                        <div class="font-extrabold flex-none" :style="{ color: Info.Color }">
                            {{ Info.Team }}
                        </div>
                        <div class="basis-1">
                            <Logo class="w-8 h-8" :style="{ color: Info.Color }"/>
                        </div>
                    </div>
                    <div class="grow"></div>
                </div> <!-- Bottom Right Logo -->
            </div>   <!-- always rendered -->
            
            <div id="CardBack"
            class="card-back
            flex flex-col
            px-[4cqw] py-[6cqw]
            border-4 rounded-2xl"
            :style="{'border-color': Info.Color}"
            >
                <div id="Moto"
                class="flex-none text-center"
                >
                    <h1 class="text-[12cqw] font-bold">
                        Secure Today
                    </h1>
                    <h2 class="text-[9cqw] font-semibold">
                        Protect Tomorrow
                    </h2>
                </div>
                <div id="Logo" class="flex-1 min-h-0 flex items-center justify-center">
                    <Logo class="px-[16cqw] w-full h-full" :style="{ color: Info.Color }"/>
                </div>
                <div id="Info"
                class="flex-none text-center"
                >
                    <p class="text-[7cqw] pt-1">{{ Info.Name }}</p>
                    <p class="text-[6cqw] pb-2">{{ Info.Role }}</p>
                    <RouterLink
                    :to="Info.To" class="text-[6.25cqw] text-blue-400 italic py-1">About Me</RouterLink>

                </div>
            </div>    <!-- always rendered, pre-rotated 180deg, backface-visibility hidden -->
        </div>
    </div>
</template>

<script setup lang="ts">
    import Logo from "@/assets/Tailwind CITADEL Logo.svg"
    import type { Bio } from "./BioInfo"

    const props = defineProps<{
        Info: Bio,
        IsFlipped: boolean
    }>()

    const emit = defineEmits<{
        flip: []
    }>()
</script>

<style>
    .card-outer {
        perspective: 1000px;
        container-type: inline-size;
    }

    .card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    }

    .card-front, .card-back {
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
    }
</style>