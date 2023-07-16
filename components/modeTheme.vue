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
}
.select_mode option {
  text-align: center;
}
.a-country:hover {
  color: white;
  background-color: #091a28;
}

.dark-mode body {
  background-color: #091a28;
  color: #ebf4f1;
}
.dark-mode select {
  border: none;
  background-color: #091a28;
}
.dark-mode .nav-Dis {
  background-color: #091a28;
}
.dark-mode a {
  color: white;
}
.dark-mode .menu-country {
  background-color: white;
}
.dark-mode .a-country:hover {
  background-color: white;
}
.dark-mode .label-register {
  color: white;
}
.dark-mode .input-register {
  border-color: rgb(75 85 99 / var(--tw-border-opacity));
  background-color: rgb(55 65 81 / var(--tw-bg-opacity));
}
.dark-mode .input-register::placeholder {
  color: rgba(255, 255, 255, 0.603);
}
.dark-mode .option-register {
  color: white;
}
.dark-mode footer {
  background-color: #03192b;
}
</style>
