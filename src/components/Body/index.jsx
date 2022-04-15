import React from 'react'
import './index.css'
import Data from './Data/index'
import { Route,Routes } from 'react-router-dom';

export default function Body_Day() {
    return (       
        <Routes forceRefresh={true}>
            <Route path="/sieben" element={<Data chooseMonth={7}/>}/>
            <Route path="/acht" element={<Data chooseMonth={8}/>}/>
            <Route path="/neun" element={<Data chooseMonth={9}/>}/>
        </Routes>
  )
}
