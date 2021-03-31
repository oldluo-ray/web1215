pubsub: 
    
    Item组件要将任务的id发送给List组件? 
        Item是发布者 在需要发布的时候(一般都是一个事件处理函数中) 
            PubSub.publish('话题', 数据)
        List是订阅者 在挂载成功的生命周期钩子函数中订阅 在卸载的时候取消订阅
            this.token = PubSub.subscribe('话题',(msg, data)=>{
                接收到数据之后的操作,一定要写在这个回调函数中
            })

            PubSub.unsubscribe(this.token)

    
性能优化: 

    1. 减轻state 跟视图渲染无关的数据,不存储到state中
    2. shouldComponentUpdate return true就执行render. 否则不执行render  

            对比之前的props和现在的props数据. 以及以前的state和现在的state的数据

            如何拿到以前的数据: this.props  this.state
            如何拿到最新的数据: 这个钩子函数接收的两个参数  nextProps  nextState
            
    3. PureComponent
            跟Component组件几乎是一样的.但是重写了ShouldComponentUpdate.帮我们自动判断了所有的state和props数据. 
            问题: 自动比较数据的时候是浅层对比. 遇到引用数据类型时,不要直接修改对象/数组里面的数据,而是创建一份新的数据,去进行修改


    为了复用组件中重复的状态和逻辑.可以使用高阶组件和renderprops
    高阶组件和renderProps都是react的变成技巧

    高阶组件
            function withXXX(WrappedComponent){

                return class extends Component {

                    ...定义公共的状态和逻辑

                    render(){
                        return <WrappedComponent {...this.state} {...this.props} ></WrappedComponent>
                    }
                }
            }

            const Withlogin = withForm(需要使用状态和逻辑的组件)

        

    renderprops

            class XXX extends Component {
                ...定义公共的状态和逻辑 

                render(){
                    return this.props.render(this.state)
                }

            }

            <XXX render={(state)=>{return 需要用到状态和逻辑的组件}}/>

