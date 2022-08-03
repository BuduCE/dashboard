import React from 'react'
import Logo from '../../components/common/Logo'
import './styles.css'

const Login = () => {
  return (
    <div className='login'>
        <Logo />
        <form action="" className='login_form'>
            <p>Dashboard Kit</p>
            <h2>Login to Dashboard kit</h2>
            <small>Enter your email and password below</small>

            <div>
                <label htmlFor="">Email</label>
                <input type="text" placeholder='Email Address' />
            

            <label htmlFor="">Password</label>
            <input type="text" placeholder='Password' />

            <button>Log In</button>
            <small>Don'thave an account? <a href="">Sign up</a></small>
        </form>
    </div>
  )
}

export default Login