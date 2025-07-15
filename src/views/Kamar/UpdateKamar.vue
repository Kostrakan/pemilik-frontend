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
      <div class="max-w-6xl mx-auto px-4 py-8">
        <!-- Header Section -->
        <div class="text-center mb-12">
          <div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-4">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
            </svg>
          </div>
          <h1 class="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
            Perbaharui Informasi Kamar
          </h1>
          <p class="text-gray-600 text-lg">
            Lengkapi informasi kamar Anda dengan mudah
          </p>
        </div>

        <!-- Loading State -->
        <div v-if="loading" class="flex justify-center items-center h-32">
          <div class="bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
            <div class="flex items-center gap-3">
              <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
              <div class="text-lg text-gray-600">Memuat data kamar...</div>
            </div>
          </div>
        </div>

        <!-- Form Container -->
        <div v-else class="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
          <div class="bg-gradient-to-r from-blue-500 to-purple-600 h-2"></div>

          <form @submit.prevent="submitKamar" class="p-8 lg:p-12">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <!-- Left Column -->
              <div class="space-y-6">
                <!-- Basic Info Section -->
                <div class="bg-gray-50 rounded-2xl p-6">
                  <h3 class="text-xl font-semibold text-gray-800 mb-6 flex items-center">
                    <div class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                      <span class="text-white text-sm font-bold">1</span>
                    </div>
                    Informasi Dasar
                  </h3>

                  <div class="space-y-4">
                    <div class="form-group">
                      <label class="form-label">Nama Kamar</label>
                      <input
                        v-model="form.namaKamar"
                        type="text"
                        class="form-input"
                        placeholder="Masukkan nama kamar"
                        required
                      />
                    </div>

                    <div class="form-group">
                      <label class="form-label">Tipe Kamar</label>
                      <input
                        v-model="form.tipe"
                        type="text"
                        class="form-input"
                        placeholder="Masukkan tipe kamar"
                        required
                      />
                    </div>

                    <div class="form-group">
                      <label class="form-label">Harga per Bulan</label>
                      <div class="relative">
                        <span class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">Rp</span>
                        <input
                          v-model.number="form.harga"
                          type="number"
                          class="form-input pl-12"
                          placeholder="0"
                          min="0"
                          required
                        />
                      </div>
                    </div>

                    <div class="form-group">
                      <label class="form-label">Ketersediaan</label>
                      <select v-model="form.ketersediaan" class="form-select" required>
                        <option :value="true">✅ Tersedia</option>
                        <option :value="false">❌ Tidak Tersedia</option>
                      </select>
                    </div>
                  </div>
                </div>

                <!-- Facilities Section -->
                <div class="bg-green-50 rounded-2xl p-6">
                  <h3 class="text-xl font-semibold text-gray-800 mb-6 flex items-center">
                    <div class="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                      <span class="text-white text-sm font-bold">2</span>
                    </div>
                    Fasilitas Kamar
                  </h3>

                  <div class="space-y-4">
                    <div class="form-group">
                      <label class="form-label">Fasilitas</label>
                      <input
                        v-model="fasilitasInput"
                        type="text"
                        class="form-input"
                        placeholder="AC, Lemari, Kasur, Meja Belajar (pisahkan dengan koma)"
                      />
                      <p class="text-sm text-gray-500 mt-1">
                        Pisahkan setiap fasilitas dengan koma
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Right Column -->
              <div class="space-y-6">
                <!-- Images Section -->
                <div class="bg-orange-50 rounded-2xl p-6">
                  <h3 class="text-xl font-semibold text-gray-800 mb-6 flex items-center">
                    <div class="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                      <span class="text-white text-sm font-bold">3</span>
                    </div>
                    Foto Kamar
                  </h3>

                  <!-- Existing Images -->
                  <div v-if="form.gambar && form.gambar.length > 0" class="mb-6">
                    <h4 class="text-lg font-medium text-gray-700 mb-4">Gambar Saat Ini</h4>
                    <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-4">
                      <div v-for="(url, index) in form.gambar" :key="index" class="relative group">
                        <img
                          :src="url"
                          alt="Gambar Kamar"
                          class="w-full h-32 object-cover rounded-lg border-2 border-gray-200 group-hover:border-red-300 transition-colors"
                        />
                        <button
                          type="button"
                          @click="removeOldImage(index)"
                          class="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-red-600 transition-colors shadow-lg"
                        >
                          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div class="bg-blue-50 border border-blue-200 rounded-lg p-3">
                      <p class="text-blue-800 text-sm font-medium">
                        📸 {{ form.gambar.length }} gambar akan dipertahankan
                      </p>
                      <p class="text-blue-600 text-xs mt-1">
                        Upload gambar baru untuk menambah atau mengganti
                      </p>
                    </div>
                  </div>

                  <!-- New Images Upload -->
                  <div class="form-group">
                    <label class="form-label">Upload Gambar Baru (Opsional)</label>
                    <div class="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-orange-400 transition-colors">
                      <input
                        ref="fileInput"
                        type="file"
                        @change="handleFileUpload"
                        accept="image/jpeg,image/jpg,image/png"
                        multiple
                        class="hidden"
                        id="file-upload"
                      />
                      <label for="file-upload" class="cursor-pointer">
                        <svg class="w-12 h-12 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        <p class="text-gray-600 mb-2">
                          Klik untuk menambah gambar
                        </p>
                        <p class="text-sm text-gray-500">JPEG, JPG, PNG (Max 5MB)</p>
                      </label>
                    </div>
                    <p class="text-sm text-gray-500 mt-1">
                      Kosongkan jika ingin mempertahankan gambar lama
                    </p>
                  </div>

                  <!-- New Images Preview -->
                  <div v-if="newImagePreviews.length > 0" class="mt-6">
                    <h4 class="text-lg font-medium text-gray-700 mb-4">Preview Gambar Baru</h4>
                    <div class="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      <div v-for="(preview, index) in newImagePreviews" :key="index" class="relative group">
                        <img
                          :src="preview"
                          alt="Preview"
                          class="w-full h-32 object-cover rounded-lg border-2 border-blue-300 group-hover:border-red-300 transition-colors"
                        />
                        <button
                          type="button"
                          @click="removeNewImage(index)"
                          class="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-red-600 transition-colors shadow-lg"
                        >
                          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Status Card -->
                <div class="bg-purple-50 rounded-2xl p-6">
                  <h3 class="text-xl font-semibold text-gray-800 mb-6 flex items-center">
                    <div class="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                      <span class="text-white text-sm font-bold">4</span>
                    </div>
                    Status Kamar
                  </h3>

                  <div class="space-y-4">
                    <div class="bg-white rounded-lg p-4 border-2 border-purple-200">
                      <div class="flex items-center justify-between">
                        <div class="flex items-center gap-3">
                          <div class="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                            <svg class="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                          </div>
                          <div>
                            <h4 class="font-medium text-gray-800">Status Ketersediaan</h4>
                            <p class="text-sm text-gray-600">
                              {{ form.ketersediaan ? 'Kamar tersedia untuk disewa' : 'Kamar tidak tersedia' }}
                            </p>
                          </div>
                        </div>
                        <div class="text-right">
                          <span :class="form.ketersediaan ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'" class="px-3 py-1 rounded-full text-sm font-medium">
                            {{ form.ketersediaan ? 'Tersedia' : 'Tidak Tersedia' }}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="mt-12 text-center">
              <button
                type="submit"
                :disabled="submitting"
                class="btn-primary px-12 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                <span class="flex items-center justify-center gap-3">
                  <svg v-if="submitting" class="animate-spin w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
                  </svg>
                  <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {{ submitting ? 'Menyimpan...' : 'Perbarui Kamar' }}
                </span>
              </button>
            </div>
          </form>
        </div>

        <div class="mt-8 space-y-4">
          <div
            v-if="successMessage"
            class="bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-2xl flex items-center gap-3 animate-pulse"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            {{ successMessage }}
          </div>

          <div
            v-if="errorMessage"
            class="bg-red-100 border border-red-400 text-red-700 px-6 py-4 rounded-2xl flex items-center gap-3"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            {{ errorMessage }}
          </div>
        </div>
      </div>
    </main>
  </DefaultLayout>
  <Footer></Footer>
