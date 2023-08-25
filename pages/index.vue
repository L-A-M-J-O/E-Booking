<script setup lang="ts">
import axios from "axios";
import { useI18n } from "~/.nuxt/imports";
import { useData } from "~/composables/useData";
import { onMounted, ref } from "vue";
const { locale, t, locales } = useI18n();
const { sendFormData, fetchDataList } = useData();
const dataCore = ref();

const initials = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
const value = ref([]);
const options = Array.from({ length: 1000 }).map((_, idx) => ({
  value: `Option${idx + 1}`,
  label: `${initials[idx % 10]}${idx}`,
}));
const size = ref<"default" | "large" | "small">("default");
const checked3 = ref("");
const value1 = ref("");
const value2 = ref("");

const shortcuts = [
  {
    text: "Today",
    value: new Date(),
  },
  {
    text: "Yesterday",
    value: () => {
      const date = new Date();
      date.setTime(date.getTime() - 3600 * 1000 * 24);
      return date;
    },
  },
  {
    text: "A week ago",
    value: () => {
      const date = new Date();
      date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
      return date;
    },
  },
];

const pedirdatos = async () => {
  dataCore.value = await fetchDataList();
  console.log(dataCore.value);
};
const disabledDate = (time: Date) => {
  return time.getTime() > Date.now();
};
const viewRoro = ref(false);
const viewConteiner = ref(true);
const viewConvencional = ref(false);

onMounted(async () => {});
</script>
<template>
  <section class="container mx-auto">
    <div class="flex flex-col">
      <div class="box-title h-auto m-5">
        <h2>
          <p class="text-center text-5xl sm:text-5xl md:text-[80px]">
            e-Booking
            <span class="span_title block text-center mt-4">
              Consulta nuestros schedules y reserva tu espacio en un solo click
            </span>
          </p>
        </h2>
      </div>
      <div class="box-booking shadow-2xl m-5 h-96">
        <div class="box-img rounded-2xl relative">
          <div class="box-booking flex justify-center">
            <div class="box-btm bg-[#FFFFFF] h-18 w-2/3 rounded-xl shadow-2xl absolute top-[50%]">
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
              <div class="flex flex-wrap px-10 py-5 justify-center">
                <div>
                  <label
                    for="city"
                    class="label-register block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >{{ t("city") }}</label
                  >
                  <el-select-v2
                    v-model="value"
                    filterable
                    :options="options"
                    placeholder="Please select"
                    style="width: 240px"
                    multiple
                  />
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-8 h-8"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
                  />
                </svg>
                <div>
                  <label
                    for="city"
                    class="label-register block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >{{ t("city") }}</label
                  >
                  <el-select-v2
                    v-model="value"
                    filterable
                    :options="options"
                    placeholder="Please select"
                    style="width: 240px"
                    multiple
                  />
                </div>
              </div>
              <div class="flex flex-wrap px-10 py-5 justify-center">
                <div class="block">
                  <el-date-picker
                    v-model="value2"
                    type="date"
                    placeholder="Pick a day"
                    :disabled-date="disabledDate"
                    :shortcuts="shortcuts"
                    :size="size"
                  />
                </div>
                <div class="px-5">
                  <el-select-v2
                    v-model="value"
                    filterable
                    :options="options"
                    placeholder="Please select"
                    style="width: 240px"
                    multiple
                  />
                </div>
                <div class="">
                  <el-checkbox v-model="checked3" label="Option1" border />
                </div>
              </div>
              <div class="flex flex-wrap px-5 py-5 justify-center">
                <button class="border border-b-blue-800">
                  <div class="flex flex-row">
                    <div>
                      <a href="#sectionData">
                        <span @click="pedirdatos()">Buscar Ruta</span>
                      </a>
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                        />
                      </svg>
                    </div>
                  </div>
                </button>
              </div>
              <div class="flex flex-wrap px-5 py-5 justify-center relative">
                <button
                  class="border border-b-blue-800 absolute bottom-[20em] right-[0.5em]"
                >
                  <div class="flex flex-row">
                    <div>
                      <span>Clear </span>
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="sectionData" class="box-travel m-5 rounded-md flex flex-wrap h-screen content-center mt-[40rem] md:mt-96 lg:mt-80 2xl:mt-36">
        <div class="card flex-grow m-2 h-60 md:h-52">
          <div class="card__header flex flex-wrap justify-center">
            <div class="card__title mx-3 my-3">
              <div class="skeleton skeleton-text"></div>
              <div class="skeleton skeleton-text"></div>
            </div>
          </div>
          <div class="card__body flex flex-wrap my-5 justify-center">
            <div class="skeleton skeleton-text mx-2"></div>
            <div class="skeleton skeleton-text mx-2"></div>
          </div>
          <div class="card__body-btn flex flex-wrap mt-5 justify-center">
            <div class="skeleton skeleton-btn mx-2"></div>
            <div class="skeleton skeleton-btn mx-2"></div>
          </div>
        </div>
        <div class="card flex-grow m-2 h-60 md:h-52">
          <div class="card__header flex flex-wrap justify-center">
            <div class="card__title mx-3 my-3">
              <div class="skeleton skeleton-text"></div>
              <div class="skeleton skeleton-text"></div>
            </div>
          </div>
          <div class="card__body flex flex-wrap my-5 justify-center">
            <div class="skeleton skeleton-text mx-2"></div>
            <div class="skeleton skeleton-text mx-2"></div>
          </div>
          <div class="card__body-btn flex flex-wrap mt-5 justify-center">
            <div class="skeleton skeleton-btn mx-2"></div>
            <div class="skeleton skeleton-btn mx-2"></div>
          </div>
        </div>
        <div class="card flex-grow m-2 h-60 md:h-52">
          <div class="card__header flex flex-wrap justify-center">
            <div class="card__title mx-3 my-3">
              <div class="skeleton skeleton-text"></div>
              <div class="skeleton skeleton-text"></div>
            </div>
          </div>
          <div class="card__body flex flex-wrap my-5 justify-center">
            <div class="skeleton skeleton-text mx-2"></div>
            <div class="skeleton skeleton-text mx-2"></div>
          </div>
          <div class="card__body-btn flex flex-wrap mt-5 justify-center">
            <div class="skeleton skeleton-btn mx-2"></div>
            <div class="skeleton skeleton-btn mx-2"></div>
          </div>
        </div>
        <div class="card flex-grow m-2 h-60 md:h-52">
          <div class="card__header flex flex-wrap justify-center">
            <div class="card__title mx-3 my-3">
              <div class="skeleton skeleton-text"></div>
              <div class="skeleton skeleton-text"></div>
            </div>
          </div>
          <div class="card__body flex flex-wrap my-5 justify-center">
            <div class="skeleton skeleton-text mx-2"></div>
            <div class="skeleton skeleton-text mx-2"></div>
          </div>
          <div class="card__body-btn flex flex-wrap mt-5 justify-center">
            <div class="skeleton skeleton-btn mx-2"></div>
            <div class="skeleton skeleton-btn mx-2"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
