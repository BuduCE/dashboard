import React from 'react'
import './styles.css'
import TrendMap from './graph.svg'

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
                <div className="trends_headT">
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

                <div className="trends_headB">
                    
                </div>
                <img src={TrendMap} alt="Trend Chart" />
            </div>

            <div className="trends_summary">
                <div className="summary_type">
                    <p>Resolved</p>
                    <h2>449</h2>
                </div>
                <div className="summary_type">
                    <p>Received</p>
                    <h2>426</h2>
                </div>
                <div className="summary_type">
                    <p>Average first response time</p>
                    <h2>33m</h2>
                </div>
                <div className="summary_type">
                    <p>Average response time</p>
                    <h2>3h 8m</h2>
                </div>
                <div className="summary_type">
                    <p>Resolution with SLA</p>
                    <h2>94%</h2>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Overview