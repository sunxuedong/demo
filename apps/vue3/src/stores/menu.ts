import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { MenuData } from './menu.types'

export const useMenuStore = defineStore('menu', () => {
  // 明确指定 menu 的类型为 MenuData[]
  const menuTree = ref<MenuData[]>([])

  const setMenu = ({ menuData }: { menuData: MenuData[] }) => {
    menuTree.value = menuData
  }

  return { menuTree, setMenu }
})
