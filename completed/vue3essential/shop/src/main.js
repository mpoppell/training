import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

// import 'bootstrap/dist/css/bootstrap.css'
// import './assets/main.css'

library.add(faShoppingCart)

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router)
app.component('Fa', FontAwesomeIcon)

app.mount('#app')
