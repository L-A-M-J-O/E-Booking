// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      meta: [
        // <meta name="viewport" content="width=device-width, initial-scale=1">
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      script: [ {src: "https://unpkg.com/@splinetool/viewer@0.9.394/build/spline-viewer.js"}],
      // please note that this is an area that is likely to change
      style: [
        // <style type="text/css">:root { color: red }</style>
      ],
      noscript: [
        // <noscript>JavaScript is required.</noscript>
        { children: "JavaScript is required" },
      ],
    },
  },
  
  // devtools: { enabled: true },
  modules: ["@nuxtjs/i18n", "@nuxtjs/color-mode", "@element-plus/nuxt"],
  i18n: {
    locales: ["en", "fr", "es"],
    defaultLocale: "es",
    strategy: "prefix_and_default",
  },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
