import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import i18nextXHR from 'i18next-xhr-backend';

const LANGUAGES = Object.freeze([ 'en', 'es' ]);
const DEFAULTLANGUAGES = Object.freeze('en');
const NAMESPACES = Object.freeze([ 'translations' ]);
const DEFAULTNAMESPACE = Object.freeze('translations');

i18n
	.use(LanguageDetector)
	.use(i18nextXHR)
	.init({
		backend: {
			loadPath: language => `/content/i18n/${language}.json`,
			allowMultiLoading: false,
			queryStringParams: {
				v: __webpack_hash__
			}
		},
		whitelist: LANGUAGES,
		lng: DEFAULTLANGUAGES,
		fallbackLng: DEFAULTLANGUAGES,
		ns: NAMESPACES,
		defaultNS: DEFAULTNAMESPACE,
		debug: false,
		interpolation: {
			escapeValue: false,
			formatSeparator: ','
		},
		react: {
			wait: true
		}
	});

export default i18n;
export { LANGUAGES, DEFAULTLANGUAGES, NAMESPACES, DEFAULTNAMESPACE };
