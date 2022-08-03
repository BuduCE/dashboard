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

        {/* Today's trend */}
        <div className="trends">
            <div className="trends_head">
                <div className="trend_title">
                    <h2>Today's trends</h2>
                </div>
                <div className="trend_title_stat">
                    <div className="trend_date">
                        <small>as of May 2019, 09:41 PM</small>
                    </div>
                    <div className="trend_day">
                        <small>Today</small>
                        <small>Yesterday</small>
                    </div>
                </div>
            </div>

            <img src={} alt="" />
        </div>
    </div>
  )
}

export default Overview