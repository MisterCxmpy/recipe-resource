import React from 'react'
import "./Login.css"
import OuterForm from '../../components/OuterForm/OuterForm'
import LoginForm from '../../components/LoginForm/LoginForm'

export default function Login() {
  return (
    <div className='login-container'>
      <div className="login-form-outer">
        <OuterForm form={LoginForm}/>
      </div>
    </div>
  )
}