</template>

<script setup>
import Footer from '../../components/Footer.vue'
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import axios from '@/lib/axios'
import DefaultLayout from '../../components/DefaultLayout.vue'

const route = useRoute()
const router = useRouter()

const kamarId = route.params.id || route.params.kamarId

const form = ref({
  namaKamar: '',
  tipe: '',
  harga: 0,
  ketersediaan: true,
  fasilitas: [],
  gambar: [] 
})

const fasilitasInput = ref('')
const selectedFiles = ref([])
const newImagePreviews = ref([])
const successMessage = ref('')
const errorMessage = ref('')
const fileInput = ref(null)
const loading = ref(true)
const submitting = ref(false)

onMounted(async () => {
  if (!kamarId) {
    errorMessage.value = 'ID kamar tidak ditemukan di URL.'
    loading.value = false
    return
  }

  try {
    const token = localStorage.getItem('token')
    if (!token) {
      errorMessage.value = 'Token tidak ditemukan. Silakan login kembali.'
      loading.value = false
      return
    }

    console.log('Loading room with ID:', kamarId)
    
    const res = await axios.get(`/rooms/${kamarId}`, {
      headers: { Authorization: `Bearer ${token}` }
    })

    console.log('Room data loaded:', res.data)
    
    const data = res.data.success ? (res.data.data || res.data.room) : res.data
    
    form.value.namaKamar = data.namaKamar || ''
    form.value.tipe = data.tipe || ''
    form.value.harga = data.harga || 0
    form.value.ketersediaan = data.ketersediaan !== undefined ? data.ketersediaan : true
    form.value.fasilitas = Array.isArray(data.fasilitas) ? data.fasilitas : []
    form.value.gambar = Array.isArray(data.gambar) ? data.gambar : []
    
    fasilitasInput.value = form.value.fasilitas.join(', ')
    
  } catch (err) {
    console.error('Error loading room data:', err)
    if (err.response) {
      errorMessage.value = err.response.data?.message || 'Gagal memuat data kamar.'
    } else {
      errorMessage.value = 'Terjadi kesalahan koneksi.'
    }
  } finally {
    loading.value = false
  }
})

