<script setup lang="ts">
import { useStore } from '../store'

const store = useStore()
defineProps<{ msg: string }>()
</script>

<template>
  <div class="text-center space-y-2">
    <h1>{{ msg }}</h1>

    <div>
      <button type="button" @click="store.increment()">count is {{ store.count }}</button>
      <p>
        Double count {{ store.double }}
      </p>
    </div>
  </div>
</template>

<style scoped></style>
