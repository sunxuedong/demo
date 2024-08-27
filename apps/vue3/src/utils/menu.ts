import { preOrderTraversal } from '@sunxuedong/utils'
import { useMenuStore } from '@/stores/menu'

interface Menu {}

const node: { label: string; [key: string]: any } = {
  label: 'Menu'
  // 其他属性
}

const formatMenu = ({ menu }: { menu: Menu[] }) => {
  preOrderTraversal({
    root: menu,
    cb: (context: {
      node: typeof node
      level: number
      parent: typeof node | null
      parentList: (typeof node)[]
    }) => {
      const { node, parentList } = context
      console.log('node', node)
      console.log('parentList', parentList)
    }
  })
}

export const setMenuInStore = ({ menu }: { menu: Menu[] }) => {
  menu = JSON.parse(JSON.stringify(menu))
  formatMenu({ menu })
  const { setMenu } = useMenuStore()
  setMenu({ menuData: menu })
}
