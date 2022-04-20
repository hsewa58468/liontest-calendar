import React from 'react'
let weekDates = ['日','一','二','三','四','五','六']
export default function Week(props) {
  return (
    <td >星期{weekDates[props.weekIndex]}</td>
  )
}
