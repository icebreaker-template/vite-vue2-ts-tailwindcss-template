<script setup lang="ts">
import type { StickyOptions } from '../directives/sticky'
import { ref } from 'vue'
import { vSticky } from '../directives/sticky'

const stickyOptions = ref<StickyOptions>(
  {
    enabled: true,
    topOffset: 90,
    bottomOffset: 20,
    side: 'both',
    zIndex: 20,
    onStick(state) {
      console.log(state)
    },
  },
)
</script>

<template>
  <div>
    <div class="app">
      <div class="header">
        <h2>Header</h2>
      </div>
      <div class="sticky-container" data-sticky-container>
        <div :style="{ background: '#eee', margin: '20px' }">
          <p>Text before sticky element. Text before sticky element. Text before sticky element. Text before sticky element. Text before sticky element. Text before sticky element. Text before sticky element. Text before sticky element. Text before sticky element. Text before sticky element. Text before sticky element. Text before sticky element. </p>
          <p>Text before sticky element. Text before sticky element. Text before sticky element. Text before sticky element. Text before sticky element. Text before sticky element. Text before sticky element. Text before sticky element. Text before sticky element. Text before sticky element. Text before sticky element. Text before sticky element. </p>
          <p>Text before sticky element. Text before sticky element. Text before sticky element. Text before sticky element. Text before sticky element. Text before sticky element. Text before sticky element. Text before sticky element. Text before sticky element. Text before sticky element. Text before sticky element. Text before sticky element. </p>
          <p>Text before sticky element. Text before sticky element. Text before sticky element. Text before sticky element. Text before sticky element. Text before sticky element. Text before sticky element. Text before sticky element. Text before sticky element. Text before sticky element. Text before sticky element. Text before sticky element. </p>
          <p>Text before sticky element. Text before sticky element. Text before sticky element. Text before sticky element. Text before sticky element. Text before sticky element. Text before sticky element. Text before sticky element. Text before sticky element. Text before sticky element. Text before sticky element. Text before sticky element. </p>
          <p>Text before sticky element. Text before sticky element. Text before sticky element. Text before sticky element. Text before sticky element. Text before sticky element. Text before sticky element. Text before sticky element. Text before sticky element. Text before sticky element. Text before sticky element. Text before sticky element. </p>
          <p>Text before sticky element. Text before sticky element. Text before sticky element. Text before sticky element. Text before sticky element. Text before sticky element. Text before sticky element. Text before sticky element. Text before sticky element. Text before sticky element. Text before sticky element. Text before sticky element. </p>
          <p>Text before sticky element. Text before sticky element. Text before sticky element. Text before sticky element. Text before sticky element. Text before sticky element. Text before sticky element. Text before sticky element. Text before sticky element. Text before sticky element. Text before sticky element. Text before sticky element. </p>
          <div v-sticky="stickyOptions" class="sticky">
            <h2>
              <span>{{ stickyOptions.enabled ? 'Sticky' : 'Not sticky' }}</span>
              <button class="toggle-sticky" @click="stickyOptions.enabled = !stickyOptions.enabled">
                toggle sticky
              </button>
            </h2>
          </div>
          <p>Text follow sticky element. Text follow sticky element. Text follow sticky element. Text follow sticky element. Text follow sticky element. Text follow sticky element. Text follow sticky element. Text follow sticky element. Text follow sticky element. Text follow sticky element. Text follow sticky element. Text follow sticky element. </p>
          <p>Text follow sticky element. Text follow sticky element. Text follow sticky element. Text follow sticky element. Text follow sticky element. Text follow sticky element. Text follow sticky element. Text follow sticky element. Text follow sticky element. Text follow sticky element. Text follow sticky element. Text follow sticky element. </p>
          <p>Text follow sticky element. Text follow sticky element. Text follow sticky element. Text follow sticky element. Text follow sticky element. Text follow sticky element. Text follow sticky element. Text follow sticky element. Text follow sticky element. Text follow sticky element. Text follow sticky element. Text follow sticky element. </p>
          <p>Text follow sticky element. Text follow sticky element. Text follow sticky element. Text follow sticky element. Text follow sticky element. Text follow sticky element. Text follow sticky element. Text follow sticky element. Text follow sticky element. Text follow sticky element. Text follow sticky element. Text follow sticky element. </p>
          <p>Text follow sticky element. Text follow sticky element. Text follow sticky element. Text follow sticky element. Text follow sticky element. Text follow sticky element. Text follow sticky element. Text follow sticky element. Text follow sticky element. Text follow sticky element. Text follow sticky element. Text follow sticky element. </p>
          <p>Text follow sticky element. Text follow sticky element. Text follow sticky element. Text follow sticky element. Text follow sticky element. Text follow sticky element. Text follow sticky element. Text follow sticky element. Text follow sticky element. Text follow sticky element. Text follow sticky element. Text follow sticky element. </p>
          <p>Text follow sticky element. Text follow sticky element. Text follow sticky element. Text follow sticky element. Text follow sticky element. Text follow sticky element. Text follow sticky element. Text follow sticky element. Text follow sticky element. Text follow sticky element. Text follow sticky element. Text follow sticky element. </p>
          <p>Text follow sticky element. Text follow sticky element. Text follow sticky element. Text follow sticky element. Text follow sticky element. Text follow sticky element. Text follow sticky element. Text follow sticky element. Text follow sticky element. Text follow sticky element. Text follow sticky element. Text follow sticky element. </p>
        </div>
      </div>
      <div class="footer">
        <h2>Footer</h2>
      </div>
    </div>
  </div>
</template>

<style>
h2 {
  margin: auto;
  font-size: 40px;
}

.app {
  height: 2000px;
  margin: 0 30px;
}

.header {
  display: flex;
  height: 600px;
  background: #eee;
}

.footer {
  display: flex;
  height: 1200px;
  background: #eee;
}

.sticky-container {
  /* height: 600px; */
  /* overflow: hidden; */
  background: #ccc;
}

.sticky-container p {
  font-size: 20px;
  margin: 20px;
}

.sticky {
  background: #bbb;
  display: flex;
}

.toggle-sticky {
  z-index: 20;
}
</style>
