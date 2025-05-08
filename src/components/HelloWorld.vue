<script setup lang="ts">
import { onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import tailwindcssIcon from '../assets/tailwindcss.svg'

defineProps<{ msg: string }>()

onMounted(() => {
  console.log('HelloWorld.vue mounted')
})
</script>

<template>
  <div class="space-y-2 text-center">
    <RouterLink active-class="bg-[#123456]" exact class="text-blue-400" to="/">
      首页
    </RouterLink>
    <RouterLink active-class="bg-[#123456]" exact class="text-blue-400" to="/bar">
      bar
    </RouterLink>
    <h1>{{ msg }}</h1>
    <img class="w-8" :src="tailwindcssIcon">
  </div>
</template>

<style lang="scss"></style>
