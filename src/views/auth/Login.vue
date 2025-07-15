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
        Login Pemilik Kos
      </h1>

      <form @submit.prevent="handleLogin">
        <div class="mb-4">
          <label class="block text-gray-700">Email</label>
          <input
            v-model="email"
            type="text"
            placeholder="Masukkan e-mail"
            class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div class="mb-6">
          <label class="block text-gray-700">Password</label>
          <input
            v-model="password"
            type="password"
            placeholder="Masukkan password"
            class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <button
          type="submit"
          class="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Login
        </button>
      </form>

      <p v-if="errorMessage" class="mt-4 text-red-500 text-sm text-center">
        {{ errorMessage }}
      </p>
      <p class="mt-4 text-center text-sm text-gray-600">
        Don't have an account?
        <router-link
          to="/register"
          class="text-blue-600 hover:underline font-medium"
        >
          Register
        </router-link>
      </p>
    </div>
  </div>
</template>

<script>
import axios from "@/lib/axios";

export default {
  name: "LoginView",
  data() {
    return {
      username: "",
      password: "",
      errorMessage: "",
    };
  },
  methods: {
    async handleLogin() {
      try {
        const response = await axios.post("/auth/login", {
          email: this.email,
          password: this.password,
        });
        localStorage.setItem("token", response.data.token);

        this.errorMessage = "";
        alert("Login berhasil!");
        this.$router.push("/dashboard");
      } catch (error) {
        if (error.response && error.response.status === 401) {
          this.errorMessage = "Username atau password salah!";
        } else {
          this.errorMessage = "Terjadi kesalahan saat login.";
        }
      }
    },
  },
};
</script>

<style scoped></style>
