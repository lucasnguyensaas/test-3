<template>
  <div class="w-full max-w-[1920px] mx-auto my-10 px-4 lg:px-10 xl:px-60">
    <div class="flex flex-col gap-8">
      <div class="flex justify-between items-center">
        <h2 class="text-white text-xl md:text-2xl lg:text-3xl font-medium capitalize">All providers</h2>
        <div class="flex items-center gap-2">
          <span class="hidden md:inline-block text-white text-sm md:text-base font-normal uppercase leading-tight">SEE ALL</span>
          <img src="/svg/see-all.svg" alt="See All" width="20" height="20">
        </div>
      </div>
      
      <!-- Desktop Providers Grid -->
      <div class="hidden md:flex flex-wrap justify-start xl:justify-between gap-3 px-4">
        <div v-for="(provider, index) in providers" :key="index"
         class="w-40 h-32 bg-sky-950 rounded-lg overflow-hidden">
          <div class="h-16 flex items-center justify-center bg-azure-18">
        <div class="w-24 h-8">
          <img :src="provider.logo" :alt="provider.name" class="w-full h-full object-contain" />
        </div>
          </div>
          <div class="w-40 h-16 px-2 py-2.5 bg-[#F5F9FF]/5 flex flex-col justify-center items-center gap-1">
        <div class="text-white text-xs font-normal underline leading-tight">{{ provider.name }}</div>
        <div class="text-slate-400 text-xs font-normal underline leading-3">{{ provider.gamesCount }} games</div>
          </div>
        </div>
      </div>
      
      <!-- Mobile Providers Slider -->
      <div class="md:hidden overflow-hidden">
        <div class="flex gap-1.5 overflow-x-auto hide-scrollbar">
          <div v-for="(provider, index) in providers.slice(0, 6)" :key="index"
               class="flex-shrink-0 w-28 h-32 rounded-lg overflow-hidden">
            <div class="h-16 flex items-center justify-center bg-azure-18">
              <div class="w-24 h-7">
                <img :src="provider.logo" :alt="provider.name" class="w-full h-full object-contain" />
              </div>
            </div>
            <div class="w-28 h-14 py-2.5 bg-[#F5F9FF]/5 flex flex-col justify-center items-center gap-1">
              <div class="text-white text-[10px] font-normal underline leading-tight">{{ provider.name }}</div>
              <div class="text-slate-400 text-[10px] font-normal underline leading-3">{{ provider.gamesCount }} games</div>
            </div>
          </div>
        </div>  
      </div>
    </div>
  </div>
</template>

<script setup>
// Sample data for game providers
const providers = [
  { 
    name: 'Evolution', 
    logo: '/images/provider-1.png',
    gamesCount: 312
  },
  { 
    name: 'Spribe', 
    logo: '/images/provider-2.png',
    gamesCount: 12
  },
  { 
    name: 'VeliPlay', 
    logo: '/images/provider-3.png',
    gamesCount: 9
  },
  { 
    name: 'Turbo Games', 
    logo: '/images/provider-4.png',
    gamesCount: 36
  },
  { 
    name: 'SmartSoft', 
    logo: '/images/provider-5.png',
    gamesCount: 37
  },
  { 
    name: '100HP Gaming', 
    logo: '/images/provider-6.png',
    gamesCount: 7
  },
  { 
    name: 'BGaming', 
    logo: '/images/provider-7.png',
    gamesCount: 166
  },
  { 
    name: 'Wazdan', 
    logo: '/images/provider-8.png',
    gamesCount: 199
  }
];
</script>

<style scoped>
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>