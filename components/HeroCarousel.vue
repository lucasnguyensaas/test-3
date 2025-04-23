<template>
  <div class="w-full overflow-hidden py-6 px-4 md:py-10 md:px-8">
    <Swiper
      :slides-per-view="slidesPerView"
      :centered-slides="true"
      :space-between="30"
      :pagination="{ clickable: true }"
      :modules="[SwiperPagination]"
      :loop="true"
      class="py-8 md:py-12"
    >
      <!-- Card 1 -->
      <SwiperSlide class="px-2 md:px-4">
        <div class="w-full h-[450px] md:h-[450px] relative gradient-card-1 rounded-xl overflow-hidden shadow-lg">
          <div class="absolute inset-0 opacity-50"></div>
          <img class="w-full h-full object-cover hidden md:block" src="/images/hero-1.png" alt="Promotion" />
          <img class="w-full h-full object-cover md:hidden" src="/images/hero-mobile-1.png" alt="Promotion" />
        </div>
      </SwiperSlide>

      <!-- Card 2 -->
      <SwiperSlide class="px-2 md:px-4">
        <div class="w-full h-[450px] md:h-[450px] relative gradient-card-2 rounded-xl overflow-hidden shadow-lg">
          <div class="absolute inset-0 opacity-50"></div>
          <img class="w-full h-full object-cover hidden md:block" src="/images/hero-1.png" alt="Sport Welcome Pack" />
          <img class="w-full h-full object-cover md:hidden" src="/images/hero-mobile-1.png" alt="Sport Welcome Pack" />
        </div>
      </SwiperSlide>

      <!-- Card 3 -->
      <SwiperSlide class="px-2 md:px-4">
        <div class="w-full h-[450px] md:h-[450px] relative gradient-card-3 rounded-xl overflow-hidden shadow-lg">
          <div class="absolute inset-0 opacity-50"></div>
          <img class="w-full h-full object-cover hidden md:block" src="/images/hero-1.png" alt="Exclusive Tournament" />
          <img class="w-full h-full object-cover md:hidden" src="/images/hero-mobile-1.png" alt="Exclusive Tournament" />
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination as SwiperPagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { ref, computed, onMounted } from 'vue';

const windowWidth = ref(0);

onMounted(() => {
  windowWidth.value = window.innerWidth;
  window.addEventListener('resize', handleResize);
});

const handleResize = () => {
  windowWidth.value = window.innerWidth;
};

const slidesPerView = computed(() => {
  if (windowWidth.value >= 1280) {
    return 1.5; // Show partial sides on large screens
  } else if (windowWidth.value >= 768) {
    return 1.2; // Show small partial sides on medium screens
  } else {
    return 1; // Show one slide on mobile
  }
});
</script>