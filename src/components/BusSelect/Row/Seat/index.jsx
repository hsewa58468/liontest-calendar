import React, { Fragment,useState } from 'react'

export default function Seat(props) {
    const {Seatarray,SeatIndex}=props
    const [seatSelect,set_seatSelect]=useState(false)
    function handleSeat(){
        seatSelect===true?set_seatSelect(false):set_seatSelect(true)
    }
    if (Seatarray.type=== 'seat') {
       return (
        <Fragment>
            <div className={`Seat ${Seatarray.idx===6?'disabled':''}`} style={{gridColumn:Seatarray.col , gridRow:Seatarray.row }} onClick={handleSeat()} >
                <span className='position' >
                    {Seatarray.txt}
                </span>
            </div>
        </Fragment> 
       ) 
    }else{
        return (
            <Fragment>
                <div className={` ${Seatarray.type=== 'door'?'':'device'} ${Seatarray.type=== 'aisl'?'disappear':''}`} style={{gridColumn:Seatarray.col , gridRow:Seatarray.row }}>
                    <span className={`position   ${Seatarray.type=== 'door'?'nunseat':''}`} >
                        {Seatarray.txt}
                    </span>
                </div>
            </Fragment> 
        ) 
    }
}
