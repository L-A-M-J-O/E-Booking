<script setup lang="ts">
import Footer from "./Footer.vue";
import Header from "./Header.vue";
</script>
<template>
  <div class="w-full h-screen">
    <section>
      <Header class="mt-2" />
      <main class="mt-6">
        <div class="default">
          <slot />
        </div>
      </main>
    </section>
    <Footer  />
  </div>
</template>
<style>
.layouts {
  padding: 1rem;
  background-color: #041d2c;
}
</style>
