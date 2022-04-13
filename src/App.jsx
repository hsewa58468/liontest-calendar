import React, { Component } from 'react'
import './App.css'
import Neck from './components/Neck'
import Body from './components/Body'

export default class App extends Component {
  render() {
    return (
      <div style={{width:500}}>
         <Neck/>
         <Body/>
      </div>
    )
  }
}
