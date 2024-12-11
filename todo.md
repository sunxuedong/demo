1. 大屏适配利用scss 函数计算（$px / $designWidth * 100vw，$designWidth为设计稿宽度）
2. vue指令校验数字，输入@符号后，页面不会显示@，但是代码里的值是@，最后由v-model改为:value，即有非可控组件改为可控组件
3. 全局页面可能存在内存泄漏
4. 根据当前点找在哪段折线当中 OK
5. g6刷新闪烁（由于判断节点缩放）我们先拿到数据，render数据后请求图片，拿到图片后缩放居中
需要改为在请求好图片后，同时render数据和图片缩放居中
6. G6 label动态计算整句话宽度，fontSize * 1个fontSize系数 折行
7. window.resize canvas width height适配，changeSize没有起作用，最后使用graph.destory销毁再初始化
8. G6 ToolTip不支持异步获取数据，会使鼠标 hover 时再移动一下tooltip会消失（解决方案，自己写一个toolTip）
9. table中三行省略号，break-all不起作用
10. updated死循环
11. 大屏下使用svg lottie做动画卡顿（原因是svg的细节点太多，导致绘制时耗费GPU性能），改为css3动画
12. hover显示标题，但是父组件overflow hidden
13. tinymce 使用v-model传入，然后请求晚回来时会导致初始化失败，显示空白（双向数据流）
14. sessionstorage新标签或窗口打开一个页面时会复制顶级浏览会话的上下文作为新会话的上下文
15. 开发环境样式正常，但是在生产环境会被覆盖
16. （keep-alive 模块热替换失效）开启模块热替换，HMR开启，但是浏览器仍然刷新。原因是keep-alive 下router-view使用key时不支持热替换。解决办法：重写keep-alive，只在开发环境使用（https://blog.csdn.net/weixin_39547883/article/details/117700147?spm=1001.2014.3001.5506）
17. 动态改变tab的宽度，使用flex布局，设置max-width和min-width
18. offsetWidth会自动向上取整
19. v-permission指令在el-tooltip上报错
20. v-for 在vue中，根据key和tagName对比vDom，即使触发updated不代表vDom真正更新
21. v-permission 和 v-show默认false冲突，导致v-permission失效（v-permission参考v-if实现）
22. 生成短链
23. input-number输入时实时更新v-model
24. 前端实现mysql
25. 实现resizeObserver封装 1.0
26. monaco editor导出实现（包括批量导出）
27. 在线编辑word
28. watch $route延迟
29. 封装公共弹窗login
30. tinymce，获取html字符串中所有base64的图片统一上传
31. 左边是节点列表，右边是table，点击左边请求对应节点的数据到table
32. G6导出添加背景图，合图
33. html2canvas + jsPDF截断
34. element ui table 固定列 fixed right，在滚动时固定列有延迟
35. 使用flvjs播放视频流
36. element UItable 无限滚动
37. vue2指令，permission、hiteconfirm
38、js模糊匹配（类mysql）
39、横向more组件
40、element-ui 固定列border-left消失问题
.el-table__row td:not(.is-hidden):last-child {
      border-left:1px solid var(--static-table-wrapper-border-color);
    }
    .el-table__header th:not(.is-hidden):last-child{
      border-left:1px solid var(--header-row-class-name-border-color);
    }
41、锁屏
42、放大
43、dialog开启GPU加速
44、debounce、throttle添加类






大屏： rem单位+栅格化系统
























































.
