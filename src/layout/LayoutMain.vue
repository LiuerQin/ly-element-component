<template>
  <div class="layout-main">
    <div class="layout-main-router">
      <router-view />
    </div>
  </div>
</template>

<!-- <script lang="ts" setup></script> -->

<style lang="scss" scoped>
.layout-main {
  background-color: aliceblue;
  display: flex;
  flex-direction: column;
  padding: 20px;

  &-router {
    background-color: white;
    flex: 1;
    padding: 20px;
  }
}
</style>