<template>
    <div id="Wrapper"
    class="flex justify-center 
    px-16 md:px-32 lg:px-48 
    py-12"
    >
        <div id="Statistics"
        class="grid grid-cols-1 md:grid-cols-2 w-fit object-center
        gap-8"
        >
            <slot>
                <div
                class="border border-(--Accent) rounded w-fit">
                    Stat Card One
                </div>
                <div
                class="border border-(--Accent) rounded w-fit">
                    Stat Card Two
                </div>
                <div
                class="border border-(--Accent) rounded w-fit">
                    Stat Card Three
                </div>
                <div
                class="border border-(--Accent) rounded w-fit">
                    Stat Card Four
                </div>
            </slot>
        </div>
    </div>
</template>