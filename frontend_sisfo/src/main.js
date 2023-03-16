import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Router from './routes.js'
import Routes from './routes'
import Routes from './routers'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueRouter)

const router = new VueRouter({
  routes: Router,
  mode: "history"

  routes: Routes,
  mode: "history"
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueRouter);

const router = new VueRouter({
  routes: Routes,
  mode: 'history',
})

new Vue({
  render: h => h(App),
  router: router,
}).$mount('#app')
=======
}).$mount('#app')
