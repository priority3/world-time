<script setup lang="ts">
</script>

<template>
  <div p4>
    <div
      v-for="zone of zoneNames.value"
      :key="zone.name"
    >
      <TimezoneItem :timezone="zone" />
    </div>
  </div>
</template>
