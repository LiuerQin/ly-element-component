/*
 * @Author: QinLiu 1461065472@qq.com
 * @Date: 2023-04-03 16:27:19
 * @LastEditors: QinLiu 1461065472@qq.com
 * @LastEditTime: 2023-04-10 11:48:01
 * @FilePath: \vue3_components\src\main.ts
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router"
import {setupStore} from "./store"
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

createApp(App).use(ElementPlus).use(router).use(setupStore).mount('#app')
