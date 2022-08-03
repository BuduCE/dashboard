import React from 'react'
import './styles.css'
import budu from './budu.jpg'

const Header = () => {
  return (
    <div className='head_er'>
        <div className="headerL">
            <h1>Overview</h1>
        </div>
        <div className="headerR">
            <i className='fas fa-magnifying-glass icon'></i>
            <i className='fas fa-bell icon bell'></i>
            <h3>Oladeji Abdullah</h3>
            <img src={budu} alt="" />
        </div>
    </div>
  )
}

export default Header