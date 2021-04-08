function adapter() {
  // 计算根标签的字体
  const root = (document.documentElement.clientWidth * 100) / 375
  // 然后设置给根元素
  document.documentElement.style.fontSize = root + 'px'
}
adapter()
window.onresize = adapter
