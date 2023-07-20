<script setup lang="ts">
const colorMode = useColorMode();
console.log(colorMode.preference);
</script>
<template>
  <div>
    <select
      class="select_mode font-semibold hover:font-bold"
      v-model="$colorMode.preference"
    >
      <option value="system">
        <span class="text-xl hover:text-lg">System</span>
      </option>
      <option value="light">ligth</option>
      <option value="dark">Dark</option>
    </select>
  </div>
</template>
