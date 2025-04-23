<template>
  <footer class="w-full bg-azure-18 px-4 md:px-12 lg:px-60 py-10 md:py-14">
    <!-- Desktop Footer -->
    <div class="hidden md:flex justify-between">
      <!-- Help Center -->
      <div class="w-48 flex flex-col gap-10">
        <div class="flex flex-col gap-4">
          <div class="w-40 flex flex-col gap-2">
            <h3 class="text-white-solid text-2xl font-medium whitespace-nowrap">Help Center</h3>
            <p class="text-slate-400 text-base whitespace-nowrap">If you have any questions?</p>
          </div>
          <button
            class="h-10 px-14 py-3 bg-blue-600 rounded-[10px] text-xs font-normal uppercase tracking-tight hover:bg-blue-500 transition-colors duration-300">
            get answers
          </button>
        </div>

        <!-- Social Media -->
        <div class="flex items-center gap-6">
          <a href="#" class="w-7 h-7 flex items-center justify-center hover:opacity-80 transition-opacity">
            <img src="https://img.icons8.com/color/48/000000/twitter--v1.png" alt="Twitter" class="w-6 h-6" />
          </a>
          <a href="#" class="w-7 h-7 flex items-center justify-center hover:opacity-80 transition-opacity">
            <img src="https://img.icons8.com/color/48/000000/facebook-new.png" alt="Facebook" class="w-6 h-6" />
          </a>
          <a href="#" class="w-7 h-7 flex items-center justify-center hover:opacity-80 transition-opacity">
            <img src="https://img.icons8.com/color/48/000000/instagram-new--v1.png" alt="Instagram" class="w-6 h-6" />
          </a>
          <a href="#" class="w-7 h-7 flex items-center justify-center hover:opacity-80 transition-opacity">
            <img src="https://img.icons8.com/color/48/000000/telegram-app--v1.png" alt="Telegram" class="w-6 h-6" />
          </a>
        </div>
      </div>

      <!-- Links Sections -->
      <div class="w-24 flex flex-col gap-5">
        <h3 class="h-5 text-white-solid text-base font-medium">Games</h3>
        <div class="flex flex-col gap-5">
          <a v-for="i in 4" :key="i" href="#"
            class="text-slate-400 text-base hover:text-white-solid transition-colors duration-300">
            Game {{ i }}
          </a>
        </div>
      </div>

      <div class="flex flex-col gap-5">
        <h3 class="h-5 text-white-solid text-base font-medium">About</h3>
        <div class="flex flex-col gap-5">
          <a v-for="(link, i) in aboutLinks" :key="i" href="#"
            class="text-slate-400 text-base hover:text-white-solid transition-colors duration-300">
            {{ link }}
          </a>
        </div>
      </div>

      <div class="w-52 flex flex-col gap-5">
        <h3 class="h-5 text-white-solid text-base font-medium">Legal Information</h3>
        <div class="flex flex-col gap-5">
          <a v-for="(link, i) in legalLinks" :key="i" href="#"
            class="text-slate-400 text-base hover:text-white-solid transition-colors duration-300">
            {{ link }}
          </a>
        </div>
      </div>

      <!-- Mobile Apps -->
      <div class="w-40 flex flex-col gap-6">
        <div class="flex flex-col gap-2">
          <div
            class="h-14 px-2.5 py-1.5 bg-blue-950 rounded-lg flex items-center hover:bg-blue-900 transition-colors duration-300 cursor-pointer">
            <div class="w-10 h-10 flex items-center justify-center">
              <img src="/svg/ios.svg" alt="See All" class="w-8 h-8">
            </div>
            <div class="text-white text-base font-medium">
              Bluechip App<br>for Mac OS
            </div>
          </div>

          <div class="flex gap-2">
            <div
              class="flex-1 h-16 px-3 bg-blue-950 rounded-[10px] flex flex-col justify-center items-center hover:bg-blue-900 transition-colors duration-300 cursor-pointer">
              <div class="w-10 h-10 flex items-center justify-center">
                <img src="/svg/android.svg" alt="See All" class="w-8 h-8">
              </div>
              <div class="text-slate-400 text-base">Android</div>
            </div>

            <div
              class="flex-1 h-16 px-4 bg-blue-950 rounded-[10px] flex flex-col justify-center items-center hover:bg-blue-900 transition-colors duration-300 cursor-pointer">
              <div class="w-10 h-10 flex items-center justify-center">
                <img src="/svg/ios.svg" alt="See All" class="w-8 h-8">
              </div>
              <div class="text-slate-400 text-base">iOS</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile Footer -->
    <div class="md:hidden flex flex-col gap-4">
      <!-- Collapsible Sections -->
      <div class="flex flex-col gap-4">
        <div v-for="(section, index) in mobileSections" :key="index"
          class="px-3.5 pt-3 bg-azure-22 rounded-[10px] overflow-hidden">
          <div class="pb-3 flex justify-between items-center" @click="toggleSection(index)">
            <h3 class="text-white-solid text-base font-medium">{{ section.title }}</h3>
            <div class="w-4 h-4 relative transition-transform duration-300" :class="{ 'rotate-180': section.isOpen }">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd" />
              </svg>
            </div>
          </div>
          <div v-if="section.isOpen" class="pb-3 space-y-2">
            <a v-for="(link, i) in section.links" :key="i" href="#"
              class="block text-slate-400 hover:text-white-solid transition-colors">
              {{ link }}
            </a>
          </div>
        </div>
      </div>

      <!-- Social Media -->
      <div class="px-9 flex flex-col items-center">
        <div class="py-5">
          <h3 class="text-white-solid text-base font-medium">Follow Us</h3>
        </div>
        <div class="w-72 max-w-72 pl-3.5 pr-4 flex justify-between items-center">
          <a v-for="(social, i) in socials" :key="i" href="#"
            class="w-9 h-9 flex items-center justify-center hover:opacity-80 transition-opacity">
            <img :src="social.icon" :alt="social.name" class="w-7 h-7" />
          </a>
        </div>
      </div>

      <!-- Help Center -->
      <div class="px-6 py-4 bg-azure-22 rounded-[10px] flex justify-between items-center">
        <div>
          <h3 class="text-white-solid text-base font-medium">Help Center</h3>
          <p class="text-slate-400 text-xs">If you have any questions?</p>
        </div>
        <button class="h-8 px-3 py-2.5 bg-blue-600 rounded-[10px] text-xs font-normal uppercase tracking-tight">
          get answers
        </button>
      </div>

      <!-- Mobile Apps -->
      <div class="flex gap-2 mb-10">
        <div class="flex-1 h-14 py-1.5 bg-azure-22 rounded-lg flex items-center justify-center gap-1.5">
          <div class="w-10 h-10 flex items-center justify-center">
            <img src="/svg/android.svg" alt="Android"
              class="w-7 h-7" />
          </div>
          <div>
            <div class="text-white-solid text-base font-medium">Bluechip App</div>
            <div class="text-slate-400 text-xs">for Android</div>
          </div>
        </div>

        <div class="flex-1 h-14 py-1.5 bg-azure-22 rounded-lg flex items-center justify-center gap-1.5">
          <div class="w-10 h-10 flex items-center justify-center">
            <img src="/svg/ios.svg" alt="iOS" class="w-7 h-7" />
          </div>
          <div>
            <div class="text-white-solid text-base font-medium">Bluechip App</div>
            <div class="text-slate-400 text-xs">for iOS</div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue';

