import type { Timezone } from '../types';

export const zoneNames = ref<Timezone[]>([])

export function addToTimezone(timezone: Timezone) {
  zoneNames.value.push(timezone)
}
