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
            <div className="heading">Overview</div>
            <div className="heading">Tickets</div>
            <div className="heading">Ideas</div>
            <div className="heading">Contact</div>
            <div className="heading"></div>
            <div className="heading"></div>
            <div className="heading"></div>
            <div className="heading"></div>

        </div>
        <div className="info">
            Overview
        </div>
    </div>
  )
}

export default Sidenav