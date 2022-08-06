import React from 'react'
// import Overview from '../../../pages/Overview'
import Tickets from '../../../pages/Tickets'
// import Header from '../Header'
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
                <i className='fas fa-chart-pie'></i>
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
                <i className='fas fa-people-group'></i>
                <p>Contacts</p>
            </div>
            <div className="heading">
                <i className='fas fa-map-pin'></i>
                <p>Agents</p>
            </div>
            <div className="heading divider">
                <i className='fas fa-newspaper'></i>
                <p>Articles</p>
            </div>
            <div className="heading">
                <i className='fas fa-gear'></i>
                <p>Settings</p>
            </div>
            <div className="heading">
                <i className='fas fa-award'></i>
                <p>Subscription</p>
            </div>

        </div>
        <div className="info">
            {/* <Header /> */}
            {/* <Overview /> */}
            <Tickets />
        </div>
    </div>
  )
}

export default Sidenav