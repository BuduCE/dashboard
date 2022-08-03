import React from 'react'
import './styles.css'
import budu from './budu.jpg'

const Header = () => {
  return (
    <div className='header'>
        <div className="headerL">
            <h1>Overview</h1>
        </div>
        <div className="headerR">
            <i className='fas fa-magnifying-glass'></i>
            <i className='fas fa-bell'></i>
            <hr />
            <h3>Oladeji Abdullah</h3>
            <img src={budu} alt="" />
        </div>
    </div>
  )
}

export default Header