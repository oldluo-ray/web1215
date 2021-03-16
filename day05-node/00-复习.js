1. http 

    请求报文: 请求首行 请求头 请求空行 请求主体 
    响应报文: 响应首行 响应头 响应空行 响应主体
    状态码: 
        304 缓存
        200 成功
        301 重定向
        302 重定向
        404 找不到资源 
        500 服务器内部错误


2. express 路由 

     路由: 一个一一对应的映射规则
     express中定义路由: 
     app.get/post/all(路径, 回调)

     request的成员: 
        request.query 获取查询字符串
        request.get('键') 获取请求头中的指定信息
        request.params 获取路由参数 
        request.body post请求上传的数据, 要配合中间件


        如何定义路由参数: 
        app.all('/路径/:路由参数?')
        如何传递路由参数: 
        发送请求的时候,将参数写在指定的路径后面

    response的成员: 
        
         response.send() 一般用来响应一些字符串 
         response.download(相对/绝对路径) 让浏览器下载文件
         response.sendFile(绝对路径) 响应文件给浏览器,如果浏览器可以渲染,就直接展示,否则下载 
            path模块是node中提供的.直接引入使用即可 
            path.resolve(__dirname, xxx, xxx) 会自动加斜杠,而且识别../ 
        response.redirect('新的url') 重定向 

        response.get() 获取响应头
        response.set() 设置响应头 一定要在响应之前去设置



3. express 中间件 

        express的中间件: 是在请求-响应这个循环中间执行的,所以叫中间件 
        中间件就是一个函数 
        在express中如何定义和使用中间件:
        app.use(中间件函数)

        中间件的分类: 
            应用级: app.use((req,res,next)=>{}) next表示下一个中间件
            第三方: app.use(bodyParser.urlencoded({extended: true}))
            内置的: app.use(express.static('静态的目录'))
            路由器中间件: 用来拆分代码的

        注意点: 
          1. 中间件中的所有的请求和响应对象都是同一个
          2. express中中间件是线性模式, 所以要注意中间件书写的位置
          3. 中间件中调用了next, 下一个中间件才可以执行 
          4. 路由的回调函数,也可以理解为一个中间件


4. 正则表达式
    
       作用: 用来对字符串进行匹配,提取,替换 

       1. 创建正则对象 
       const reg = new RegExp()
       const reg = /字符/   字面量的形式常用 

       2. 正则的匹配 
       正则对象.test(字符串) 返回布尔值 

       3. 正则表达式中写字符: 
         普通字符: a,b...1,2..
         特殊字符: 
            元字符: 
                . 非换行符 
                \s 表示空白符 空格, \r \n 
                \S 非空白符
                \d 数字
                \D 非数字
                \w 数字,字母,下划线
                \W 非数字, 非字母, 非下划线

                ^ 以什么开头
                $ 以什么结尾
                /^abc$/ 表示只能是abc


             



     