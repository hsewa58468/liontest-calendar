import React ,{useState} from "react"
import './index.css';

export default function Month_Bar(props){
    const {getCurrent}=props
    const[which_Month_Has_choose,set_which_Month_Has_choose]=useState(5)
    const[which_Year_Has_choose,set_which_Year_Has_choose]=useState(2017) //month選擇state(預設為5月)

    const BackArrowMonth =(monthminus) =>{  //minus
        if(monthminus===0){
            set_which_Year_Has_choose(which_Year_Has_choose-1)
            set_which_Month_Has_choose(monthminus=12)
            getCurrent(which_Year_Has_choose-1,monthminus)
        }else{
            set_which_Month_Has_choose(monthminus)
            getCurrent(which_Year_Has_choose,monthminus)
        }
    }
    const ForwardArrowMonth =(monthplus) =>{    //plus
        if(monthplus===13){
            set_which_Year_Has_choose(which_Year_Has_choose+1)
            set_which_Month_Has_choose(monthplus=1)
            getCurrent(which_Year_Has_choose+1,monthplus)
        }else{
            set_which_Month_Has_choose(monthplus)
            getCurrent(which_Year_Has_choose,monthplus)
        }
    }
    console.log("monthBar",which_Year_Has_choose,which_Month_Has_choose);
    return(

        <div className="calendars_tabWrap">
            <a href="#" className="prev" onClick={()=>BackArrowMonth(which_Month_Has_choose-1)}>{''}</a>
            <ul className='ntb_tab'>
                <li className="tab">
                    <a href="#" onClick={()=>BackArrowMonth(which_Month_Has_choose-1)}><span >{`${which_Month_Has_choose-1===0?which_Year_Has_choose-1:which_Year_Has_choose}`} {`${which_Month_Has_choose-1===0?12:which_Month_Has_choose-1}`}月</span></a>
                </li>            
                <li className="tab">
                    <a href="#"><span className={` ${which_Month_Has_choose===which_Month_Has_choose && which_Year_Has_choose===which_Year_Has_choose? 'click' : ''}`}>{which_Year_Has_choose} {which_Month_Has_choose}月</span></a>
                </li>
                <li className="tab">
                    <a href="#" onClick={()=>ForwardArrowMonth(which_Month_Has_choose+1)}><span>{`${which_Month_Has_choose+1===13?which_Year_Has_choose+1:which_Year_Has_choose}`} {`${which_Month_Has_choose+1===13?1:which_Month_Has_choose+1}`}月</span></a>
                </li>                                              
            </ul>
            <a href="#" className="next" onClick={()=>ForwardArrowMonth(which_Month_Has_choose+1)}>{''}</a>
        </div>
    )
}