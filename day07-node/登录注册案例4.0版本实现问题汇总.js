问题: 
1. TypeError: Class constructor MongoStore cannot be invoked without 'new'
 原因: 'connect-mongo'这个包和我们对应使用的api是不兼容的 当前是4.4.0 
      但是对应的api是 3.2.0 
 注意:由于第三方包升级导致的项目无法启动,最好的解决办法就是直接将包的版本回退到之前的版本

 2. 就是存储cookie的问题: 
  浏览器中存储cookie时: 如果请求地址是127.0.0.1 那么响应的时候,也会将cookie存储到127.0.0.1对应的空间下面. 那么在localhost中是无法查找到对应的cookie 
  解决办法: 所有的请求的域名都统一 

3.动态渲染数据比较繁琐: 

     如果有一些信息是中文,又通过浏览器的地址栏传递了.那么浏览器默认会对这些中文进行
     url编码. 比如: 中文 --> %E4%B8%AD%E6%96%87
     如果最终还想展示中文,就必须再对这些数据,进行url解码 
      // encodeURI 是对中文进行编码,变成看起来的乱码形式
      // decodeURI 是对url编码进行解码
