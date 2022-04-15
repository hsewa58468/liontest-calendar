import React, { Component,Fragment } from 'react'
import './App.css'
import MonthBar from './components/Month_Bar/index'
import Week from './components/Week'
import Body from './components/Body'
import { BrowserRouter } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <BrowserRouter >
          <MonthBar/>
          <Week/>
          <Body/>
        </BrowserRouter>
      </Fragment>
    )
  }
}
