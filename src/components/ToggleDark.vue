<template>
  <label class="flex items-center cursor-pointer space-x-3">
    <div class="relative">
      <input type="checkbox" class="sr-only" v-model="isDarkMode" @change="toggleDarkMode" />
      <div class="block bg-gray-300 w-14 h-8 rounded-full"></div>
      <div
        class="dot absolute left-1 top-1 bg-blue-600 w-6 h-6 rounded-full transition"
        :class="{ 'translate-x-6': isDarkMode }"
      ></div>
    </div>
    <span class="font-sans font-bold text-m text-gray-800 dark:text-white">
      {{ isDarkMode ? 'Dark Mode' : 'Light Mode' }}
    </span>
  </label>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'

const isDarkMode = ref(false)

const toggleDarkMode = () => {
  document.documentElement.classList.toggle('dark', isDarkMode.value)
  localStorage.setItem('theme', isDarkMode.value ? 'dark' : 'light')
}

onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme === 'dark') {
    isDarkMode.value = true
    document.documentElement.classList.add('dark')
  }
})
</script>

<style scoped>
.dot {
  transform: translateX(0);
}
.translate-x-6 {
  transform: translateX(1.5rem); /* 6 * 0.25rem = 1.5rem */
}
</style>
