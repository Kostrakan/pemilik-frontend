<template>
  <nav class="fixed top-0 w-full bg-white text-gray-800 shadow-md">
    <div class="container mx-auto flex justify-between items-center px-5 py-5">
      
      <!-- Logo / Judul -->
      <h1 class="text-3xl font-bold text-blue-600">Kostrakan</h1>

      <!-- Tombol Aksi -->
      <div class="flex space-x-4">
        <router-link to="/login" class="bg-blue-600 text-white px-4 py-2 rounded-xl text-m hover:bg-blue-700 transition font-bold font-sans">
          Login
        </router-link>
        <router-link to="/register" class="bg-blue-600 text-white px-4 py-2 rounded-xl text-m hover:bg-blue-700 transition font-bold font-sans">
          Register
        </router-link>
      </div>
      
    </div>
  </nav>
</template>

<script setup>
import ToggleDark from './ToggleDark.vue';

// Tidak ada komponen tambahan yang diimpor
</script>

<style scoped>
/* Tambahan styling jika dibutuhkan nanti */
</style>
