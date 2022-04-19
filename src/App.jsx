import React, { Fragment, useState } from 'react'
import './App.css'
import MonthBar from './components/Month_Bar/index'
import Week from './components/Week'
import Data from './components/Data'
export default function App(){
  
    const[current_year,set_current_year]=useState(2017)
    const[current_month,set_current_month]=useState(5)
    const choose_current=(year,month)=>{
      set_current_year(year)
      set_current_month(month)
    }
console.log('APP:',current_year,current_month);
    return (
          <Fragment>
            <MonthBar getCurrent={choose_current} year={current_year} month={current_month}/>
            <Week/>
            <Data year={current_year} month={current_month} />
          </Fragment>
    )
}
