react引入包: 
    react.js 
    react-dom.js 
    babel.js

    使用顺序: 
     创建一个根标签  
     引入js  
     script[type=text/babel] 让babel参与工作
     书写代码
     ReactDOM.render(虚拟dom, 根标签的dom对象)


     jsx 是语法糖 --babel --> React.createElement ---ReactDOM--->真实的dom渲染到页面上


    //  jsx中可以定义插值表达式: 
    //  1. 插值表达式中可以写什么
    //     可以写js表达式. 但是: 不要直接渲染对象,函数和布尔值
    //  2. 插值表达式可以写在哪里
    //     常用的写法: 可以写在jsx子节点的位置/属性值的位置上

    条件渲染: if/else  三元  &&

    列表渲染: 一般就是根据数据,动态的创建一个数组,数组中存放了虚拟dom.然后直接渲染这个数组即可. 常使用数组的map方法实现
    注意: 要在每一个虚拟dom的最外层结构定义一个key.值要求是不重复的

