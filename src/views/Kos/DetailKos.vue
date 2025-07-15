<template>
  <DefaultLayout>
    <main class="min-h-screen pt-20">
      <div class="mb-6">
        <button 
          @click="router.back()"
          class="inline-flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
          </svg>
          Kembali
        </button>
      </div>
      <div class="max-w-6xl mx-auto p-6">
        <div class="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 rounded-3xl overflow-hidden mb-8 shadow-2xl">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <!-- Image Section -->
            <div class="relative h-96 lg:h-auto">
              <img 
                :src="kos.gambar" 
                alt="Gambar Kos" 
                class="w-full h-full object-cover"
              />
              <div class="absolute inset-0 bg-black/30"></div>
              
              <!-- Type Badge -->
              <div class="absolute top-6 left-6">
                <span class="inline-flex items-center px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-semibold text-gray-800">
                  {{ kos.tipeKos }}
                </span>
              </div>
            </div>
            
            <!-- Content Section -->
            <div class="p-8 text-white">
              <h1 class="text-4xl font-bold mb-4">{{ kos.namaKos }}</h1>
              
              <!-- Owner Info -->
              <div v-if="kos.user?.[0]" class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-6">
                <h3 class="text-lg font-semibold mb-3 flex items-center gap-2">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                  Informasi Pemilik
                </h3>
                <p class="text-blue-100 mb-2">
                  <span class="font-medium">Nama:</span> {{ kos.user[0].namalengkap }}
                </p>
                <p class="text-blue-100">
                  <span class="font-medium">No HP:</span> {{ kos.user[0].noHP }}
                </p>
              </div>
              
              <!-- Location -->
              <div class="flex items-start gap-3 mb-6">
                <svg class="w-5 h-5 text-blue-200 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <p class="text-blue-100">{{ kos.alamat }}</p>
              </div>
              
              <!-- Room Stats -->
              <div class="grid grid-cols-2 gap-4 mb-6">
                <div class="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                  <p class="text-2xl font-bold">{{ kos.totalKamar }}</p>
                  <p class="text-sm text-blue-200">Total Kamar</p>
                </div>
                <div class="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                  <p class="text-2xl font-bold text-green-300">{{ kos.kamarTersedia }}</p>
                  <p class="text-sm text-blue-200">Tersedia</p>
                </div>
              </div>
              
              <!-- Action Buttons -->
              <div class="flex flex-col sm:flex-row gap-4">
                <router-link 
                  :to="`/updatekos/${kos._id}`" 
                  class="flex-1 bg-white/20 backdrop-blur-sm border border-white/30 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300 text-center flex items-center justify-center gap-2"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
                  </svg>
                  Update Kos
                </router-link>
                <button
                  @click="confirmDelete"
                  class="flex-1 bg-red-500/20 backdrop-blur-sm border border-red-400/50 text-red-200 px-6 py-3 rounded-xl font-semibold hover:bg-red-500/30 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                  </svg>
                  Hapus
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Facilities Section -->
        <div class="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div class="flex items-center gap-3 mb-6">
            <div class="p-3 bg-blue-100 rounded-xl">
              <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h2 class="text-2xl font-bold text-gray-900">Fasilitas</h2>
          </div>
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div 
              v-for="(item, index) in kos.fasilitas" 
              :key="index"
              class="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
            >
              <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span class="text-gray-700 font-medium">{{ item }}</span>
            </div>
          </div>
        </div>
        <div class="bg-white rounded-2xl shadow-lg p-8">
          <div class="flex items-center justify-between mb-6">
            <div class="flex items-center gap-3">
              <div class="p-3 bg-purple-100 rounded-xl">
                <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"></path>
                </svg>
              </div>
              <h2 class="text-2xl font-bold text-gray-900">Daftar Kamar</h2>
            </div>
            <span class="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-600">
              {{ kamar.length }} kamar
            </span>
          </div>
          
          <div v-if="kamar.length === 0" class="text-center py-12">
            <div class="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"></path>
              </svg>
            </div>
            <p class="text-gray-500 text-lg">Belum ada kamar yang terdaftar</p>
          </div>
          
          <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div
              v-for="(item, index) in kamar"
              :key="index"
              @click="goToDetail(item._id)"
              class="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
            >
              <div class="relative">
                <img
                  :src="item.gambar[0] || 'https://via.placeholder.com/400x300?text=No+Image'"
                  alt="Gambar Kamar"
                  class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div class="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
                
                <!-- Status Badge -->
                <div class="absolute top-4 right-4">
                  <span :class="[
                    'inline-flex items-center px-3 py-1 rounded-full text-sm font-medium',
                    item.ketersediaan 
                      ? 'bg-green-500/90 text-white' 
                      : 'bg-red-500/90 text-white'
                  ]">
                    {{ item.ketersediaan ? 'Tersedia' : 'Tidak Tersedia' }}
                  </span>
                </div>
              </div>
              
              <div class="p-6">
                <h3 class="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {{ item.namaKamar }}
                </h3>
                
                <div class="space-y-2 mb-4">
                  <div class="flex items-center gap-2">
                    <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path>
                    </svg>
                    <span class="text-sm text-gray-600">{{ item.tipe }}</span>
                  </div>
                  
                  <div class="flex items-center gap-2">
                    <span class="text-lg font-bold text-green-600">
                      Rp{{ item.harga?.toLocaleString('id-ID') }}/bulan
                    </span>
                  </div>
                </div>
                
                <!-- Facilities -->
                <div class="mb-4">
                  <p class="text-sm text-gray-500 mb-2">Fasilitas:</p>
                  <div class="flex flex-wrap gap-2">
                    <span 
                      v-for="facility in item.fasilitas?.slice(0, 3)" 
                      :key="facility"
                      class="inline-flex items-center px-2 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full"
                    >
                      {{ facility }}
                    </span>
                    <span 
                      v-if="item.fasilitas?.length > 3"
                      class="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full"
                    >
                      +{{ item.fasilitas.length - 3 }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </DefaultLayout>
  <Footer></Footer>
</template>

<script setup>
import Footer from '../../components/Footer.vue'
import Swal from 'sweetalert2'
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import axios from '@/lib/axios'
import DefaultLayout from '../../components/DefaultLayout.vue'

const route = useRoute()
const router = useRouter()
const kos = ref({})
const kamar = ref([])

function goToDetail(id) {
  router.push(`/kamar/${id}`)
}

onMounted(async () => {
  try {
    const token = localStorage.getItem('token')

    const res = await axios.get(`/kos/${route.params.id}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    })
    kos.value = res.data

    const rooms = await axios.get(`/rooms/by-kos/${route.params.id}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    })
    kamar.value = rooms.data
  } catch (err) {
    console.error('Gagal memuat detail kos:', err)
  }
})

const kosId = ref(`/kos/${route.params.id}`)

const confirmDelete = async () => {
  const result = await Swal.fire({
    title: 'Yakin ingin menghapus?',
    text: 'Data kos ini akan dihapus secara permanen.',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Ya, hapus!',
    cancelButtonText: 'Batal',
    confirmButtonColor: '#d33',
    cancelButtonColor: '#3085d6',
    customClass: {
      popup: 'rounded-2xl',
      confirmButton: 'rounded-xl',
      cancelButton: 'rounded-xl'
    }
  })

  if (result.isConfirmed) {
    try {
      const token = localStorage.getItem('token')
      await axios.delete(kosId.value, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      await Swal.fire({
        title: 'Dihapus!',
        text: 'Data kos berhasil dihapus.',
        icon: 'success',
        customClass: {
          popup: 'rounded-2xl',
          confirmButton: 'rounded-xl'
        }
      })
      router.push('/kos')
    } catch (error) {
      console.error(error)
      Swal.fire({
        title: 'Gagal!',
        text: 'Gagal menghapus data kos.',
        icon: 'error',
        customClass: {
          popup: 'rounded-2xl',
          confirmButton: 'rounded-xl'
        }
      })
    }
  }
}
</script>