<template>

    <nav class="
    w-screen px-16
    h-44
    bg-linear-to-b from-(--MenuCard) from-40% to-[#000000] via-90%"
    aria-label="Banner"
    >
        <RouterLink :to="'\/'">
            <div class="relative flex justify-center">
                <!-- Text -->
                <h1 class="absolute inset-0 flex items-center justify-center 
                text-7xl font-exo font-semibold [-webkit-text-stroke:2px_black] tracking-[-2px]"
                >
                  Citadel Solutions  
                </h1>

                <!-- Logo -->
                <div class="h-44 w-44 flex justify-center size-full"> 
                    <div>
                        <Logo class="w-full h-full" :style="{ color: '#1E90FF33'}"/>
                    </div>
                </div> 
            </div>
        </RouterLink>
    </nav>
</template>

<script setup lang="ts">
    import Logo from "@/assets/Tailwind CITADEL Logo.svg"
</script>