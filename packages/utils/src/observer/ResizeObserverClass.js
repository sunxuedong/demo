import debounce from "lodash/debounce";

const widthChangingCondition = entries => {
  let ifChange = false;
  entries.forEach(entry => {
    // 获取当前宽度
    const currentWidth = entry.contentRect.width;

    // 如果存在上一次宽度，且当前宽度不等于上一次宽度，则宽度发生变化
    if (
      entry.target._lastWidth != null &&
      entry.target._lastWidth !== currentWidth
    ) {
      ifChange = true;
    }

    // 更新上一次宽度
    entry.target._lastWidth = currentWidth;
  });

  return ifChange;
};

export default class ResizeObserverClass {
  resizeHandler = null;
  dom = null;
  condition = widthChangingCondition;

  addResizeListener = (params = {}) => {
    const { dom, handler, condition, timeout = 1000 } = params;
    const self = this;
    this.dom = dom;
    this.condition = condition || this.condition;
    this.resizeHandler = debounce((...args) => {
      if (!self.resizeHandler || !self.dom) {
        return;
      }

      const result = self.condition(...args);

      if (result) {
        handler(...args);
      }
    }, timeout);
    this.resizeObserver = new ResizeObserver(this.resizeHandler);
    this.resizeObserver.observe(dom);
  };

  removeResizeListener = () => {
    if (!this.resizeHandler) return;
    this.resizeObserver.unobserve(this.dom);
    this.reset();
  };

  reset = () => {
    this.resizeHandler = null;
    this.dom = null;
  };
}
