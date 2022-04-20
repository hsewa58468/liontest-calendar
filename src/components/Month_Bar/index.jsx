import React,{ useState,useEffect } from "react"
import './index.css';
import PubSub from 'pubsub-js'
import BarItem from './BarItem'
let options =  [{},{},{}]
export default function Month_Bar(){
    const [which_Date_Has_choose,set_which_Date_Has_choose]=useState({year:2017,month:5})
    const BackArrowMonth =(monthminus) =>{  //minus
        set_which_Date_Has_choose(which_Date_Has_choose=>({
            year:monthminus<1?which_Date_Has_choose.year-1:which_Date_Has_choose.year,
            month:monthminus<1?12:monthminus
        }))
            /* getCurrent(year-1,monthminus) */
    }
    const ForwardArrowMonth =(monthplus) =>{    //plus     
        set_which_Date_Has_choose(which_Date_Has_choose=>({
            year:monthplus>12?which_Date_Has_choose.year+1:which_Date_Has_choose.year,
            month:monthplus>12?1:monthplus
        }))
        /* getCurrent(year+1,monthplus) */
    }
    useEffect(() => {
        PubSub.subscribe("choose",(_,data)=>{
            set_which_Date_Has_choose(data);
        })
    }, [which_Date_Has_choose])
    const ReturnOptionJsx = ()=>{
        const option = options.map((optionArray,optionIndex)=>{  
            return (                        
                <BarItem  key={optionIndex} optionIndex={optionIndex} which_Date_Has_choose={which_Date_Has_choose} BackArrowMonth={BackArrowMonth} ForwardArrowMonth={ForwardArrowMonth} />  
            )
        })
        return option
    }
    return(
        <div className="calendars_tabWrap">
            <ul className='ntb_tab'>
                {ReturnOptionJsx()}
            </ul>    
        </div>
    )
}