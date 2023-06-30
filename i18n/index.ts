import en from './languages/en'
import es from './languages/es'
import pt from './languages/pt'

export default defineI18nConfig(() => ({
  defaultLocale: 'en',
  messages: {
    pt,
    en,
    es
  }
}))
