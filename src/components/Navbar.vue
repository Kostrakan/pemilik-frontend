<template>
  <nav class="fixed top-0 w-full bg-white text-gray-800 shadow-md z-50">
    <div class="container mx-auto flex items-center px-6 py-4">
      <!-- Kiri: Logo dan Judul -->
      <div class="flex items-center space-x-4 flex-1">
        <img src="../assets/logo.png" alt="Logo" class="w-12 h-12 object-contain" />
        <h1 class="text-2xl font-bold text-blue-600">Kostrakan</h1>
      </div>

      <!-- Tengah: Navigasi -->
      <div class="flex justify-center space-x-6 flex-1">
        <router-link to="/dashboard" class="flex items-center space-x-1 hover:underline">
          <HomeIcon class="w-5 h-5" />
          <span>Home</span>
        </router-link>
        <router-link to="/kos" class="flex items-center space-x-1 hover:underline">
          <Building2 class="w-5 h-5" />
          <span>Kelola Kos</span>
        </router-link>
      </div>

      <!-- Kanan: Logout -->
      <div class="flex justify-end flex-1">
        <button
          @click="handleLogout"
          class="flex items-center space-x-1 text-red-600 hover:underline font-semibold"
        >
          <LogOut class="w-5 h-5" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { LogOut, Home as HomeIcon, Building2 } from 'lucide-vue-next'
import Swal from 'sweetalert2'
import { useRouter } from 'vue-router'

const router = useRouter()

function handleLogout() {
  Swal.fire({
    title: 'Keluar?',
    text: 'Apakah Anda yakin ingin logout?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Ya, logout!',
    cancelButtonText: 'Batal'
  }).then((result) => {
    if (result.isConfirmed) {
      localStorage.removeItem('token')
      router.push('/')
      Swal.fire('Berhasil Logout', 'Anda telah keluar dari website.', 'success')
    }
  })
}
</script>

<style scoped>
body {
  padding-top: 80px;
}
</style>
