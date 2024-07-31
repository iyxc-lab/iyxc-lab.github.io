import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import resources from './locales'

i18n.use(initReactI18next).init({
    resources,
    lng: 'zh',
    fallbackLng: 'zh',
    debug: process.env.NODE_ENV === 'development',
    interpolation: {
        escapeValue: false,
    },
    react: {
        useSuspense: false,
    },
})
export default i18n
