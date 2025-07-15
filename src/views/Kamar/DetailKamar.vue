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
      <div class="max-w-6xl mx-auto p-6">
        <div
          class="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 rounded-3xl overflow-hidden mb-8 shadow-2xl"
        >
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div class="relative h-96 lg:h-auto">
              <img
                :src="
                  kamar.gambar?.[0] ||
                  'https://via.placeholder.com/600x400?text=No+Image'
                "
                alt="Gambar Kamar"
                class="w-full h-full object-cover"
              />
              <div class="absolute inset-0 bg-black/30"></div>
              <div class="absolute top-6 left-6">
                <span
                  :class="[
                    'inline-flex items-center px-4 py-2 backdrop-blur-sm rounded-full text-sm font-semibold',
                    kamar.ketersediaan
                      ? 'bg-green-500/90 text-white'
                      : 'bg-red-500/90 text-white',
                  ]"
                >
                  {{ kamar.ketersediaan ? "Tersedia" : "Tidak Tersedia" }}
                </span>
              </div>

              <div class="absolute top-6 right-6">
                <span
                  class="inline-flex items-center px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-semibold text-gray-800"
                >
                  {{ kamar.tipe }}
                </span>
              </div>
            </div>

            <div class="p-8 text-white">
              <h1 class="text-4xl font-bold mb-4">{{ kamar.namaKamar }}</h1>

              <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-6">
                <h3 class="text-lg font-semibold mb-3 flex items-center gap-2">
                  Informasi Harga
                </h3>
                <div class="flex items-baseline gap-2">
                  <span class="text-3xl font-bold text-green-300">
                    Rp{{ formatCurrency(kamar.harga) }}
                  </span>
                  <span class="text-teal-200">/bulan</span>
                </div>
              </div>

              <div class="flex items-center gap-3 mb-6">
                <svg
                  class="w-5 h-5 text-teal-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                  ></path>
                </svg>
                <p class="text-teal-100">
                  <span class="font-medium">Tipe Kamar:</span> {{ kamar.tipe }}
                </p>
              </div>

              <div
                class="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-6 text-center"
              >
                <div class="flex items-center justify-center gap-2 mb-2">
                  <svg
                    :class="[
                      'w-5 h-5',
                      kamar.ketersediaan ? 'text-green-300' : 'text-red-300',
                    ]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  <span class="font-semibold text-lg">
                    {{
                      kamar.ketersediaan
                        ? "Kamar Tersedia"
                        : "Kamar Tidak Tersedia"
                    }}
                  </span>
                </div>
                <p class="text-sm text-teal-200">
                  {{
                    kamar.ketersediaan
                      ? "Siap untuk disewa"
                      : "Sedang tidak tersedia"
                  }}
                </p>
              </div>

              <div class="flex flex-col sm:flex-row gap-4">
                <router-link
                  :to="`/updatekamar/${kamar._id}`"
                  class="flex-1 bg-white/20 backdrop-blur-sm border border-white/30 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300 text-center flex items-center justify-center gap-2"
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
                      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                    ></path>
                  </svg>
                  Update Kamar
                </router-link>
                <button
                  @click="confirmDelete"
                  class="flex-1 bg-red-500/20 backdrop-blur-sm border border-red-400/50 text-red-200 px-6 py-3 rounded-xl font-semibold hover:bg-red-500/30 transition-all duration-300 flex items-center justify-center gap-2"
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
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    ></path>
                  </svg>
                  Hapus Kamar
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          v-if="kamar.gambar && kamar.gambar.length > 1"
          class="bg-white rounded-2xl shadow-lg p-8 mb-8"
        >
          <div class="flex items-center gap-3 mb-6">
            <div class="p-3 bg-blue-100 rounded-xl">
              <svg
                class="w-6 h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                ></path>
              </svg>
            </div>
            <h2 class="text-2xl font-bold text-gray-900">Galeri Foto</h2>
          </div>
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div
              v-for="(image, index) in kamar.gambar.slice(1)"
              :key="index"
              class="relative group rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <img
                :src="image"
                alt="Gambar Kamar"
                class="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div
                class="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"
              ></div>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-2xl shadow-lg p-8">
          <div class="flex items-center gap-3 mb-6">
            <div class="p-3 bg-blue-100 rounded-xl">
              <svg
                class="w-6 h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <h2 class="text-2xl font-bold text-gray-900">Fasilitas Kamar</h2>
          </div>

          <div
            v-if="kamar.fasilitas && kamar.fasilitas.length > 0"
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            <div
              v-for="(item, index) in kamar.fasilitas"
              :key="index"
              class="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:from-gray-100 transition-colors"
            >
              <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span class="text-gray-700 font-medium">{{ item }}</span>
            </div>
          </div>

          <div v-else class="text-center py-12">
            <div
              class="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <svg
                class="w-8 h-8 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <p class="text-gray-500 text-lg">
              Belum ada fasilitas yang terdaftar
            </p>
          </div>
        </div>
      </div>
    </main>
  </DefaultLayout>
  <Footer></Footer>
</template>

<script setup>
import Footer from "../../components/Footer.vue";
import Swal from "sweetalert2";
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import axios from "@/lib/axios";
import DefaultLayout from "../../components/DefaultLayout.vue";

const route = useRoute();
const router = useRouter();
const kamar = ref({});

const formatCurrency = (amount) => {
  if (!amount) return "0";
  return parseInt(amount).toLocaleString("id-ID");
};

onMounted(async () => {
  const id = route.params.id;

  if (!id) {
    console.error("ID kamar tidak ditemukan di route!");
    return;
  }

  try {
    const token = localStorage.getItem("token");
    const res = await axios.get(`/rooms/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    kamar.value = res.data.data || res.data.room || res.data;
  } catch (err) {
    console.error("Gagal memuat detail kamar:", err);
  }
});

const confirmDelete = async () => {
  const result = await Swal.fire({
    title: "Yakin ingin menghapus?",
    text: "Data kamar ini akan dihapus secara permanen.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Ya, hapus!",
    cancelButtonText: "Batal",
    confirmButtonColor: "#d33",
    cancelButtonColor: "#3085d6",
  });

  if (result.isConfirmed) {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`/rooms/${kamar.value._id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      await Swal.fire("Dihapus!", "Data kamar berhasil dihapus.", "success");
      router.push("/kos");
    } catch (error) {
      console.error("Gagal menghapus:", error);
      Swal.fire("Gagal!", "Gagal menghapus data kamar.", "error");
    }
  }
};
</script>
