// 这里写的redux跟react一点关系都没有. 这是redux的基本使用.

// redux中三个核心的概念:
// action 需求
// reducer 具体执行需求的角色
// store 管理reducer和action 存储了state
// 1. 引入redux
// 注意.为了演示redux是独立的,所以运行在node平台上,node平台不支持es6.但是支持commonjs.所以直接使用commonjs语法
const { createStore } = require('redux')

// 2. 创建store对象
// 创建store的时候要求传入reducer函数.所以要先定义reducer函数
// 在定义reducer函数的时候,会给state设置一个默认值. 这样写的意义是为了给store对象设置一个初始值.一般都是一个对象
// 注意: 当store调用了dispatch方法的时候,store对象内部会找到这个testReducer,并且调用这个testReducer.然后把最新的数据传入到state的位置上. 把需求对象传入到action的位置上
// 注意:创建store对象时,会调用testReduer函数:
// 具体的调用的代码: testReducer(undefined, { type: '@@redux/INITt.x.3.x.5'})
function testReducer(state = { count: 0, msg: 'abc' }, action) {
  // 函数的形参设置的默认值,什么时候生效?
  //   当调用这个函数,但是没有给这个函数传参的时候,默认值就会生效
  //   console.log(state, action)
  // 在这个函数中return 什么, 那么store中存储的state的数据,就被修改成什么
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        // count: 0,
        // msg: 'abc'
        count: state.count + 1,
      }
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1,
      }
    case 'INCREMENT-NUM':
      return {
        ...state,
        count: state.count + action.data,
      }
    // 定义一个reducer函数的时候,必须要有一个default
    default:
      return state
  }
}
//注意:在将store和reducer函数绑定的时候,reducer函数会被调用一次.这次调用就是为了初始化数据
const store = createStore(testReducer)

// 查看store对象中的数据
// console.log(store.getState())
// 修改store里面的数据
// 定义一个需求对象
// const actionObj = { type: 'INCREMENT' }
//让store对象分配任务给reducer函数
// 一调用store.dispatch 那么testReducer 就会被调用
// store.dispatch(actionObj)
// console.log(store.getState())
// store.dispatch(actionObj)
// console.log(store.getState())
// store.dispatch({ type: 'DECREMENT' })
// console.log(store.getState())
// 表示要数字增加,但是每次增加3
store.dispatch({ type: 'INCREMENT-NUM', data: 3 })
console.log(store.getState())
store.dispatch({ type: 'INCREMENT-NUM', data: 5 })
console.log(store.getState())


