<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
// @ts-ignore
import { generateCamelCaseCombinations } from '@sunxuedong/utils'

import { useMenuStore } from '@/stores/menu'

const { menuTree } = storeToRefs(useMenuStore())
const router = useRouter()

const pathname = window.location.pathname
const defaultOpenKeys = ref(generateCamelCaseCombinations({ data: pathname.slice(1).split('/') }))
const defaultSelectedKeys = ref(defaultOpenKeys.value.slice(-1))
const clickMenu = ({ key }: { key: string }) => {
  router.push({ name: key })
}
</script>

<template>
  <a-menu
    v-model:selectedKeys="defaultSelectedKeys"
    v-model:openKeys="defaultOpenKeys"
    mode="inline"
    theme="dark"
    :items="menuTree"
    @click="clickMenu"
  ></a-menu>
</template>
