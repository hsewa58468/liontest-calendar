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

            <Link to={ChooseMonth === "/neun"? "/acht": "/sieben"} onClick={handleprev} className="prev on"></Link>
            <ul className="ntb_tab">
<<<<<<< HEAD
            <li className="tab">
                <Link to="/sieben"><span onClick={()=>{setChooseMonth("/sieben")}}>2017 7月</span></Link>
            </li>            
            <li className="tab">
                <Link to="/acht"><span onClick={()=>{setChooseMonth("/acht")}}>2017 8月</span></Link>
            </li>
            <li className="tab">
                <Link to="/neun"><span onClick={()=>{setChooseMonth("/neun")}}>2017 9月</span></Link>
            </li>                                                
=======
                <li className="tab">
                    <Link to="/sieben"><span className={ChooseMonth==="/sieben"? 'clickMonth' : ''} onClick={()=>{setChooseMonth("/sieben")}}>2017 7月</span></Link>
                </li>            
                <li className="tab">
                    <Link to="/acht"><span className={ChooseMonth==="/acht"? 'clickMonth' : ''} onClick={()=>{setChooseMonth("/acht")}}>2017 8月</span></Link>
                </li>
                <li className="tab">
                    <Link to="/neun"><span className={ChooseMonth==="/neun"? 'clickMonth' : ''} onClick={()=>{setChooseMonth("/neun")}}>2017 9月</span></Link>
                </li>                                                
>>>>>>> testA
            </ul>
            <Link to={ChooseMonth === "/sieben"?"/acht": "/neun"} onClick={handlenext} className="next on"></Link>
            
        </div>
    )
}