<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div
    class="antialiased text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900 min-h-screen w-screen flex items-center justify-center">
    <div>
      <div class="flex justify-between items-center">
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" class="w-8" alt="Vite logo" />
        </a>
        <a href="https://vuejs.org/" target="_blank">
          <img src="./assets/vue.svg" class="w-8" alt="Vue logo" />
        </a>
        <a href="https://tailwindcss.com/" target="_blank">
          <img src="./assets/tailwindcss.svg" class="w-8" alt="TailwindCSS logo" />
        </a>
      </div>

      <HelloWorld msg="Vite + Vue + TailwindCSS" />
    </div>

  </div>
</template>

<style scoped></style>
