import React, { Fragment,useState } from 'react'

export default function Seat(props) {
    const {Seatarray}=props
    const [seatSelect,set_seatSelect]=useState(false)
    const handleSeat=()=>{
        seatSelect===true?set_seatSelect(false):set_seatSelect(true)
    }
    if (Seatarray.type=== 'seat') {
       if (Seatarray.status==='selected') {
        return (
            <Fragment>
                <div className='Seat' style={{gridColumn:Seatarray.col , gridRow:Seatarray.row }} >
                    <span className={`position ${Seatarray.status==='selected'?'disabled':''}`} disabled  >
                        {Seatarray.txt}
                    </span>
                </div>
            </Fragment> 
           ) 
       }else{
            return (
                <Fragment>
                    <div onClick={handleSeat} className={`Seat `} style={{gridColumn:Seatarray.col , gridRow:Seatarray.row }} >
                        <span className={`position ${seatSelect?'selected':''}`} >
                            {Seatarray.txt}
                        </span>
                    </div>
                </Fragment> 
            ) 
       }
        
    }else{
        return (
            <Fragment>
                <div className={` ${Seatarray.type=== 'door'?'':'device'} ${Seatarray.type=== 'aisl'?'disappear':''} ${Seatarray.txt=== '安全門'?'safety':''} ${Seatarray.type=== 'door'?'nunseat':''}`} style={{gridColumn:Seatarray.col , gridRow:Seatarray.row }}>
                    <span className='position appliance '>
                        {Seatarray.txt}
                    </span>
                </div>
            </Fragment> 
        ) 
    }
}
