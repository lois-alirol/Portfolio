import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from 'data/translations/en.json';
import fr from 'data/translations/fr_FR.json';
import es from 'data/translations/es_ES.json';
import de from 'data/translations/de_DE.json';

export const LANGUAGES: string[] =  [
    "fr", "en", "es", "de"
];

export const isValidLanguage= (language: string) => {
    return LANGUAGES.includes(language);
}

i18n
    .use(initReactI18next)
    .init({
        debug: true,
        fallbackLng: 'fr',
        supportedLngs: LANGUAGES,
        interpolation: {
            escapeValue: false,
        },
        resources: {
            en: {
                translation: en
            },
            fr: {
                translation: fr
            },
            es: {
                translation: es
            },
            de: {
                translation: de
            }
        }
    }).then(() => {});

export default  i18n;