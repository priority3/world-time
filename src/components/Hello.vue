<script setup lang="ts">
const props = defineProps<{
  name: string
}>()
const upperCase = computed(() => props.name.toUpperCase())
</script>

<template>
  <div text="red 3xl" font-sans>
    hello,{{ upperCase }}
  </div>
  <div i-carbon-bee text-5xl text-green />
</template>

<style lang="scss" scoped>
</style>
