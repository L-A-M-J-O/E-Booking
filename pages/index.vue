<script setup lang="ts">
import { useI18n } from "~/.nuxt/imports";
import { onMounted, ref } from "vue";
const { locale, t, locales } = useI18n();
const initials = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
const value = ref([]);
const options = Array.from({ length: 1000 }).map((_, idx) => ({
  value: `Option${idx + 1}`,
  label: `${initials[idx % 10]}${idx}`,
}));
const size = ref<'default' | 'large' | 'small'>('default')

const value1 = ref('')
const value2 = ref('')

const shortcuts = [
  {
    text: 'Today',
    value: new Date(),
  },
  {
    text: 'Yesterday',
    value: () => {
      const date = new Date()
      date.setTime(date.getTime() - 3600 * 1000 * 24)
      return date
    },
  },
  {
    text: 'A week ago',
    value: () => {
      const date = new Date()
      date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
      return date
    },
  },
]

const disabledDate = (time: Date) => {
  return time.getTime() > Date.now()
}
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
              class="button__box absolute bottom-[-10%] right-[18%] h-18 w-2/3 bg-[#FFFFFF] rounded-xl shadow-2xl"
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
              <div class="flex flex-wrap p-10">
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
                <div class="block">
                  <span class="demonstration">Picker with quick options</span>
                  <el-date-picker
                    v-model="value2"
                    type="date"
                    placeholder="Pick a day"
                    :disabled-date="disabledDate"
                    :shortcuts="shortcuts"
                    :size="size"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
