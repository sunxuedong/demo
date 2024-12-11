import G6 from '@antv/g6'
import type { G6Instance, container } from './types'

interface Params {
  g6Ins: G6Instance
  container: container
}

export const getPlugins = (params: Params) => {
  const { g6Ins, container } = params
  const plugins = []

  const miniMap = g6Ins.setMiniMapPlugin({
    config: {
      size: [200, 150],
      container
    }
  })

  const grid = new G6.Grid({
    img: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIwIDBIMVYxSDIwVjBaIiBmaWxsPSIjREZERkRGIiBmaWxsLW9wYWNpdHk9IjAuNSIvPgo8cGF0aCBkPSJNMSAyMEwxIDBMMi4wMjY1NmUtMDYgMEwyLjAyNjU2ZS0wNiAyMEgxWiIgZmlsbD0iI0RGREZERiIgZmlsbC1vcGFjaXR5PSIwLjUiLz4KPC9zdmc+Cg=='
  })

  plugins.push(miniMap)
  plugins.push(grid)

  return plugins
}
