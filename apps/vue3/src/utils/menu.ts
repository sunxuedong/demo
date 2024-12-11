// @ts-ignore
import { postOrderTraversal, toCamelCase } from '@sunxuedong/utils'
import { useMenuStore } from '@/stores/menu'
import type { Menu } from '@/tsDefine/menu'

const formatMenu = ({ menu }: { menu: Menu[] }) => {
  menu = JSON.parse(JSON.stringify(menu))

  postOrderTraversal({
    root: menu,
    cb: (context: { node: Menu; level: number; parent: Menu; parentList: Menu[] }) => {
      const { node, parentList } = context
      node.key = toCamelCase({ data: [...parentList, node].map((item) => item.key) })
    }
  })

  return menu
}

export const setMenuInStore = ({ menu }: { menu: Menu[] }) => {
  menu = formatMenu({ menu })
  const { setMenu } = useMenuStore()
  setMenu({ menuData: menu })
}
