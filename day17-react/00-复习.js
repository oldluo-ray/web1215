hooks:

    hooks的作用: 可以在函数组件中实现原本只能在类组件中实现的功能(比如: 状态, 生命周期钩子函数...)

    hooks是react16.8之后才有的新特性 


    hooks就是一堆函数 


    使用的时候的规则: 
        1. 只能用在函数组件和其他hooks中 
        2. 要写在顶级作用域



    useState使用: 

        import {useState} from 'react'

        const [变量名, 操作数据的方法] = useState(初始值)


    useEffect使用:

        import {useEffect} from 'react'

        // 外层: 表示挂载(componentDidMount)和更新(componentDidUpdate)
        useEffect(()=>{
            // 内层:表示即将卸载 (componentWillUnmount)
            return ()=>{

            }
        }, [])

        // 当传入第二个参数的时候, 
        //     传入一个空的数组:  外层函数就只表示挂载
        //     数组中监听了state/props的数据的时候: 只有数据变化的时候,才会模拟更新


    自定义hooks: 只是要求函数名是useXXX的形式



前端路由:

        作用: 为了实现单页面应用(spa)

        定义的是路径和视图的对应关系 

        原理: 当浏览器地址栏的路径发生变化,不会给服务器发送请求. 而是根据新的路径,去找到对应的视图,展示对应的视图 history库 history有一个listen方法可以监听路径的变化

        react对前端路由的实现: 

            包名: react-router-dom  帮助我们实现了前端路由

         组件: 
            BrowserRouter 包裹整个项目的结构 只用一次
            Link 渲染了a标签,并组织了a的默认行为 <Link to="路径">内容</Link>
            Route(路由组件)  定义路由规则的组件 <Route path="路径" component={组件}/>

            Switch 包裹Route组件 默认Route组件前面匹配成功了,后面的还是会继续匹配.如果包裹了,前面的匹配成功了,后面就不再匹配了

            Redirect 重定向(修改路径)
             
                <Redirect from="路径" to="路径"/>
                注意: from属性要和Switch配合使用才有用

            NavLink
                作用跟Link是一样的.只是会自动添加类名,帮助我们可以简单的实现高亮 
                通过activeClassName的属性,可以自定义添加的类名


       编程式导航: 

            // 不是通过用户点击Link/NavLink修改路径,而是在js执行的过程中,修改路径 

            // 如果一个组件是被Route组件渲染的,那么就可以直接通过this.props.history调用push/replace方法,实现路径的改变


            // this.props.history.push(路径) 会记录历史记录
            // this.props.history.replace(路径) 会覆盖当前历史记录

        

