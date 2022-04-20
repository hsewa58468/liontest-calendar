import React, { useState,useEffect } from 'react'
import './index.css'
import PubSub from 'pubsub-js'
import data1 from '../json/data1.json'
import data2 from '../json/data2.json'
import data3 from '../json/data3.json'
import data4 from '../json/data4.json'
import Moreitem from './Moreitem/index'
import Dataitem from './Moreitem/Dataitem'
var moment = require('moment');
let calendarDates = [
    [{}, {}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}]
]
export default function Data(props) {
    const origin=[data1,data2,data3,data4]
    const data=[]
    origin.forEach((datalist)=>{
        datalist.forEach((day)=>{
            data.push(day)
        })
    })
    const [editingShow, setEditingShow] = useState(false);
    
    const [which_Date_Has_choose,set_which_Date_Has_choose]=useState({year:2017,month:5})
    const { year, month } = which_Date_Has_choose
    useEffect(() => {
        PubSub.subscribe("choose",(_,data)=>{
            set_which_Date_Has_choose(data);
        })
    },[])
    const [click, set_click] = useState(null)
    const [other, set_other] = useState(null)
    const handleclick = (index,other_index) => {
        set_click(index)
        console.log(index);
        set_other(other_index)
    }
    PubSub.publish("nonGo",true) 
    const otherMonthDay = new Date(year, month - 1, 1).getDay()
    const overMonthDay = 32 - new Date(year, month - 1, 32).getDate()
    const dates = calendarDates.map((weekArray, weekIndex) => {
        return weekArray.map((day, dayIndex) => {
            const targetIndex = weekIndex * 7 + dayIndex
            const newdata = data.filter(function (item) {
                return item.date === moment([year, month - 1, targetIndex - otherMonthDay + 1]).format("YYYY/MM/DD");
            })
            newdata.forEach((obj)=>{
                if(obj.guaranteed === undefined){
                    obj.guaranteed=obj['certain'];
                    obj.availableVancancy=obj['onsell'];
                    obj.status=obj['state'];
                    obj.totalVacnacy=obj['total'];
                }
            })
            return { newdata, targetIndex }
        })
    })
    return (
        <table>
            <tbody className={"days"} >
                {   
                    dates.map((weekArray,weekIndex) => {
                        return (
                            <tr key={weekIndex}>
                                {weekArray.map(item => {
                                    if (item.targetIndex<otherMonthDay || item.targetIndex>overMonthDay+otherMonthDay-1) {
                                        return (
                                            <th key={item.targetIndex - otherMonthDay + 1} className=' otherdays'>
                                                <div className="otherMonthDay ">
                                                    <div className=''/> 
                                                </div>
                                            </th>
                                        )
                                    }else {
                                        if (item.newdata[0] === undefined) {                                       
                                            return (
                                                <th key={item.targetIndex - otherMonthDay + 1} className='days'>
                                                    <div key={item.targetIndex-otherMonthDay+1} className='currentDays'>
                                                        <div className=''>{item.targetIndex-otherMonthDay+1}</div>
                                                    </div>
                                                </th>
                                            )
                                        }else{
                                            PubSub.publish("nonGo",false)
                                            if (item.newdata[1] !== undefined) {
                                                console.log('other',other);
                                                return (
                                                    <th key={item.targetIndex - otherMonthDay + 1} className={`days ${click === item.targetIndex ? 'clickDay' : ''}`}>          
                                                        <div>{item.targetIndex-otherMonthDay+1}</div>
                                                        <a className='watchmore' onClick={() => setEditingShow(item.newdata[0].date)}>看更多產品</a>
                                                        <Moreitem item={item} overMonthDay={overMonthDay} handleclick={handleclick} show={editingShow} otherMonthDay={otherMonthDay} setEditingShow={setEditingShow} other={other}/>
                                                        {other!==null ? <Dataitem key={item.targetIndex - otherMonthDay + 1} handleclick={handleclick} newdata={item.newdata} targetIndex={item.targetIndex} otherMonthDay={otherMonthDay} overMonthDay={overMonthDay} index={other} />:''}
                                                    </th>
                                                )
                                            }else{
                                                return (
                                                    <th key={item.targetIndex - otherMonthDay + 1} className={`days ${click === item.targetIndex ? 'clickDay' : ''}`}>
                                                        <Dataitem key={item.targetIndex - otherMonthDay + 1} handleclick={handleclick} newdata={item.newdata} targetIndex={item.targetIndex} otherMonthDay={otherMonthDay} overMonthDay={overMonthDay} />
                                                    </th>
                                                )
                                            } 
                                        }   
                                    }
                                })}
                            </tr>
                        )
                    })
                }       
            </tbody>
        </table>
    )
}