<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { v4 as uuidv4 } from 'uuid'
import G6Class from './utils/G6Class'

defineProps({
  data: {
    type: Object,
    default: () => ({})
  },
  config: {
    type: Object,
    default: () => ({})
  }
})

const container = ref(null)
const id = ref(uuidv4())
const miniMapSwitch = ref(false)
const g6Ins = ref(new G6Class())

onMounted(() => {
  g6Ins.init({
    config: {
      ...config,
      container
    }
  })
})
</script>

<template>
  <div class="topo">
    <div :id="id" class="topo-container" ref="container"></div>
    <div v-show="miniMapSwitch" id="minimap" class="minimap" ref="minimapDom"></div>
  </div>
</template>

<style lang="scss" scoped></style>
