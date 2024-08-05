<script setup lang="ts">
import { h, onMounted, ref } from 'vue'
import { useFly } from './useFly'

// const vnode = h('div')

const cartRef = ref<HTMLElement>()
const eleBtnRef = ref<HTMLElement>()
const containerRef = ref<HTMLElement>()
const itemRef = ref<HTMLElement>()
const { run } = useFly({
  from: eleBtnRef,
  to: cartRef,
  mounted: containerRef,
  item: itemRef,
})

onMounted(() => {
  setInterval(() => {
    run()
  }, 200)
})
</script>

<template>
  <div ref="containerRef">
    <div>
      <div ref="eleBtnRef" class="absolute left-[10vw] top-[60vh] inline-block rounded bg-sky-400 p-4" @click="run">
        222
      </div>
    </div>
    <div ref="cartRef" class="absolute left-[60vw] top-[10vh] inline-block rounded bg-sky-400 p-4">
      这里是容器
    </div>
    <div ref="itemRef" class="hidden size-24 bg-blue-300">
      我爱送大苏打撒的撒的撒的撒旦撒阿萨
    </div>
  </div>
</template>

<style lang="scss">

</style>
