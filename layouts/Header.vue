<script setup lang="ts">
import { useI18n } from "~/.nuxt/imports";
const { locale } = useI18n();
</script>
<template>
  <div>
    <form>
      <select v-model="locale">
        <option value="es">es</option>
        <option value="en">en</option>
        <option value="fr">fr</option>
      </select>
      <p>{{ $t("welcome") }}</p>
    </form>
    <h1>Header</h1>
  </div>
</template>
