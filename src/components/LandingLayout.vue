<template>
  <div>
    <Navbar />
    <main class="p-6">
      <slot />
    </main>
  </div>
</template>

<script setup>
import Navbar from './NavbarLanding.vue'
</script>
