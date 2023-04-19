<template>
  <div class="layout-left" :style="menuWrapperStyle">
    <ly-menu :menus="menus" :collapse="!isExpand" default-active="/2" :collapse-transition="false" />
  </div>
</template>
<script lang="ts" setup>
import { computed } from "vue"
import LyMenu from "components/LyMenu/LyMenu.vue"
import { MenuList } from "components/LyMenu/types"
import { useLayoutStore } from "store/modules/layout"
import scssVariable from "@/styles/layout-variable.module.scss"
import MenuIcon from "assets/imgs/menu-icon.png"

const layoutStore = useLayoutStore()
const isExpand = computed(() => layoutStore.isExpand)

const { sidebarWidth, sidebarCollapseWidth } = scssVariable
const menuWrapperStyle = computed(() => ({
  width: isExpand.value ? sidebarWidth : sidebarCollapseWidth
}))

const menus: MenuList = [{
  id: 1,
  path: "/",
  text: "菜单",
  icon: MenuIcon,
  children: [{
    id: 2,
    path: "/1",
    text: "子菜单1",
    // type: "group",
    children: [{
      id: 3,
      path: "/2",
      text: "子菜单2",
    }, {
      id: 4,
      path: "/3",
      text: "子菜单2",
    }, {
      id: 5,
      path: "/4",
      text: "子菜单2",
    },]
  }]
}, {
  id: 11,
  path: "/form",
  text: "表单",
  icon: MenuIcon
}] 
</script>

<style lang="scss" scoped>
@use "@/styles/layout-variable.module.scss" as *;

.layout-left {
  transition: all $sidebar-expand-icon-animation-duration $sidebar-animation-fun;
}
</style>