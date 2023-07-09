// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      meta: [
        // <meta name="viewport" content="width=device-width, initial-scale=1">
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      script: [
        // <script src="https://myawesome-lib.js"></script>
      ],
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
  modules: ["@nuxtjs/i18n", '@nuxtjs/color-mode'],
  i18n: {
    locales: ['en', 'fr', 'es'],
    defaultLocale: 'es',
    strategy: 'prefix_and_default'
  },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
