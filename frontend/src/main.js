/* eslint-disable */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vuetify from './plugins/Vuetify'
import VueCoreVideoPlayer from 'vue-core-video-player'
import VuetifyToast from 'vuetify-toast-snackbar'
import OTPInput from '@8bu/vue-otp-input';
import { ValidationObserver, ValidationProvider, extend, localize } from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';
import VuePersianDatetimePicker from 'vue-persian-datetime-picker';

Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule]);
});

Vue.component('date-picker', VuePersianDatetimePicker);
Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);

Vue.use(OTPInput);
Vue.use(VueCoreVideoPlayer)
Vue.use(VuetifyToast, {
  x: 'center', // default
  y: 'bottom', // default
  color: 'info', // default
  timeout: 3000, // default
  dismissable: true, // default
  autoHeight: true, // default
  multiLine: false, // default
  vertical: true, // default
  shorts: {
    custom: {
      color: 'purple'
    }
  },
  property: '$toast' // default
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  vuetify,
  router,
  components: { App },
  template: '<App/>'
})
