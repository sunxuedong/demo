<script setup lang="ts" name="G6TooltipPlugin">
import Topo from '@/components/topo/Index.vue'
import { data } from './utils/data'
</script>

<template>
  <div class="page-container g6-tooltip-plugin">
    <Topo :data="data" />
  </div>
</template>
