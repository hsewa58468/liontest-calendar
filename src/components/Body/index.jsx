import React from 'react'
import './index.css'
import Data from '../Data/index'
let calendarDates =  [
    [{},{},{},{},{},{},{}],
    [{},{},{},{},{},{},{}],
    [{},{},{},{},{},{},{}],
    [{},{},{},{},{},{},{}],
    [{},{},{},{},{},{},{}]
]
export default function Body_Day() {
    const returnDatesJSX = (year,month)=>{
        const otherMonthDay=new Date(year,month-1,1).getDay()//取得當月1號是星期幾開始(函數月份從0開始ex:0=1月)
        const overMonthDay=32 - new Date(year, month-1, 32).getDate()//32-32天後的日期(月最大天數=31)=當月最後一天ex:32-2=30//32-1=31

        const dates = calendarDates.map((weekArray,weekIndex)=>{  //第一層map-->每周
            return (
                <tr className='weekDay'>
                    {
                        weekArray.map((day,dayIndex)=>{           //第二層map-->每日
                            const targetIndex = weekIndex*7 + dayIndex //設定每格標記key
                            if(targetIndex<otherMonthDay || targetIndex>overMonthDay ){
                                return(
                                    <td key={targetIndex} className="day otherMonthDay">
                                        <span className='dayCount'></span>
                                    </td>
                            )}
                            else{   
                                return(
                                    <td key={targetIndex} className='day currentDays'>
                                        <span className='dayCount'>{targetIndex-otherMonthDay+1}</span>
                                        <Data/>
                                    </td>
                                )

                            }
                        })
                    }
                </tr>
            )
        })
        return dates
    }
    return (
    <div>{returnDatesJSX(2017,6)}</div>
  )
}
