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
                        <i className='fas fa-arrow-up-wide-short'></i>
                        <p>Sort</p>
                    </div>
                    <div className="titleR_icon">
                        <i className='fas fa-filter'></i>
                        <p>Filter</p>
                    </div>
                </div>
            </div>

            <div className="ticket_tab">
                <div className="tab_head">
                    <h3>Ticket details</h3>
                    <h3>Customer name</h3>
                    <h3>Date</h3>
                    <h3>Priority</h3>
                </div>
                <div className="tab_info">
                        <div className="info_img">
                            <img src={Budu} alt="" />
                        </div>
                        <div className="info_title">
                            <p>Contact email not linked</p>
                            <small>Updated 1 day ago</small>
                        </div>
                        <div className="info_name">
                            <p>Tom Cruise</p>
                            <small>on 24.05.2019</small>
                        </div>
                        <div className="info_date">
                            <p>May, 26 2019</p>
                            <small>6:30 PM</small>
                        </div>
                        <div className="info_status">
                            
                        </div>
                        <div className="info_opt"></div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Tickets