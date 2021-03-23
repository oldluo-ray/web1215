//1. 引入gulp
const gulp = require('gulp')
// jshint是检查js语法规范的包
const jshint = require('gulp-jshint')
// 编译es6模块语法的包
const babel = require('gulp-babel')
// 将commonjs转成浏览器认识的代码
const browserify = require('gulp-browserify')
// 修改文件名字的包
const rename = require('gulp-rename')

// 2. 定义任务
// gulp.task('任务名称', 回调函数) 回调函数中定义具体的任务代码
// 如果执行任务,默认会提示警告,说任务没有结束.
// 解决: 1. 将回调函数定义为异步函数, 2. 在函数体中返回一个流(需要返回一个gulp函数执行后的流)
// gulp.task('xxx', async function () {
//   console.log('xxx任务执行了')
// })

// 检查js语法是否符合规范
gulp.task('jshint', function () {
  // 将你的任务的任务代码放在这
  // gulp.src是gulp包里面提供的方法,可以读取文件
  return gulp
    .src('./src/js/*.js')
    .pipe(
      jshint({
        esversion: 6, //使用es6语法,
        asi: true, //可以不添加分号
        eqeqeq: true, // 必须使用 全等===
      })
    )
    .pipe(jshint.reporter('default')) // gulp插件中查看
})

// 利用babel将es6模块语法转成commonjs
gulp.task(
  'babel',
  () =>
    gulp
      .src('./src/js/*.js')
      .pipe(
        babel({
          //进行语法转换
          presets: ['@babel/env'],
        })
      )
      .pipe(gulp.dest('build/js')) //输出到指定目录
)

// 将commonjs解析成浏览器认识的代码
gulp.task('browserify', function () {
  return gulp
    .src('./build/js/app.js')
    .pipe(browserify()) //将CommonJs语法转换为浏览器能识别的语法
    .pipe(rename('built.js')) //为了防止冲突将文件重命名
    .pipe(gulp.dest('build/js')) //输出到指定位置
})



//上面的任务,需要按照顺序依次执行,但是如果开发者自己调用任务就很繁琐,所以配置一个默认任务,让上面的任务可以自动依次执行
// 这个默认任务要写在所有任务的最下面
// 注意: 如果任务名是default,那么执行任务的时候,可以只写gulp
gulp.task('default', gulp.series('jshint', 'babel', 'browserify'))
