import type { MaybeComputedElementRef } from '@vueuse/core'
import { unrefElement } from '@vueuse/core'

export function useFly(options: {
  from: MaybeComputedElementRef
  to: MaybeComputedElementRef
  mounted?: MaybeComputedElementRef
  item?: MaybeComputedElementRef
  duration?: number
  xTimingFunction?: string
  yTimingFunction?: string
}) {
  const { from, to, mounted, item, duration = 500, xTimingFunction = 'linear', yTimingFunction = 'cubic-bezier(.55, 0, .85, .36)' } = options

  function createFlyItem(itemEl: HTMLElement | SVGElement | null | undefined) {
    const wrapper = document.createElement('div')
    wrapper.style.position = 'absolute'
    wrapper.style.transitionProperty = 'transform'
    wrapper.style.transitionDuration = `${duration}ms`
    wrapper.style.display = 'none'
    wrapper.style.opacity = '.5'
    wrapper.style.transitionTimingFunction = xTimingFunction

    const inner = document.createElement('div')
    inner.style.position = 'absolute'
    inner.style.transitionProperty = 'transform'
    inner.style.transitionDuration = `${duration}ms`
    inner.style.transitionTimingFunction = yTimingFunction

    if (itemEl) {
      itemEl.style.display = 'none'
      const clonedNode = itemEl.cloneNode(true) as HTMLElement
      clonedNode.style.display = 'block'
      inner.appendChild(clonedNode)
    }

    wrapper.appendChild(inner)

    function mount(element?: HTMLElement | SVGElement | null | undefined) {
      const el = element || document.body
      el.appendChild(wrapper)
      return function dispose() {
        el.removeChild(wrapper)
      }
    }

    return {
      mount,
      wrapper,
      inner,
    }
  }

  function run() {
    const fromEl = unrefElement(from)
    const toEl = unrefElement(to)
    const mountedEl = unrefElement(mounted)
    const itemEl = unrefElement(item)
    const { inner, mount, wrapper } = createFlyItem(itemEl)
    const dispose = mount(mountedEl)

    let isRunning = false
    // 现在按钮距离购物车的距离
    const boundBtn = fromEl!.getBoundingClientRect()
    const boundCart = toEl!.getBoundingClientRect()
    // 中心点的水平垂直距离
    const offsetX = boundCart.left + boundCart.width / 2 - (boundBtn.left + boundBtn.width / 2)
    const offsetY = boundCart.top + boundCart.height / 2 - (boundBtn.top + boundBtn.height / 2)
    // 页面滚动尺寸
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop || 0
    const scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft || 0
    if (isRunning === false) {
    // 购物车图形出现与初始定位
      wrapper.style.display = 'block'
      wrapper.style.left = `${boundBtn.left + scrollLeft + wrapper.clientWidth / 2}px`
      wrapper.style.top = `${boundBtn.top + scrollTop + wrapper.clientHeight / 2}px`
      // 开始动画
      wrapper.style.transform = `translateX(${offsetX}px)`
      inner.style.transform = `translateY(${offsetY}px)`
      // 动画标志量
      isRunning = true
      setTimeout(() => {
        wrapper.style.display = ''
        wrapper.style.transform = 'translateX(0)'
        inner.style.transform = 'translateY(0)'
        isRunning = false
        dispose()
      }, Math.max(duration - 10, 16))
    }
  }

  return {
    run,
  }
}
