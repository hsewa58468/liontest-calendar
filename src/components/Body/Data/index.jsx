import React,{useEffect} from 'react';
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
   
    const{Choose} = props;
  
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
                { returnDatesJSX(Choose.year,Choose.month) }
            </tbody>
        </table>    
    )
}

