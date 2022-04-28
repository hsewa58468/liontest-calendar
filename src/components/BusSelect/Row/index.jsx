import React, { Fragment } from 'react'
import Seat from './Seat'
export default function Row(props) {
    const {rowArray}=props
    return (
    <Fragment>
        {
            rowArray.map((colarray) => {
               return <Seat key={colarray.idx} Seatarray={colarray} style={{gridColumn : 5}}/>
        })
        }
    </Fragment>
  )
}