const aboutLinks = [
  'About Us',
  'Promotions',
  'VIP',
  'Help Center',
  'Awards & Certificates',
  'App'
];

const legalLinks = [
  'General Terms & Conditions',
  'Responsible Gaming Policy',
  'Sports Betting Rules',
  'Privacy and Cookies Policy',
  'Payment Methods',
  'Limits'
];

const mobileSections = ref([
  {
    title: 'Games',
    isOpen: false,
    links: ['Game 1', 'Game 2', 'Game 3', 'Game 4']
  },
  {
    title: 'About',
    isOpen: false,
    links: aboutLinks
  },
  {
    title: 'Legal Information',
    isOpen: false,
    links: legalLinks
  }
]);

const socials = [
  { name: 'Twitter', icon: 'https://img.icons8.com/color/48/000000/twitter--v1.png' },
  { name: 'Facebook', icon: 'https://img.icons8.com/color/48/000000/facebook-new.png' },
  { name: 'Instagram', icon: 'https://img.icons8.com/color/48/000000/instagram-new--v1.png' },
  { name: 'Telegram', icon: 'https://img.icons8.com/color/48/000000/telegram-app--v1.png' }
];

function toggleSection(index) {
  mobileSections.value[index].isOpen = !mobileSections.value[index].isOpen;
}
</script>