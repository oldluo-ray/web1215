import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  Redirect,
  NavLink,
} from 'react-router-dom'

import Home from './pages/Home'
import Detail from './pages/Detail'

export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <div>
            {/* 注意Link一定要写在Router的范围内 */}
            <NavLink to="/index" activeClassName="selected">
              首页
            </NavLink>
            {/* 这里是具体传递路由参数 */}
            <NavLink to="/detail" activeClassName="selected">
              详情页
            </NavLink>

            <Switch>
              {/* pathname: /index/girls */}
              <Route path="/index" component={Home}></Route>

              <Route path="/detail" component={Detail}></Route>
              {/* <Redirect from="/index" to="/detail"></Redirect> */}
            </Switch>
          </div>
        </Router>
      </>
    )
  }
}
