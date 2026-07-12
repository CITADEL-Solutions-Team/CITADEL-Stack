<template>
    <div 
    class="border-2 border-(--Accent) rounded-lg 
    mx-8 my-4 grid grid-cols-2"
    >
        <div class="p-4 col-span-2 flex flex-col border-b border-gray-500 py-1">
            <div class="text-2xl font-bold text-(--Accent)">
                <slot name="Name">
                    Service Name
                </slot>
            </div>
            <div class="italic text-(--SupText)">
                <slot name="Price">
                    Price
                </slot>
            </div>
        </div>
        <div class="p-4 grid grid-cols-5 col-span-2">
            <div class="pl-4 col-span-3">
                <slot name="List">
                    Put the list off things this service entails
                </slot>
            </div>
            <div class="col-span-2 border-l-4 border-(--Accent) pl-2 mr-1">
                <h3 class="text-xl font-bold text-(--Accent) my-2 ">Why it matters:</h3>
                <div class="text-(--SupText)">
                    <slot name="Why">
                        Explain it so people who aren't in tech can understand
                    </slot>
                </div>
            </div>            
        </div>
    </div>
</template>