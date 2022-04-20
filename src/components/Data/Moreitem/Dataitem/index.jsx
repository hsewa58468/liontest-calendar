import React from 'react'
export default function Dataitem(props) {
    const { handleclick, otherMonthDay, targetIndex, index} = props
    const target = props.newdata[index ? index : 0]
    console.log('target',target);
    return (
        <div className='currentDays' onClick={() => handleclick(targetIndex,index)}>
            <div className='Daytitle' style={index?'display:none':''}>
                <span className='dayNum'>{targetIndex - otherMonthDay + 1}</span>
                <span className={`${target.availableVancancy > target.totalVacnacy ? 'nonschedule' : 'onschedule'}`}>成團</span>
            </div>
            <div className='details'>
                <span className='status'>{target.status}</span>
                <br />
                <span className='sell'>餘位:
                    <i className='js_sell'>{target.availableVancancy}</i>
                </span>
                <br />
                <span className='group'>團位:
                    <i className='js_group'>{target.totalVacnacy}</i>
                </span>
                <br />
                <span className='price'>$ {target.price}</span>
            </div>
        </div>
    )


}
