import { createApp } from 'vue'
<<<<<<< HEAD
import '@/style.css'
import App from '@/App.vue'

import router from '@/router/index'

createApp(App).use(router).mount('#app')
=======
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
>>>>>>> origin/dev
