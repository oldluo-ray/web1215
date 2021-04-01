import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
class Test extends Component {
  render() {
    return (
      <div>
        test组件
        <button
          onClick={() => {
            this.props.history.push('/about')
            console.log(this.props)
          }}
        >
          test中的按钮
        </button>
      </div>
    )
  }
}

const WithTest = withRouter(Test)

export default WithTest
