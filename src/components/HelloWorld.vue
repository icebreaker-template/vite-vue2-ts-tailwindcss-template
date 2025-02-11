<script setup lang="ts">

import tailwindcssIcon from '../assets/tailwindcss.svg'

defineProps<{ msg: string }>()

</script>

<template>
  <div class="space-y-2 text-center">
    <h1>{{ msg }}</h1>
    <img class="w-8" :src="tailwindcssIcon">
  </div>
</template>

<style lang="scss"></style>
