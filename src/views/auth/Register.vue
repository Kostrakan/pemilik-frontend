<template>
  <div
    class="min-h-screen flex items-center justify-center bg-cover bg-center"
    style="
      background-image: url('https://media.istockphoto.com/id/2154752387/id/foto/real-estate-concept-business-home-insurance-and-real-estate-protection-real-estate-investment.jpg?s=2048x2048&w=is&k=20&c=jtxjKLxpXKVKwoie-11RpPWlT41JcnbssOsYtMAiWiU=');
    "
  >
    <div
      class="bg-white bg-opacity-80 p-8 rounded-2xl shadow-lg w-full max-w-sm"
    >
      <h1 class="text-2xl font-bold mb-6 text-center text-blue-700">
        Register Pemilik Kos
      </h1>

      <form @submit.prevent="handleRegister">
        <div class="mb-4">
          <label class="block text-gray-700">Nama Lengkap</label>
          <input
            v-model="namalengkap"
            type="text"
            placeholder="Masukkan nama lengkap"
            class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div class="mb-4">
          <label class="block text-gray-700">Nomor HP</label>
          <input
            v-model="noHP"
            type="text"
            placeholder="Masukkan nomor HP"
            class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div class="mb-4">
          <label class="block text-gray-700">Email</label>
          <input
            v-model="email"
            type="email"
            placeholder="Masukkan e-mail"
            class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div class="mb-6">
          <label class="block text-gray-700">Password</label>
          <input
            v-model="password"
            type="password"
            placeholder="Masukkan password"
            class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <button
          type="submit"
          class="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Register
        </button>
      </form>

      <p v-if="errorMessage" class="mt-4 text-red-500 text-sm text-center">
        {{ errorMessage }}
      </p>
      <p class="mt-4 text-center text-sm text-gray-600">
        Already have an account?
        <router-link
          to="/login"
          class="text-blue-600 hover:underline font-medium"
        >
          Login
        </router-link>
      </p>
    </div>
  </div>
</template>

<script>
import axios from "@/lib/axios";

export default {
  name: "RegisterView",
  data() {
    return {
      namalengkap: "",
      noHP: "",
      email: "",
      password: "",
      errorMessage: "",
    };
  },
  methods: {
    async handleRegister() {
      try {
        const response = await axios.post("/users/register", {
          namalengkap: this.namalengkap,
          noHP: this.noHP,
          email: this.email,
          password: this.password,
        });
        
        localStorage.setItem("token", response.data.token || "");

        this.errorMessage = "";
        alert("Register berhasil!");
        this.$router.push("/login");
      } catch (error) {
        if (
          error.response &&
          error.response.data &&
          error.response.data.message
        ) {
          this.errorMessage = error.response.data.message;
        } else {
          this.errorMessage = "Terjadi kesalahan saat register.";
        }
      }
    },
  },
};
</script>

<style scoped></style>
