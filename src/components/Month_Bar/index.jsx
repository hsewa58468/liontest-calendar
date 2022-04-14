import React ,{useState} from "react"
import { Link } from 'react-router-dom';
import './index.css';

export default function Month_Bar(){

    const[ChooseMonth,setChooseMonth]=useState("/");
    function handlenext(){
        if(ChooseMonth === "/sieben"){
            setChooseMonth("/acht");
        }else{
            setChooseMonth("/neun");
        }
    }

    function handleprev(){
        if(ChooseMonth === "/neun"){
            setChooseMonth("/acht");
        }else{
            setChooseMonth("/sieben");
        }
    }

    return(

        <div className="calendars_tabWrap">

            <Link to={ChooseMonth === "/neun"? "/acht":ChooseMonth === "/acht"?"/sieben":"/sieben"} onClick={handleprev} className="prev on"></Link>
            <ul className="ntb_tab">
                <li className="tab">
                    <Link to={ChooseMonth === "/sieben"?"/sieben":"/sieben"}><span className={` ${ChooseMonth==="/sieben"? 'clickMonth' : ''}`}  onClick={()=>{setChooseMonth("/sieben")}}>2017 7月</span></Link>
                </li>            
                <li className="tab">
                    <Link to={ChooseMonth === "/acht"?"/acht":"/acht"}><span className={` ${ChooseMonth==="/acht"? 'clickMonth' : ''}`} onClick={()=>{setChooseMonth("/acht")}}>2017 8月</span></Link>
                </li>
                <li className="tab">
                    <Link to={ChooseMonth === "/neun"?"/neun":"/neun"}><span className={` ${ChooseMonth==="/neun"? 'clickMonth' : ''}`} onClick={()=>{setChooseMonth("/neun")}}>2017 9月</span></Link>
                </li>                                                
            </ul>
            <Link to={ChooseMonth === "/sieben"?"/acht": ChooseMonth === "/acht"?"/neun":"/neun"} onClick={handlenext} className="next on"></Link>
            
        </div>
    )
}