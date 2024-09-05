<script setup lang="ts" name="Topo">
import { ref, onMounted, watch, onUnmounted } from 'vue'
// @ts-ignore
import { v4 as uuidv4 } from 'uuid'
// @ts-ignore
import { ResizeObserverClass, timeoutPromise } from '@sunxuedong/utils'

import G6Class from './utils/G6Class'
import { getPlugins } from './utils/plugins'
import type { G6Data, PropsConfig, Props } from './utils/types'

const props = withDefaults(defineProps<Props>(), {
  data: () => ({}) as G6Data,
  config: () => ({}) as PropsConfig,
  showMiniMap: false
})

const emit = defineEmits(['initEvent'])

const rootDom = ref('')
const topoDom = ref('')
const minimapDom = ref('')
const id = ref(uuidv4())
const g6Ref = ref(new G6Class())
const resizeRef = ref(new ResizeObserverClass())

watch(
  () => props.data,
  (val) => {
    g6Ref.value.changeData(val)
  }
)

const initG6 = () => {
  const g6Ins = g6Ref.value
  const config = { ...props.config }

  config.plugins = config.plugins
    ? config.plugins
    : getPlugins({
        g6Ins,
        container: minimapDom.value
      })

  g6Ins.init({
    config: {
      ...config,
      container: topoDom.value
    },
    data: props.data
  })

  emit('initEvent', { g6Ins, graph: g6Ins.graph })
}

const destoryG6 = () => {
  const g6Ins = g6Ref.value
  g6Ins.cleanUp()
}

const handleChangeSize = async () => {
  const graph = g6Ref.value.graph

  if (!graph || graph.get('destroyed')) return

  const rootElem = rootDom.value as unknown as HTMLElement // 使用类型断言
  if (!rootDom.value || !rootElem.offsetWidth || !rootElem.offsetHeight) return

  const topoElem = topoDom.value as unknown as HTMLElement // 使用类型断言
  const originalDisplay = topoElem.style.display
  const { offsetWidth, offsetHeight } = topoElem

  topoElem.style.display = 'none'

  await timeoutPromise()

  topoElem.style.display = originalDisplay

  await timeoutPromise()

  graph.changeSize(offsetWidth, offsetHeight)
}

onMounted(() => {
  initG6()

  resizeRef.value.addResizeListener({
    dom: topoDom.value,
    handler: handleChangeSize
  })
})

onUnmounted(() => {
  destoryG6()

  resizeRef.value.removeResizeListener()
})
</script>

<template>
  <div class="topo" ref="rootDom">
    <div :id="id" class="topo-container" ref="topoDom"></div>
    <div v-show="showMiniMap" id="minimap" class="minimap" ref="minimapDom"></div>
  </div>
</template>

<style lang="scss" scoped>
.topo {
  height: 100%;
}
.topo-container {
  height: 100%;
}
</style>
