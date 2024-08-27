import { createRouter, createWebHistory } from 'vue-router'
import Frame from '@/components/frame/Index.vue'
import G6TooltipPlugin from '@/views/g6/tooltip/plugin/Index.vue'
import G6TooltipCustom from '@/views/g6/tooltip/custom/Index.vue'
import G6Anchor from '@/views/g6/anchor/Index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/g6/tooltip/plugin'
    },
    {
      path: '/g6',
      name: 'g6',
      component: Frame,
      children: [
        {
          path: 'tooltip/plugin',
          name: 'g6TooltipPlugin',
          component: G6TooltipPlugin
        },
        {
          path: 'tooltip/custom',
          name: 'g6TooltipCustom',
          component: G6TooltipCustom
        },
        {
          path: 'anchor',
          name: 'g6Anchor',
          component: G6Anchor
        }
      ]
    }
  ]
})

export default router
