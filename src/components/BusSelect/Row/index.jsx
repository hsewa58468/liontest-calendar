import React, { Fragment } from 'react'
import Seat from './Seat'
export default function Row(props) {
    const {rowArray,rowIndex}=props
    return (
    <Fragment>
        {
            rowArray.map((colarray, colIndex) => {
               return <Seat key={colIndex} Seatarray={colarray} SeatIndex={rowIndex*4+colIndex} style={{gridColumn : 5}}/>
        })
        }
    </Fragment>
  )
}
