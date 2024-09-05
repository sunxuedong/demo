<script setup lang="ts" name="G6TooltipCustom">
import { ref } from 'vue'
import Topo from '@/components/topo/Index.vue'
import type { Event } from '@/components/topo/utils/types'
import { data } from './utils/data'

const config = ref({
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
  }
})
</script>

<template>
  <div class="page-container g6-tooltip-custom">
    <Topo :data="data" :config="config" />
  </div>
</template>

<style scoped></style>
