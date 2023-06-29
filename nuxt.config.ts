// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/i18n'],
  css: ['~/assets/styles/main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @use '@/assets/styles/abstracts/functions';
          @use '@/assets/styles/abstracts/mixins';
          @use '@/assets/styles/abstracts/placeholders';
          @use '@/assets/styles/abstracts/variables';
          `
        }
      }
    }
  },
  app: {
    head: {
      title: 'Librium',
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: 'anonymous'
        },
        {
          href: 'https://fonts.googleapis.com/css2?family=Ysabeau+Infant:ital,wght@0,1;0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;0,1000;1,1;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900;1,1000&display=swap',
          rel: 'stylesheet'
        }
      ]
    }
  },
  i18n: {
    vueI18n: './i18n',
    strategy: 'prefix_except_default',
    defaultLocale: 'en',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root' // recommended
    } // if you are using custom path, default
  }
})
