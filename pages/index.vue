<script setup lang="ts">
import { useI18n } from "~/.nuxt/imports";
import { onMounted, ref } from "vue";
const { locale, t, locales } = useI18n();
const viewRoro = ref(false);
const viewConteiner = ref(true);
const viewConvencional = ref(false);
</script>
<template>
  <section class="index__pages-video h-full w-full">
    <div class="container mx-auto">
      <div class="flex flex-col h-screen">
        <div class="title_box w-auto mx-auto h-auto mb-10">
          <h2>
            <p class="text-center">
              e-Booking
              <span class="span_title block text-center">
                Consulta nuestros schedules y reserva tu espacio en un solo
                click
              </span>
            </p>
          </h2>
        </div>
        <div class="main__box-img w-auto h-3/6 rounded-2xl relative">
          <div class="booking__box w-auto mx-auto h-auto">
            <div
              class="button__box absolute bottom-[-10%] right-[26%] h-18 w-1/2 bg-[#FFFFFF] rounded-full shadow-2xl"
            >
              <div class="flex flex-wrap justify-center items-end content-end">
                <div class="flex">
                  <button class="booking__btn rounded-2xl">Container</button>
                </div>
                <div class="flex">
                  <button class="booking__btn rounded-2xl">Container</button>
                </div>
                <div class="flex">
                  <button class="booking__btn rounded-2xl">Container</button>
                </div>
              </div>
              
            </div>
            
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
