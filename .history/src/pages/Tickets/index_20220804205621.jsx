import React from 'react'
import Header from '../../components/common/Header'
import './styles.css'

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
                    <div className="titleR_sort">
                        <i className='fas fa-arrow-up-wide-short'></i>
                        <p>Sort</p>
                    </div>
                    <div className="titleR_filter">
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
                    .info_img>img+.info_title+.info_name+info_date+info_status+info_op
                </div>
                <div className="tab_info">
                    .info_img>img+.info_title+.info_name+info_date+info_status+info_op
                </div>
                <div className="tab_info">
                    .info_img>img+.info_title+.info_name+info_date+info_status+info_op
                </div>
                <div className="tab_info">
                    .info_img>img+.info_title+.info_name+info_date+info_status+info_op
                </div>
                <div className="tab_info">
                    .info_img>img+.info_title+.info_name+info_date+info_status+info_op
                </div>
                <div className="tab_info">
                    .info_img>img+.info_title+.info_name+info_date+info_status+info_op
                </div>
                <div className="tab_info">
                    .info_img>img+.info_title+.info_name+info_date+info_status+info_op
                </div>
                <div className="tab_info">
                    .info_img>img+.info_title+.info_name+info_date+info_status+info_op
                </div>
            </div>
        </div>
    </div>
  )
}

export default Tickets