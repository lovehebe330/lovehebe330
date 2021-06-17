import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './icons/index'
import './styles/index.scss'
import './utils/auth'
import './utils/permission'

import vant from '@/components/Vant'

// import eruda from 'eruda'

// if (process.env.NODE_ENV === 'development') {
//   eruda.init()
// }

import moment from 'moment'
import 'moment/locale/zh-cn'
moment.locale('zh-cn')

createApp(App)
  .use(store)
  .use(router)
  .use(vant)
  .mount('#app')
