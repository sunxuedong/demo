import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { MenuData } from './menu.types'

export const useMenuStore = defineStore('menu', () => {
  // 明确指定 menu 的类型为 MenuData[]
  const menu = ref<MenuData[]>([])

  const setMenu = ({ menuData }: { menuData: MenuData[] }) => {
    menu.value = menuData
  }

  return { menu, setMenu }
})
