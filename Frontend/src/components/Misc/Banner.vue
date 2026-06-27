<template>
    <header class="w-screen h-65
    bg-linear-to-r from-(--MenuCard) from-60% to-(#03191C)
    border-2 border-(--Accent)
    ">
        <div class="px-16 py-6 flex items-center w-full h-full">
            <div class="flex-1">
                <h1 class="
                font-['Exo_2'] text-[96px]
                ">
                    <slot name="BusinessName">
                        CITADEL SOLUTIONS
                    </slot>
                </h1>
            </div>
            <RouterLink 
            :to="'\/'"
            class="
            h-53
            aspect-square border-2 border-(--Accent) rounded-full 
            flex-none">
                <slot name="Logo">
                    LOGO HERE
                </slot>
            </RouterLink>
        </div>
    </header>
</template>