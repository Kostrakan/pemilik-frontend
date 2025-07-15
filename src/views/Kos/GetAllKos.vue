<template>
  <DefaultLayout>
    <main class="pt-24 p-2 max-w-7xl mx-auto">
      <div class="max-w-4xl mx-auto p-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Gambar utama -->
          <img :src="kos.gambar" alt="Gambar Kos" class="w-full h-auto rounded-lg shadow">
          <!-- Informasi Kos -->
          <div>
            <h2 class="text-3xl font-bold mb-2">{{ kos.namaKos }}</h2>
            <p class="text-gray-600 mb-1"><strong>Nama Pemilik:</strong> {{ kos.namaPemilik }}</p>
            <p class="text-gray-600 mb-1"><strong>No HP:</strong> {{ kos.NoHP }}</p>
            <p class="text-gray-600 mb-1"><strong>Alamat:</strong> {{ kos.alamat }}</p>
            <p class="text-gray-600 mb-1"><strong>Luas Kamar:</strong> {{ kos.luasKamar }}</p>
            <p class="text-gray-600 mb-1"><strong>Harga:</strong> Rp{{ kos.harga?.toLocaleString('id-ID') }}/bulan</p>
            <p class="text-gray-600 mb-1"><strong>Kamar Tersedia:</strong> {{ kos.kamarTersedia }}/{{ kos.totalKamar }}</p>
            <p class="text-gray-600 mb-4"><strong>Lokasi:</strong> {{ kos.latitude }}, {{ kos.longitude }}</p>
          </div>
        </div>
        <!-- Garis putus-putus -->
        <hr class="border-t border-dashed border-gray-300 my-4" />
        <!-- Galeri Gambar -->
        <div v-if="kos.gambarLain && kos.gambarLain.length" class="mt-6">
          <h3 class="text-xl font-semibold mb-2">Foto Lainnya:</h3>
          <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
            <img v-for="(img, index) in kos.gambarLain" :key="index" :src="img" class="w-full h-auto rounded shadow">
          </div>
        </div>
        <!-- Garis putus-putus -->
        <hr class="border-t border-dashed border-gray-300 my-4" />
        <!-- Fasilitas -->
        <div class="mt-6">
          <h3 class="text-xl font-semibold mb-2">Fasilitas:</h3>
          <ul class="grid grid-cols-2 gap-2 text-gray-700">
            <li v-for="(item, index) in kos.fasilitas" :key="index">• {{ item }}</li>
          </ul>
        </div>
        <!-- Garis putus-putus -->
        <hr class="border-t border-dashed border-gray-300 my-4" />
        <!-- Daftar Kamar -->
        <div class="mt-6">
          <h3 class="text-xl font-semibold mb-4">Daftar Kamar</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div
              v-for="(item, index) in kamar"
              :key="index"
              class="bg-white border border-gray-200 rounded-lg shadow hover:shadow-md transition duration-200"
            >
              <img
                :src="item.gambar[0] || 'https://via.placeholder.com/400x300?text=No+Image'"
                alt="Gambar Kamar"
                class="w-full h-48 object-cover rounded-t-lg"
              />
              <div class="p-4">
                <h4 class="text-lg font-bold text-gray-800 mb-2">{{ item.namaKamar }}</h4>
                <p class="text-gray-600 mb-1"><strong>Tipe:</strong> {{ item.tipe }}</p>
                <p class="text-gray-600 mb-1"><strong>Harga:</strong> Rp{{ item.harga?.toLocaleString('id-ID') }}/bulan</p>
                <p class="text-gray-600 mb-1"><strong>Status:</strong>
                  <span :class="item.ketersediaan ? 'text-green-600' : 'text-red-500'">
                    {{ item.ketersediaan ? 'Tersedia' : 'Tidak Tersedia' }}
                  </span>
                </p>
                <p class="text-gray-600"><strong>Fasilitas:</strong> {{ item.fasilitas?.join(', ') }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </DefaultLayout>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from '@/lib/axios'
import DefaultLayout from '../../components/DefaultLayout.vue'

const route = useRoute()
const kos = ref({})
const kamar = ref([])

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
</script>
