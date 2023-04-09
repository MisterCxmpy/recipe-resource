import React from 'react'
import "./Signup.css"
import OuterForm from '../../components/OuterForm/OuterForm'
import SignupForm from '../../components/SignupForm/SignupForm'

export default function Signup() {
  return (
    <div className='signup-container'>
      <div className="signup-form-outer">
        <OuterForm form={SignupForm}/>
      </div>
    </div>
  )
}
