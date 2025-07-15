<template>
  <DefaultLayout>
    <main class="min-h-screen pt-20">
      <div class="mb-6">
        <button
          @click="router.back()"
          class="inline-flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
        >
          <svg
            class="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
          Kembali
        </button>
      </div>
      <div class="max-w-6xl mx-auto px-4 py-8">
        <div class="text-center mb-12">
          <div
            class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-full mb-4"
          >
            <svg
              class="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
              />
            </svg>
          </div>
          <h1
            class="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent mb-2"
          >
            Tambah Kamar Baru
          </h1>
          <p class="text-gray-600 text-lg">
            Lengkapi informasi kamar untuk kos Anda
          </p>
        </div>

        <div
          class="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden"
        >
          <div class="bg-gradient-to-r from-emerald-500 to-blue-600 h-2"></div>

          <form @submit.prevent="submitKos" class="p-8 lg:p-12">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div class="space-y-6">
                <div class="bg-emerald-50 rounded-2xl p-6">
                  <h3
                    class="text-xl font-semibold text-gray-800 mb-6 flex items-center"
                  >
                    <div
                      class="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center mr-3"
                    >
                      <span class="text-white text-sm font-bold">1</span>
                    </div>
                    Pilih Kos
                  </h3>

                  <div class="form-group">
                    <label class="form-label">Kos Tersedia</label>
                    <select v-model="form.kosId" class="form-select" required>
                      <option disabled value="">-- Pilih Kos --</option>
                      <option
                        v-for="item in daftarKos"
                        :key="item._id"
                        :value="item._id"
                      >
                        🏠 {{ item.namaKos }}
                      </option>
                    </select>
                    <p class="text-sm text-emerald-600 mt-1">
                      {{ daftarKos.length }} kos tersedia
                    </p>
                  </div>
                </div>

                <div class="bg-blue-50 rounded-2xl p-6">
                  <h3
                    class="text-xl font-semibold text-gray-800 mb-6 flex items-center"
                  >
                    <div
                      class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3"
                    >
                      <span class="text-white text-sm font-bold">2</span>
                    </div>
                    Informasi Kamar
                  </h3>

                  <div class="space-y-4">
                    <div class="form-group">
                      <label class="form-label">Nama Kamar</label>
                      <input
                        v-model="form.namaKamar"
                        type="text"
                        class="form-input"
                        placeholder="Contoh: Kamar 101, Kamar Deluxe A"
                        required
                      />
                    </div>

                    <div class="form-group">
                      <label class="form-label">Tipe Kamar</label>
                      <input
                        v-model="form.tipe"
                        type="text"
                        class="form-input"
                        placeholder="Contoh: Standard, Deluxe, VIP"
                        required
                      />
                    </div>

                    <div class="form-group">
                      <label class="form-label">Harga per Bulan</label>
                      <div class="relative">
                        <span
                          class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 font-medium pr-2"
                        >
                          Rp
                        </span>
                        <input
                          v-model="form.harga"
                          type="text"
                          class="form-input pl-12"
                          placeholder="1.500.000"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div class="bg-purple-50 rounded-2xl p-6">
                  <h3
                    class="text-xl font-semibold text-gray-800 mb-6 flex items-center"
                  >
                    <div
                      class="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-3"
                    >
                      <span class="text-white text-sm font-bold">3</span>
                    </div>
                    Status Ketersediaan
                  </h3>

                  <div class="space-y-4">
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <label
                        class="availability-card available"
                        :class="{ selected: form.ketersediaan === true }"
                      >
                        <input
                          v-model="form.ketersediaan"
                          type="radio"
                          :value="true"
                          name="ketersediaan"
                          class="sr-only"
                        />
                        <div
                          class="flex items-center justify-center h-20 rounded-xl border-2 transition-all duration-200"
                        >
                          <div class="text-center">
                            <div
                              class="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-2"
                            >
                              <svg
                                class="w-5 h-5 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                            </div>
                            <span class="font-medium text-gray-700"
                              >Tersedia</span
                            >
                          </div>
                        </div>
                      </label>

                      <label
                        class="availability-card unavailable"
                        :class="{ selected: form.ketersediaan === false }"
                      >
                        <input
                          v-model="form.ketersediaan"
                          type="radio"
                          :value="false"
                          name="ketersediaan"
                          class="sr-only"
                        />
                        <div
                          class="flex items-center justify-center h-20 rounded-xl border-2 transition-all duration-200"
                        >
                          <div class="text-center">
                            <div
                              class="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-2"
                            >
                              <svg
                                class="w-5 h-5 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M6 18L18 6M6 6l12 12"
                                />
                              </svg>
                            </div>
                            <span class="font-medium text-gray-700"
                              >Tidak Tersedia</span
                            >
                          </div>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div class="space-y-6">
                <div class="bg-orange-50 rounded-2xl p-6">
                  <h3
                    class="text-xl font-semibold text-gray-800 mb-6 flex items-center"
                  >
                    <div
                      class="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mr-3"
                    >
                      <span class="text-white text-sm font-bold">4</span>
                    </div>
                    Fasilitas Kamar
                  </h3>

                  <div class="form-group">
                    <label class="form-label">Daftar Fasilitas</label>
                    <textarea
                      v-model="fasilitasInput"
                      class="form-textarea"
                      rows="4"
                      placeholder="Kasur, AC, Lemari, Meja belajar, WiFi, Kamar mandi dalam (pisahkan dengan koma)"
                    ></textarea>
                    <p class="text-sm text-gray-500 mt-1">
                      Pisahkan setiap fasilitas dengan koma untuk hasil yang
                      lebih baik
                    </p>
                  </div>

                  <div v-if="fasilitasInput.trim()" class="mt-4">
                    <p class="text-sm font-medium text-gray-700 mb-2">
                      Preview Fasilitas:
                    </p>
                    <div class="flex flex-wrap gap-2">
                      <span
                        v-for="(facility, index) in fasilitasInput
                          .split(',')
                          .map((f) => f.trim())
                          .filter((f) => f)"
                        :key="index"
                        class="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {{ facility }}
                      </span>
                    </div>
                  </div>
                </div>

                <div class="bg-pink-50 rounded-2xl p-6">
                  <h3
                    class="text-xl font-semibold text-gray-800 mb-6 flex items-center"
                  >
                    <div
                      class="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center mr-3"
                    >
                      <span class="text-white text-sm font-bold">5</span>
                    </div>
                    Foto Kamar
                  </h3>

                  <div class="form-group">
                    <label class="form-label">Upload Gambar Kamar</label>
                    <div
                      class="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-pink-400 transition-colors"
                    >
                      <input
                        type="file"
                        @change="handleFileUpload"
                        accept="image/jpeg,image/jpg,image/png"
                        multiple
                        class="hidden"
                        id="room-file-upload"
                      />
                      <label for="room-file-upload" class="cursor-pointer">
                        <svg
                          class="w-12 h-12 text-gray-400 mx-auto mb-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                          />
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        <p class="text-gray-600 mb-2">
                          Klik untuk upload foto kamar
                        </p>
                        <p class="text-sm text-gray-500">
                          JPEG, JPG, PNG (Max 5MB per file)
                        </p>
                      </label>
                    </div>

                    <div v-if="selectedFiles.length > 0" class="mt-4">
                      <p class="text-sm font-medium text-gray-700 mb-2">
                        {{ selectedFiles.length }} file dipilih:
                      </p>
                      <div class="space-y-2">
                        <div
                          v-for="(file, index) in selectedFiles"
                          :key="index"
                          class="flex items-center gap-3 bg-pink-100 rounded-lg p-3"
                        >
                          <div
                            class="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center"
                          >
                            <svg
                              class="w-4 h-4 text-white"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                              />
                            </svg>
                          </div>
                          <div class="flex-1">
                            <p class="text-sm font-medium text-gray-700">
                              {{ file.name }}
                            </p>
                            <p class="text-xs text-gray-500">
                              {{ (file.size / 1024 / 1024).toFixed(2) }} MB
                            </p>
                          </div>
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
                class="btn-primary px-12 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                <span class="flex items-center justify-center gap-3">
                  <svg
                    class="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Simpan Kamar
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
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
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
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
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
import Footer from "../../components/Footer.vue";
import { ref, onMounted } from "vue";
import axios from "@/lib/axios";
import { useRouter } from "vue-router";
import { jwtDecode } from "jwt-decode";
import DefaultLayout from "../../components/DefaultLayout.vue";

