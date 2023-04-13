<template>
  <el-menu :router="router" class="ly-menu">
    <ly-sub-menu v-for="menu in props.menus" :key="menu.id" :menu="menu" />
  </el-menu>
</template>

<script lang="ts" setup>
import LySubMenu from "./LySubMenu.vue"
import { MenuList } from './types'

interface Props {
  menus: MenuList;
  router?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  router: true,
})



</script>
    

<style lang="scss" scoped>
.ly-menu {
  text-align: left;
  border-right: none;
}
</style>