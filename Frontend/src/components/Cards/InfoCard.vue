<template>
    <div class="
    bg-(--MenuCard) color-(--Text)
    border-2 border-(--Accent) rounded-2xl
    p-6">
        <h5 class="text-2xl font-semibold">
            <slot name="Header">Header will go here</slot>
        </h5>
        <div class="text-(--SupText) pl-2">
            <slot name="Body">Body text will go here</slot>
        </div>
    </div>
</template>