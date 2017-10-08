import Vue from 'vue'
import Vuetify from 'vuetify'
import './stylus/main.styl'
import App from './App'
import router from './router'

import Carousel from './components/Image-components/Carousel'
import WeddingCarousel from './components/Image-components/WeddingCarousel'
import AirportCarousel from './components/Image-components/AirportCarousel'
import PeopleCarousel from './components/Image-components/PeopleCarousel'

Vue.use(Vuetify)
Vue.config.productionTip = false

Vue.component('app-carousel', Carousel)
Vue.component('app-wedding-carousel', WeddingCarousel)
Vue.component('app-airport-carousel', AirportCarousel)
Vue.component('app-people-carousel', PeopleCarousel)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

