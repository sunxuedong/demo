<script setup lang="ts">
import Sidebar from '../sidebar/Index.vue'
</script>

<template>
  <div class="frame">
    <a-layout>
      <a-layout-sider>
        <Sidebar />
      </a-layout-sider>
      <a-layout-content>
        <RouterView />
      </a-layout-content>
    </a-layout>
  </div>
</template>
<style lang="scss" scoped>
.frame {
  height: 100%;
  display: flex;
}
</style>
