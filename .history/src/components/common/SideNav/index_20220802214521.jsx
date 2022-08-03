import React from 'react'
import Logo from '../Logo'
import './styles.css'

const Sidenav = () => {
  return (
    <div className='dashboard'>
        <div className="navbar">
            <div className="logo">
                <Logo />
                <h1>Dashboard Kit</h1>
            </div>
            <div className="heading">
                <i className='fas fa-chart--pie'></i>
                <p>Overview</p>
            </div>
            <div className="heading">
                <i className='fas fa-ticket'></i>
                <p>Tickets</p>
            </div>
            <div className="heading">
                <i className='fas fa-lightbulb'></i>
                <p>Ideas</p>
            </div>
            <div className="heading">
                <i className='fas fa-overview'></i>
                <p>Contacts</p>
            </div>
            <div className="heading">
                <i className='fas fa-overview'></i>
                <p>Agents</p>
            </div>
            <div className="heading">
                <i className='fas fa-overview'></i>
                <p>Articles</p>
            </div>
            <hr />
            <div className="heading">
                <i className='fas fa-setting'></i>
                <p>Settings</p>
            </div>
            <div className="heading">
                <i className='fas fa-overview'></i>
                <p>Subscription</p>
            </div>

        </div>
        <div className="info">
            <h1>Overview</h1>
        </div>
    </div>
  )
}

export default Sidenav