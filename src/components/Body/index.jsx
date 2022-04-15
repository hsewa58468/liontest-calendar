// import React,{useState} from 'react'
import './index.css'
import Data from '../Data/index'
// import data1 from '../Body/json/data1.json'
import {Route,Routes } from 'react-router-dom';

// let calendarDates =  [
//     [{},{},{},{},{},{},{}],
//     [{},{},{},{},{},{},{}],
//     [{},{},{},{},{},{},{}],
//     [{},{},{},{},{},{},{}],
//     [{},{},{},{},{},{},{}]
// ]

// var moment = require('moment');

export default function Body_Day() {

    // const[which_Month_Has_choose,set_which_Month_Has_choose]=useState(5) //month選擇state(預設為5月)
    // const[which_Day_Has_border,set_which_Day_Has_border]=useState(0) //第幾個index物件該有border
    // const ChooseMonth =(targetMonth) =>{//月份選擇-直接選擇
    //     set_which_Month_Has_choose(targetMonth)
    // }
    // const BackArrowMonth =() =>{  //月份選擇-負
    //     if(which_Month_Has_choose<=5){
    //         set_which_Month_Has_choose(which_Month_Has_choose)
    //     }else{
    //         set_which_Month_Has_choose(which_Month_Has_choose-1)
    //     }
    // }
    // const ForwardArrowMonth =() =>{    //月份選擇-正
    //     if(which_Month_Has_choose>=7){
    //         set_which_Month_Has_choose(which_Month_Has_choose)
    //     }else{
    //         set_which_Month_Has_choose(which_Month_Has_choose+1)
    //     }
    // }
    // const addDayBorder =(index) =>{    //set選擇天數的索引
    //     set_which_Day_Has_border(index)
    // }


    // const returnDatesJSX = (year,month)=>{
    //     const otherMonthDay=new Date(year,month-1,1).getDay()//取得當月1號是星期幾開始(函數月份從0開始ex:0=1月)
    //     const overMonthDay=32 - new Date(year, month-1, 32).getDate()//32-32天後的日期(月最大天數=31)=當月最後一天ex:32-2=30//32-1=31
        
    //     const dates = calendarDates.map((weekArray,weekIndex)=>{  //第一層map-->每周
    //         return (
    //             <tr className={` days table_width ${which_Month_Has_choose===month? 'chooseMonth' : 'otherMonth'}`} >
    //                 {
    //                     weekArray.map((day,dayIndex)=>{           //第二層map-->每日
    //                         const targetIndex = weekIndex*7 + dayIndex //設定每格標記key
    //                         if(targetIndex<otherMonthDay || targetIndex>overMonthDay ){
    //                             return(
    //                                 <td key={targetIndex} className="otherMonthDay">
    //                                     <div className='day'></div>
    //                                 </td>
    //                         )}
    //                         else{   
    //                             const newdata=data1.filter(function(item){//return {data1中符合日期的資料}
    //                                 return item.date === moment([year,month-1,targetIndex-otherMonthDay+1]).format("YYYY/MM/DD");    
    //                             }) 
    //                             if(newdata[0]==undefined){ //沒資料-->僅輸出日期
    //                                 return(
    //                                     <td key={targetIndex} className='currentDays'>
    //                                         <div className='day'>{targetIndex-otherMonthDay+1}</div>
    //                                     </td>
    //                             )}
    //                             else{
    //                                 const target=newdata[newdata.length-1]  //有資料-->輸出內容  三元判斷式{`...${a===b?'true':'false'}`}
    //                                 return(
    //                                     <td key={targetIndex} className={`currentDays ${which_Day_Has_border===targetIndex? 'border' : ''}`} onClick={()=>addDayBorder(targetIndex)}>
    //                                         <div className='day'>
    //                                             <span className='dayNum'>{targetIndex-otherMonthDay+1}</span>
    //                                             <span className={`${target.availableVancancy>target.totalVacnacy?'nonschedule':'onschedule'}`}>成團</span>
    //                                         </div>                                           
    //                                         <div className='details'>
    //                                             <span className='status'>{target.status}</span>
    //                                             <br />
    //                                             <span className='sell'>餘位:
    //                                                 <i className='js_sell'>{target.availableVancancy}</i>
    //                                             </span>
    //                                             <br />
    //                                             <span className='group'>團位:
    //                                                 <i className='js_group'>{target.totalVacnacy}</i>
    //                                             </span>
    //                                             <br />
    //                                             <span className='price'>${target.price}</span>
    //                                         </div>
    //                                     </td> 
    //                             )}
    //                         }
    //                     })
    //                 }
    //             </tr>
    //         )
    //     })
    //     return dates
    // }

    return (
        <Routes>
            <Route path="/sieben" element={<Data/>}/>
            <Route path="/acht" />
            <Route path="/neun" />
        </Routes>
  )
}
