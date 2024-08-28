import './assets/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css'

import { getMenuCfg } from '@/config/menu'
import { setMenuInStore } from '@/utils/menu'
import { initRoutes } from '@/utils/route'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
const menu = getMenuCfg()
setMenuInStore({ menu })

initRoutes({ menu, router })
app.use(router)

app.use(Antd).mount('#app')
