import React from 'react'
import Header from '../../components/common/Header'
import './styles.css'
import Budu from './budu.jpg'

const Tickets = () => {
  return (
    <div>
        <Header />

        <div className='ticket_pg'>
            <div className="ticket_title">
                <div className="titleL">
                    <h2>All Tickets</h2>
                </div>
                <div className="titleR">
                    <div className="titleR_icon">
                        <i className='fas fa-arrow-up-wide-short icon'></i>
                        <p>Sort</p>
                    </div>
                    <div className="titleR_icon">
                        <i className='fas fa-filter icon'></i>
                        <p>Filter</p>
                    </div>
                </div>
            </div>

            <div className="ticket_tab">
                <div className="tab_info">
                    <h3>Ticket details</h3>
                    <h3>Customer name</h3>
                    <h3>Date</h3>
                    <h3>Priority</h3>
                </div>
                <div className="tab_info">
                        <div className="info_title">
                            <img src={Budu} alt="" />

                            <div>
                                <h4>Contact email not linked</h4>
                                <small>Updated 1 day ago</small>
                            </div>
                        </div>
                        <div className="info_name">
                            <h4>Tom Cruise</h4>
                            <small>on 24.05.2019</small>
                        </div>
                        <div className="info_date">
                            <h4>May, 26 2019</h4>
                            <small>6:30 PM</small>
                        </div>
                        <div className="info_status">
                            <button>HIGH</button>
                            <i className='fas fa-caret-down'></i>
                        </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Tickets