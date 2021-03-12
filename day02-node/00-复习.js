1. node介绍
   node是js运行的一个平台 
   优缺点是什么? 优点: 适用于i/o密集型 缺点: 单线程,不适用于cpu密集型

2. 在node平台下如何运行一个js文件? 
   在命令行窗口中, 执行 node js文件的路径

3. 当一个js文件在node平台下执行的时候,会自动创建一个函数,将js文件中的代码包裹起来
   
  function(exports, require, module, __dirname, __filename){}

4. exports  暴露一个js模块的数据的
   require  导入其他模块的数据
   module   也是   暴露一个js模块的数据的
   __dirname  当前执行的js文件的所在文件夹的绝对路径
   __filename  当前执行的js文件的绝对路径

5. global 是node中的一个全局对象

6. 包

   当一个项目里面有一个package.json的文件的时候, 就可以称为包  

   package.json 

   name: 注意点:1. 不能有中文 2. 不能有大写字母 3. 不能和其他包重名

   dependencise: 当前项目依赖的其他的包的信息 (包的名称还有包的版本号)


7. npm 是一个包管理工具(用来下载管理包)
   常用的指令: 
    npm init / npm init -y 初始化包  注意: 加了-y 会自动将文件夹的名称当做包名
    npm install 包名  下载指定包的最新的版本
    npm install 包名@xx.xx.xx 下载执行包的指定版本 
    npm install 根据package-lock.json 或 package.json 下载项目的依赖包
                package-lock.json和package.json的区别: 
                1. 创建时机不同: 当下载了第一个包的时候,会自动创建package-lock.json 
                2. 记录的信息不同: package.json中记录依赖项的时候,只记录了包名和版本号这些信息.但是package-lock.json中,还记录了下载地址  
                3. 当执行npm i的时候,根据package-lock.json下载效率更高,更安全 

    npm remove 包名  移除包 

    npm install 包名 -g  下载包到全局

    如果项目开发中,需要使用到一些命令行工具就下载到全局 
    如果项目开发中,需要使用一些第三方的js库,那么就下载到本地  项目根目录的node_modules  

    node_modules的查找规则: 先从项目根目录找,如果没有沿着目录结构,往上找,直到盘符根目录

    
    8. buffer:  存储二进制数据的类似于数组的对象, 长度是固定的 

    9. 文件的写入: 
          简单写入: 
            1. 引入模块  const fs = require('fs')
            2. 调用api  fs.writeFile(文件路径, 要写入的数据[, 配置项], 回调)
          流式写入:
            1. 引入模块  const fs = require('fs')
            2. 创建写入流  const ws = fs.createWriteStream(文件路径[,配置项])
            3. 写入: ws.write(数据)
            4. 当创建流的时候,流就开启了. 但是需要手动关闭  ws.end() 
            5. 监听流的开启和关闭: ws.on('open/close')



                

 