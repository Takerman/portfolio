import { createApp } from 'vue';
import App from './App.vue';
import { createI18n } from 'vue-i18n';
import { createPinia } from 'pinia';
import mitt from 'mitt';
import "easing";
import "vue-owl-carousel";
import "animate";
import "./assets/css/style.css";
import "./assets/css/custom.css";
import "./assets/css/themify-icons.css";
import "./assets/font-awesome/css/all.css";
import cookies from "./helpers/cookies.js";
import moment from 'moment';
import en from './assets/languages/en.json';
import bg from './assets/languages/bg.json';
import de from './assets/languages/de.json';
import ru from './assets/languages/ru.json';
import VueGtag from "vue-gtag";
import router from './helpers/router.js';

Date.prototype.toJSON = function () { return moment(this).format(); }

const emitter = mitt();
let pinia = createPinia();
const i18n = createI18n({
	locale: cookies.get('language') || 'en',
	legacy: false,
	locale: cookies.get('language') || 'en',
	fallbackLocale: 'en',
	formatFallbackMessages: true,
	messages: {
		en: en,
		bg: bg,
		de: de,
		ru: ru
	}
});

const app = createApp(App);
app.config.globalProperties.emitter = emitter;
app.config.productionTip = false;
app.use(pinia)
	.use(i18n)
	.use(router)
	.use(VueGtag, {
		config: { id: 'G-5Z8VNY3X2S' }
	}).mount('#app');
