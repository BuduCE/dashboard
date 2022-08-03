import React from 'react'
import Logo from '../Logo'

const Sidenav = () => {
  return (
    <div className='dashboard'>
        <div className="navbar">
            <div className="logo">
                <Logo />
                <p>Dashboard Kit</p>
            </div>
            <div className="heading">
                <i className='fas fa-overview'></i>
                <p>Overview</p>
            </div>
            <div className="heading">
                <i className='fas fa-overview'></i>
                <p>Tickets</p>
            </div>
            <div className="heading">
            <i className='fas fa-overview'></i>
                <p>Overview</p>
            </div>
            <div className="heading">Contacts</div>
            <div className="heading">Agents</div>
            <div className="heading">Articles</div>
            <hr />
            <div className="heading">Settings</div>
            <div className="heading">Subscription</div>

        </div>
        <div className="info">
            Overview
        </div>
    </div>
  )
}

export default Sidenav