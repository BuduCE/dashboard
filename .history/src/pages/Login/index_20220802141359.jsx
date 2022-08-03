import React from 'react'
import Logo from '../../components/common/Logo'
import './styles.css'

const Login = () => {
  return (
    <div className='login'>
        <Logo />
        <form action="">
            <p>Dashboard Kit</p>
            <h2>Login to Dashboard kit</h2>
            <small>Enter your email ad</small>
        </form>
    </div>
  )
}

export default Login