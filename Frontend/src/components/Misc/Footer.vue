<template>
  <nav class="grid grid-cols-1 lg:grid-cols-2 border-t-4 border-(--Accent) pt-6 pb-8"
  aria-label="Footer"
  >
    <!-- Left Section that holds contact info and socials -->
    <div class="grid grid-rows-1 lg:grid-rows-2 gap-12">
      <!-- Name, Email, phone -->
      <div>
        <!-- Business Name -->
        <h1 class="text-4xl text-(--Accent) pb-2 font-semibold">
          <slot name="CompanyName">
            Business Name Here
          </slot>
        </h1>

        <!-- Email -->
        <p>
          <slot name="Email">
            example@email.com
          </slot>
        </p>

        <!-- Phone -->
        <p>
          <slot name="Phone">
            123-456-7890
          </slot>
        </p>
      </div>
      
      <!-- Tagline and social links -->
      <div>

        <!-- Tagline -->
        <h2 class="text-2xl mb-2">
          <slot name="Tagline">
            Tagline Here
          </slot>
        </h2>

        <!-- Socials -->
        <ul class="flex gap-4">
          <li v-for="social in SocialsLinks" :key="social.Label">
            <a :href="social.To" :aria-label="social.Label">
              <img :src="social.Icon" alt="" class="w-6 h-6" />
            </a>
          </li>
        </ul>
      </div>
    </div>

    <!-- Right Section that holds links to pages such as policy -->
    <div class="justify-self-end flex gap-18 pt-8">
      <div v-for="Section in Sections" :key="Section.Name">
        <!-- Section Header -->
        <h2 class="font-bold text-lg pb-4"> {{ Section.Name }} </h2>

        <!-- Set Of links -->
        <ul class="flex flex-col gap-2 text-pretty">
          <li v-for="link in Section.Links" :key="link.Label">
            <a :href="link.To">{{ link.Label }}</a>
          </li>
        </ul>
      </div>
    </div>    
  </nav>
</template>

<script setup lang="ts">
  const props = defineProps <{    
    SocialsLinks: {Icon:any, Label:string, To:string}[],
    Sections: {Name: string, Links: {Label: string, To: string}[],}[]
  }>()
</script>