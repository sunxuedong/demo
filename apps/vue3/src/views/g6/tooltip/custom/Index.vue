<script setup lang="ts" name="Custom">
import Topo from '@/components/topo/Index.vue'
import { data } from './utils/data'
</script>

<template>
  <div class="g6-tooltip-custom">
    <Topo :data="data" />
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
