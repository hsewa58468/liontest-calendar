import React, { Fragment } from 'react'
import './App.css'
import MonthBar from './components/Month_Bar/index'
import Week from './components/Week'
import Date from './components/Data'
export default function App(){

    return (
          <Fragment>
              <MonthBar  />
              <Week/>
              <Date />
          </Fragment>
    )
}
