import React ,{useState,useEffect} from "react"
import { Link } from 'react-router-dom';
import './index.css';
import PubSub from 'pubsub-js';


export default function Month_Bar(){

    const[ChooseMonth,setChooseMonth]=useState({year:2017,month:7});

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
    }, [ChooseMonth]); 


    return(
        
        <div className="calendars_tabWrap">

            <Link to={`/${ChooseMonth.month-1<1?ChooseMonth.year-1:ChooseMonth.year}/${ChooseMonth.month-1<1?12:ChooseMonth.month-1}`} onClick={()=>{handleprev()}} className="prev on"></Link>
            <ul className="ntb_tab">

                <li className="tab">
                    <Link to=""><span className=''>{ChooseMonth.month-1<1?ChooseMonth.year-1:ChooseMonth.year} {ChooseMonth.month-1<1?12:ChooseMonth.month-1}月</span>
                    </Link>
                </li>

                <li className="tab">
                    <Link to=""><span className='clickMonth'>{ChooseMonth.year} {ChooseMonth.month}月</span></Link>
                </li>

                <li className="tab">
                    <Link to=""><span className=''>{ChooseMonth.month+1>12?ChooseMonth.year+1:ChooseMonth.year} {ChooseMonth.month+1>12?1:ChooseMonth.month+1}月</span>
                    </Link>
                </li>
                                                                  
            </ul>

            <Link to={`/${ChooseMonth.month+1>12?ChooseMonth.year+1:ChooseMonth.year}/${ChooseMonth.month+1>12?1:ChooseMonth.month+1}`} onClick={()=>{handlenext()}} className="next on"></Link>
            
        </div>
    )
}