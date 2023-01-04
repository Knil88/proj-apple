import { createApp } from 'vue'


import './style.css'
import App from './App.vue'
import { animate } from "popmotion"



/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faStar,faStarHalfStroke,faShop,faMagnifyingGlass, faBagShopping, } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faStar,faStarHalfStroke,faShop,faMagnifyingGlass ,faBagShopping)



createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')