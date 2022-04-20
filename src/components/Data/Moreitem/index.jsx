import React from 'react'
import Dataite from './Dataitem'
export default function Dataitem(props) {
    const { handleclick, item, show, otherMonthDay, setEditingShow } = props
    
    return (
        <div className={show === item.newdata[0].date ? 'open_others' : 'close_others'} >
            {item.newdata.map((arr, index) => {
                return <div className='otheraday' onClick={() => setEditingShow(false)}>Trip{index + 1}:<Dataite key={item.targetIndex - otherMonthDay + 1} handleclick={handleclick} newdata={item.newdata} targetIndex={item.targetIndex} otherMonthDay={otherMonthDay} overMonthDay={props.overMonthDay} index={index} /></div>
            })}
            
        </div>
    );
}