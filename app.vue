<script setup lang="ts">
</script>

<template>
  <div>
    <div class="links">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/app-1/">App1-Index</NuxtLink>
      <NuxtLink to="/app-1/page2">App1-Page2</NuxtLink>
      <NuxtLink to="/app-2/">App2-Index</NuxtLink>
      <NuxtLink to="/app-2/page2">App2-Page2</NuxtLink>
    </div>
    <NuxtPage />
  </div>


</template>

<style>
.links {
  width: 600px;
  display: flex;
  justify-content: space-between;
}
</style>