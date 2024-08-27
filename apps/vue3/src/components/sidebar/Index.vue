<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import { getMenuCfg } from './utils/config'

import type { Item } from './types'

const router = useRouter()

const menuCfg = ref(getMenuCfg())

const pathname = window.location.pathname
const defaultOpenKeys = ref(pathname.slice(1).split('/'))
const defaultSelectedKeys = ref(defaultOpenKeys.value.slice(-1))
const clickMenu = ({ item }: { item: Item }) => {
  const { name } = item
  router.push({ name })
}
</script>

<template>
  <a-menu
    v-model:selectedKeys="defaultSelectedKeys"
    v-model:openKeys="defaultOpenKeys"
    mode="inline"
    theme="dark"
    :items="menuCfg"
    @click="clickMenu"
  ></a-menu>
</template>
