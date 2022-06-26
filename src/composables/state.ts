import type { Timezone } from '../types'
const userTimezone = new window.Intl.DateTimeFormat().resolvedOptions().timeZone
export const now = useNow({
  interval: 30 * 1000,
})
export const zoneNames = useStorage<string[]>('world-time-zones', [])
export const currentZone = ref(userTimezone)
export const currentOffset = computed(() => timezones.find(i => i.name === currentZone.value).offset)
export const zones = computed(() => zoneNames.value.map(name => timezones.find(i => i.name === name)))
export function addToTimezone(timezone: Timezone) {
  zoneNames.value.push(timezone.name)
}
/**
 * 删除timezone
 * @param timeZone
 */
export function removeZone(timeZone: Timezone) {
  const ind = zoneNames.value.indexOf(timeZone.name)
  if (ind !== -1)
    zoneNames.value.splice(ind, 1)
}
/**
 * 移动timezone
 * @param timeZone
 * @param num
 */
export function moveZone(timeZone: Timezone, num: number) {
  const ind = zoneNames.value.indexOf(timeZone.name)
  if (ind === -1)
    return
  const swapInd = ind + num
  const temp = zoneNames.value[swapInd]
  zoneNames.value[swapInd] = timeZone.name
  zoneNames.value[ind] = temp
}

if (!zoneNames.value.length)
  zoneNames.value.push(userTimezone)

