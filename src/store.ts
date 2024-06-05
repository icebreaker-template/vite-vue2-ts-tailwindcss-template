import { defineStore } from 'pinia'

export const useStore = defineStore('counter', {
  state: () => {
    return { count: 0 }
  },
  getters: {
    double: state => state.count * 2,
  },
  actions: {
    increment() {
      this.count++
    },
  },
})
