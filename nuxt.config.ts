// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxtjs/seo',
    '@nuxtjs/supabase',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@vueuse/nuxt' /* disabled from auto-import: toRefs, useFetch, useCookie, useHead, useTitle, useStorage */,
    'nuxt-icon',
    'nuxt-typed-router',
  ],
  site: {
    url: 'https://example.com',
    name: 'Awesome Site',
    description: 'Welcome to my awesome site!',
    defaultLocale: 'en' /* not needed if you have @nuxtjs/i18n installed */,
  },
  supabase: {
    redirectOptions: {
      login: '/login',
      callback: '/dashboard',
      exclude: ['/'],
    },
  },
});
