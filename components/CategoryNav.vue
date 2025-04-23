<template>
    <div class="w-full max-w-[1920px] mx-auto mt-8 mb-8 px-4 lg:px-10 xl:px-60">
      <div class="pb-7 border-b border-white/5">
        <!-- Desktop category navigation -->
        <div class="hidden md:flex flex-wrap justify-between gap-2.5">
          <div v-for="(category, index) in categories" :key="index"
               class="flex-1 h-14 px-4 py-4 rounded-lg outline outline-1 outline-white/10 flex justify-center items-center gap-3"
               :class="{'bg-azure-18': category.active}">
            <div class="w-6 h-6 relative overflow-hidden flex-shrink-0">
              <img :src="category.icon" alt="Category icon" class="w-6 h-6 object-contain" />
            </div>
            <div class="text-white text-sm lg:text-base font-normal leading-snug whitespace-nowrap">{{ category.name }}</div>
          </div>
        </div>
        
        <!-- Mobile category navigation -->
        <div class="md:hidden overflow-x-auto">
          <div class="flex justify-start items-center gap-3 min-w-max pb-2">
            <div v-for="(category, index) in mobileCategories" :key="index"
                 class="w-28 h-12 px-3 py-3 bg-azure-18 rounded-lg outline outline-1 outline-white/10 flex justify-center items-center gap-1.5"
                 :class="{'bg-azure-18': category.active}">
                <img :src="category.icon" alt="Category icon" class="w-6 h-6 object-contain" />
              <div class="text-white text-xs font-normal leading-none">{{ category.name }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  // Sample data for category navigation
  const categories = [
    { name: 'Diamond mine', icon: '/svg/diamon.svg', active: false },
    { name: 'VIP', icon: '/svg/vip.svg', active: false },   
    { name: 'Promotion', icon: '/svg/promotion.svg', active: false },
    { name: 'Hot Match', icon: '/svg/hot-match.svg', active: false },
    { name: 'P2P Transaction', icon: '/svg/p2p.svg', active: false },
    { name: 'Games', icon: '/svg/games.svg', active: true },
    { name: 'Providers', icon: '/svg/providers.svg', active: true },
  ];
  
  // Mobile has fewer categories
  const mobileCategories = [
    { name: 'Search', icon: '/svg/search.svg', active: false },
    { name: 'Games', icon: '/svg/games.svg', active: true },
    { name: 'Providers', icon: '/svg/providers.svg', active: false }
  ];
  </script>