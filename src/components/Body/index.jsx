import React,{useState,useEffect} from 'react'
import './index.css'
import Data from './Data/index'
import { Route,Routes } from 'react-router-dom';
import PubSub from 'pubsub-js';

export default function Body_Day() {
    
    const[Choose,setChoose] = useState({year:2017,month:7});

    useEffect(()=>{
        PubSub.subscribe("choose",(_,data)=>{ 
            setChoose(data); 
        })
    })
    return (       
        <Routes forceRefresh={true}>
            <Route path={`/:${Choose.year}/:${Choose.month}`} element={<Data Choose={Choose}/>}/>
        </Routes>
  )
}
