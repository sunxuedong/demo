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
app.use(router)

const menu = getMenuCfg()
setMenuInStore({ menu })
initRoutes({ menu })

app.use(Antd).mount('#app')
