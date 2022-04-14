import React from 'react';
import './index.css'
 import data1 from '../Body/json/data1.json'
 const {useState}=React
 var moment = require('moment');
 let calendarDates =  [
  [{},{},{},{},{},{},{}],
  [{},{},{},{},{},{},{}],
  [{},{},{},{},{},{},{}],
  [{},{},{},{},{},{},{}],
  [{},{},{},{},{},{},{}],
  [{},{},{},{},{},{},{}]
]
export default function Data(props) {
  const[which_Day_Has_border,set_which_Day_Has_border]=useState(0) 
  const addDayBorder =(index) =>{    
      set_which_Day_Has_border(index)
  }
  const returnDatesJSX = (year,month)=>{
      const otherMonthDay=new Date(year,month-1,1).getDay()
      const overMonthDay=32 - new Date(year, month-1, 32).getDate()

      const dates = calendarDates.map((weekArray,weekIndex)=>{  
          return (
              <tr key={weekIndex} className={` days table_width ${props.chooseMonth===month? 'chooseMonth' : 'otherMonth'}`} >
                  {
                      weekArray.map((day,dayIndex)=>{           
                          const targetIndex = weekIndex*7 + dayIndex 
                          if(targetIndex<otherMonthDay || targetIndex>overMonthDay+otherMonthDay-1 ){
                              return(
                                  <td key={targetIndex} className="otherMonthDay">
                                      <div className=''></div>
                                  </td>
                          )}
                          else{   
                              const newdata=data1.filter(function(item){ 
                                  return item.date === moment([year,month-1,targetIndex-otherMonthDay+1]).format("YYYY/MM/DD");    
                              }) 
                              if(newdata[0]===undefined){  
                                  return(
                                      <td key={targetIndex} className='currentDays'>
                                          <div className=''>{targetIndex-otherMonthDay+1}</div>
                                      </td>
                              )}
                              else{
                                  const target=newdata[newdata.length-1]   
                                  return(
                                      <td key={targetIndex} className={`currentDays${which_Day_Has_border===targetIndex? 'clickDay' : ''}`} onClick={()=>addDayBorder(targetIndex)}>
                                          <div className='Daytitle'>
                                              <span className='dayNum'>{targetIndex-otherMonthDay+1}</span>
                                              <span className={`${target.availableVancancy>target.totalVacnacy?'nonschedule':'onschedule'}`}>成團</span>
                                          </div>                                           
                                          <div className='details'>
                                              <span className='status'>{target.status}</span>
                                              <br />
                                              <span className='sell'>餘位:
                                                  <i className='js_sell'>{target.availableVancancy}</i>
                                              </span>
                                              <br />
                                              <span className='group'>團位:
                                                  <i className='js_group'>{target.totalVacnacy}</i>
                                              </span>
                                              <br />
                                              <span className='price'>$ {target.price}</span>
                                          </div>
                                      </td> 
                                )}
                            }
                        })
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