function handleFileUpload(event) {
  const files = Array.from(event.target.files)
  selectedFiles.value = files
  newImagePreviews.value = []

  files.forEach(file => {
    const reader = new FileReader()
    reader.onload = e => newImagePreviews.value.push(e.target.result)
    reader.readAsDataURL(file)
  })
}

function removeOldImage(index) {
  form.value.gambar.splice(index, 1)
}

function removeNewImage(index) {
  selectedFiles.value.splice(index, 1)
  newImagePreviews.value.splice(index, 1)

  const dt = new DataTransfer()
  selectedFiles.value.forEach(file => dt.items.add(file))
  if (fileInput.value) fileInput.value.files = dt.files
}

async function submitKamar() {
  const token = localStorage.getItem('token')
  if (!token) {
    errorMessage.value = 'Token tidak ditemukan.'
    return
  }

  submitting.value = true
  errorMessage.value = ''
  successMessage.value = ''

  try {
    const fasilitasArray = fasilitasInput.value
      .split(',')
      .map(f => f.trim())
      .filter(f => f)

    console.log('Form data before submit:', {
      namaKamar: form.value.namaKamar,
      tipe: form.value.tipe,
      harga: form.value.harga,
      ketersediaan: form.value.ketersediaan,
      fasilitas: fasilitasArray,
      gambarLama: form.value.gambar,
      gambarBaru: selectedFiles.value.length
    })

    const formData = new FormData()
    formData.append('namaKamar', form.value.namaKamar)
    formData.append('tipe', form.value.tipe)
    formData.append('harga', form.value.harga.toString())
    formData.append('ketersediaan', form.value.ketersediaan.toString())

    fasilitasArray.forEach((item, i) => {
      formData.append(`fasilitas[${i}]`, item)
    })

    if (form.value.gambar && form.value.gambar.length > 0) {
      form.value.gambar.forEach((url, i) => {
        formData.append(`gambarLama[${i}]`, url)
      })
    }

    selectedFiles.value.forEach(file => {
      formData.append('kamar', file)
    })

    console.log('FormData contents:')
    for (let [key, value] of formData.entries()) {
      console.log(key, value)
    }

    const response = await axios.put(`/rooms/${kamarId}`, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data'
      }
    })

    console.log('Update response:', response.data)
    
    successMessage.value = 'Data kamar berhasil diperbarui!'
    setTimeout(() => {
      router.push('/kos')
    }, 1500)
    
  } catch (err) {
    console.error('Error updating room:', err)
    
    if (err.response) {
      console.error('Error response:', err.response.data)
      if (err.response.status === 400) {
        errorMessage.value = err.response.data?.message || 'Data yang dikirim tidak valid.'
      } else if (err.response.status === 401) {
        errorMessage.value = 'Tidak memiliki akses. Silakan login kembali.'
      } else if (err.response.status === 404) {
        errorMessage.value = 'Kamar tidak ditemukan.'
      } else if (err.response.status === 500) {
        errorMessage.value = 'Terjadi kesalahan server. Silakan coba lagi atau hubungi administrator.'
      } else {
        errorMessage.value = err.response.data?.message || 'Gagal memperbarui kamar.'
      }
    } else {
      errorMessage.value = 'Terjadi kesalahan koneksi. Periksa internet Anda.'
    }
  } finally {
    submitting.value = false
  }
}
</script>

<style scoped>
.form-group {
  @apply space-y-2;
}

.form-label {
  @apply block text-sm font-semibold text-gray-700;
}

.form-input {
  @apply w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-400;
}

.form-input:focus {
  @apply shadow-lg;
}

.form-select {
  @apply w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white;
}

.form-select:focus {
  @apply shadow-lg;
}

/* Button Styling */
.btn-primary {
  @apply bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-blue-600 hover:to-purple-700 focus:ring-4 focus:ring-blue-300 transition-all duration-200;
}

.btn-secondary {
  @apply bg-gradient-to-r from-green-500 to-teal-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-green-600 hover:to-teal-700 focus:ring-4 focus:ring-green-300 transition-all duration-200;
}

.btn-outline {
  @apply border-2 border-gray-300 text-gray-700 font-semibold py-3 px-6 rounded-xl hover:bg-gray-50 hover:border-gray-400 focus:ring-4 focus:ring-gray-300 transition-all duration-200;
}

/* Animation */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.bg-white {
  animation: fadeIn 0.5s ease-out;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f5f9;
}

::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}
</style>