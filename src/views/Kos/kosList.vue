<template>
  <DefaultLayout>
    <main class="pt-24 p-2 max-w-7xl mx-auto">
      <div class="min-h-screen mx-auto p-4">
        <div
          class="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 rounded-3xl p-8 mb-8 text-white relative overflow-hidden"
        >
          <div
            class="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-16 -mt-16"
          ></div>
          <div
            class="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-5 rounded-full -ml-12 -mb-12"
          ></div>

          <div class="relative z-10">
            <h1 class="text-3xl md:text-4xl font-bold mb-4">
              Properti Kos Saya
              <span class="block text-lg font-normal text-purple-200 mt-2">
                Kelola dan pantau semua properti dalam satu tempat
              </span>
            </h1>

            <div class="grid grid-cols-2 gap-4 mt-6 max-w-md">
              <div
                class="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center"
              >
                <p class="text-2xl font-bold">{{ kosList.length }}</p>
                <p class="text-sm text-purple-200">Total Kos</p>
              </div>
              <div
                class="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center"
              >
                <p class="text-2xl font-bold">{{ totalKamar }}</p>
                <p class="text-sm text-purple-200">Total Kamar</p>
              </div>
            </div>
          </div>
        </div>
        <div
          class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8"
        >
          <div class="flex flex-col sm:flex-row gap-4">
            <router-link
              to="/kos/tambah"
              class="group inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <div
                class="p-2 bg-white/20 rounded-lg group-hover:bg-white/30 transition-all duration-300"
              >
                <HomeIcon class="w-5 h-5" />
              </div>
              <span class="font-semibold">Tambah Kos Baru</span>
            </router-link>

            <router-link
              to="/kamar/tambah"
              class="group inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <div
                class="p-2 bg-white/20 rounded-lg group-hover:bg-white/30 transition-all duration-300"
              >
                <ClipboardDocumentListIcon class="w-5 h-5" />
              </div>
              <span class="font-semibold">Tambah Kamar</span>
            </router-link>
          </div>
        </div>
        <div v-if="kosList.length === 0" class="text-center py-16">
          <div class="max-w-md mx-auto">
            <div
              class="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <HomeIcon class="w-12 h-12 text-gray-400" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">
              Belum Ada Kos
            </h3>
            <p class="text-gray-600 mb-6">
              Mulai dengan menambahkan properti kos pertama Anda
            </p>
            <router-link
              to="/kos/tambah"
              class="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <HomeIcon class="w-5 h-5" />
              Tambah Kos Pertama
            </router-link>
          </div>
        </div>

        <div
          v-else
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <div
            v-for="kos in kosList"
            :key="kos.id"
            @click="goToDetail(kos._id)"
            class="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 border border-gray-100"
          >
            <div class="relative overflow-hidden">
              <img
                :src="kos.gambar[0]"
                alt="Gambar Kos"
                class="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div
                class="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"
              ></div>
              <div class="absolute top-4 left-4">
                <span
                  class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/90 backdrop-blur-sm text-gray-800"
                >
                  {{ kos.tipeKos }}
                </span>
              </div>
            </div>
            <div class="p-6">
              <div class="flex items-start justify-between mb-3">
                <h3
                  class="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors"
                >
                  {{ kos.namaKos }}
                </h3>
              </div>
              <div class="flex items-center gap-2 mb-3">
                <svg
                  class="w-4 h-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  ></path>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
                <p class="text-sm text-gray-600 truncate">{{ kos.alamat }}</p>
              </div>

              <div class="flex flex-wrap gap-2 mb-4">
                <span
                  v-for="fasilitas in kos.fasilitas.slice(0, 3)"
                  :key="fasilitas"
                  class="inline-flex items-center px-2 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full"
                >
                  {{ fasilitas }}
                </span>
                <span
                  v-if="kos.fasilitas.length > 3"
                  class="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full"
                >
                  +{{ kos.fasilitas.length - 3 }} lainnya
                </span>
              </div>

              <div class="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                <div class="text-center">
                  <p class="text-lg font-bold text-gray-900">
                    {{ kos.totalKamar || 0 }}
                  </p>
                  <p class="text-xs text-gray-500">Total Kamar</p>
                </div>
                <div class="text-center">
                  <p class="text-lg font-bold text-green-600">
                    {{ kos.kamarTersedia || 0 }}
                  </p>
                  <p class="text-xs text-gray-500">Tersedia</p>
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
import Footer from "../../components/Footer.vue";
import { ref, onMounted, computed } from "vue";
import { useRouter } from "vue-router";
import axios from "@/lib/axios";
import DefaultLayout from "../../components/DefaultLayout.vue";
import { jwtDecode } from "jwt-decode";
import { HomeIcon, ClipboardDocumentListIcon } from "@heroicons/vue/24/outline";

const router = useRouter();
const kosList = ref([]);
const totalFavorite = ref(0);
const totalUserFavorit = ref(0);

const totalKamar = computed(() => {
  return (kosList.value || []).reduce((total, kos) => total + (kos.totalKamar || 0), 0);
});

function goToDetail(id) {
  router.push(`/kos/${id}`);
}

onMounted(async () => {
  try {
    const token = localStorage.getItem("token");
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

    if (response.data && response.data.kos) {
      if (Array.isArray(response.data.kos)) {
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
    console.error("Gagal mengambil data kos:", error);
    kosList.value = [];
  }
});
</script>
