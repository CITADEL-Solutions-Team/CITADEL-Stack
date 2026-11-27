<template>
  <li class="bg-(--MenuCard) border border-(--Accent) rounded-full px-3 w-fit">
    {{ props.skillName }}
  </li>
</template>

<style scoped>

</style>

<script setup>
  const props = defineProps({
    skillName: String
  })
</script>
