<script setup lang='ts'>
import { format } from 'date-fns'
import type { Timezone } from '../types'
const { timezone } = defineProps<{
  timezone: Timezone
}>()

const hours = $computed(() => Array.from({ length: 24 }, (_, i) => {
  return i + timezone.offset + 1
}))

const days = $computed(() =>
  [
    hours.filter(i => i < 0).map(item => (item + 24) % 24),
    hours.filter(i => i >= 0 && i < 24).map(item => (item + 24) % 24),
    hours.filter(i => i >= 24).map(item => item % 24),
  ],
)
function isMidnight(num: number) {
  return num <= 5 || num >= 22
}
function isNight(num: number) {
  return num <= 7 || num >= 18
}
</script>

<template>
  <div flex of-auto>
    <template
      v-for="day, idx of days"
      :key="idx"
    >
      <div
        v-if="day.length"
        flex="~"
        border="~ base rounded"
        of-hidden flex-none ma1
      >
        <div
          flex="~"
          items-center justify-center
          of-auto border="b t base"
        >
          <div
            v-for="i of day"
            :key="i"
            flex="~"
            items-center justify-center
            w7 h8 flex-none
            :class="[
              isMidnight(i) ? 'bg-sky7/70 text-white'
              : isNight(i) ? 'bg-sky/20' : '',
            ]"
          >
            <div v-if="i">
              {{ i }}
            </div>
            <div v-else text-xs leading-1em text-center>
              {{ format(now.value, 'MMM') }}
              {{ format(now.value, 'dd') }}
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<style scoped lang='scss'>
</style>
