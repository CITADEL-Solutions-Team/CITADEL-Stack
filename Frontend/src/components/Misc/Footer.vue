<template>
  <nav class="grid grid-cols-2"
  aria-label="Footer"
  >
    <!-- Left Section that holds contact info and socials -->
    <div class="grid grid-rows-2 gap-16">
      <!-- Name, Email, phone -->
      <div>
        <!-- Business Name -->
        <h1 class="text-4xl text-(--Accent)">
          <slot name="CompanyName">
            Citadel Solutions
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
        <h2 class="text-2xl">
          <slot name="Tagline">
            Secure Today. Protect Tomorrow.
          </slot>
        </h2>

        <!-- Socials -->
        <ul>
          <li v-for="social in SocialsLinks" :key="social.Label">
            <a :href="social.To" :aria-label="social.Label">
              <component :is="social.Icon" aria-hidden="true" focusable="false" />
            </a>
          </li>
        </ul>
      </div>
    </div>

    <!-- Right Section that holds links to pages such as policy -->
    <div>
      
    </div>    
  </nav>
</template>

<script setup lang="ts">

  const props = defineProps <{    
    SocialsLinks: {Icon:any, Label:string, To:string}[],
    Sections: {Name: string, Links: {Label: string, To: string}[],}[]
  }>()
</script>
