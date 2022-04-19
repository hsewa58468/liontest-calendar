import React from 'react'
import './index.css'

export default function Week() {
    return (
    <div className='weekTable'>
        <table className='month_table'>
            <thead>
                <tr className='week table_width'>
                    <th>星期日</th>
                    <th>星期一</th>
                    <th>星期二</th>
                    <th>星期三</th>
                    <th>星期四</th>
                    <th>星期五</th>
                    <th>星期六</th>
                </tr>
            </thead>
        </table>
    </div>
  )
}
