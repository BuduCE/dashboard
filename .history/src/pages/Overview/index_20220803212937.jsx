import React from 'react'
import './styles.css'

const Overview = () => {
  return (
    <div className='overview_pg'>
        {/* Specific status */}
        <div className="overview_stat">
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
                <h2>64</h2>
            </div>
        </div>


    </div>
  )
}

export default Overview