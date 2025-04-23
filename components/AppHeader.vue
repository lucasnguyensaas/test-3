<template>
  <header class="w-full bg-azure-12 shadow-[0px_9px_35px_0px_rgba(3,25,58,0.40)]">
    <div class="max-w-7xl mx-auto border-b-[0.8px] border-gray-98-5 py-4 px-4 lg:px-0 flex justify-between items-center">
      <!-- Logo and Nav -->
      <div class="flex items-center gap-3 md:gap-8 lg:gap-14">
        <!-- Logo -->
        <img src="/svg/logo.svg" alt="Logo" width="109" height="36">

        <!-- Navigation - Desktop -->
        <nav class="hidden md:flex items-center gap-4 lg:gap-6">
          <img src="/svg/search.svg" alt="Logo" width="24" height="24">
          <div v-for="item in navItems" :key="item" class="text-azure-84 text-sm font-medium uppercase leading-tight tracking-wide hover:text-white-solid transition-colors">
            {{ item }}
          </div>
        </nav>

        <!-- Navigation Toggle - Mobile -->
        <button @click="toggleMobileMenu" class="w-7 h-7 relative md:hidden">
          <div class="w-6 h-6 left-[3.75px] top-[3.75px] absolute bg-white-solid"></div>
        </button>
      </div>

      <!-- Auth Buttons -->
      <div class="flex items-center gap-2">
        <button class="h-8 px-3 py-2.5 bg-sky-950 rounded-[10px] flex justify-center items-center">
          <span class="text-center text-white-solid text-sm font-normal uppercase leading-none tracking-wide">Login</span>
        </button>
        <button class="h-8 px-3 py-2.5 bg-emerald-500 rounded-[10px] flex justify-center items-center">
          <span class="text-center text-white-solid text-sm font-normal uppercase leading-none tracking-wide">Registration</span>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div v-if="mobileMenuOpen" class="md:hidden w-full bg-azure-18 py-4 px-6 border-b border-gray-98-5 slide-in">
      <div class="flex flex-col space-y-4">
        <div v-for="item in navItems" :key="item" class="text-azure-84 text-sm font-medium uppercase leading-tight tracking-wide hover:text-white-solid transition-colors">
          {{ item }}
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
const navItems = ['Home', 'Game', 'Infor', 'News', 'Promotions', 'VIP'];
const mobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};
</script>