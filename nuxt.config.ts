// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  ssr: false,

  modules: [
    '@nuxt/ui',
    '@nuxt/eslint',
    '@nuxt/content',
    '@nuxt/image',
    '@nuxt/scripts',
    '@vueuse/nuxt',
    'motion-v/nuxt'
  ],

  css: ['~/assets/css/main.css'],

  compatibilityDate: '2025-07-16',

  icon: {
    customCollections: [{
      prefix: 'qb',
      dir: './app/assets/icons'
    }]
  },

  sourcemap: {
    server: true,
    client: true,
  },

  content: {
    preview: {
      api: 'https://api.nuxt.studio'
    }
  }
})