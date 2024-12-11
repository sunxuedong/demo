import { createRouter, createWebHistory } from 'vue-router'
import Frame from '@/components/frame/Index.vue'
import EmptyRouterView from '@/components/emptyRouterView/Index.vue'
import G6TooltipPlugin from '@/views/g6/tooltip/plugin/Index.vue'
import G6TooltipCustom from '@/views/g6/tooltip/custom/Index.vue'
import G6Anchor from '@/views/g6/anchor/Index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: []
})

export default router
