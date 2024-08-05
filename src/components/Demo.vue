<script setup lang="ts">
import { onMounted, ref } from 'vue'

const cartRef = ref<HTMLElement>()
const flyItemRef = ref<HTMLElement>()
const eleFlyImgRef = ref<HTMLElement>()
const eleBtnRef = ref<HTMLElement>()

function fly() {
  const eleFlyItem = flyItemRef.value!
  const eleFlyImg = eleFlyImgRef.value!
  const eleCart = cartRef.value!

  let isRunning = false
  // 现在按钮距离购物车的距离
  const boundBtn = eleBtnRef.value!.getBoundingClientRect()
  const boundCart = eleCart.getBoundingClientRect()
  // 中心点的水平垂直距离
  const offsetX = boundCart.left + boundCart.width / 2 - (boundBtn.left + boundBtn.width / 2)
  const offsetY = boundCart.top + boundCart.height / 2 - (boundBtn.top + boundBtn.height / 2)
  // 页面滚动尺寸
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop || 0
  const scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft || 0
  if (isRunning === false) {
    // 购物车图形出现与初始定位
    eleFlyItem.style.display = 'block'
    eleFlyItem.style.left = `${boundBtn.left + scrollLeft + eleFlyItem.clientWidth / 2}px`
    eleFlyItem.style.top = `${boundBtn.top + scrollTop + eleFlyItem.clientHeight / 2}px`
    // 开始动画
    eleFlyItem.style.transform = `translateX(${offsetX}px)`
    eleFlyImg.style.transform = `translateY(${offsetY}px)`
    // 动画标志量
    isRunning = true
    setTimeout(() => {
      eleFlyItem.style.display = ''
      eleFlyItem.style.transform = 'translateX(0)'
      eleFlyImg.style.transform = 'translateY(0)'
      isRunning = false
    }, 490)
  }
}

onMounted(() => {
  setInterval(() => {
    fly()
  }, 1000)
})

function createFlyItem() {
  const flyItemWrapper = document.createElement('div')
  flyItemWrapper.classList.add('fly-item')
}
</script>

<template>
  <div>
    <div>
      <div ref="eleBtnRef" class="absolute left-[10vw] top-[10vh] inline-block rounded bg-sky-400 p-4" @click="fly">
        222
      </div>
    </div>
    <div ref="cartRef" class="absolute left-[40vw] top-[40vh] inline-block rounded bg-sky-400 p-4">
      这里是容器
    </div>
    <div ref="flyItemRef" class="fly-item">
      <div ref="eleFlyImgRef">
        111
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.fly-item,
.fly-item>div {
  position: absolute;
  width: 50px;
  height: 50px;
  transition: transform .5s;
}

.fly-item {
  display: none;
  margin: -25px 0 0 -25px;
  transition-timing-function: linear;
  opacity: .5;
}

.fly-item>div {
  transition-timing-function: cubic-bezier(.55, 0, .85, .36);

  // transition-timing-function: ease;
  background: theme('colors.orange.500');
}
</style>
