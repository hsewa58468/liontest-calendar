import React, { Fragment,useState,useEffect } from 'react'
import PubSub from 'pubsub-js';
export default function Bar_item(props) {
    const {optionIndex,which_Date_Has_choose,BackArrowMonth,ForwardArrowMonth}=props
    const {year,month}=which_Date_Has_choose
    const[nonGo,setnonGo] = useState(false);
    
    useEffect(() => {
        PubSub.publish("choose",which_Date_Has_choose)
        PubSub.subscribe("nonGo",(_,data)=>{
            setnonGo(data);
        })
    }, [which_Date_Has_choose])
    if(optionIndex===0){
        return (
            <Fragment>
                <li>
                    <a className="arrowbar" href="#" onClick={()=>BackArrowMonth(month-1)}><span className="prev"></span> </a>
                </li>
            </Fragment>
        )
    }
    else if(optionIndex===2){
        return(
            <Fragment>
                <li>
                    <a className="arrowbar" href="#" onClick={()=>ForwardArrowMonth(month+1)}><span className="next"></span></a>
                </li>
            </Fragment>
        )  
    } 
    else{
        return(
            <Fragment>
                <li className="tab">
                    <a className="monthbar" href="#" onClick={()=>BackArrowMonth(month-1)}>
                        <div>
                            <span>{`${month-1===0?year-1:year}`} {`${month-1===0?12:month-1}`}月</span>
                        </div>
                    </a>
                </li>            
                <li className="tab">
                    <a className="monthbar" href="#">
                        <div className='click'>
                            <span>{year} {month}月</span>
                            <span className={`${nonGo?'nogo':'go'}`}>無出發日</span>
                        </div>   
                    </a>
                </li>
                <li className="tab">
                    <a className="monthbar" href="#" onClick={()=>ForwardArrowMonth(month+1)}>
                        <div>
                            <span>{`${month+1===13?year+1:year}`} {`${month+1===13?1:month+1}`}月</span>
                        </div>
                    </a>
                </li>
            </Fragment> 
        )         
    }           
}