import React,{useState} from 'react';
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
    const [HasBorder,setHasBorder] = useState(0);

    function handleborder(set){
        setHasBorder(set);
    }
  
    const returnDatesJSX = (year,month)=>{
        
        const dates = calendarDates.map((weekArray,weekIndex)=>{  
            return (
                <tr key={weekIndex} className='chooseMonth' >
                    {
                        <EveryWeek weekArray={weekArray} weekIndex={weekIndex} year={year} month={month} handleborder={handleborder} HasBorder={HasBorder}/>
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

