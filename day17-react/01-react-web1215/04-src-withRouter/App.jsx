import React, { Component } from 'react'
import Home from './pages/Home.js'
import About from './pages/About.js'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
export default class App extends Component {
  render() {
    return (
      <Router>
        <Link to="/about">About</Link>
        <Link to="/home">Home</Link>

        <Route path="/home" component={Home}></Route>
        <Route path="/about" component={About}></Route>
      </Router>
    )
  }
}
