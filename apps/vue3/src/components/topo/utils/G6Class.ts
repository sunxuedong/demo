import G6 from '@antv/g6'

import { TOPO_NODE, TOPO_EDGE } from './constant'
import type { Graph, InitParams, MinimapParams, Minimap, G6Data } from './types.ts'

export default class G6Class {
  graph: Graph | null = null
  container: HTMLDivElement | string | null = null
  minimapContainer: HTMLDivElement | string | null = null

  constructor() {}

  init = (params: InitParams) => {
    const { config, data } = params
    this.container = config.container

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
      animate: true,
      defaultEdge: {
        style: {
          stroke: '#66bc57' // 默认边颜色
        }
      },
      ...config
    })

    this.graph.data(data)
    this.graph.render()
  }

  setMiniMapPlugin = (params: MinimapParams): Minimap => {
    const { config } = params

    this.minimapContainer = config.container

    const minimap = new G6.Minimap({
      size: [200, 150],
      container: this.minimapContainer
    })

    return minimap
  }

  changeData = (val: G6Data) => {
    this.graph?.changeData(val)
  }

  cleanUp = () => {
    if (this.graph) {
      this.graph.off()
      this.graph.destroy()
      this.graph = null
    }
  }

  getGraph = () => this.graph
}
