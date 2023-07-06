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

<script setup>
const colorMode = useColorMode();
console.log(colorMode.preference);
</script>

<style>
body {
  background-color: #fff;
  color: rgba(0, 0, 0, 0.8);
}
.select_mode {
  border: none;
  width: 150px;
  height: 100px;
}
.select_mode option {
  text-align: center;
}

.dark-mode body {
  background-color: #091a28;
  color: #ebf4f1;
}
.dark-mode select {
  border: none;
  background-color: #091a28;
}
</style>
