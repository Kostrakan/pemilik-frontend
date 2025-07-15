<template>
  <DefaultLayout>
    <main
      class="min-h-screen pt-20"
    >
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
      <div class="max-w-4xl mx-auto px-4 py-8">
        <!-- Header Section -->
        <div class="text-center mb-12">
          <div
            class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-4"
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
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
          </div>
          <h1
            class="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2"
          >
            Perbaharui Informasi Kos Anda
          </h1>
          <p class="text-gray-600 text-lg">
            Lengkapi informasi kos Anda dengan mudah
          </p>
        </div>
        <div
          class="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden"
        >
          <div class="bg-gradient-to-r from-blue-500 to-purple-600 h-2"></div>

          <form @submit.prevent="submitKos" class="p-8 lg:p-12">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <!-- Left Column -->
              <div class="space-y-6">
                <!-- Basic Info Section -->
                <div class="bg-gray-50 rounded-2xl p-6">
                  <h3
                    class="text-xl font-semibold text-gray-800 mb-6 flex items-center"
                  >
                    <div
                      class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3"
                    >
                      <span class="text-white text-sm font-bold">1</span>
                    </div>
                    Informasi Dasar
                  </h3>

                  <div class="space-y-4">
                    <div class="form-group">
                      <label class="form-label">Nama Kos</label>
                      <input
                        v-model="form.namaKos"
                        type="text"
                        class="form-input"
                        placeholder="Masukkan nama kos"
                        required
                      />
                    </div>

                    <div class="form-group">
                      <label class="form-label">Tipe Kos</label>
                      <select
                        v-model="form.tipeKos"
                        class="form-select"
                        required
                      >
                        <option value="">-- Pilih Tipe Kos --</option>
                        <option value="Putra">🚹 Putra</option>
                        <option value="Putri">🚺 Putri</option>
                        <option value="Campur">👥 Campur</option>
                      </select>
                    </div>

                    <div class="form-group">
                      <label class="form-label">Alamat</label>
                      <input
                        v-model="form.alamat"
                        type="text"
                        class="form-input"
                        placeholder="Masukkan alamat lengkap"
                        required
                      />
                    </div>
                  </div>
                </div>

                <!-- Facilities Section -->
                <div class="bg-green-50 rounded-2xl p-6">
                  <h3
                    class="text-xl font-semibold text-gray-800 mb-6 flex items-center"
                  >
                    <div
                      class="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3"
                    >
                      <span class="text-white text-sm font-bold">2</span>
                    </div>
                    Fasilitas & Kapasitas
                  </h3>

                  <div class="space-y-4">
                    <div class="form-group">
                      <label class="form-label">Fasilitas</label>
                      <input
                        v-model="fasilitasInput"
                        type="text"
                        class="form-input"
                        placeholder="WiFi, AC, Lemari, Kasur (pisahkan dengan koma)"
                      />
                      <p class="text-sm text-gray-500 mt-1">
                        Pisahkan setiap fasilitas dengan koma
                      </p>
                    </div>

                    <div class="grid grid-cols-2 gap-4">
                      <div class="form-group">
                        <label class="form-label">Total Kamar</label>
                        <input
                          v-model.number="form.totalKamar"
                          type="number"
                          class="form-input"
                          placeholder="0"
                          min="0"
                        />
                      </div>
                      <div class="form-group">
                        <label class="form-label">Kamar Tersedia</label>
                        <input
                          v-model.number="form.kamarTersedia"
                          type="number"
                          class="form-input"
                          placeholder="0"
                          min="0"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Right Column -->
              <div class="space-y-6">
                <!-- Location Section -->
                <div class="bg-purple-50 rounded-2xl p-6">
                  <h3
                    class="text-xl font-semibold text-gray-800 mb-6 flex items-center"
                  >
                    <div
                      class="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-3"
                    >
                      <span class="text-white text-sm font-bold">3</span>
                    </div>
                    Lokasi
                  </h3>

                  <div class="space-y-4">
                    <div class="grid grid-cols-2 gap-4">
                      <div class="form-group">
                        <label class="form-label">Latitude</label>
                        <input
                          v-model.number="form.latitude"
                          type="number"
                          step="any"
                          class="form-input bg-gray-100"
                          placeholder="0.000000"
                          readonly
                        />
                      </div>
                      <div class="form-group">
                        <label class="form-label">Longitude</label>
                        <input
                          v-model.number="form.longitude"
                          type="number"
                          step="any"
                          class="form-input bg-gray-100"
                          placeholder="0.000000"
                          readonly
                        />
                      </div>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <button
                        type="button"
                        @click="openMapPicker"
                        class="btn-secondary flex items-center justify-center gap-2"
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
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        Pilih di Maps
                      </button>
                      <button
                        type="button"
                        @click="getCurrentLocation"
                        class="btn-outline flex items-center justify-center gap-2"
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
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                          />
                        </svg>
                        Lokasi Saat Ini
                      </button>
                    </div>

                    <div
                      v-if="form.latitude && form.longitude"
                      class="bg-green-100 border border-green-300 rounded-lg p-3 flex items-center gap-3"
                    >
                      <div
                        class="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center"
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
                      <div>
                        <p class="text-green-800 font-medium">
                          Lokasi berhasil dipilih!
                        </p>
                        <p class="text-green-600 text-sm">
                          {{ form.latitude.toFixed(6) }},
                          {{ form.longitude.toFixed(6) }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="bg-orange-50 rounded-2xl p-6">
                  <h3
                    class="text-xl font-semibold text-gray-800 mb-6 flex items-center"
                  >
                    <div
                      class="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mr-3"
                    >
                      <span class="text-white text-sm font-bold">4</span>
                    </div>
                    Foto Kos
                  </h3>

                  <div v-if="isEditMode && form.gambar.length > 0" class="mb-6">
                    <h4 class="text-lg font-medium text-gray-700 mb-4">
                      Gambar Saat Ini
                    </h4>
                    <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-4">
                      <div
                        v-for="(url, index) in form.gambar"
                        :key="index"
                        class="relative group"
                      >
                        <img
                          :src="url"
                          alt="Gambar Kos"
                          class="w-full h-32 object-cover rounded-lg border-2 border-gray-200 group-hover:border-red-300 transition-colors"
                        />
                        <button
                          type="button"
                          @click="removeOldImage(index)"
                          class="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-red-600 transition-colors shadow-lg"
                        >
                          <svg
                            class="w-4 h-4"
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
                        </button>
                      </div>
                    </div>
                    <div
                      class="bg-blue-50 border border-blue-200 rounded-lg p-3"
                    >
                      <p class="text-blue-800 text-sm font-medium">
                        📸 {{ form.gambar.length }} gambar akan dipertahankan
                      </p>
                      <p class="text-blue-600 text-xs mt-1">
                        Upload gambar baru untuk menambah atau mengganti
                      </p>
                    </div>
                  </div>

                  <div class="form-group">
                    <label class="form-label">
                      {{
                        isEditMode
                          ? "Upload Gambar Baru (Opsional)"
                          : "Upload Gambar"
                      }}
                    </label>
                    <div
                      class="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-orange-400 transition-colors"
                    >
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
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        <p class="text-gray-600 mb-2">
                          {{
                            isEditMode
                              ? "Klik untuk menambah gambar"
                              : "Klik untuk upload gambar"
                          }}
                        </p>
                        <p class="text-sm text-gray-500">
                          JPEG, JPG, PNG (Max 5MB)
                        </p>
                      </label>
                    </div>
                  </div>

                  <div v-if="newImagePreviews.length > 0" class="mt-6">
                    <h4 class="text-lg font-medium text-gray-700 mb-4">
                      Preview Gambar Baru
                    </h4>
                    <div class="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      <div
                        v-for="(preview, index) in newImagePreviews"
                        :key="index"
                        class="relative group"
                      >
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
                          <svg
                            class="w-4 h-4"
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
                        </button>
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
                  Perbarui Kos
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

      <div
        v-if="showMapModal"
        class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      >
        <div
          class="bg-white rounded-3xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden"
        >
          <div
            class="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-6 text-white"
          >
            <div class="flex justify-between items-center">
              <h3 class="text-2xl font-bold">Pilih Lokasi di Maps</h3>
              <button
                @click="closeMapPicker"
                class="text-white hover:text-gray-200 transition-colors"
              >
                <svg
                  class="w-8 h-8"
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
              </button>
            </div>
          </div>

          <div class="p-8">

            <div
              id="map"
              class="w-full h-96 border-2 border-gray-200 rounded-2xl"
            ></div>

            <div class="mt-6 flex justify-between items-center">
              <div class="text-gray-600">
                <p v-if="selectedLocation" class="font-medium">
                  📍 Lokasi: {{ selectedLocation.lat.toFixed(6) }},
                  {{ selectedLocation.lng.toFixed(6) }}
                </p>
                <p v-else class="text-gray-500">
                  Klik pada peta untuk memilih lokasi
                </p>
              </div>
              <div class="flex gap-3">
                <button
                  @click="closeMapPicker"
                  class="btn-outline px-6 py-3 rounded-xl"
                >
                  Batal
                </button>
                <button
                  @click="confirmLocation"
                  :disabled="!selectedLocation"
                  class="btn-primary px-6 py-3 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Konfirmasi Lokasi
                </button>
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
import { ref, onMounted, nextTick } from "vue";
import axios from "@/lib/axios";
import { useRouter, useRoute } from "vue-router";
import { jwtDecode } from "jwt-decode";
import DefaultLayout from "../../components/DefaultLayout.vue";

const router = useRouter();
const route = useRoute();

const isEditMode = ref(false);
const kosId = ref(null);

const form = ref({
  namaKos: "",
  alamat: "",
  tipeKos: "",
  fasilitas: [],
  totalKamar: 0,
  kamarTersedia: 0,
  latitude: null,
  longitude: null,
  gambar: [],
});

const fasilitasInput = ref("");
const selectedFiles = ref([]);
const newImagePreviews = ref([]);
const successMessage = ref("");
const errorMessage = ref("");
const fileInput = ref(null);

const showMapModal = ref(false);
const selectedLocation = ref(null);
const searchQuery = ref("");
let map = null;
let marker = null;

onMounted(() => {
  const id = route.params.id;
  if (id) {
    isEditMode.value = true;
    kosId.value = id;
    fetchKos(id);
  }
});

const loadGoogleMaps = () => {
  return new Promise((resolve) => {
    if (window.google && window.google.maps) {
      resolve();
      return;
    }

    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY&libraries=places`;
    script.onload = resolve;
    document.head.appendChild(script);
  });
};

const initMap = async () => {
  await loadGoogleMaps();

  const defaultLocation =
    form.value.latitude && form.value.longitude
      ? { lat: form.value.latitude, lng: form.value.longitude }
      : { lat: -0.947, lng: 100.414 };

  map = new google.maps.Map(document.getElementById("map"), {
    center: defaultLocation,
    zoom: 13,
  });

  if (form.value.latitude && form.value.longitude) {
    marker = new google.maps.Marker({
      position: { lat: form.value.latitude, lng: form.value.longitude },
      map: map,
      title: "Lokasi Saat Ini",
    });
    selectedLocation.value = {
      lat: form.value.latitude,
      lng: form.value.longitude,
    };
  }

  map.addListener("click", (event) => {
    const lat = event.latLng.lat();
    const lng = event.latLng.lng();

    selectedLocation.value = { lat, lng };

    if (marker) {
      marker.setMap(null);
    }

    marker = new google.maps.Marker({
      position: { lat, lng },
      map: map,
      title: "Lokasi Dipilih",
    });
  });
};

const openMapPicker = async () => {
  showMapModal.value = true;
  await nextTick();
  await initMap();
};

const closeMapPicker = () => {
  showMapModal.value = false;
  selectedLocation.value = null;
  if (marker) {
    marker.setMap(null);
    marker = null;
  }
};

const confirmLocation = () => {
  if (selectedLocation.value) {
    form.value.latitude = selectedLocation.value.lat;
    form.value.longitude = selectedLocation.value.lng;
    closeMapPicker();
  }
};

const searchLocation = async () => {
  if (!searchQuery.value.trim()) return;

  await loadGoogleMaps();

  const geocoder = new google.maps.Geocoder();
  geocoder.geocode({ address: searchQuery.value }, (results, status) => {
    if (status === "OK" && results[0]) {
      const location = results[0].geometry.location;
      map.setCenter(location);
      map.setZoom(15);

      const lat = location.lat();
      const lng = location.lng();

      selectedLocation.value = { lat, lng };

      if (marker) {
        marker.setMap(null);
      }

      marker = new google.maps.Marker({
        position: { lat, lng },
        map: map,
        title: "Lokasi Pencarian",
      });
    } else {
      alert("Lokasi tidak ditemukan");
    }
  });
};

const getCurrentLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        form.value.latitude = position.coords.latitude;
        form.value.longitude = position.coords.longitude;
        successMessage.value = "Lokasi saat ini berhasil didapatkan!";
        setTimeout(() => {
          successMessage.value = "";
        }, 3000);
      },
      (error) => {
        errorMessage.value =
          "Gagal mendapatkan lokasi saat ini: " + error.message;
        setTimeout(() => {
          errorMessage.value = "";
        }, 3000);
      }
    );
  } else {
    errorMessage.value = "Geolocation tidak didukung oleh browser ini";
    setTimeout(() => {
      errorMessage.value = "";
    }, 3000);
  }
};
async function fetchKos(id) {
  const token = localStorage.getItem("token");
  try {
    const res = await axios.get(`/kos/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = res.data;
    console.log(data);
    form.value.namaKos = data.namaKos;
    form.value.tipeKos = data.tipeKos || "";
    form.value.alamat = data.alamat;
    form.value.fasilitas = data.fasilitas || [];
    form.value.totalKamar = data.totalKamar;
    form.value.kamarTersedia = data.kamarTersedia;
    form.value.gambar = data.gambar || [];
    form.value.latitude = data.lokasi?.latitude || null;
    form.value.longitude = data.lokasi?.longitude || null;
    fasilitasInput.value = data.fasilitas?.join(", ") || "";
  } catch (err) {
    errorMessage.value = "Gagal memuat data kos.";
  }
}

function handleFileUpload(event) {
  const files = Array.from(event.target.files);
  selectedFiles.value = files;

  newImagePreviews.value = [];
  files.forEach((file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      newImagePreviews.value.push(e.target.result);
    };
    reader.readAsDataURL(file);
  });
}

function removeOldImage(index) {
  form.value.gambar.splice(index, 1);
}

function removeNewImage(index) {
  selectedFiles.value.splice(index, 1);
  newImagePreviews.value.splice(index, 1);

  const dt = new DataTransfer();
  selectedFiles.value.forEach((file) => dt.items.add(file));
  if (fileInput.value) {
    fileInput.value.files = dt.files;
  }
}

async function submitKos() {
  const token = localStorage.getItem("token");
  if (!token) {
    errorMessage.value = "Token tidak ditemukan.";
    return;
  }

  const decoded = jwtDecode(token);
  const userId = decoded.id;

  form.value.fasilitas = fasilitasInput.value
    .split(",")
    .map((f) => f.trim())
    .filter((f) => f);

  const formData = new FormData();
  formData.append("namaKos", form.value.namaKos);
  formData.append("tipeKos", form.value.tipeKos);
  formData.append("alamat", form.value.alamat);
  formData.append("totalKamar", form.value.totalKamar);
  formData.append("kamarTersedia", form.value.kamarTersedia);
  formData.append("latitude", form.value.latitude);
  formData.append("longitude", form.value.longitude);

  form.value.fasilitas.forEach((item, i) => {
    formData.append(`fasilitas[${i}]`, item);
  });

  if (isEditMode.value && form.value.gambar.length > 0) {
    form.value.gambar.forEach((url, i) => {
      formData.append(`gambarLama[${i}]`, url);
    });
  }

  if (selectedFiles.value.length > 0) {
    selectedFiles.value.forEach((file) => {
      formData.append("kos", file);
    });
  }

  try {
    if (isEditMode.value) {
      await axios.put(`/kos/${kosId.value}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      successMessage.value = "Kos berhasil diperbarui!";
    } else {
      await axios.post("/kos", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      successMessage.value = "Kos berhasil ditambahkan!";
    }

    errorMessage.value = "";
    setTimeout(() => {
      if (isEditMode.value) {
        router.push(`/kos/${kosId.value}`);
      } else {
        router.push("/kos");
      }
    }, 1500);
  } catch (err) {
    console.error(err);
    errorMessage.value = isEditMode.value
      ? "Gagal memperbarui kos."
      : "Gagal menambahkan kos.";
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
