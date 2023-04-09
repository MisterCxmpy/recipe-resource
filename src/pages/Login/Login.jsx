import React from 'react'
import "./Login.css"
import OuterForm from '../../components/OuterForm/OuterForm'
import LoginForm from '../../components/LoginForm/LoginForm'

export default function Login() {
  return (
    <div className='login-container'>
      <OuterForm form={LoginForm}/>
    </div>
  )
}
