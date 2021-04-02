// 这里是App展示组件对应的容器组件定义的位置
import { connect } from 'react-redux'
// 引入展示组件
import App from '../App'
// 引入actions.js中的inc
import { inc, dec } from '../redux/actions'

// function mapStateToProps(state) {
//   return {
//     count: state.count,
//   }
// }

// function mapDispatchToProps(dispatch) {
//   //接收到的这个dispatch就是redux中store.dispatch

//   return {
//     inc: function (data) {
//       dispatch(inc(data))
//     },
//     dec: function (data) {
//       dispatch(dec(data))
//     },
//     xxx: function(data){
//       dispatch(xxx(data)
//     }
//   }
// }

//总结:
// connect函数第一次调用:
// 1. 什么都不传, 展示组件中只能获取到dispatch函数
// 2. 传入第一个参数: 展示组件中,可以获取到redux中的数据
// 3. 传入第二个参数: 展示组件中,可以通过第二个参数中返回的函数,去修改redux数据
// 4. 传入的第二个参数: 可以是一个对象, 对象里面要求写的是创建action对象的函数
//    然后connect底层会根据你传入的那个函数的名字,重新封装一个新的函数:
//     function inc (data) {
//       dispatch(inc(data))
//     },
//     然后将封装好的这个新的函数传给展示组件.
//     需要注意的是,传入展示组件的这个函数的名字和创建action对象的函数的名字是一样的
//     虽然名字一样,但绝不是一个函数

//     展示组件中接收到的函数:
//     function inc (data) {
//       dispatch(inc(data))
//     },
//     actions.js中定义的函数
//      function inc(data) {
//        return { type: INCREMENT, data }
//      }
// export default connect(mapStateToProps, mapDispatchToProps)(App)
export default connect((state) => ({ count: state.count }), { inc, dec })(App)
