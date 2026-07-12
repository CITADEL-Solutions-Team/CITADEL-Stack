<template>
    <div>
        <div class="text-4xl pb-2 pt-4 mb-4 font-bold border-b-4 border-(--Accent)">
            <slot name="Name"> Section Name Here </slot>
        </div>
        <div class="flex flex-col gap-4">
            <slot name="Items"> Items will go here </slot>
        </div>
    </div>
</template>