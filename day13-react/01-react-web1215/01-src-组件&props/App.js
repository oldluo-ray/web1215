// App.js一般都是用来定义根组件
import React from 'react'
import Counter from './pages/Counter'
import List from './pages/List'
class App extends React.Component {
  state = {
    test: '测试文本',
    obj: {
      name: 'zs',
    },
    arr: ['关羽', '张飞', '刘备'],
  }
  render() {
    return (
      <div>
        根组件
        {/* 这是将App的数据,传递给了Counter  
            App中嵌套了Counter.所以App是父组件, Counter是子组件
            一般使用props.就是将父组件的数据,传递给子组件
        */}
        <List></List>
        <Counter
          test={this.state.test}
          data={'xxxx'}
          ele={<h4>react元素</h4>}
          obj={this.state.obj}
        ></Counter>
      </div>
    )
  }
}

export default App
