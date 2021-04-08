import Login from '../pages/Login/Login'
import Home from '../pages/Home/Home'

// 定义路由表
const routersArr = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/login',
    component: Login,
  },
]

export default routersArr
