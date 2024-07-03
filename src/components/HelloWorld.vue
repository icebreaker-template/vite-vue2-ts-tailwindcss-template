<script setup lang="ts">
import { useStore } from '../store'

defineProps<{ msg: string }>()
const store = useStore()
</script>

<template>
  <div class="space-y-2 text-center">
    <h1>{{ msg }}</h1>

    <div>
      <button class="bg-pink-100" type="button" @click="store.increment()">
        count is {{ store.count }}
      </button>
      <p class="text-yellow-800">
        Double count {{ store.double }}
      </p>
    </div>
  </div>
</template>

<style scoped></style>
