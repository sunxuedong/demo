// menu.ts
export interface Menu {
  label?: string
  key?: string
  children?: Menu[]
  componentPath?: string
  path?: string
  name?: string
  component?: {} | Function
  redirect?: string
}
