<template>
  <div style="font-family: sans-serif; padding: 20px">
    <h1>Nuxt 3 ISR Demo</h1>
    <p><strong>Server Time:</strong> {{ data?.time }}</p>
    <p><em>Refreshed via ISR every 1800 seconds</em></p>
    <p>
      <em>当前时间：{{ new Date().toLocaleString() }}</em>
    </p>
  </div>
</template>

<script setup lang="ts">
const { data } = await useAsyncData("server-time", () => $fetch("/api/time"))
</script>
