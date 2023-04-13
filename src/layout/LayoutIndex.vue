<template>
  <div class="layout-wrapper">
    <div class="layout-top-wrapper">
      <layout-top />
    </div>
    <div class="layout-main-wrapper">
      <layout-left />
      <layout-main />
    </div>
  </div>
</template>

<script setup lang="ts">
import LayoutLeft from './LayoutLeft.vue';
import LayoutMain from './LayoutMain.vue';
import LayoutTop from './LayoutTop.vue';
</script>

<style lang="scss" scoped>
.layout-wrapper {
    display: flex;
    flex-direction: column;

    min-height: 100vh;
    min-width: 100vw;

    >.layout-main-wrapper {
        flex: 1;
        display: flex;
        flex-direction: row;

        > :last-child {
            flex: 1
        }
    }
}
</style>