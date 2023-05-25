import './assets/main.css'
import i18nPlugin from './plugins/i18n'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.use(i18nPlugin, {
    greetings: {
        hello: 'Bonjour!'
    }
})

app.mount('#app')
