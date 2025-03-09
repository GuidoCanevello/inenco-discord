import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  modules: [
    'nuxt-mongoose',

    // Content (usado para markdown)
    // '@nuxt/content',

    // Vuetify
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },

    // Pinia
    '@pinia/nuxt',

    // Nuxt Server Utils
    // "nuxt-server-utils",
  ],

  routeRules: {
    // prerender index route by default
    '/': { prerender: true },
  },

  runtimeConfig: {
    public: {
      DISCORD_TOKEN: process.env.DISCORD_TOKEN,
      GUILD_ID: process.env.GUILD_ID,
      CLIENT_ID: process.env.CLIENT_ID,
    },
  },

  build: {
    transpile: ['vuetify'], // Vuetify
  },
  
  css: [
    'vuetify/styles', // vuetify ships precompiled css, no need to import sass  
    '@/assets/css/main.css',
  ],

  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
})