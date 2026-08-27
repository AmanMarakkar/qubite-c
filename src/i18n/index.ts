import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import { ar } from './locales/ar'
import { en } from './locales/en'

export const RTL_LANGUAGES = new Set(['ar'])

const storedLanguage = localStorage.getItem('qubite-language')
const initialLanguage = storedLanguage === 'ar' ? 'ar' : 'en'

i18next.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ar: { translation: ar },
  },
  lng: initialLanguage,
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
})

function applyDocumentDirection(language: string) {
  document.documentElement.lang = language
  document.documentElement.dir = RTL_LANGUAGES.has(language) ? 'rtl' : 'ltr'
}

applyDocumentDirection(initialLanguage)

i18next.on('languageChanged', (language) => {
  localStorage.setItem('qubite-language', language)
  applyDocumentDirection(language)
})

export default i18next
