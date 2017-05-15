import 'document-register-element/build/document-register-element'
import Vue from 'vue'
import App from './App'
import vueCustomElement from 'vue-custom-element';
import PersonenSchaden from './components/PersonenSchaden'

Vue.config.productionTip = false

Vue.config.ignoredElements = [
  'personen-schaden'
];

Vue.use(vueCustomElement);

Vue.customElement('personen-schaden', PersonenSchaden, {
  // Additional Options: https://github.com/karol-f/vue-custom-element#options
});

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
