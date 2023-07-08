<script setup lang="ts">
import Footer from "./Footer.vue";
import Header from "./Header.vue";
</script>
<template>
  <div>
    <Header />
    <main>
      <div class="default">
        <slot />
      </div>
    </main>
    <Footer  />
  </div>
</template>
<style>
nav,
footer {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
}
.layouts {
  padding: 1rem;
}
</style>
