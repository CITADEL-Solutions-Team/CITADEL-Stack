<template>
  <div class="grid grid-cols-2 border-t-4 border-(--Accent)">
    <!-- Left block containing email, phone, and socials -->
    <div class="pt-7 grid grid-rows-2 gap-8">
      <!-- Business Name, email, and phone -->
      <div>
        <h1 class="text-3xl font-bold pb-2 text-(--Accent)">
          Citadel Solutions
        </h1>
        <p class="italic ml-3">
          services@citadelsolutions.tech<br>630-360-2350
        </p>
      </div>
      <div>
        <p>Secure Today. Protect Tomorrow.</p>
      </div>
    </div>
    <div class="pt-7">
      
    </div>
  </div>
</template>

<script setup lang="ts">

 

  const props = defineProps <{
    SocialsLinks: {icon:any, to:string}[],

  }>()
</script>
