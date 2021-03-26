
gulp  

    gulp是什么?   是一个项目构建工具

    gulp的配置文件叫什么?  gulpfile.js

    gulp中如何定义任务? gulp.task(任务名, 回调函数)

    合并文件 concat 
    压缩js uglify 
    压缩css cssmin 
    重命名文件 rename 

    gulp.src()  读取文件
    gulp.dest() 将文件输出到指定路径下
    gulp.watch() 监听文件


webpack

    是什么?  是一个打包工具

    webpack的配置文件叫什么? webpack.config.js 
    
    webpack本身拥有的功能是什么? 本身可以处理js和json. 可以把es6模块语法转成浏览器认识的

    webpack所谓的五大核心: 
        入口(entry): 所有的资源都是有依赖关系,开始的js文件,就是所谓的入口文件
        出口(output): 将代码打包之后输出的路径
        加载器(loader): 处理webpack本身处理不了的事情(比如:处理css,less,图片...)
        插件(plugins): 加载器都处理不了的事情,交给插件
        模式(mode): 开发模式(development)/生产模式(production)