<template>
  <NuxtLayout class="p-0 m-0">
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup lang="ts">
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'
onMounted(() => {
    initFlowbite();
})
</script>
<style>
@import './assets/css/main.css';
</style>