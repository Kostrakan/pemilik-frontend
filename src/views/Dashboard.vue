<template>
  <DefaultLayout>
    <main class="min-h-screen pt-24 p-4 max-w-7xl mx-auto">
      <div class="relative mb-8 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 rounded-3xl p-8 text-white overflow-hidden">
        <div class="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -mr-32 -mt-32"></div>
        <div class="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full -ml-24 -mb-24"></div>
        
        <div class="relative z-10">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">
            Selamat Datang di
            <span class="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
              Kostrakan
            </span>
          </h1>
          <p class="text-xl text-blue-100 mb-6">Kelola properti kos Anda dengan mudah dan efisien</p>
          <div class="flex flex-wrap gap-4">
            <RouterLink :to="`/kos/tambah`" class="bg-white/20 backdrop-blur-md border border-white/30 px-6 py-3 rounded-xl text-white font-semibold hover:bg-white/30 transition-all duration-300 flex items-center gap-2">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
              </svg>
              Tambah Kos Baru
            </RouterLink>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div class="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
          <div class="relative p-6">
            <div class="flex items-center justify-between mb-4">
              <div class="p-3 bg-blue-100 rounded-xl">
                <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                </svg>
              </div>
            </div>
            <h3 class="text-sm font-medium text-gray-600 mb-1">Total Kos</h3>
            <p class="text-3xl font-bold text-gray-900 mb-2">{{ kosList.length }}</p>
            <div class="flex items-center text-sm text-green-600">
            </div>
          </div>
        </div>
        <div class="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-br from-purple-500 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
          <div class="relative p-6">
            <div class="flex items-center justify-between mb-4">
              <div class="p-3 bg-purple-100 rounded-xl">
                <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"></path>
                </svg>
              </div>
            </div>
            <h3 class="text-sm font-medium text-gray-600 mb-1">Total Kamar</h3>
            <p class="text-3xl font-bold text-gray-900 mb-2">{{ totalKamar }}</p>
            <div class="flex items-center text-sm text-blue-600">
            </div>
          </div>
        </div>
        <div class="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-br from-pink-500 to-rose-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
          <div class="relative p-6">
            <div class="flex items-center justify-between mb-4">
              <div class="p-3 bg-pink-100 rounded-xl">
                <svg class="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>
              </div>
            </div>
            <h3 class="text-sm font-medium text-gray-600 mb-1">Total Favorit</h3>
            <p class="text-3xl font-bold text-gray-900 mb-2">{{ totalFavorite }}</p>
            <div class="flex items-center text-sm text-pink-600">
            </div>
          </div>
        </div>
        <div class="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
          <div class="relative p-6">
            <div class="flex items-center justify-between mb-4">
              <div class="p-3 bg-green-100 rounded-xl">
                <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
            </div>
            <h3 class="text-sm font-medium text-gray-600 mb-1">Pengguna Menyukai</h3>
            <p class="text-3xl font-bold text-gray-900 mb-2">{{ totalUserFavorit }}</p>
          </div>
        </div>
      </div>
    </main>
  </DefaultLayout>
  <Footer></Footer>
</template>

<script setup>
import { computed } from 'vue';
import Footer from "../components/Footer.vue";
import DefaultLayout from '@/components/DefaultLayout.vue'
import axios from '@/lib/axios'
import { ref, onMounted } from 'vue'
import { jwtDecode } from "jwt-decode";

const kosList = ref([])
const totalUserFavorit = ref(0)
const totalFavorite = ref(0)

const totalKamar = computed(() => {
  return (kosList.value || []).reduce((total, kos) => total + (kos.totalKamar || 0), 0);
});

onMounted(async () => {
  try {
    const token = localStorage.getItem('token')
    if (!token) {
      console.error("Token tidak ditemukan");
      return;
    }

    const decoded = jwtDecode(token);
    const userId = decoded.id;

    if (!userId) {
      console.error("User belum login atau ID tidak ditemukan.");
      return;
    }

    const response = await axios.get(`/kos/by-user/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.data && response.data.kos){
      if(Array.isArray(response.data.kos)) {
        kosList.value = response.data.kos;
        totalFavorite.value = response.data.totalFavorite || 0;
        totalUserFavorit.value = response.data.totalUserFavorit || 0;
      } else {
        kosList.value = [];
        console.warn("Response data.kos bukan array:", response.data.kos);
      }
    } else {
      kosList.value = [];
      console.warn("Response data tidak memiliki properti kos:", response.data);
    }
  } catch (error) {
    console.error('Gagal memuat data:', error)
    kosList.value = [];
  }
})
</script>