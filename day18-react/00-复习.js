/**

编程式导航: 
    history  
        push(路径, 数据) 
        replace(路径, 数据)
    location
        state 可以接收push/replace传递过来的数据 NavLink/Link不能传递这个数据
        search 可以接收查询字符串
    match
        params 可以接收路由参数 

    如何定义路由参数: <Route path="/路径/:路由参数?"></Route>


withRouter:
    1. 没有被Route组件渲染的组件,无法获取到history,location,match这三个对象
    2.  使用了withRouter之后,不是被Route组件渲染的组件也可以获取到那三个对象了 
    const WithXXX = withRouter(需要使用三个对象的组件)

    

redux
    是一个独立的用于管理状态(数据)的js库
    是以集中管理数据的方式存在

    三个主要的角色: 

    action   { type: '需求的描述' } 至少应该有type属性

    reducer  函数  

            function xxx(state = {属性: 值}, action){
                switch(action.type){

                    case '需求1':
                        return {
                            ...state
                        }
                    case '需求2':
                        return {
                            ...state
                        }
                    default: 
                        return state
                }
            }

            reducer函数的执行时机: 
                1. 创建store的时候,调用一次reducer. 目的是为了初始化store中state的数据
                2. 调用了store.dispatch方法, reducer会执行.目的是为了修改数据

    store 
         1. 内部存储了数据
         2. 利用dispatch方法,可以将需求分配给reducer执行,从而修改数据   


         import {createStore} from 'redux'

         const store = createStore(reducer函数)

react-redux

     作用: 就是将react和redux关联起来

     使用: 
     1. 要到入口文件/根组件中,导入Provider组件,用于包裹整个项目
            注意: 如果根组件也要使用redux中的数据,那就不用在跟组件中使用Provider.而是写在入口文件中
        
        <Provider store={redux的store对象}>
            <App></App>
        </Provider>

    2. 在需要使用redux数据的react组件中, 导入connect函数 
        import {connect} from 'react-redux' 
        比如有一个组件Test.需要使用redux中的数据
        const WithTest = connect()(Test) 然后渲染的是WithTest 
        这时Test组件中就可以通过this.props获取到dispatch方法. 就可以修改redux数据了
        但是现在在Test组件中还无法获取到redux中的数据,如果要数据,就应该定义一个函数,然后将函数传入到connect函数第一次调用的第一个位置上
        这个函数的定义有规则:
        // state可以接收到redux中所有的数据 
        function xxx(state){
            return {
                属性: state.属性
            }
        }
        注意:这个函数我们只需要定义,传入传入connect. react-redux这个包底层会自动调用这个函数.当第一次渲染页面的时候,会调用一次,将redux中的所有数据通过实参的形式传递给state形参. state中的部分数据可能在Test中需要,所以这个函数中return的对象,就是表示要将哪些数据,通过props的形式,传递给Test组件
        当我们调用dispatch方法, 这个xxx函数,又会自动被调用.然后在将最新的redux中state的数据,传递给Test组件
*/
