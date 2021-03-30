组件生命周期

    创建阶段

        constructor 只执行一次
        render  
        componentDidMount  只执行一次  1. 发送异步请求  2. 操作dom ...

    更新阶段   让组件更新的条件: 接收到了新的props,  setState(),  forceUpdate()
        render              执行多次   不要直接调用setState
        componentDidUpdate  执行多次

    卸载阶段

        componentWillUnmount 组件即将卸载  只执行一次  清除的操作

组件通讯

    props  父组件给子组件传递 不能跨级

    context 自上而下  可以跨级  

         1. 创建context对象 要求是同一个context对象 
         2. 传递数据的组件中使用context.Provider组件,添加value属性, 值就是要传递的值 
         3. 接收数据的组件: 
                context.Consumer组件 
                给组件添加静态属性contextType


    pubsub  是一个独立的js库  组件之间通讯没有嵌套要求, 可以随意的传递
