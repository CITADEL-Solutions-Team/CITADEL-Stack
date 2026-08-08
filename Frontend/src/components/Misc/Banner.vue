<template>
    <div class="
    w-screen px-16
    h-80
    bg-linear-to-r from-(--MenuCard) from-60% to-(#03191C)
    border-2 border-(--Accent)"
    aria-label="Banner"
    >
        <div class="px-16 py-6 flex items-center h-full">
            <div class="flex-1">
                <h1 class="
                font-['Exo_2']
                text-[clamp(64px,7vw,96px)]
                ">
                    <slot name="BusinessName">
                        CITADEL SOLUTIONS
                    </slot>
                </h1>
            </div>
            <div class="h-full my-24
                aspect-square border-2 border-(--Accent) rounded-full 
                flex-none">
                <RouterLink 
                :to="'\/'"
                class=""
                aria-label="Home Button">
                    <slot name="Logo">
                        LOGO HERE
                    </slot>
                </RouterLink>
            </div>
        </div>
    </div>
</template>