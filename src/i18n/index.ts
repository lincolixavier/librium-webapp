import { createI18n } from 'vue-i18n'

import en from './languages/en'
import es from './languages/es'
import pt from './languages/pt'

export const i18n = createI18n({
  legacy: false,
  locale: navigator.language.split('-')[0],
  fallbackLocale: 'en',
  messages: {
    pt,
    en,
    es
  }
})
