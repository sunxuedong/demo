// @ts-ignore
import { postOrderTraversal, toCamelCase, getArray } from '@sunxuedong/utils'
import type { Menu } from '@/tsDefine/menu'

interface Router {
  addRoute: Function
}

const formatRoutes = ({ menu }: { menu: Menu[] }) => {
  menu = JSON.parse(JSON.stringify(menu))
  let indexPath: string | null = null

  postOrderTraversal({
    root: menu,
    cb: (context: { node: Menu; level: number; parent: Menu; parentList: Menu[] }) => {
      const { node, level, parentList } = context
      const ifFirstLevel = level === 1
      const children = getArray(node.children)
      const ifLeafNode = children.length === 0

      // set path
      if (ifFirstLevel) {
        node.path = `/${node.key}`
      } else {
        node.path = node.key
      }

      const ifFirstLeafNode = !Boolean(indexPath) && ifLeafNode
      // record index path
      if (ifFirstLeafNode) {
        indexPath = `/${[...parentList, node].map((item) => item.key).join('/')}`
      }

      // set name
      if (ifLeafNode) {
        node.name = toCamelCase({ data: [...parentList, node].map((item) => item.key) })
      }

      // set component on leaf node
      if (ifLeafNode) {
        node.component = () => import(/* @vite-ignore */ `/src/views/${node.componentPath}`)
      } else if (ifFirstLevel) {
        // first level node but it is not leaf node
        node.component = () => import(`@/components/frame/Index.vue`)
      } else {
        node.component = () => import(`@/components/emptyRouterView/Index.vue`) /* @vite-ignore */
      }

      delete node.label
      delete node.key
    }
  })

  if (indexPath) {
    menu.unshift({
      path: '/',
      redirect: indexPath
    })
  }

  return menu
}

export const initRoutes = (
  params: { menu: Menu[]; router: Router } = { menu: [], router: {} as Router }
) => {
  const { menu, router } = params
  const routes = formatRoutes({ menu })

  routes.forEach((route) => {
    router.addRoute(route)
  })
}
