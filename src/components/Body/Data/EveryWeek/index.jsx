
import React,{useEffect} from "react";
import data1 from '../../json/data1.json';
import './index.css'
import PubSub from 'pubsub-js'
// PubSub.publish("nonGo",false)

var moment = require('moment');

export default function EveryWeek(props){

    const {weekArray,weekIndex,year,month,handleborder,HasBorder} = props; 

    const overMonthDay=32 - new Date(year, month-1, 32).getDate(); 
      
    const otherMonthDay=new Date(year,month-1,1).getDay();      

    return(
        <>  
            {
                
                weekArray.map((_,dayIndex)=>{           
                    const targetIndex = weekIndex*7 + dayIndex 
                    if(targetIndex<otherMonthDay || targetIndex>overMonthDay+otherMonthDay-1 ){
                        return(
                            <td key={targetIndex} className="otherMonthDay">
                                <div className=''></div>
                            </td>
                    )}
                    else{   
                        data1.forEach((obj)=>{
                            if(obj.availableVancancy === undefined){
                                obj.guaranteed=obj['certain'];
                                obj.availableVancancy=obj['onsell'];
                                obj.status=obj['state'];
                                obj.totalVacnacy=obj['total'];
                            }
                        })
                        
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
                            
                            const target=newdata[newdata.length-1];   
                            return(
                               
                                <td key={targetIndex} onClick={()=>handleborder(targetIndex)} style={{border:HasBorder===targetIndex?"2px #009100 solid":""}}>
                                    <div className='Daytitle' >
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
        </>
    )
}