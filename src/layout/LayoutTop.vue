<template>
  <div class="layout-top">
    <div class="layout-top-logo">
      <Transition
        mode="out-in"
        name="logo"
      >
        <img
          v-if="isExpand"
          src="@/assets/imgs/logo.png"
          class="logo"
        >
        <img
          v-else
          src="@/assets/imgs/logo-small.png"
          class="logo-small"
        >
      </Transition>
    </div>
    <div
      class="layout-top-left"
      :style="layoutTopLeft"
    >
      <Transition
        mode="out-in"
        name="expand"
      >
        <img
          v-if="isExpand"
          src="@/assets/imgs/expand-left.png"
          @click="handlechangeExpand(false)"
        >
        <img
          v-else
          src="@/assets/imgs/expand-right.png"
          @click="handlechangeExpand(true)"
        >
      </Transition>
      <h3>{{ title }}</h3>
    </div>
    <div class="layout-top-right" />
  </div>
</template>
<script lang="ts" setup>
import { computed } from "vue"
import scssVariable from "@/styles/layout-variable.module.scss"
import { useLayoutStore } from "store/modules/layout"

const layoutStore = useLayoutStore()

const { sidebarWidth, sidebarCollapseWidth } = scssVariable

const title = import.meta.env.VITE_APP_TITLE

const isExpand = computed(() => layoutStore.isExpand)

function handlechangeExpand(b: boolean) {
    layoutStore.changeExpandStatus(b)
}

const layoutTopLeft = computed(() => {
    return {
        marginLeft: isExpand.value ? sidebarWidth : sidebarCollapseWidth
    }
})

</script>

<style lang="scss" scoped>
@use "@/styles/layout-variable.module.scss" as *;

@debug "variable : #{$sidebar-width}";
$img-size: 24px;

.layout-top {
    height: $sidebar-collapse-width;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--el-color-primary);
    position: relative;

    &-logo {
        position: absolute;
        left: 0;
        top: 0;
        height: $sidebar-collapse-width;
        display: flex;
        align-items: center;

        .logo,
        .logo-small {
            max-width: $sidebar-width;
            max-height: $sidebar-collapse-width;
        }

        .logo {
            margin-left: calc($sidebar-width / 2);
            transform: translate(-50%);
        }

        .logo-small {
            height: 30px;
            margin-left: 10px;
        }
    }

    &-left {
        display: flex;
        align-items: center;
        transition: all ease $sidebar-expand-icon-animation-duration;

        img {
            width: $img-size;
            height: $img-size;
            cursor: pointer;
        }

        h3 {
            color: white;
            margin-left: 20px;
            font-weight: normal;
            font-size: 20px;
        }
    }
}

.expand-enter-active {
    transition: opacity $sidebar-logo-animation-duration $sidebar-animation-fun;
}

.expand-leave-active {
    transition: opacity $sidebar-logo-animation-duration $sidebar-animation-fun $sidebar-expand-icon-animation-duration;
}

.expand-enter-from,
.expand-leave-to,
.logo-enter-from,
.logo-leave-to {
    opacity: 0;
}

.logo-enter-active {
    transition: opacity $sidebar-logo-animation-duration $sidebar-animation-fun $sidebar-expand-icon-animation-duration;
}

.logo-leave-active {
    transition: opacity $sidebar-logo-animation-duration $sidebar-animation-fun;
}
</style>