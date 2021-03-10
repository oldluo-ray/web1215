/*
 * 1.JS由哪几部分组成（对于浏览器说）？
    -- BOM
    -- DOM
    -- ECMASCRIPT
 *
 * 2.NodeJs由哪几部分组成？
 * 
 *  -- ECMASCRIPT
 *  -- global
 * 
 *
 * 3.global上有什么东西？
 *
 * */

// alert(1111)
// console.log(global)

setTimeout(() => {
  console.log('setTimeout')
})

// 立即执行函数
setImmediate(() => {
  console.log('setInmediate')
})

process.nextTick(() => {
  console.log('这个回调优先级最高,一定最先执行')
})

console.log('主线程')
