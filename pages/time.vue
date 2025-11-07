<template>
  <div style="font-family: sans-serif; padding: 20px">
    <h1>Nuxt 3 ISR Demo</h1>
    <p><strong>Server Time:</strong> {{ data?.time }}</p>
    <p><em>Refreshed via ISR every 10 seconds</em></p>
  </div>
</template>

<script setup lang="ts">
const { data } = await useAsyncData("server-time", () => $fetch("/api/time"))
</script>
