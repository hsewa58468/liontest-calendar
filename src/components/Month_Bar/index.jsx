import React, { useState,useEffect } from "react"
import { Link,Route,useParams } from 'react-router-dom';
import './index.css';
import PubSub from 'pubsub-js';
import Body from '../Body/index'


export default function Month_Bar(){

    let[ChooseMonth,setChooseMonth]=useState({year:2017,month:7});

    const[nonGo,setnonGo] = useState(true);


    function handlenext(){  
       setChooseMonth(ChooseMonth=>({
           year:ChooseMonth.month+1>12?ChooseMonth.year+1:ChooseMonth.year,
           month:ChooseMonth.month+1>12?1:ChooseMonth.month+1
       }))
    } 
 
    function handleprev(){

        setChooseMonth(ChooseMonth=>({  
            year:ChooseMonth.month-1<1?ChooseMonth.year-1:ChooseMonth.year,
            month:ChooseMonth.month-1<1?12:ChooseMonth.month-1 
        }))
    }  

    useEffect(() => {
        
        PubSub.publish("choose",ChooseMonth);
        PubSub.subscribe("nonGo",(_,data)=>{
            setnonGo(data);
        })
    }, [ChooseMonth]); 


    return(
        
        <div className="calendars_tabWrap">
            
            <Link to={`/${ChooseMonth.month-1<1?ChooseMonth.year-1:ChooseMonth.year}/${ChooseMonth.month-1<1?12:ChooseMonth.month-1}`} onClick={()=>{handleprev()}} className="prev on"></Link>

            <ul className="ntb_tab">
 
                <li className="tab">
                    <Link to={`/${ChooseMonth.month-1<1?ChooseMonth.year-1:ChooseMonth.year}/${ChooseMonth.month-1<1?12:ChooseMonth.month-1}`}><span className='' onClick={()=>{handleprev()}}>{ChooseMonth.month-1<1?ChooseMonth.year-1:ChooseMonth.year} {ChooseMonth.month-1<1?12:ChooseMonth.month-1}月</span>
                    </Link>
                </li>

                <li className="tab">
                    <Link to={`/${ChooseMonth.year}/${ChooseMonth.month}`}><span className='clickMonth' onClick={()=>{setChooseMonth(ChooseMonth=>({
                            year:ChooseMonth.year,
                            month:ChooseMonth.month
                        }))}}>{ChooseMonth.year} {ChooseMonth.month}月</span><br/>
                        <span className={nonGo?"nonGo":"Go"}>無出發日</span>
                    </Link>
                </li>

                <li className="tab">
                    <Link to={`/${ChooseMonth.month+1>12?ChooseMonth.year+1:ChooseMonth.year}/${ChooseMonth.month+1>12?1:ChooseMonth.month+1}`}><span className='' onClick={()=>{handlenext()}}>{ChooseMonth.month+1>12?ChooseMonth.year+1:ChooseMonth.year} {ChooseMonth.month+1>12?1:ChooseMonth.month+1}月</span>
                    </Link>
                </li>
                                                                  
            </ul>

            <Link to={`/${ChooseMonth.month+1>12?ChooseMonth.year+1:ChooseMonth.year}/${ChooseMonth.month+1>12?1:ChooseMonth.month+1}`} onClick={()=>{handlenext()}} className="next on"></Link>
        </div>
    )
}


