1.文件读写操作

   简单操作: 
   fs.writeFile(文件路径, 要写入的数据[, 配置项], 回调)
   fs.readFile(文件路径[,配置项],回调)

   流式操作:
   fs.createWriteStream(文件路径[, 配置项])
   fs.createReadStream(文件路径[, 配置项])

   监听: 
    流.on('open/close') 
   关闭写入流:
    写入流.end() 
   读取流获取数据:
     读取流.on('data', 回调)



2.数据库
    关系型数据库 mySQL
        数据库
        表
        字段和数据行
    非关系型数据库  mongodb
        数据库
        集合
        文档(json)

    
    mongodb的相关知识:
        mongod.exe 用于启动mongodb数据库软件(4.x版本之后一般都是开机自启动,但是可能有的电脑无法自启动,所以需要自己手动启动)
        mongo.exe  用于操作mongodb数据库的客户端 

        配置环境变量的作用是什么? 
        如果在命令行窗口中,输入指令.默认要求路径必须是在指令所在的文件夹.如果想要在任意路径下执行指令(比如: mongod, WeChat),就需要将这些对应的.exe文件所在的路径,配置到环境变量中. 当我们执行指令的时候,会先在当前路径下查找,如果没有会去环境变量下的所有路径下查找,找到了就执行,找不到就报错

        mongodb的指令: 

            show dbs  展示所有的数据库(只展示有数据的)
            show collections  展示所有的集合
            use 数据库名
            db 展示当前使用的数据库

        增删改查的指令:

          增:  db.集合名.insert(文档)/insertOne(文档)/insertMany([文档, 文档])
          查:  db.集合名.find(条件[, 投影])

            条件: 决定了返回数据的个数

                {age:18, name:'zs'}
                {$or: [{age: 18}, {name: 'zs'}]}
                {age: {$in: [18, 20]}}
                {$where:function(){
                    return this.age == 18 
                }}
                {age: /^$/}


            投影: 决定了返回的数据中的键值对
                
                {age:1, _id: 0}只展示年龄,其他的都不展示
                



3.mongoose 
 
      1. 下载mongoose  npm i mongoose 
      2. 引入mongoose  const mongoose = require('mongoose')
      3. 连接数据库  mongoose.connect('mongodb://127.0.0.1:27017/数据库名')