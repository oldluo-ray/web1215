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
// 压缩js
const uglify = require('gulp-uglify')
// 编译less的
const less = require('gulp-less')
// 给css加前缀
const LessAutoprefix = require('less-plugin-autoprefix')
const autoprefix = new LessAutoprefix({ browsers: ['last 2 versions'] })

// 合并css
const concat = require('gulp-concat')

// 压缩css
const cssmin = require('gulp-cssmin')

// 压缩html
const htmlmin = require('gulp-htmlmin')

// 用于自动化配置
// 自动刷新.自动监听
const livereload = require('gulp-livereload')
// 自动创建服务器
const connect = require('gulp-connect')
// 自动打开浏览器
const opn = require('opn')

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
    .pipe(livereload())
})

// 利用babel将es6模块语法转成commonjs
gulp.task('babel', () =>
  gulp
    .src('./src/js/*.js')
    .pipe(
      babel({
        //进行语法转换
        presets: ['@babel/env'],
      })
    )
    .pipe(gulp.dest('build/js')) //输出到指定目录
    .pipe(livereload())
)

// 将commonjs解析成浏览器认识的代码
gulp.task('browserify', function () {
  return gulp
    .src('./build/js/app.js')
    .pipe(browserify()) //将CommonJs语法转换为浏览器能识别的语法
    .pipe(rename('built.js')) //为了防止冲突将文件重命名
    .pipe(gulp.dest('build/js')) //输出到指定位置
    .pipe(livereload())
})

// 压缩js
gulp.task('uglify', function () {
  return gulp
    .src('build/js/built.js')
    .pipe(uglify()) //压缩js
    .pipe(rename('dist.min.js'))
    .pipe(gulp.dest('dist/js'))
    .pipe(livereload())
})

// 处理less以及处理兼容性问题
gulp.task('less', function () {
  return gulp
    .src('./src/less/*.less')
    .pipe(
      less({
        plugins: [autoprefix], //自动扩展前缀
      })
    )
    .pipe(gulp.dest('./build/css'))
    .pipe(livereload())
})

// 合并css
gulp.task('concat', function () {
  return gulp
    .src('./build/css/*.css')
    .pipe(concat('built.css'))
    .pipe(gulp.dest('./build/css'))
    .pipe(livereload())
})

// 压缩css
gulp.task('cssmin', function () {
  return gulp
    .src('build/css/built.css')
    .pipe(cssmin())
    .pipe(rename('dist.min.css'))
    .pipe(gulp.dest('dist/css'))
    .pipe(livereload())
})

gulp.task('htmlmin', () => {
  return gulp
    .src('src/index.html')
    .pipe(
      htmlmin({
        collapseWhitespace: true, //去除空格
        removeComments: true, //去除注释
      })
    )
    .pipe(gulp.dest('dist'))
    .pipe(livereload())
})

//自动执行任务，编译代码
gulp.task('watch', function () {
  //1. 在所有可能要执行任务后面加上 .pipe(livereload());
  //2. 配置watch任务
  livereload.listen()
  //通过自己服务器打开项目，自动刷新
  connect.server({
    root: 'dist',
    port: 3000,
    livereload: true, // 自动刷新
  })
  //自动打开浏览器
  opn('http://localhost:3000/index.html')
  //监视指定文件（第一个参数），一旦文件发生变化，就自动执行后面的任务（第二个参数）
  gulp.watch('src/less/*.less', gulp.series(['less', 'concat', 'cssmin']))
  gulp.watch(
    './src/js/*.js',
    gulp.series(['jshint', 'babel', 'browserify', 'uglify'])
  )
  gulp.watch('./src/index.html', gulp.series('htmlmin'))
})
//上面的任务,需要按照顺序依次执行,但是如果开发者自己调用任务就很繁琐,所以配置一个默认任务,让上面的任务可以自动依次执行
// 这个默认任务要写在所有任务的最下面
// 注意: 如果任务名是default,那么执行任务的时候,可以只写gulp
gulp.task(
  'default',
  gulp.series(
    'jshint',
    'babel',
    'browserify',
    'uglify',
    'less',
    'concat',
    'cssmin',
    'htmlmin',
    'watch'
  )
)
