//1. 引入gulp
const gulp = require('gulp')
const fs = require('fs')

// 2. 定义任务
// gulp.task('任务名称', 回调函数) 回调函数中定义具体的任务代码
// 如果执行任务,默认会提示警告,说任务没有结束.
// 解决: 1. 将回调函数定义为异步函数, 2. 在函数体中返回一个流(需要返回一个gulp函数执行后的流)
gulp.task('xxx', async function () {
  console.log('xxx任务执行了')
})
