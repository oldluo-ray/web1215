// 这里是App展示组件对应的容器组件定义的位置
import { connect } from 'react-redux'
// 引入展示组件
import App from '../App'
// 引入actions.js中的inc
import { inc, dec } from '../redux/actions'

function mapStateToProps(state) {
  return {
    count: state.count,
  }
}

function mapDispatchToProps(dispatch) {
  //接收到的这个dispatch就是redux中store.dispatch

  return {
    incre: function (data) {
      dispatch(inc(data))
    },
    decre: function (data) {
      dispatch(dec(data))
    },
  }
}

//总结:
// connect函数第一次调用:
// 1. 什么都不传, 展示组件中只能获取到dispatch函数
// 2. 传入第一个参数: 展示组件中,可以获取到redux中的数据
// 3. 传入第二个参数: 展示组件中,可以通过第二个参数中返回的函数,去修改redux数据
export default connect(mapStateToProps, mapDispatchToProps)(App)
