import React from 'react';
import './index.css'
import EveryWeek from './EveryWeek';

 let calendarDates =  [
  [{},{},{},{},{},{},{}],
  [{},{},{},{},{},{},{}],
  [{},{},{},{},{},{},{}],
  [{},{},{},{},{},{},{}],
  [{},{},{},{},{},{},{}],
  [{},{},{},{},{},{},{}]
]
export default function Data(props) {
   
  
    const returnDatesJSX = (year,month)=>{
        
        const dates = calendarDates.map((weekArray,weekIndex)=>{  
            return (
                <tr key={weekIndex} className={` days table_width ${props.chooseMonth===month? 'chooseMonth' : 'otherMonth'}`} >
                    {
                        <EveryWeek weekArray={weekArray} weekIndex={weekIndex} year={year} month={month}/>
                    }
                </tr>
            )
        })
        return dates
    }
    return (
        <table>
            <tbody>
                { returnDatesJSX(2017,props.chooseMonth)}
            </tbody>
        </table>    
    )
}

