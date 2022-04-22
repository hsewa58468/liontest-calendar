
import './index.css'

import React,{useEffect} from 'react';
import PubSub from 'pubsub-js'

export default function ActionDay(props){

    const{targetIndex,target,otherMonthDay,handleborder,HasBorder} = props;

    useEffect(()=>{
        PubSub.publish("nonGo",false)
    })

    return(
        <td onClick={()=>handleborder(targetIndex)} style={{border:HasBorder===targetIndex?"2px #009100 solid":""}}>
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
    )
}