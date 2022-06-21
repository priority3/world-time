<script setup lang="ts">
import Fuse from 'fuse.js';
import type { Timezone } from '../types';
import { timezones } from '../composables/data';

const fuse = new Fuse(timezones, {
  keys: ['name']
})

let input = ref('')
let index = ref(0)
const zones = ref<Timezone[]>([])
const searchResult = computed(() => {
  return fuse.search(input.value)
})

function add(item: Timezone) {
  zones.value.push(item)
}

</script>

<template>
  <pre>{{ zones }}</pre>
  <input v-model="input" type="text" @keydown.enter="" />
  <div v-show="input">
    <button v-for="i of searchResult" :key="i.refIndex" flex w-full px-2 pb-1 hover="bg-gray/50" border="~ base rounded"
      shadow bg-base max-h-100 overflow-auto @click="add(i.item)">
      <div w-10>
        {{ i.item.offset }}
      </div>
      <div>
        {{ i.item.name }}
      </div>
    </button>

  </div>
</template>

<style lang="scss" scoped>
</style>
