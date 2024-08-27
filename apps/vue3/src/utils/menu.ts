// @ts-ignore
import { postOrderTraversal, toCamelCase } from '@sunxuedong/utils'
import { useMenuStore } from '@/stores/menu'

interface Menu {}

const node: { label: string; [key: string]: any } = {
  label: 'Menu'
  // 其他属性
}

const formatMenu = ({ menu }: { menu: Menu[] }) => {
  menu = JSON.parse(JSON.stringify(menu))

  postOrderTraversal({
    root: menu,
    cb: (context: {
      node: typeof node
      level: number
      parent: typeof node | null
      parentList: (typeof node)[]
    }) => {
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
