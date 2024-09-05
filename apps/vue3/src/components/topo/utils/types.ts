export interface Props {
  data: G6Data
  config?: PropsConfig
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
  get: Function
  changeSize: Function
}

export interface PropsConfig {
  plugins?: {}[]
  defaultNode?: {}
  defaultEdge?: {}
  modes?: {}
}

export type container = HTMLDivElement | string

export interface InitParamsConfig extends PropsConfig {
  container: container
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
