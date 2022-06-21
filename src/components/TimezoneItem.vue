<script setup lang='ts'>
import type { Timezone } from '@/types'
const { timezone } = defineProps<{
  timezone: Timezone
}>()

const state = $computed(() => timezone.name.split('/')[0])
const city = $computed(() => timezone.name.split('/')[1])
const offset = $computed(() => timezone.offset > 0 ? `+${timezone.offset}` : timezone.offset)
</script>

<template>
  <div
    flex="~" gap-2 items-center justify-start
  >
    <div w-8 op50 font-bold ma text-center>
      {{ offset }}
    </div>
    <div w-30 flex="~ col" text-left flex-auto pb2>
      <div>
        {{ city }}
      </div>
      <div op50 text-sm leading-1em>
        {{ state }}
      </div>
    </div>
  </div>
</template>

<style scoped lang='scss'>
</style>