const router = useRouter();

const form = ref({
  kosId: "",
  namaKamar: "",
  tipe: "",
  harga: "",
  fasilitas: [],
  ketersediaan: false,
});

const fasilitasInput = ref("");
const selectedFiles = ref([]);

const successMessage = ref("");
const errorMessage = ref("");
const daftarKos = ref([]);

const handleFileUpload = (event) => {
  selectedFiles.value = Array.from(event.target.files);
};

const ambilDaftarKos = async () => {
  const token = localStorage.getItem("token");
  const decoded = jwtDecode(token);
  const userId = decoded.id;

  try {
    const response = await axios.get(`/kos/by-user/${userId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    daftarKos.value = response.data.kos;

    if (response.data.length > 0) {
      form.value.kosId = response.data[0]._id;
    }
  } catch (err) {
    console.error("Gagal mengambil daftar kos:", err);
    errorMessage.value = "Gagal memuat daftar kos.";
  }
};

const submitKos = async () => {
  const token = localStorage.getItem("token");

  if (!token) {
    errorMessage.value = "Token tidak ditemukan. Harap login ulang.";
    return;
  }

  if (!form.value.kosId) {
    errorMessage.value = "Silakan pilih kos terlebih dahulu.";
    return;
  }

  form.value.fasilitas = fasilitasInput.value
    .split(",")
    .map((f) => f.trim())
    .filter((f) => f);

  const formData = new FormData();
  formData.append("kosId", form.value.kosId);
  formData.append("namaKamar", form.value.namaKamar);
  formData.append("tipe", form.value.tipe);
  formData.append("harga", form.value.harga);
  formData.append("ketersediaan", form.value.ketersediaan);

  form.value.fasilitas.forEach((item, index) => {
    formData.append(`fasilitas[${index}]`, item);
  });

  selectedFiles.value.forEach((file) => {
    formData.append("kamar", file);
  });

  try {
    await axios.post("/rooms", formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });

    successMessage.value = "Kamar berhasil ditambahkan!";
    errorMessage.value = "";

    form.value.namaKamar = "";
    form.value.tipe = "";
    form.value.harga = "";
    form.value.ketersediaan = false;
    fasilitasInput.value = "";
    selectedFiles.value = [];

    setTimeout(() => {
      router.push(`/kos/${form.value.kosId}`);
    }, 1500);
  } catch (err) {
    console.error(err);
    errorMessage.value = "Gagal menyimpan kamar.";
    successMessage.value = "";
  }
};

onMounted(() => {
  ambilDaftarKos();
});
</script>

<style scoped>
/* Form Styling */
.form-group {
  @apply space-y-2;
}

.form-label {
  @apply block text-sm font-semibold text-gray-700;
}

.form-input {
  @apply w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 placeholder-gray-400;
}

.form-input:focus {
  @apply shadow-lg;
}

.form-select {
  @apply w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 bg-white;
}

.form-select:focus {
  @apply shadow-lg;
}

.form-textarea {
  @apply w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 placeholder-gray-400 resize-none;
}

.form-textarea:focus {
  @apply shadow-lg;
}

/* Button Styling */
.btn-primary {
  @apply bg-gradient-to-r from-emerald-500 to-blue-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-emerald-600 hover:to-blue-700 focus:ring-4 focus:ring-emerald-300 transition-all duration-200;
}

/* Availability Card Styling */
.availability-card {
  @apply cursor-pointer block;
}

.availability-card .flex {
  @apply border-gray-200 hover:border-gray-300;
}

.availability-card.available.selected .flex {
  @apply border-green-500 bg-green-50;
}

.availability-card.unavailable.selected .flex {
  @apply border-red-500 bg-red-50;
}

.availability-card:hover .flex {
  @apply shadow-md;
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

/* Radio button hide */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
</style>
