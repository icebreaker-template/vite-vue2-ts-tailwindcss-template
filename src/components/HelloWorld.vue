<script setup lang="ts">
import IceImage from './IceImage.vue'

defineProps<{ msg: string }>()
</script>

<template>
  <div class="container mx-auto">
    <div class="grid grid-cols-2">
      <IceImage class="h-84" style="object-fit: contain;" src="https://image-compress-demo.oss-cn-zhangjiakou.aliyuncs.com/demo.jpg" />
      <IceImage class="h-84" style="object-fit: contain;" src="https://image-compress-demo.oss-cn-zhangjiakou.aliyuncs.com/demo.jpg" fallback="webp" />
      <IceImage class="h-84" style="object-fit: contain;" src="https://image-compress-demo.oss-cn-zhangjiakou.aliyuncs.com/demo.jpg" fallback="avif" />
      <IceImage class="h-84" style="object-fit: contain;" src="https://image-compress-demo.oss-cn-zhangjiakou.aliyuncs.com/demo.jpg" fallback="webp,avif" />
      <IceImage class="h-84" style="object-fit: contain;" src="https://image-compress-demo.oss-cn-zhangjiakou.aliyuncs.com/demo1.jpg" />
    </div>
  </div>
</template>
