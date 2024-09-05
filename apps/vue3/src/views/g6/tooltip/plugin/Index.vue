<script setup lang="ts" name="G6TooltipPlugin">
import { ref } from 'vue'
import Topo from '@/components/topo/Index.vue'
import type { Graph, Event } from '@/components/topo/utils/types'
import { data } from './utils/data'
import { getTooltip } from './utils/tooltip'

const config = {
  defaultNode: {
    size: [80, 40],
    shape: 'rect'
  },
  defaultEdge: {
    style: {
      lineAppendWidth: 3
    }
  },
  modes: {
    default: [
      'drag-node',
      {
        type: 'edge-tooltip',
        formatText: function formatText(model: { description: string }) {
          var text = 'description: ' + model.description
          return text
        },

        shouldUpdate: function shouldUpdate(e: Event) {
          return true
        }
      }
    ]
  },
  plugins: [getTooltip()]
}

const requestData = ({ evt }: { evt: Event }) => {
  const { item } = evt
  const model = item.getModel()

  return new Promise((resolve, reject) => {
    console.log('requesting data')
    setTimeout(() => resolve('description: ' + model.description), 3000)
  })
}

const initEvent = ({ graph }: { graph: Graph }) => {
  let id = 0
  const tooltipDom = document.getElementsByClassName('g6-component-tooltip')[0]

  graph.on('node:mouseenter', (evt: Event) => {
    const innerId = ++id
    console.log('node:mouseenter')

    requestData({ evt }).then((innerHTML) => {
      if (innerId !== id) return
      tooltipDom.innerHTML = `<div>${innerHTML}</div>`
    })
  })

  graph.on('node:mouseleave', (evt: Event) => {
    tooltipDom.innerHTML = ``
  })
}
</script>

<template>
  <div class="page-container g6-tooltip-plugin">
    <Topo :data="data" :config="config" @initEvent="initEvent" />
  </div>
</template>
