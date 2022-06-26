<script setup lang='ts'>
import type { Timezone } from '@/types'
const { timezone } = defineProps<{
  timezone: Timezone
}>()
const formatter = new Intl.DateTimeFormat('en-US', {
  timeZone: timezone.name,
  minute: 'numeric',
  hour: 'numeric',
})
const state = $computed(() => {
  return timezone.name.split('/')[0].replace(/_/g, ' ')
})
const city = $computed(() => timezone.name.split('/')[1]?.replace(/_/g, ' ') || '')
const offset = $computed(() => timezone.offset > 0 ? `+${timezone.offset}` : timezone.offset)
const time = $computed(() => formatter.format(now.value))
</script>

<template>
  <div
    flex="~" gap-2 items-center justify-start flex-wrap
  >
    <div w-8 op50 font-bold ma text-center>
      {{ offset }}
    </div>
    <div w-30 flex="~ col" text-left flex-auto pb2>
      <div>
        {{ city }}
        <sup border="~ base rounded" px1>
          {{ timezone.abbr }}
        </sup>
      </div>
      <div op50 text-sm leading-1em>
        {{ state }}
      </div>
    </div>
    <div tabular-nums>
      {{ time }}
    </div>
    <slot />
  </div>
</template>

<style scoped lang='scss'>
</style>
