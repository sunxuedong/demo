export interface Props {
  data: G6Data
  config?: InitParamsConfig
  showMiniMap?: boolean
}

export interface G6Data {
  nodes: {}[]
  edges: {}[]
}

export interface Graph {
  off: Function
  destroy: Function
  data: Function
  render: Function
  changeData: Function
  on: Function
}

export type container = HTMLDivElement | string

export interface InitParamsConfig {
  container?: container
  plugins: Minimap[]
}

export interface InitParams {
  config: InitParamsConfig
  data: G6Data
}

export interface MinimapParams {
  config: {
    size: number[]
    container: container
  }
}

export interface Minimap {}

export interface G6Instance {
  setMiniMapPlugin: Function
}

export interface Event {
  item: { getModel: Function }
}
