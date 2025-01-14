import App from '@/App.vue'
import { router } from '@/router'
import { createI18n } from 'vue-i18n'
import messages from '@intlify/unplugin-vue-i18n/messages'

import '@arco-themes/vue-ant-design/css/arco.css'
import 'virtual:uno.css'
import '@/styles/style.css'

const app = createApp(App)

const pinia = createPinia()

const i18n = createI18n({ locale: 'zh-cn', messages })

app.use(pinia).use(i18n).use(router).mount('#app')
