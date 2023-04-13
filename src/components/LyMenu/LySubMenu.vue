<template>
  <!-- 菜单分组 -->
  <el-menu-item-group
    v-if="show === 0"
    :title="menu.text"
  >
    <el-menu-item
      v-for="item in menu.children"
      :key="item.id"
      :index="item.path"
    >
      <span>{{ item.text }}</span>
    </el-menu-item>
  </el-menu-item-group>
  <!-- 子菜单树 -->
  <el-sub-menu
    v-else-if="show === 1"
    :index="menu.id + ''"
  >
    <template #title>
      <img
        v-if="menu.icon"
        :src="menu.icon"
        class="ly-sub-menu-icon"
        alt=""
      >
      <span>{{ menu.text }}</span>
    </template>
    <ly-sub-menu
      v-for="subMenu in menu.children"
      :key="subMenu.id"
      :menu="subMenu"
    />
  </el-sub-menu>
  <!-- 菜单item -->
  <el-menu-item
    v-else
    :index="menu.path"
  >
    <span>{{ menu.text }}</span>
  </el-menu-item>
</template>

<script lang="ts" setup>
import { computed, toRefs, watchEffect } from "vue"
import { MenuItem } from "./types"

interface Props {
    menu: MenuItem
}
const props = defineProps<Props>()
const { menu } = toRefs(props)
/*
    * 0: 菜单分组
    * 1：子菜单树
    * 2：菜单item
*/
const show = computed(() => {
    console.log(menu.value, menu.value.type && menu.value.type === "group", menu.value.children && menu.value.children.length > 0)
    if (menu.value.type && menu.value.type === "group") {
        return 0
    } else if (menu.value.children && menu.value.children.length > 0) {
        return 1
    } else {
        return 2
    }
})

watchEffect(() => {
    console.log(show.value)
})
</script>

<style lang="scss" scoped>
    .ly-sub-menu-icon {
        width: 18px;
        margin-right: 8px;
    }
</style>