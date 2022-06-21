<script setup lang="ts">
const props = defineProps<{
  name: string
}>()
const upperCase = computed(() => props.name.toUpperCase())
</script>

<template>
  <div>
    hello,{{ upperCase }}
  </div>
</template>


<style lang="scss" scoped>
</style>
