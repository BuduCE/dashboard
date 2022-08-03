import React from 'react'
import './styles.css'

const Overview = () => {
  return (
    <div>
        <div className="overview_info">
            <p>Unresolved</p>
            <h2>60</h2>
        </div>
        <div className="overview_info">
            <p>Overdue</p>
            <h2>16</h2>
        </div>
        <div className="overview_info">
            <p>Open</p>
            <h2>43</h2>
        </div>
        <div className="overview_info">
            <p>On hold</p>
            <h2>60</h2>
        </div>
    </div>
  )
}

export default Overview