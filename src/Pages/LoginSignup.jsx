import React from 'react'
import './CSS/LoginSignup.css'

const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>SignUp</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Your Name' />
          <input type="Email" placeholder='Email Address' />
          <input type="password" placeholder='Password' />
        </div>
        <button>Continue</button>
        <p className='loginsignup-login'>Already have an account?? <span>Login</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" />
          <p>By Continuing, I Agree to the terms and conditions.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
