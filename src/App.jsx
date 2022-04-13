import React, { Component,Fragment } from 'react'
import './App.css'
import MonthBar from './components/Month_Bar/index'

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <MonthBar/>
      </Fragment>
    )
  }
}
