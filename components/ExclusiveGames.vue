<template>
    <div class="w-full max-w-[1920px] mx-auto px-4 lg:px-10 xl:px-60">
      <div class="flex flex-col gap-8">
        <div class="flex justify-between items-center">
          <h2 class="text-white text-xl md:text-2xl lg:text-3xl font-medium capitalize">Exclusive Games</h2>
          <div class="flex items-center gap-2">
            <span class="hidden md:inline-block text-white text-sm md:text-base font-normal uppercase leading-tight">SEE ALL</span>
            <img src="/svg/see-all.svg" alt="See All" width="20" height="20">
          </div>
        </div>
        
        <!-- Desktop Games Grid -->
        <div class="hidden md:block relative overflow-hidden">
          <div class="flex gap-4">
            <div v-for="(game, index) in games" :key="index"
                 :class="{'w-[156px]': index < 8, 'w-[52px]': index === 8}"
                 class="h-52 relative rounded-lg group">
              <img :src="game.image" :alt="game.name" class="h-52 w-full rounded-lg object-cover" />
              <div class="w-full px-4 pb-1.5 absolute bottom-0 opacity-80 bg-gradient-to-b from-slate-900/0 to-sky-950/40 rounded-b-lg flex justify-center items-center">
                <div class="text-white text-[8px] font-medium uppercase leading-[8px] tracking-wide">{{ game.provider }}</div>
              </div>
              <div v-if="game.badge" class="absolute top-4 left-[-3px]">
                <div class="w-9 h-5 relative">
                  <div class="w-8 h-5 left-[3px] top-[0.14px] absolute opacity-20 bg-neutral-900"></div>
                  <div class="w-[3px] h-1 left-0 top-[16.5px] absolute" :class="{'bg-red-500': game.badge === 'new', 'bg-emerald-700': game.badge === 'hot'}"></div>
                  <div class="w-9 h-4 left-0 top-[0.13px] absolute" 
                       :class="{'bg-gradient-to-br from-red-400 to-rose-600': game.badge === 'new', 'bg-gradient-to-br from-emerald-500 to-emerald-500': game.badge === 'hot'}"></div>
                  <div class="w-6 h-2.5 left-[6.78px] top-[3.55px] absolute"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Mobile Games Grid -->
        <div class="md:hidden w-full overflow-hidden">
          <div class="flex gap-3 overflow-x-auto pb-4 hide-scrollbar">
            <div v-for="(game, index) in games.slice(0, 6)" :key="index"
                 class="flex-shrink-0 w-28 h-40 relative rounded-lg">
              <img :src="game.image" :alt="game.name" class="w-28 h-40 rounded-lg object-cover" />
              <div class="w-28 px-4 pb-1.5 absolute bottom-0 opacity-80 bg-gradient-to-b from-slate-900/0 to-sky-950/40 rounded-b-lg flex justify-center items-center">
                <div class="text-white text-[6px] font-medium uppercase leading-[6px] tracking-wide">{{ game.provider }}</div>
              </div>
              <div v-if="game.badge" class="absolute top-3 left-[-2px]">
                <div class="w-8 h-4 relative">
                  <div class="w-7 h-4 left-[3px] top-[0.14px] absolute opacity-20 bg-neutral-900"></div>
                  <div class="w-[3px] h-1 left-0 top-[13.5px] absolute" :class="{'bg-red-500': game.badge === 'new', 'bg-emerald-700': game.badge === 'hot'}"></div>
                  <div class="w-8 h-3.5 left-0 top-[0.13px] absolute" 
                       :class="{'bg-gradient-to-br from-red-400 to-rose-600': game.badge === 'new', 'bg-gradient-to-br from-emerald-500 to-emerald-500': game.badge === 'hot'}"></div>
                  <div class="w-5 h-2 left-[6px] top-[3px] absolute"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  // Sample data for exclusive games
  const games = [
    { 
      name: 'Game 1', 
      provider: '100HP Gaming', 
      image: '/images/Game-thumb.png',
      badge: 'new'
    },
    { 
      name: 'Game 2', 
      provider: 'VeliPlay', 
      image: '/images/Game-thumb-1.png',
      badge: 'new'
    },
    { 
      name: 'Game 3', 
      provider: 'Evolution', 
      image: '/images/Game-thumb-2.png',
      badge: 'hot'
    },
    { 
      name: 'Game 4', 
      provider: 'VeliPlay', 
      image: '/images/Game-thumb-3.png',
      badge: 'hot'
    },
    { 
      name: 'Game 5', 
      provider: 'Onlyplay', 
      image: '/images/Game-thumb-4.png',    
      badge: null
    },
    { 
      name: 'Game 6', 
      provider: 'VeliPlay', 
      image: '/images/Game-thumb-5.png',
      badge: null
    },
    { 
      name: 'Game 7', 
      provider: 'VeliPlay', 
      image: '/images/Game-thumb-6.png',
      badge: null
    },
    { 
      name: 'Game 8', 
      provider: 'Evolution', 
      image: '/images/Game-thumb-7.png',
      badge: 'new'
    },
    { 
      name: 'Game 9', 
      provider: 'Spinomenal', 
      image: '/images/Game-thumb-8.png',
      badge: 'new'
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