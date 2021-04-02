import React, { Component } from 'react'
import WithList from './container/WithList'
import Search from './pages/Search'
//导入Provider
import { Provider } from 'react-redux'
// 导入store
import store from './redux/store'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="container">
          <Search />
          <WithList />
        </div>
      </Provider>
    )
  }
}
