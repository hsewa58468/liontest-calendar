import React, { Fragment } from 'react'
import './index.css'
import busSeat from '../json/bus41.json'
import Row from './Row'

export default function Bus() {

    return (
    <Fragment>
        <div className="seatsFlag">
			<div >
                <div className="flag"> </div>
                <span className="flagexp">可選座位</span>
            </div>
			<div>
                <div className="flag selected"> </div>
                <span className="flagexp">您的座位</span>
            </div>
			<div>
                <div className="flag disabled"> </div>
                <span className="flagexp">不可選座位</span>
            </div>
		</div>
        <div className='Rectangle'>
            <div className='grid'>
                {   
                    busSeat.seats.map((rowArray, rowIndex) => {
                        return <Row key={rowIndex} rowArray={rowArray} />
                    })
                }
            </div>    
        </div>
    </Fragment>        
  )
}
