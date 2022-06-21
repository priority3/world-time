<script setup lang="ts">
import Fuse from 'fuse.js'
import type { Timezone } from '../types'

const fuse = new Fuse(timezones, {
  keys: ['name'],
})

let input = $ref('')
let index = $ref(0)
const searchResult = computed(() => {
  return fuse.search(input)
})
function add(timezone: Timezone) {
  addToTimezone(timezone)
  input = ''
  index = 0
}
</script>

<template>
  <div relative>
    <input
      v-model="input" type="text" placeholder="Search timezone..."
      w-full px3 py2 border="~ base rounded"
      bg-transparent
    >
    <div v-show="input" absolute top-full left-0 right-0 bg-gray-900>
      <button
        v-for="i of searchResult" :key="i.refIndex"
        flex w-full px-2 pb-1 hover="bg-gray/50"
        border="~ base rounded" shadow bg-base max-h-100 overflow-auto
        @click="add(i.item)"
      >
        <div w-10>
          {{ i.item.offset }}
        </div>
        <div>
          {{ i.item.name }}
        </div>
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
</style>
