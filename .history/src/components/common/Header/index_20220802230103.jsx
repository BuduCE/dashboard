import React from 'react'
import './styles.css'

const Header = () => {
  return (
    <div>
        <div className="headerL">
            <h1>Overview</h1>
        </div>
        <div className="headerR">
            <i className='fas fa-magnifying-glass'></i>
            <i className='fas fa-bell'></i>
            <hr />
            <h3>Oladeji Abdullah</h3>
        </div>
    </div>
  )
}

export default Header