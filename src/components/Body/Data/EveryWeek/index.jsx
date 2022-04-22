
import React from "react";
import data1 from '../../json/data1.json';
import './index.css'
import ActionDay from './ActionDay/index'
import PubSub from 'pubsub-js'



var moment = require('moment');

export default function EveryWeek(props){

    const {weekArray,weekIndex,year,month,handleborder,HasBorder} = props; 

    const overMonthDay=32 - new Date(year, month-1, 32).getDate(); 
      
    const otherMonthDay=new Date(year,month-1,1).getDay();      

    return(
        <>  
            {
                
                weekArray.map((_,dayIndex)=>{       
                    PubSub.publish("nonGo",true)
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
                               
                                <ActionDay key={targetIndex} target={target} targetIndex={targetIndex} otherMonthDay={otherMonthDay} handleborder={handleborder} HasBorder={HasBorder}/>
                        )}
                    }
                })
            }
        </>
    )
}