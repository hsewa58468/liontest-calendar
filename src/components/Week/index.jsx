import React from 'react'
import './index.css'
import Weekitem from './Weekitem'
let weekDates =  [
    {},{},{},{},{},{},{}
  ]
export default function Week() {
    const returnDatesJSX = ()=>{
        const dates = weekDates.map((weekArray,weekIndex)=>{  
            return (                    
                <Weekitem key={weekIndex} weekIndex={weekIndex}/>
            )
        })
        return dates
    }
    return (
        <table>
            <tbody>
                <tr className='weekTable' >
                    { returnDatesJSX()}
                </tr>
            </tbody>
        </table>    
    )
}
