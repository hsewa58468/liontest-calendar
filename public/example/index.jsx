import React from 'react'
import './index.css'
import data1 from './json/data1.json'
const {useState}=React
var moment = require('moment');
let calendarDates =  [
    [{},{},{},{},{},{},{}],
    [{},{},{},{},{},{},{}],
    [{},{},{},{},{},{},{}],
    [{},{},{},{},{},{},{}],
    [{},{},{},{},{},{},{}]
]

export default function Hook_index (){
    const[which_Month_Has_choose,set_which_Month_Has_choose]=useState(5) //month選擇state(預設為5月)
    const[which_Day_Has_border,set_which_Day_Has_border]=useState(0) //第幾個index物件該有border
    const ChooseMonth =(targetMonth) =>{//月份選擇-直接選擇
        set_which_Month_Has_choose(targetMonth)
    }
    const BackArrowMonth =() =>{  //月份選擇-負
        if(which_Month_Has_choose<=5){
            set_which_Month_Has_choose(which_Month_Has_choose)
        }else{
            set_which_Month_Has_choose(which_Month_Has_choose-1)
        }
    }
    const ForwardArrowMonth =() =>{    //月份選擇-正
        if(which_Month_Has_choose>=7){
            set_which_Month_Has_choose(which_Month_Has_choose)
        }else{
            set_which_Month_Has_choose(which_Month_Has_choose+1)
        }
    }
    const addDayBorder =(index) =>{    //set選擇天數的索引
        set_which_Day_Has_border(index)
    }

    const returnDatesJSX = (year,month)=>{
        const otherMonthDay=new Date(year,month-1,1).getDay()//取得當月1號是星期幾開始(函數月份從0開始ex:0=1月)
        const overMonthDay=32 - new Date(year, month-1, 32).getDate()//32-32天後的日期(月最大天數=31)=當月最後一天ex:32-2=30//32-1=31
        
        const dates = calendarDates.map((weekArray,weekIndex)=>{  //第一層map-->每周
            return (
                <tr className={` days table_width ${which_Month_Has_choose===month? 'chooseMonth' : 'otherMonth'}`} >
                    {
                        weekArray.map((_,dayIndex)=>{           //第二層map-->每日
                            const targetIndex = weekIndex*7 + dayIndex //設定每格標記key
                            if(targetIndex<otherMonthDay || targetIndex>overMonthDay ){
                                return(
                                    <td key={targetIndex} className="otherMonthDay">
                                        <div className='day'></div>
                                    </td>
                            )}
                            else{   
                                const newdata=data1.filter(function(item){//return {data1中符合日期的資料}
                                    return item.date === moment([year,month-1,targetIndex-otherMonthDay+1]).format("YYYY/MM/DD");    
                                }) 
                                if(newdata[0]===undefined){ //沒資料-->僅輸出日期
                                    return(
                                        <td key={targetIndex} className='currentDays'>
                                            <div className='day'>{targetIndex-otherMonthDay+1}</div>
                                        </td>
                                )}
                                else{
                                    const target=newdata[newdata.length-1]  //有資料-->輸出內容  三元判斷式{`...${a===b?'true':'false'}`}
                                    return(
                                        <td key={targetIndex} className={`currentDays ${which_Day_Has_border===targetIndex? 'border' : ''}`} onClick={()=>addDayBorder(targetIndex)}>
                                            <div className='day'>
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
                                                <span className='price'>${target.price}</span>
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
    //=class component的render
    return (
        <div className="calendars"> 
            <div className="calendars_tabWrap">
                <a href="###" className="prev" onClick={()=>BackArrowMonth()}>{''}</a>
                <ul className="ntb_tab">
                    <li className="tab">{/* 使用三元判斷式判斷是否選取該月份-->onclick事件送出點擊月份給state */}
                        <a href="###" className={` ${which_Month_Has_choose===5? 'click' : ''}`} onClick={()=>ChooseMonth(5)}><span>2017 5月</span></a>
                    </li>            
                    <li className="tab">
                        <a href="###" className={` ${which_Month_Has_choose===6? 'click' : ''}`} onClick={()=>ChooseMonth(6)}><span>2017 6月</span></a>
                    </li>
                    <li className="tab">
                        <a href="###" className={` ${which_Month_Has_choose===7? 'click' : ''}`} onClick={()=>ChooseMonth(7)}><span>2017 7月</span></a>
                    </li>                                                
                </ul>
                <a href="###" className="next" onClick={()=>ForwardArrowMonth()}>{''}</a>
            </div>
            <div className="month">
                <div className='main'>
                    <table className='month_table'>
                        <thead>
                            <tr className='week table_width'>
                                <th>星期日</th>
                                <th>星期一</th>
                                <th>星期二</th>
                                <th>星期三</th>
                                <th>星期四</th>
                                <th>星期五</th>
                                <th>星期六</th>
                            </tr>
                        </thead>
                        <tbody>
                            {returnDatesJSX(2017,5)}
                            {returnDatesJSX(2017,6)}
                            {returnDatesJSX(2017,7)}
                        </tbody>
                        <tfoot>

                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
    )
}

