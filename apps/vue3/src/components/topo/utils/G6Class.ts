import G6 from '@antv/g6'
// @ts-ignore
import { getObject } from '@sunxuedong/utils'

import { TOPO_NODE, TOPO_EDGE } from './constant'

export default class G6Class {
  graph = null
  container = null
  minimapContainer = null

  constructor() {}

  getMiniMapPlugin = () => {}

  init = (params = {}) => {
    const container = params.container
    const { minimapContainer, ...restParams } = params

    this.container = container
    this.minimapContainer = minimapContainer

    const plugins = []
    const grid = new G6.Grid({
      img: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIwIDBIMVYxSDIwVjBaIiBmaWxsPSIjREZERkRGIiBmaWxsLW9wYWNpdHk9IjAuNSIvPgo8cGF0aCBkPSJNMSAyMEwxIDBMMi4wMjY1NmUtMDYgMEwyLjAyNjU2ZS0wNiAyMEgxWiIgZmlsbD0iI0RGREZERiIgZmlsbC1vcGFjaXR5PSIwLjUiLz4KPC9zdmc+Cg=='
    })
    plugins.push(grid)

    if (minimapContainer) {
      const minimap = new G6.Minimap({
        size: [200, 150],
        container: minimapContainer
      })
      plugins.push(minimap)
    }

    if (this.graph) {
      this.graph.destroy()
    }

    // 在组件挂载时创建图实例
    this.graph = new G6.Graph({
      modes: {
        default: ['drag-canvas', 'zoom-canvas', 'drag-node', TOPO_NODE, TOPO_EDGE]
      },
      nodeStateStyles: {
        selected: {
          fill: 'rgba(0,179,254,0.6)',
          lineWidth: 2,
          radius: 3,
          stroke: '#00B5FF'
        }
      },
      plugins,
      linkCenter: true,
      animate: true,
      defaultEdge: {
        style: {
          stroke: '#66bc57' // 默认边颜色
        }
      },
      ...restParams
    })
  }

  cleanUp = () => {
    this.unregist()
    this.graph.off()
    this.graph.destroy()
    this.graph = null
  }

  getGraph = () => {
    return this.graph
  }

  setBg = (config = {}) => {
    const backgroundSet = getObject(config.backgroundSet)
    const { usePureColor, color, bgImg, bgStyle } = backgroundSet
    let containerStyle = ''
    let minimapContainerStyle = ''

    if (usePureColor) {
      containerStyle = `background-color: ${color}`
      minimapContainerStyle = `background-color: ${color}`
    } else if (bgImg) {
      const imgUrl = `background-image: url(ops/api/v1/icon/download/${bgImg});`
      containerStyle = imgUrl
      if (bgStyle) {
        containerStyle += bgStyle
      }
    }

    if (this.container) {
      this.container.style = containerStyle
    }
    if (this.minimapContainer) {
      this.minimapContainer.style = minimapContainerStyle
    }
  }
}
