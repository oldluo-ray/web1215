axios的使用
    axios({
        url: 请求地址,
        method: 请求方式,
        data: post请求上传数据的方式
        params: get请求上传数据的方式
    })
    返回的是一个promise

模块化 

    什么是模块?  js文件 

    commonjs  browserify
    es6  babel先编译成commonjs, 然后再使用browserify编译成浏览器认识的代码
    AMD  依赖前置
    CMD  依赖就近


    es6中的具体的引入和导出的语法:

    导出: 
        分别导出 
            export const a = 1 
            export const b = 2 
        统一导出
            export {变量名, 变量名}
        默认导出
            export default 表达式  

    导入: 

        分别导出和统一导出时: 
        import {要和导出的变量名一致} from '路径/包名'
        默认导出: 
        import 自定义变量名 from '路径/包名'

        import 默认导出的引入, {分别/统一导出的引入} from '路径/包名'


工程化

     为什么工程化? 
        开发者的代码后期需要压缩,坚决兼容性问题,甚至要编译,但是这些工作繁琐, 也没有什么技术含量.所以希望能够通过工具自动完成. 所以要将项目工程化.工程化之后,我们就只关心业务逻辑.

    gulp 
        gulpfile.js 在这个文件中定义任务,具体执行任务使用插件

    webpack
