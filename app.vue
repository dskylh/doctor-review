<script setup lang="ts">
const colorMode = useColorMode();
colorMode.preference = "cupcake";
</script>
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
