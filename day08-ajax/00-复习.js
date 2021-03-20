session和cookie配合使用

  1. 第一次发送请求登录,服务器进行登录校验. 成功交用户信息(id)存储到session中 
  2. 会得到一个sessionid(存储用户信息的空间的唯一标识符),设置响应头,让浏览器把sessionid存储cookie里面 
  3. 浏览器再次请求服务器的时候,会自动将sessionid上传给服务器, 服务器会根据这个sessionid去查找是否有这样的一个存储空间,如果有再去里面找对应的数据 
  4. 找到了就是表示之前登录过,没有找到就是之前没有登录,或退出了

localStorage

  作用: 浏览器中存储数据的容器(永久存储)
  使用: localStorage.getItem('键')/ localStorage.setItem('键', '值')
  特点: 只能存储字符串,如果需要将一个对象存储起来,就先转成字符串

ajax
    浏览器中发送请求的方式:
        比如: 地址栏, a标签, form等 ... 这些无法满足实际开发需求

    ajax是什么? 就是浏览器中发送异步请求的技术(XMLHttpRequest)
    ajax的特点: 1. 异步(不会阻塞代码) 2. 可以局部刷新
    ajax的基本使用: 

        get请求: 
            1. 创建xhr
            const xhr = new XMLHttpRequest()
            2. 设置请求首行 open 
            xhr.open('get', 'xxxx:5000/test?name=zs&age=18')
            3. 发送请求
            xhr.send()

        post请求: 
            1. 创建xhr
            const xhr = new XMLHttpRequest()
            2. 设置请求首行 open 
            xhr.open('post', 'xxxx:5000/test')
            3. 设置请求头(因为post请求有请求主体,添加的请求头,其实就是在描述请求主体中数据的格式)
            xhr.setRequestHeader('content-type','application/x-www-form-urlencoded')
            4. 设置请求主体并发送请求
            xhr.send('name=zs&age=18')


        响应: 
        
            xhr.onreadystatechange = function(){
                // 这个事件处理函数会被触发3次
                // 2,3,4
                if(xhr.readyState === 4){
                    //表示响应完成(失败和成功都是完成)
                    if(xhr.status === 200){
                        // 表示成功

                        //获取响应主体的信息(字符串)
                        xhr.responseText 

                        xhr.getAllResponseHeaders()
                        xhr.getResponseHeader('键')
                    }
                }
            }
