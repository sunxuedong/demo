export const getMenuCfg = () => {
  const menu = [
    {
      key: 'g6',
      label: 'G6',
      children: [
        {
          key: 'tooltip',
          label: 'Tooltip（提示）',
          children: [
            {
              key: 'plugin',
              label: '使用tooltip插件',
              path: '/g6/tooltip/plugin',
              name: 'g6TooltipPlugin'
            },
            {
              key: 'custom',
              label: '使用自定义组件',
              path: '/g6/tooltip/custom',
              name: 'g6TooltipCustom'
            }
          ]
        },
        {
          key: 'anchor',
          label: 'anchor（锚点）',
          path: '/anchor',
          name: 'g6Anchor'
        }
      ]
    }
  ]

  return menu
}
