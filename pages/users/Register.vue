<script setup lang="ts">
import { useI18n } from "~/.nuxt/imports";
const { locale, t, locales } = useI18n();
const value = ref<string[]>([]);
const stateToogle = ref(true);
const options = [
  {
    value: "HTML",
    label: "HTML",
  },
  {
    value: "CSS",
    label: "CSS",
  },
  {
    value: "JavaScript",
    label: "JavaScript",
  },
];
</script>
<template>
  <div>
    <div class="img-prueba container mx-auto h-screen w-full">
      <form class="mt-40">
        <label class="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            value=""
            class="sr-only peer"
            @click="stateToogle = !stateToogle"
          />
          <div
            class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
          ></div>
        </label>
        <div class="grid gap-6 mb-6 md:grid-cols-3">
          <div>
            <label
              for="first_name"
              class="label-register block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >{{ t("name") }}</label
            >
            <input
              type="text"
              id="first_name"
              class="input-register bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              :placeholder="t('name')"
              required
            />
          </div>
          <div v-show="stateToogle === true">
            <div>
              <label
                for="last_name"
                class="label-register block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >{{ t("lastName") }}</label
              >
              <input
                type="text"
                id="last_name"
                class="input-register bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                :placeholder="t('lastName')"
                required
              />
            </div>
          </div>
          <div v-show="stateToogle === true">
            <div>
              <label
                for="company"
                class="label-register block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >{{ t("nif") }}</label
              >
              <input
                type="text"
                id="company"
                class="input-register bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                :placeholder="t('nif')"
                required
              />
            </div>
          </div>
          <div v-show="stateToogle === false">
            <div>
              <label
                for="company"
                class="label-register block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >{{ t("CIF") }}</label
              >
              <input
                type="text"
                id="CIF"
                class="input-register bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                :placeholder="t('CIF')"
                required
              />
            </div>
          </div>
          <div>
            <label
              for="addres"
              class="label-register block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >{{ t("addres") }}</label
            >
            <input
              type="text"
              id="addres"
              class="input-register bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              :placeholder="t('addres')"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              required
            />
          </div>
          <div>
            <label
              for="city"
              class="label-register block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >{{ t("city") }}</label
            >
            <input
              type="url"
              id=" city"
              class="input-register bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              :placeholder="t('city')"
              required
            />
          </div>
          <div>
            <label
              for="code"
              class="label-register block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >{{ t("codeP") }}</label
            >
            <input
              type="number"
              id="code"
              class="input-register bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              :placeholder="t('codeP')"
              required
            />
          </div>
          <div class="mb-6">
            <el-select
              v-model="value"
              multiple
              filterable
              allow-create
              default-first-option
              :reserve-keyword="false"
              placeholder="Choose tags for your article"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </div>
          <div>
            <label
              for="city"
              class="label-register block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >{{ t("country") }}</label
            >
            <input
              type="url"
              id="country"
              class="input-register bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              :placeholder="t('country')"
              required
            />
          </div>
          <div>
            <label
              for="city"
              class="label-register block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >{{ t("numberT") }}</label
            >
            <input
              type="url"
              id="numberT"
              class="input-register bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              :placeholder="t('numberT')"
              required
            />
          </div>
        </div>
        <div class="grid gap-8 p-2 md:grid-cols-2">
          <div>
            <label
              for="city"
              class="label-register block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >{{ t("email") }}</label
            >
            <input
              type="url"
              id="email"
              class="input-register bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              :placeholder="t('email')"
              required
            />
          </div>
          <div>
            <label
              for="city"
              class="label-register block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >{{ t("emailc") }}</label
            >
            <input
              type="url"
              id="email"
              class="input-register bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label
              for="city"
              class="label-register block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >{{ t("password") }}</label
            >
            <input
              type="url"
              id="password"
              class="input-register bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              :placeholder="t('password')"
              required
            />
          </div>
          <div>
            <label
              for="city"
              class="label-register block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >{{ t("passwordc") }}</label
            >
            <input
              type="url"
              id="passwordc"
              class="input-register bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
