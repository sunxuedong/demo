export const getMenuCfg = () => {
  const menu = [
    {
      label: 'G6',
      value: 'g6',
      children: [
        {
          label: 'Tooltip（提示）',
          value: 'tooltip',
          children: [
            {
              label: '使用tooltip插件',
              value: 'plugin',
              componentPath: 'g6/tooltip/plugin'
            },
            {
              label: '使用自定义组件',
              value: 'custom',
              componentPath: 'g6/tooltip/custom'
            }
          ]
        },
        {
          label: 'anchor（锚点）',
          value: 'anchor',
          componentPath: 'g6/tooltip/plugin'
        }
      ]
    }
  ]

  return menu
}
