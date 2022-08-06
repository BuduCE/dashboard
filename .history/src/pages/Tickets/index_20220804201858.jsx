import React from 'react'
import Header from '../../components/common/Header'
import './styles.css'

const Tickets = () => {
  return (
    <div>
        <Header />
        <div className='ticket_pg'>
            <div className="ticket_title">
                <div className="titleL"></div>
                <div className="titleR"></div>
            </div>
            <div className="ticket_tab">
                <div className="tab_head"></div>
                <div className="tab_info"></div>
                <div className="tab_info"></div>
                <div className="tab_info"></div>
                <div className="tab_info"></div>
                <div className="tab_info"></div>
                <div className="tab_info"></div>
                <div className="tab_info"></div>
                <div className="tab_info"></div>
            </div>
        </div>
    </div>
  )
}

export default Tickets