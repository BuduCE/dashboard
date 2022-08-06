import React from 'react'
import companyLogo from './logo.svg'
import './styles.css'

const Logo = () => {
  return (
    <div className='logo_icon'>
        <img src={companyLogo} alt="" />
    </div>
  )
}

export default Logo