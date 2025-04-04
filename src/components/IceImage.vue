<script setup lang="ts">
import { computed, reactive, ref, useAttrs, useListeners } from 'vue'
// import { isAvifSupported, isWebpSupported } from './preflight'
// isAvifSupported().then(console.log)
// isWebpSupported().then(console.log)
const props = withDefaults(defineProps<{
  src?: string
  alt?: string
  fallback?: string
}>(), {
  fallback: 'avif,webp',
})

const attrs = useAttrs()
const listeners = useListeners()

const isAvifSupported = true
const isWebpSupported = true

const supportMap = reactive<Record<string, boolean>>({
  avif: isAvifSupported,
  webp: isWebpSupported,
})

const fallbackArray = computed(() => {
  return props.fallback.split(',')
})

const currentState = ref(0)

function next() {
  currentState.value++
}
//
function onError(payload: Event) {
  // console.error(payload)
  next()
  // @ts-ignore
  listeners.error?.(payload)
}

function isOssSrc(src?: string): src is string {
  if (!src) {
    return false
  }
  return /\.aliyuncs\./.test(src)
}

const computedSrc = computed(() => {
  if (isOssSrc(props.src)) {
    const url = new URL(props.src)
    const format = fallbackArray.value[currentState.value]
    if (format) {
      if (supportMap[format]) {
        url.searchParams.set('x-oss-process', `image/format,${format}`)
      }
      else {
        next()
      }
    }

    return url.toString()
  }
  return props.src
})
</script>

<template>
  <img v-bind="attrs" :src="computedSrc" :alt="alt" v-on="listeners" @error="onError">
</template>
