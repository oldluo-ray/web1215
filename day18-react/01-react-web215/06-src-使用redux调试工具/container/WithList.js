// 创建容器组件
import { connect } from 'react-redux'
// 引入展示组件
import List from '../pages/List'
// 导入创建action的函数
import { getData } from '../redux/actions'

export default connect((state) => ({ users: state.users }), { getData })(List)
