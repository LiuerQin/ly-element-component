/*
 * @Author: QinLiu 1461065472@qq.com
 * @Date: 2023-04-10 13:34:56
 * @LastEditors: QinLiu 1461065472@qq.com
 * @LastEditTime: 2023-04-10 13:46:26
 * @FilePath: \vue3_components\src\store\modules\layout.ts
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
import { defineStore } from 'pinia'
import {ref} from "vue"

export const useLayoutStore = defineStore('layout', () => {
    const isExpand = ref(true)
    function changeExpandStatus(b: boolean) {
        isExpand.value = b
    }
  
    return { isExpand, changeExpandStatus }
  })