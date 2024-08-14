<script setup lang="ts">
import Dexie, { type EntityTable } from 'dexie'
import { useStore } from '../store'
import tailwindcssIcon from '../assets/tailwindcss.svg'

defineProps<{ msg: string }>()

interface Friend {
  id: number
  name: string
  age: number
}

const db = new Dexie('dexie-db') as Dexie & {
  friends: EntityTable<
    Friend,
    'id' // primary key "id" (for the typings only)
  >
  productInventoryCollection: EntityTable<
    Friend,
    'id' // primary key "id" (for the typings only)
  >
}

console.log('Dexie.js phnx db initialized')

// schema definition syntax - http://dexie.org/docs/Version/Version.stores()
// NOTE: New versions MUST be placed after existing versions due to logic in Dexie
// db.version(1).stores({
//   products: 'id, defaultPrices.retailPrice.price, depth, description, express_item, height, length, name, sku, weight, brand',
// })

db.version(2).stores({
  products: 'id, brand, defaultPrices.retailPrice.price, *edges.category, sku,ooo,ccc',
})

db.version(4).stores({
  products: 'id, brand, defaultPrices.retailPrice.price, *edges.category, sku,ooo,ddd,oaoa',
})

db.version(3).stores({
  productsCollection: 'id, brand, defaultPrices.retailPrice.price, *edges.category, sku',
  productInventoryCollection: 'productId',
})

db.version(4).stores({
  productsCollection: 'id, brand, defaultPrices.retailPrice.price, *edges.category, sku',
  productOptionsCollection: 'variantKey',
  productInventoryCollection: 'productId',
})

console.log(db.productInventoryCollection.add({
  productId: '11',
}))
// @ts-ignore
console.log(db.products.add({
  id: '11',
  ccc: 111,
}))

// db.friends.

// @ts-ignore
// db.products.bulkPut([
//   {
//     id: 1,
//   },

// ])

const store = useStore()
</script>

<template>
  <div class="space-y-2 text-center">
    <h1>{{ msg }}</h1>
    <img class="w-8" :src="tailwindcssIcon">
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

<style lang="scss"></style>
