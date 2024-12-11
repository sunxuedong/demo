import G6, { Tooltip } from '@antv/g6'

type Tooltip = {}

export const getTooltip: () => Tooltip = () => {
  return new G6.Tooltip({
    offsetX: 10,
    offsetY: 10,
    shouldBegin: (evt) => {
      return true
    },
    itemTypes: ['node'],
    getContent: (e) => {
      const tooltipDom = document.getElementsByClassName('g6-component-tooltip')[0]

      if (tooltipDom.innerHTML.length) {
        return tooltipDom.innerHTML
      }

      return `<div>loading...</div>`
    }
  })
}
