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
            <small>Enter your email and password below</small>

            <label htmlFor="">Email</label><br />
            <input type="text" placeholder='Email Address' /><br />

            <label htmlFor="">Password</label><br />
            <input type="text" placeholder='Password' /><br />

            <button>Log In</button>
            <small>Don'thave an account? <a href="">Sign up</a></small>
        </form>
    </div>
  )
}

export default Login