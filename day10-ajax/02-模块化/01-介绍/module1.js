// 沙箱模式
;(function () {
  let a = 3
  let b = 5
  let c = 6
  let privateNum = 8888


  //逻辑代码

  window.module1 = {
    a,
    b,
  }
})()
