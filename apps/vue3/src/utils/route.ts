interface Menu {}

export const initRoutes = ({ menu }: { menu: Menu[] }) => {
  menu = JSON.parse(JSON.stringify(menu))
  console.log(menu)
}
