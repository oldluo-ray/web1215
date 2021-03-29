import React, { Component } from 'react'
import context from './context'
// const { Consumer } = context
export default class Son extends Component {
  render() {
    return (
      <context.Consumer>
        {(data) => (
          <div>
            <p>
              <span>son组件</span>
              <span>爷爷给的钱: {data}</span>
            </p>
          </div>
        )}
      </context.Consumer>
    )
  }
}
