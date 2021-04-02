// 这里是App展示组件对应的容器组件定义的位置
import { connect } from 'react-redux'
// 引入展示组件
import App from '../App'

function mapStateToProps(state) {
  return {
    count: state.count,
  }
}

export default connect(mapStateToProps)(App)
