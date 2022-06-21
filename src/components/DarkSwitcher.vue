<script setup lang='ts'>
const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <button
    i-carbon-sun dark:i-carbon-moon
    text-3xl
    @click="toggleDark()"
  >
    <!-- {{ isDark ? 'Dark' : 'Light' }} -->
  </button>
</template>

<style scoped lang='scss'>
</style>
