<template>
  <LandingLayout>
    <main class="min-h-screen p-6 max-w-7xl mx-auto">
      <!-- Hero Section -->
      <section class="text-center py-20">
        <img
          src="../assets/Kostrakan.png"
          alt="Logo"
          class="w-48 h-auto mx-auto flex justify-between items-center px-5 py-5"
        />
        <h1 class="text-4xl font-bold mb-4">
          Selamat Datang di <span class="text-blue-600">Kostrakan</span>
        </h1>
        <p class="text-gray-600 text-lg max-w-xl mx-auto">
          Platform untuk para pemilik kos di Kota Padang mendaftarkan properti
          mereka dan menjangkau lebih banyak pencari kos.
        </p>
        <br /><br />
        <router-link
          to="/Login"
          class="bg-blue-600 text-white px-8 py-4 rounded-xl text-m hover:bg-blue-700 transition font-bold font-sans"
        >
          Daftarkan Kos Anda
        </router-link>
      </section>

      <!-- Fitur -->
      <section class="py-16 grid md:grid-cols-3 gap-6 text-center">
        <div class="bg-white rounded-2xl p-6 shadow">
          <h2 class="text-xl font-semibold mb-2">Mudah Digunakan</h2>
          <p class="text-gray-600">
            Antarmuka sederhana dan cepat untuk mendaftarkan kos Anda dalam
            hitungan menit.
          </p>
        </div>
        <div class="bg-white rounded-2xl p-6 shadow">
          <h2 class="text-xl font-semibold mb-2">
            Dikhususkan untuk Kota Padang
          </h2>
          <p class="text-gray-600">
            Fokus pada area lokal agar pemilik kos lebih mudah menjangkau target
            market.
          </p>
        </div>
        <div class="bg-white rounded-2xl p-6 shadow">
          <h2 class="text-xl font-semibold mb-2">Kelola Kos dengan Mudah</h2>
          <p class="text-gray-600">
            Pantau dan kelola semua properti kos Anda dari satu tempat.
          </p>
        </div>
      </section>
      
      <slot />
    </main>
  </LandingLayout>
  <Footer></Footer>
</template>
<script setup>
import LandingLayout from "@/components/LandingLayout.vue";
import Footer  from "../components/Footer.vue";
</script>
