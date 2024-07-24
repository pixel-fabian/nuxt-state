<script setup lang="ts">
import Navigation from "./base/components/Navigation.vue";
</script>

<template>
  <div>
    <Navigation></Navigation>
    <NuxtLayout>
      <Suspense>
        <NuxtPage />
      </Suspense>
    </NuxtLayout>
  </div>
</template>

<style>
.links {
  width: 600px;
  display: flex;
  justify-content: space-between;
}
</style>
